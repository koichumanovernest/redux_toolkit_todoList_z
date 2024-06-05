import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";

export const getRequestTodo = createAsyncThunk(
	"todo/getRequestTodo",
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(`${BASE_URL}/todo.json`);
			const data = await response.json();

			const transform = [];

			for (let key in data) {
				transform.push({
					id: key,
					title: data[key].title,
					name: data[key].name,
					isCompleted: data[key].isCompleted,
				});
			}

			return transform;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const postRequestTodo = createAsyncThunk(
	"todo/postRequestTodo",
	async (data, { rejectWithValue, dispatch }) => {
		try {
			await fetch(`${BASE_URL}/todo.json`, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(data),
			});
			dispatch(getRequestTodo());
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const deleteRequest = createAsyncThunk(
	"todo/deleteRequest",
	async (id,{rejectWithValue,dispatch}) => {
		try {
			await fetch(`${BASE_URL}/todo/${id}.json`,{
				method:"DELETE",
			})
			dispatch(getRequestTodo())
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)
