import { FormEvent, SyntheticEvent, useState } from "react";
import { clearValues } from "helpers/clearValues";

interface useFormProps {
	initialState: any;
	onSubmit: (values: any, errors: any) => void;
	validationSchema?: (values: any) => any;
}

export const useForm = ({
	initialState,
	onSubmit,
	validationSchema
}: useFormProps
) => {
	const [formValues, setFormValues] = useState(initialState);
	const [errors, setErros] = useState<any>({});


	const handleInputChange = (e: FormEvent<HTMLInputElement> | FormEvent<HTMLSelectElement>) => {
		const { name, value } = e.currentTarget;

		setFormValues({
			...formValues,
			[name]: clearValues(name, value),
		});

	};

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();

		let errors = {};

		if (validationSchema && formValues) {
			errors = validationSchema(formValues);
			setErros(errors);
		}

		onSubmit?.(formValues, { errors, isValid: Object.keys(errors).length === 0 });


	};

	const handleClear = () => {
		setFormValues({ ...initialState });
	};

	return { formValues, handleInputChange, handleSubmit, handleClear, errors };
};

