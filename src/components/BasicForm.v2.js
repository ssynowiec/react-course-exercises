import { InputWithLabel } from './InputWithLabel';

const nameIsValid = value => value.trim() !== '' && value.length >= 3;

const validateEmail = email => {
	const reg =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return reg.test(email);
};

export const BasicFormV2 = props => {
	// const inputChangeHandler = inputIsValid => {
	// 	third;
	// };

	// const formIsValid = nameIsValid && lastNameIsValid && emailIsValid;

	const formSubmitHandler = e => {
		e.preventDefault();

		console.log('Submitted');
		// if (!formIsValid) {
		// 	return;
		// }

		// resetName();
		// resetLastName();
		// resetEmail();
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div className='control-group'>
				<InputWithLabel
					type='text'
					label='First Name'
					id='firstName'
					isValidFunction={nameIsValid}
					errorText='Please input a valid name'
					// onChange={inputChangeHandler}
				/>

				<InputWithLabel
					type='text'
					label='Last Name'
					id='lastName'
					isValidFunction={nameIsValid}
					errorText='Please Enter a valid last name'
					// onChange={inputChangeHandler}
				/>
			</div>

			<InputWithLabel
				type='email'
				label='E-Mail Address'
				id='email'
				isValidFunction={validateEmail}
				errorText='Please Enter a valid email'
				// onChange={inputChangeHandler}
			/>

			<div className='form-actions'>
				{/* <button disabled={!formIsValid}>Submit</button> */}
			</div>
		</form>
	);
};
