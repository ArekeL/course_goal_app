import { useState } from "react";

import Button from "../../UI/Button";

import "./CourseInput.css";

const CoursInput = (props) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isValid, setIsValid] = useState(true);

	const handleGoalInputChange = (event) => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
		setEnteredValue(event.target.value);
	};

	const handleFormeSubmit = (event) => {
		event.preventDefault();

		if (enteredValue.trim().length === 0) {
			setIsValid(false);
			return;
		}

		props.onAddGoal(enteredValue);
	};
	return (
		<form onSubmit={handleFormeSubmit}>
			<div className={`form-control ${!isValid ? "invalid" : ""}`}>
				<label>Course Goal</label>
				<input type='text' onChange={handleGoalInputChange} />
				<Button type='Submit'>Add Goal</Button>
			</div>
		</form>
	);
};

export default CoursInput;
