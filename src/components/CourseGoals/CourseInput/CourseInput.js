import { useState } from "react";

import Button from "../../UI/Button";

import "./CourseInput.css";

const CoursInput = (props) => {
	const [enteredValue, setEnteredValue] = useState("");

	const handleGoalInputChange = (event) => {
		setEnteredValue(event.target.value);
	};

	const handleFormeSubmit = (event) => {
		event.preventDefault();
		props.onAddGoal(enteredValue);
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
