import { FormEvent, FunctionComponent, SetStateAction, useState } from 'react';
import styles from './AgeModal.module.scss';


interface Props {
	value: any;
	setShowAgeModal: (value: SetStateAction<boolean>) => void;
	handleInputChange: (e: FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => void
}



const AgeModal: FunctionComponent<Props> = ({ setShowAgeModal, handleInputChange, value }) => {

	const [inputActivate, setInputActivate] = useState('age');

	const hadleUpdate = () => {
		setShowAgeModal(false)
	}

	console.log(inputActivate)
	return (
		<div className={styles.ageContainer}>
			<div className={styles.modalBody}>
				<div className={styles.modalHeader}>
					<h2>Age/Year</h2>
					<button
						onClick={() => setShowAgeModal(false)}
						type="button">X</button>
				</div>
				<div className={styles.inputsArea}>
					<div onClick={() => setInputActivate("age")}>
						<label htmlFor="age">Age</label>
						<input
							id="age"
							type="text"
							placeholder='Choose your age'
							name="age"
							onChange={handleInputChange}
							value={inputActivate === 'date' ? '' : value}
							disabled={inputActivate === 'date'}
						/>
					</div>
					<span>OR</span>
					<div onClick={() => setInputActivate("date")}>
						<label htmlFor="age">Date</label>
						<input
							id="age"
							type="text"
							placeholder='Birth day'
							name="age"
							onChange={handleInputChange}
							onFocus={(e) => (e.target.type = "date")}
							onBlur={(e) => (e.target.type = "text")}
							value={inputActivate === 'age' ? '' : value}
							disabled={inputActivate === 'age'}
						/>
					</div>
				</div>
				<div className={styles.actionModal}>
					<button onClick={hadleUpdate} type='button'>Update</button>
				</div>
			</div>
		</div>
	);
};


export default AgeModal