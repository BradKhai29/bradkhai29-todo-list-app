import { useState } from "react";

const UserInput = () => {
	const [inputValue, setInputValue] = useState("");
	console.log("Reload this component!! ", inputValue);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("Submitted value:", inputValue);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>This is input value: {inputValue}</div>
			<input type="text" value={inputValue} onChange={handleChange} />
			<button type="submit">Submit</button>
		</form>
	);
};

export default UserInput;
