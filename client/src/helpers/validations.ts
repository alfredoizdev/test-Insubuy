export const validations = (values: any) => {

		const errors: any = {}

		if (!values.age) {
			errors.age = 'Age is Required'
		}

		if (!values.start) {
			errors.start = 'Start Date is Required'
		}

		if (!values.end) {
			errors.end = 'End Date is Required'
		}

		if (!values.citizenship) {
			errors.citizenship = 'Citizenship is Required'
		}

		if (!values.mailingState) {
			errors.mailingState = 'Mailing State is Required'
		}
		return errors
	}