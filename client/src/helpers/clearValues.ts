export const clearValues = (name: string, value: string) => {

		let clearValue = value;
		if (name === 'citizenship') {
			clearValue = value.replace(/[^a-z]/gi, '');
		}
		if (name === 'mailingState') {
			clearValue = value.replace(/[^a-z]/gi, '');
		}

		return clearValue;
}