import React from "react";
import TodoForm from "../components/TodoForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteRequest, postRequestTodo } from "../store/asynkThunk/asunkThunk";
const Wrapper = () => {
	const dispatch = useDispatch();
	const { todos } = useSelector((state) => state.todo);
	console.log(todos);

	const addValueHandler = (data) => {
		dispatch(postRequestTodo(data));
	};
   const deleteTodos = (id) => {
		dispatch(deleteRequest(id))
	}
	return (
		<div>
			<TodoForm onSubmit={addValueHandler} />
			{todos?.map((item) => (
				<div key={item.id}>
					<h1>{item.title}</h1>
					<h1>{item.name}</h1>
					<button onClick={()=> deleteTodos(item.id)}>delete</button>
				</div>
			))}
		</div>
	);
};

export default Wrapper;
