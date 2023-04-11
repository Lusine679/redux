import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodoName } from "../redux/todo";
import { getDatabase, ref, set } from "firebase/database";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase.js";



const Header = () => {
  const toDoName = useSelector((state) => state.todo.toDoName);
  const dispatch = useDispatch();

  const onToDoChange = (e) => dispatch(setTodoName(e.target.value));

  const onAddBtnClick = async () => {
    // dispatch(
    //   addTodo({
    //     name: toDoName,
    //     id: Math.random(),
    //     checked: false,
    //   })
    // );

    const test = collection(db, "123")
    const payload = { name: toDoName, value: toDoName }
    await addDoc(test, payload);

    set(ref(getDatabase(), 'users/'), {
      username: toDoName,
    });
  };

  return (
    <>
      <div className="input-wrapper">
        <div className="input-data">
          <input
            value={toDoName}
            onChange={onToDoChange}
            placeholder="Enter a task"
          />
          <div className="underline"></div>
        </div>
      </div>
      <button className="btn btn-add" onClick={onAddBtnClick}>
        add
      </button>
    </>
  );

};
export default Header;
