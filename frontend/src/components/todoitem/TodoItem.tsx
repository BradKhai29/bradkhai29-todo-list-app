// Import hooks
import { useState } from "react";

// Import utils.
import { localStorageHelper } from "../../utils/localStorageHelper";

// Import styles and assets
import classes from "./TodoItem.module.css";
import menuIcon from "../../assets/todoitem/menu.svg";

// Import components
import { Checkbox } from "@mui/material";
import { TodoItemSubTaskBadge } from "./TodoItemSubTaskBadge";

// Define props
interface TodoItemProps {
	id: string;
	title: string;
	extraNote?: string;
	isCompleted: boolean;
	dueDate?: string;
	isParent?: boolean;
}

export const TodoItem = ({
	id,
	title,
	extraNote,
	isCompleted,
	isParent = true
}: TodoItemProps) => {
	const [isChecked, setIsChecked] = useState(isCompleted);
	console.log("Render TodoItem: ", id, isChecked);

	function setCompletedInLocalStorage() {
		setIsChecked((completed) => !completed);
		const key = `todo_${id}`;
		localStorageHelper.setItem(key, isChecked ? "true" : "false");
		localStorageHelper.setItem<TodoItemProps>(`todo_item_${id}`, {
			id,
			title,
			extraNote,
			isCompleted: !isChecked,
			isParent
		});

		if (isChecked) {
			const todoItem = localStorageHelper.getItem<TodoItemProps>(
				`todo_item_${id}`
			);
			console.log("Get todo item from local storage: ", todoItem);
		}
	}

	return (
		<div id={id} className={classes.todoItem}>
			<div className="d-flex w-100 align-center">
				<Checkbox
					checked={isChecked}
					size="large"
					color="primary"
					onChange={() => setCompletedInLocalStorage()}
				/>
				<div className="d-flex w-100 align-center">
					<p className="w-100">
						{title} {extraNote && `- ${extraNote}`}
					</p>
					<button className={classes.editBtn}>
						<img
							className={classes.editIcon}
							src={menuIcon}
							alt="Menu icon"
						/>
					</button>
				</div>
			</div>
			<div className="d-flex w-100">
				<div className={classes.extraInfo}>
					<TodoItemSubTaskBadge
						totalSubTasks={3}
						completedSubTasks={1}
					/>
				</div>
			</div>
		</div>
	);
};
