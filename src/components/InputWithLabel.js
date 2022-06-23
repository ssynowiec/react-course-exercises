import { useInput } from '../hooks/useInput';

export const InputWithLabel = ({
	type,
	label,
	id,
	isValidFunction,
	errorText,
}) => {
	const {
		value: inputValue,
		isValid: inputIsValid,
		hasError: inputHasError,
		valueChangeHandler: inputChangeHadler,
		inputBlurHandler,
		reset: resetInput,
	} = useInput(isValidFunction);

	const inputClasses = inputHasError
		? 'form-control invalid'
		: 'form-control';

	return (
		<div className={inputClasses}>
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				id={id}
				value={inputValue}
				onChange={inputChangeHadler}
				onBlur={inputBlurHandler}
			/>
			{inputHasError && <p className='error-text'>{errorText}</p>}
		</div>
	);
};
