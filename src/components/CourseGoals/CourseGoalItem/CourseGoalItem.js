import { useState } from "react";

import "./CourseGoalItem.css";

const CourseGoalItem = () => {
	const [deleteText, setDeleteText] = useState("");

	const handleDeleteGoal = () => {
		setDeleteText("Deleted");
	};
	return (
		<li className='goal-item' onClick={handleDeleteGoal}>
			{deleteText}
		</li>
	);
};

export default CourseGoalItem;
