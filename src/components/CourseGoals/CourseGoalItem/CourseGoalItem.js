import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
	// const [deleteText, setDeleteText] = useState("");

	const handleDeleteGoal = () => {
		// setDeleteText("Deleted");
		props.onDelete(props.id);
	};
	return (
		<li className='goal-item' onClick={handleDeleteGoal}>
			{props.children}
		</li>
	);
};

export default CourseGoalItem;
