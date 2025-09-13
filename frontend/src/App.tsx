// Import hooks.

// Import styles and assets.
import "./App.css";
import "./util.css";

import { TodoItem } from "./components/todoitem/TodoItem";

export const App = () => {
	console.log("Reload App component!!");

	return (
		<div className="container">
			<TodoItem
				isCompleted={false}
				id="1"
				title="Sample Todo"
				extraNote="This is a sample todo item."
			/>
		</div>
	);
};

export default App;
