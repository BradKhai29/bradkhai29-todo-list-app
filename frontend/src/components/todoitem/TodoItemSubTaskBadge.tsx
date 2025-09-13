import classes from "./TodoItem.module.css";

interface TodoItemSubTaskBadgeProps {
	totalSubTasks: number;
	completedSubTasks: number;
	className?: string;
}

export const TodoItemSubTaskBadge = ({
	totalSubTasks,
	completedSubTasks,
	className
}: TodoItemSubTaskBadgeProps) => {
	return (
		<div className={`${classes.badge} ${className}`}>
			<div>{`${completedSubTasks} of ${totalSubTasks}`}</div>
		</div>
	);
};
