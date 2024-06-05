import React, { useState } from "react";
import styled from "styled-components";

const TodoForm = ({ onSubmit }) => {
	const [text, setText] = useState("");
	const [discription, setDiscription] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		const newValue = {
			title: text,
			name: discription,
			isCompleted: false,
		};
		onSubmit(newValue);
		setDiscription("");
		setText("");
	};

	return (
		<StyledContainer>
			<StyledForm onSubmit={submitHandler}>
				<input
					onChange={(e) => setText(e.target.value)}
					placeholder="Enter text"
					type="text"
					value={text}
				/>
				<input
					value={discription}
					onChange={(e) => setDiscription(e.target.value)}
					placeholder="Enter your discription"
					type="text"
				/>
				<button>Create</button>
			</StyledForm>
		</StyledContainer>
	);
};

export default TodoForm;

const StyledContainer = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	background-color: rgba(0, 0, 0, 0.45);
	display: flex;
	justify-content: center;
	align-items: center;
`;
const StyledForm = styled.form`
	width: 29em;
	height: 15em;
	padding: 10px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	input {
		width: 95%;
		height: 3em;
		padding: 0 10px 4px 10px;
		outline: none;
		border: none;
		border-bottom: 2px solid grey;
	}
	button {
		width: 60%;
		height: 35px;
		border: none;
		background-color: green;
		color: #fff;
		font-size: 20px;
	}
`;
