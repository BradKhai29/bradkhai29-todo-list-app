import { useState } from "react";
import "./App.css";
import hackathonGraphic from "./assets/hackathon-graphic.svg";
import naverLogo from "./assets/naver-logo.svg";
import reactLogo from "./assets/react.svg";

// Import components
import { TodoList } from "./TodoList";

function getRandomNumber() {
	return Math.floor(Math.random() * 100);
}

export const App = () => {
	const [count, setCount] = useState(0);

	console.log("App rendered");

	return (
		<div className="container">
			<div className="content">
				<img
					src={naverLogo}
					alt="NAVER Vietnam AI Hackathon"
					className="logo"
				/>
				<img src={reactLogo} alt="React Icon" className="logo" />

				<div className="greeting">
					<p className="hello">Xin chào {count}! 안녕하세요!</p>
					<p className="subtitle">Hello World</p>
					<p className="random-number">Random Number: {count}</p>
					<button onClick={() => setCount(getRandomNumber())}>
						Click to update
					</button>
				</div>
			</div>
			<section>
				{[1, 2, 3].map((item) => (
					<TodoList
						key={item}
						id={`todo-list-${item}`}
						title={`My Todo List ${item}`}
						description={`Description for Todo List ${item}`}
					/>
				))}
			</section>
			<img className="graphic" src={hackathonGraphic} alt="" />
		</div>
	);
};

export default App;
