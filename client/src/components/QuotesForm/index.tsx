import AgeModal from 'components/AgeModal';
import { validations } from 'helpers/validations';
import { useForm } from 'hooks/useForm';
import { FunctionComponent, useState } from 'react';
import styles from './QuotesForm.module.scss';
import { fetchData } from '../../helpers/fetchData';


const QuotesForm: FunctionComponent = () => {



	const [showAgeModal, setShowAgeModal] = useState(false);
	// const [erros, setErros] = useState<any>({});
	const { formValues, handleInputChange, handleSubmit, handleClear, errors } = useForm({
		initialState: {
			policyMax: '50',
			age: '',
			endDate: '',
			startDate: '',
			end: '',
			citizenship: '',
			mailingState: '',
		},
		onSubmit: async (values, { isValid }) => {

			console.log(isValid)
			if (isValid) {

				const response = await fetchData(values);
				const data = await response.json();
				console.log(data)


			}
		},
		validationSchema: validations
	}

	);

	const handleResetForm = () => {
		handleClear();
	}

	const { policyMax, age, startDate, endDate, citizenship, mailingState } = formValues;


	return (
		<>
			<div className={styles.formContainer}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.formHeader}>
						<h2>Insubuy Travel Insurance</h2>
					</div>
					<div className={styles.inputForm}>
						<div>
							<label htmlFor="policyMax">Policy Maximun</label>
							<select
								id="policyMax"
								placeholder='Choise your policy maximum'
								name="policyMax"
								onChange={handleInputChange}
								value={policyMax}
							>
								<option value={50}> $50,000</option>
								<option value={100}>$100,000</option>
								<option value={250}>$250,000</option>
								<option value={500}>$500,000</option>
							</select>
						</div>
						<div>
							<label htmlFor="age">Age</label>
							<input
								id="age"
								type="text"
								placeholder='Choose your age'
								name="age"
								onChange={handleInputChange}
								onFocus={() => setShowAgeModal(true)}
								value={age}
								disabled={showAgeModal}
							/>
							{errors.age && <div className={styles.errorMsg}>{errors.age}</div>}
						</div>
					</div>
					<div className={styles.inputForm}>
						<div>
							<label htmlFor="start">Travel Dates (mm/dd/yyyy)</label>
							<div className={styles.formDate}>
								<input
									id="start"
									type="text"
									placeholder='Start day'
									onFocus={(e) => (e.target.type = "date")}
									onBlur={(e) => (e.target.type = "text")}
									name="startDate"
									onChange={handleInputChange}
									value={startDate}

								/>
								<input
									id="end"
									type="text"
									placeholder='End Day'
									onFocus={(e) => (e.target.type = "date")}
									onBlur={(e) => (e.target.type = "text")}
									name="endDate"
									onChange={handleInputChange}
									value={endDate}
								/>
							</div>
							{errors.start && <div className={styles.errorMsg}>{errors.start}</div>}
							{errors.end && <div className={styles.errorMsg}>{errors.end}</div>}
							{errors.dateDiff && <div className={styles.errorMsg}>{errors.dateDiff}</div>}
						</div>
						<div>
							<label htmlFor="Citizenship">Citizenship</label>
							<input
								id="Citizenship"
								type="text"
								placeholder='Choose your country of Citizenchip'
								name="citizenship"
								onChange={handleInputChange}
								value={citizenship}
							/>
							{errors.citizenship && <div className={styles.errorMsg}>{errors.citizenship}</div>}
						</div>
					</div>

					<div className={styles.inputForm}>
						<div>
							<label htmlFor="mailingState">Mailing State</label>
							<input
								id="mailingState"
								type="text"
								placeholder='Choose state'
								name="mailingState"
								onChange={handleInputChange}
								value={mailingState}
							/>
							{errors.mailingState && <div className={styles.errorMsg}>{errors.mailingState}</div>}
						</div>
					</div>
					<div className={styles.actionForm}>
						<button type='submit'>
							Get quotes
						</button>
						<button
							type='button'
							className={styles.resetForm}
							onClick={handleResetForm}
						>
							Reset Form
						</button>
					</div>
				</form>
			</div>
			{showAgeModal &&
				<AgeModal
					setShowAgeModal={setShowAgeModal}
					handleInputChange={handleInputChange}
					value={age} />}

		</>
	);
};


export default QuotesForm