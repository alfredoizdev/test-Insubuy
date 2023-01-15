import { useState } from 'react';
import { FunctionComponent } from 'react';
import styles from './QuotesForm.module.scss';


interface Props {

}


const QuotesForm: FunctionComponent<Props> = ({ }) => {

	const [values, setValues] = useState({
		max: '',
		age: '',
		start: '',
		end: '',
		citizenship: '',

	})


	return (
		<div className={styles.formContainer}>
			<form className={styles.form}>
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
						>
							<option> 50,000</option>
						</select>
					</div>
					<div>
						<label htmlFor="age">Age</label>
						<input
							id="age"
							type="text"
							placeholder='Choose your age'
							name="age"
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
								onChange={(e) => console.log(e.target.value)}
								onFocus={(e) => (e.target.type = "date")}
								onBlur={(e) => (e.target.type = "text")}
								name="start"

							/>
							<input
								id="end"
								type="text"
								placeholder='End Day'
								onChange={(e) => console.log(e.target.value)}
								onFocus={(e) => (e.target.type = "date")}
								onBlur={(e) => (e.target.type = "text")}
								name="end"

							/>
						</div>
					</div>
					<div>
						<label htmlFor="Citizenship">Citizenship</label>
						<input
							id="Citizenship"
							type="number"
							placeholder='Choose your country of Citizenchip'
							name="citizenship"
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
						/>
					</div>
				</div>
				<div className={styles.actionForm}>
					<button type='submit'>
						Get quotes
					</button>
					<button type='button' className={styles.resetForm}>
						Reset Form
					</button>
				</div>
			</form>
		</div>
	);
};


export default QuotesForm