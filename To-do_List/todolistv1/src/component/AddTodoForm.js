import React, { useState } from "react";

function AddTodoForm({ handleAddTodoItem }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleAddTodoItem(inputValue);
    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default AddTodoForm;