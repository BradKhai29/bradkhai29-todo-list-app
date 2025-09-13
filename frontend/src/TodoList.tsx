import { AppButton } from "./AppButton";

interface TodoListProps {
	id: string;
	title: string;
	description: string;
	onClick?: () => void;
}

export const TodoList = (props: TodoListProps) => {
	return (
		<div>
			<div id={props.id}>{props.title}</div>
			<div>
				<span>{props.description}</span>
				<AppButton onClick={props.onClick}>
					<span style={{ color: "blue" }}>Click me: {props.id}</span>
				</AppButton>
			</div>
		</div>
	);
};
