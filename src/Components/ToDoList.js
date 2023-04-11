import React, { useMemo } from "react";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";
import { selectFilterData } from "../redux/filter";

const ToDoList = (props) => {
  const toDoList = useSelector((state) => state.todo.toDoItems);
  const selectedFilterData = useSelector(selectFilterData);

  const filteredItems = useMemo(() => {
    return toDoList.filter((i) => {
      if (selectedFilterData === "all") {
        return true;
      }
      if (selectedFilterData === "checked") {
        return i.checked;
      }
      if (selectedFilterData === "unchecked") {
        return !i.checked;
      }
      return false;
    });
  }, [toDoList, selectedFilterData]);

  return (
    <>
      {filteredItems.map((toDo) => {
        return <ToDoItem key={toDo.id} toDo={toDo} onSave={props.onSave} />;
      })}

      {/* <div className="dropdown">
        <button className="dropbtn">Filter</button>
        <div id="myDropdown" className="dropdown-content">
          <button
            onClick={() => {
              props.filteredToDo("all");
            }}
          >
            All to-do lists
          </button>
          <button
            onClick={() => {
              props.filteredToDo(true);
            }}
          >
            Completed to-do lists
          </button>
          <button
            onClick={() => {
              props.filteredToDo(false);
            }}
          >
            Unfulfilled to-do lists
          </button>
        </div>
      </div> */}
    </>
  );
};

export default ToDoList;
