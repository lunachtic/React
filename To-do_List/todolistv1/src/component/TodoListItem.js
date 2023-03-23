import React from "react";

function TodoListItem({
  todo,
  index,
  editingIndex,
  editValue,
  handleDeleteTodoItem,
  handleEditTodoItem,
  handleEditTodoItemSubmit,
  setEditValue,
}) {
  return (
    <li>
      {editingIndex === index ? (
        <form onSubmit={(event) => handleEditTodoItemSubmit(event, index)}>
      <input
        type="text"
        value={editValue}
        onChange={(event) => setEditValue(event.target.value)}
      />
      <button>Save</button>
    </form>
  ) : (
    <>
      {todo.text} - {todo.date.toLocaleString()}
      <button onClick={() => handleDeleteTodoItem(index)}>Delete</button>
      <button onClick={() => handleEditTodoItem(index, todo.text)}>
        Edit
      </button>
    </>
  )}
</li>

);
}

export default TodoListItem;