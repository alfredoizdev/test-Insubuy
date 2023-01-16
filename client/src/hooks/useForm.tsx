import { FormEvent, SyntheticEvent, useState } from "react";

type FormState = Record<string, any>;

export const useForm = (
	initialState: FormState = {},
	onSubmit: (values: {}) => void
) => {
	const [formValues, setFormValues] = useState(initialState);

	const handleInputChange = (e: FormEvent<HTMLInputElement> | FormEvent<HTMLSelectElement>) => {
		const { name, value } = e.currentTarget;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		onSubmit?.(formValues);
	};

	const handleClear = () => {
		setFormValues({ ...initialState });
	};

	return { formValues, handleInputChange, handleSubmit, handleClear };
};