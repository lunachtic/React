import React, { useState } from "react";
import AddTodoForm from "./component/AddTodoForm";
import TodoListItem from "./component/TodoListItem";
import SortButtons from "./component/SortButtons";
import "./todoList.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [sortBy, setSortBy] = useState("");

  function handleAddTodoItem(inputValue) {
    setTodos([...todos, { text: inputValue, date: new Date() }]);
  }

  function handleDeleteTodoItem(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function handleEditTodoItem(index, value) {
    setEditingIndex(index);
    setEditValue(value);
  }

  function handleEditTodoItemSubmit(event, index) {
    event.preventDefault();
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, text: editValue } : todo
      )
    );
    setEditingIndex(null);
    setEditValue("");
  }

  function handleSortByDate() {
    setSortBy("date");
  }

  function handleSortByAlphabetical() {
    setSortBy("alphabetical");
  }

  function sortedTodos() {
    if (sortBy === "date") {
      return [...todos].sort((a, b) => b.date - a.date);
    } else if (sortBy === "alphabetical") {
      return [...todos].sort((a, b) =>
        a.text.localeCompare(b.text, undefined, { sensitivity: "base" })
      );
    } else {
      return todos;
    }
  }

  return (
    <div className="todo-list-container">
      <AddTodoForm handleAddTodoItem={handleAddTodoItem} />
      <SortButtons
        handleSortByDate={handleSortByDate}
        handleSortByAlphabetical={handleSortByAlphabetical}
      />
      <ul>
        {sortedTodos().map((todo, index) => (
          <TodoListItem
            key={index}
            todo={todo}
            index={index}
            editingIndex={editingIndex}
            editValue={editValue}
            handleDeleteTodoItem={handleDeleteTodoItem}
            handleEditTodoItem={handleEditTodoItem}
            handleEditTodoItemSubmit={handleEditTodoItemSubmit}
            setEditValue={setEditValue}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;