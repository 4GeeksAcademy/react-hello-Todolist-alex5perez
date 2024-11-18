import React, { useState } from "react";
import "../../styles/index.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [newTodo, setNewTodo] = useState("");
	const [todoList, setTodoList] = useState([]);

	const handleEnter = (e) => {
		if (e.key === "Enter") {
			setTodoList([...todoList, newTodo]);
			setNewTodo("");
		}
	};

	const handleDelete = (index) => {
		const newList = [...todoList];
		newList.splice(index, 1);
		setTodoList(newList);
	};

	return (
		<div className="text-center container">
			<h1 className="text-center mt-5">TODO LIST</h1>
			<input className="form-control" placeholder="Añade una tarea"
				value={newTodo}
				onChange={(e) => {
					setNewTodo(e.target.value);
				}}
				onKeyDown={handleEnter} />
			<h3 className="mt-2">Todo: </h3>
			<ul>
				{todoList.length === 0 ? (
					<p>No hay tareas, añadir tareas</p>)
					: (todoList.map((todo, index) => (
						<p key={index} style={{ fontSize: "2rem" }}>
							{todo}
							<span
								style={{ color: "red", cursor: "pointer", marginLeft: "1rem" }}
								onClick={() => handleDelete(index)}>
								X
							</span>
						</p>
					))
					)}
			</ul>
		</div>
	);
};

export default Home;
