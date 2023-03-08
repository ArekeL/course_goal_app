import { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CoursInput from "./components/CourseGoals/CourseInput/CourseInput";

import "./App.css";

function App() {
	const [courseGoals, setCourseGoals] = useState([
		{ text: "Do all exercises!", id: "g1" },
		{ text: "Finish the course!", id: "g2" },
	]);

	const handleAddGoal = (entredText) => {
		setCourseGoals((preveGaols) => {
			const updatedGoals = [...preveGaols];
			updatedGoals.unshift({ text: entredText, id: Math.random().toString() });
			return updatedGoals;
		});
	};

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
				<CoursInput onAddGoal={handleAddGoal} />
			</section>
			<section id='goals'>{content}</section>
		</div>
	);
}

export default App;
