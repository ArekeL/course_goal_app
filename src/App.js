import { useState } from "react";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";

import "./App.css";

import CoursInput from "./components/CourseGoals/CourseInput/CourseInput";

function App(props) {
	const [courseGoals, setCourseGoals] = useState([
		{ text: "Do all exercises!", id: "g1" },
		{ text: "Finish the course!", id: "g2" },
	]);

	const handleDeleteGoal = (goalId) => {
		setCourseGoals((preveGaols) => {
			const updatedGoals = preveGaols.filter((goal) => goal.id !== goalId);
			return updatedGoals;
		});
	};

	let content = (
		<p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
	);

	if (courseGoals.length > 0) {
		content = (
			<CourseGoalList items={courseGoals} onDeleteItem={handleDeleteGoal} />
		);
	}
	return (
		<div>
			<section id='goal-form'>
				<CoursInput />
			</section>
			<section id='goals'>{content}</section>
		</div>
	);
}

export default App;
