import React from "react";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import Filter from "./Components/Filter";
import { useEffect, useState } from "react"

import db from "./firebase";
import { onValue, ref } from "firebase/database";
import { onSnapshot, collection } from "firebase/firestore";

export default function App() {
  const [colors, setColors] = useState([]);
  console.log(colors);
  useEffect(() => {
    const unsab = onSnapshot(collection(db, "123"), (snapshot) => {
      setColors(snapshot.docs.map(doc => doc.data()));
    });

    return unsab;
  }, [])

  // onSave = (id, newValue) =>
  //   this.setState({
  //     todoList: this.state.todoList.map((item) =>
  //       id === item.id
  //         ? {
  //           ...item,
  //           name: newValue,
  //         }
  //         : item
  //     ),
  //   });


  return (
    <div id="main-container">
      <div id="header">
        <Header />
      </div>
      <div id="toDo-list">
        <ToDoList />
        <Filter />
      </div>
    </div>
  );

}
