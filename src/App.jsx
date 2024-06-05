import React, { useEffect } from "react";
import Wrapper from "./components/Wrapper";
import { useDispatch } from "react-redux";
import { getRequestTodo } from "./store/asynkThunk/asunkThunk";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRequestTodo());
	}, []);

	return <Wrapper />;
}

export default App;
