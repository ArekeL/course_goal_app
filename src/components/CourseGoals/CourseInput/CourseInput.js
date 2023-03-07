import { useState } from "react";
import Button from "../../UI/Button";

import "./CourseInput.css";

const CoursInput = () => {
	const [enteredValue, setEnteredValue] = useState("");

	const handleGoalInputChange = (event) => {
		setEnteredValue(event.target.value);
	};

	console.log("Mój stan" + enteredValue);

	const handleFormeSubmit = (event) => {
		event.preventDefault();
		// console.log(event.target.value);
	};
	return (
		<form onSubmit={handleFormeSubmit}>
			<div className='form-control'>
				<label>Course Goal</label>
				<input type='text' onChange={handleGoalInputChange} />
				<Button type='Submit'>Add Goal</Button>
			</div>
		</form>
	);
};

export default CoursInput;
