import { FunctionComponent, SetStateAction } from 'react';
import styles from './AgeModal.module.scss';


interface Props {
	setShowAgeModal: (value: SetStateAction<boolean>) => void
}


const AgeModal: FunctionComponent<Props> = ({ setShowAgeModal }) => {
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
					<div>
						<label htmlFor="age">Age</label>
						<input
							id="age"
							type="text"
							placeholder='Choose your age'
							name="age"
						// onChange={handleInputChange}
						// onFocus={() => setShowAgeModal(true)}
						// value={age}
						// disabled={showAgeModal}
						/>
					</div>
					<span>OR</span>
					<div>
						<label htmlFor="age">Date</label>
						<input
							id="age"
							type="text"
							placeholder='Choose your age'
							name="age"
						// onChange={handleInputChange}
						// onFocus={() => setShowAgeModal(true)}
						// value={age}
						// disabled={showAgeModal}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};


export default AgeModal