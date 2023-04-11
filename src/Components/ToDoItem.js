import React, { useState } from "react";
import { deleteTodo, toggleTodoState } from "../redux/todo";
import { useDispatch } from "react-redux";

const ToDoItem = ({ toDo, changeIsChecking, onSave }) => {
  const dispatch = useDispatch();
  const [editingName, setEditingName] = useState(toDo.name);
  const [isEditing, setIsEditing] = useState(false);

  const onEditingNameChange = (e) => {
    setEditingName(e.target.value);
  };

  const onSaveClick = () => {
    setIsEditing(false);
    onSave(toDo.id, editingName);
  };

  const onCancelClick = () => {
    setEditingName(toDo.name);
    setIsEditing(false);
  };

  return (
    <div className="toDo-item">
      {isEditing ? (
        <>
          <input
            id="edit-input"
            onChange={onEditingNameChange}
            value={editingName}
          />
          <button className="btn btn-save" onClick={onSaveClick}>
            Save
          </button>
          <button className="btn btn-cancel" onClick={onCancelClick}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <div
            id="toDo-name"
            className={toDo.checked ? "checked-toDo" : "unchecked-toDo"}
          >
            <input
              type="checkbox"
              checked={toDo.checked}
              onChange={(e) => {
                dispatch(toggleTodoState(toDo.id));
              }}
            />
            <span>{toDo.name}</span>
          </div>
          <div className="btns-del-edit">
            <button
              className="btn btn-del"
              onClick={() => {
                dispatch(deleteTodo(toDo.id));
              }}
            >
              Del
            </button>
            <button
              className="btn btn-edit"
              onClick={() => {
                this.setState({
                  isEditing: true,
                });
              }}
            >
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ToDoItem;
