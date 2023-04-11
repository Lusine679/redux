import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_TODO_LIST } from "../constants/common";

const initialState = {
  toDoName: "",
  toDoItems: INITIAL_TODO_LIST,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodoName: (state, action) => {
      state.toDoName = action.payload;
    },
    addTodo: (state, action) => {
      state.toDoItems.push(action.payload);
    },
    deleteTodo: (state, { payload: id }) => {
      state.toDoItems = state.toDoItems.filter((tD) => tD.id !== id);
    },
    toggleTodoState: (state, { payload: id }) => {
      const clickedItem = state.toDoItems.find((tI) => tI.id === id);
      clickedItem.checked = !clickedItem.checked;
    },
  },
});

export const { setTodoName, addTodo, deleteTodo, toggleTodoState } =
  todoSlice.actions;

export default todoSlice.reducer;
