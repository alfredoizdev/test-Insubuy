import AgeModal from 'components/AgeModal';
import { useForm } from 'hooks/useForm';
import { FunctionComponent, useState } from 'react';
import styles from './QuotesForm.module.scss';


interface Props {

}


const QuotesForm: FunctionComponent<Props> = ({ }) => {

	const [showAgeModal, setShowAgeModal] = useState(false);
	const { formValues, handleInputChange, handleSubmit, handleClear } = useForm({
		max: 50,
		age: '',
		start: '',
		end: '',
		citizenship: '',
		mailingState: '',
	},
		(values) => {
			console.log(values)
		}
	)

	const { max, age, start, end, citizenship, mailingState } = formValues


	return (
		<>
			<div className={styles.formContainer}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.formHeader}>
						<h2>Insubuy Travel Insurance</h2>
					</div>
					<div className={styles.inputForm}>
						<div>
							<label htmlFor="max">Policy Maximun</label>
							<select
								id="max"
								placeholder='Choise your policy maximum'
								name="max"
								onChange={handleInputChange}
								value={max}
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
									name="start"
									onChange={handleInputChange}
									value={start}

								/>
								<input
									id="end"
									type="text"
									placeholder='End Day'
									onFocus={(e) => (e.target.type = "date")}
									onBlur={(e) => (e.target.type = "text")}
									name="end"
									onChange={handleInputChange}
									value={end}
								/>
							</div>
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
						</div>
					</div>
					<div className={styles.actionForm}>
						<button type='submit'>
							Get quotes
						</button>
						<button
							type='button'
							className={styles.resetForm}
							onClick={handleClear}
						>
							Reset Form
						</button>
					</div>
				</form>
			</div>
			{showAgeModal && <AgeModal setShowAgeModal={setShowAgeModal} />}

		</>
	);
};


export default QuotesForm