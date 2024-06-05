import { createSlice } from "@reduxjs/toolkit";
import { getRequestTodo, postRequestTodo } from "../asynkThunk/asunkThunk";

const initialState = {
	todos: [],
	isLoading: false,
	error: null,
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getRequestTodo.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getRequestTodo.fulfilled, (state, { payload }) => {
				state.todos = payload;
				state.isLoading = false;
			})
			.addCase(getRequestTodo.rejected, (state, { payload }) => {
				state.error = payload;
			})
			.addCase(postRequestTodo.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(postRequestTodo.fulfilled, (state, { payload }) => {
				state.todos = payload;
				state.isLoading = false;
			})
			.addCase(postRequestTodo.rejected, (state, { payload }) => {
				state.error = payload;
			})
			
	},
});
export default todoSlice.reducer;
