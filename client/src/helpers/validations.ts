import { IFormDataState } from 'interfaces/formData';
import moment from 'moment';

export const validations = (values: IFormDataState):any => {

		const { age, startDate, endDate, citizenship, mailingState } = values
		const errors: any = {}
		const startDateMoment = moment(startDate);
		const endDateMoment = moment(endDate);

		if (!age) {
			errors.age = 'Age is Required'
		}

		if (!startDate) {
			errors.startDate = 'Start Date is Required'
		}

		if (!endDate) {
			errors.endDate = 'End Date is Required'
		}

		if (!citizenship) {
			errors.citizenship = 'Citizenship is Required'
		}

		if (!mailingState) {
			errors.mailingState = 'Mailing State is Required'
		}
		
		if(startDateMoment.diff(endDateMoment) > 0) {
			errors.dateDiff = 'End Date cant be greater than start'
		}
	

		return errors
	}