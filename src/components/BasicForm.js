import { useInput } from '../hooks/useInput';

export const BasicForm = props => {
	const {
		value: nameValue,
		isValid: nameIsValid,
		hasError: nameHasError,
		valueChangeHandler: nameChangeHadler,
		inputBlurHandler: nameBlurHandler,
		reset: resetName,
	} = useInput(value => value.trim() !== '' && value.length >= 3);

	const {
		value: lastNameValue,
		isValid: lastNameIsValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChangeHadler,
		inputBlurHandler: lastNameBlurHandler,
		reset: resetLastName,
	} = useInput(value => value.trim() !== '' && value.length >= 3);

	const validateEmail = email => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return reg.test(email);
	};

	const {
		value: emailValue,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHadler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmail,
	} = useInput(value => validateEmail);

	const formIsValid = nameIsValid && lastNameIsValid && emailIsValid;

	const formSubmitHandler = e => {
		e.preventDefault();

		if (!formIsValid) {
			return;
		}

		resetName();
		resetLastName();
		resetEmail();
	};

	const nameInputClasses = nameHasError
		? 'form-control invalid'
		: 'form-control';

	const lastNameInputClasses = lastNameHasError
		? 'form-control invalid'
		: 'form-control';

	const emialInputClasses = emailHasError
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmitHandler}>
			<div className='control-group'>
				<div className={nameInputClasses}>
					<label htmlFor='name'>First Name</label>
					<input
						type='text'
						id='name'
						value={nameValue}
						onChange={nameChangeHadler}
						onBlur={nameBlurHandler}
					/>
					{nameHasError && (
						<p className='error-text'>Please Enter a valid name</p>
					)}
				</div>
				<div className={lastNameInputClasses}>
					<label htmlFor='name'>Last Name</label>
					<input
						type='text'
						id='name'
						value={lastNameValue}
						onChange={lastNameChangeHadler}
						onBlur={lastNameBlurHandler}
					/>
					{lastNameHasError && (
						<p className='error-text'>
							Please Enter a valid last name
						</p>
					)}
				</div>
			</div>
			<div className={emialInputClasses}>
				<label htmlFor='name'>E-Mail Address</label>
				<input
					type='text'
					id='name'
					value={emailValue}
					onChange={emailChangeHadler}
					onBlur={emailBlurHandler}
				/>
				{emailHasError && (
					<p className='error-text'>Please Enter a valid email</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};
