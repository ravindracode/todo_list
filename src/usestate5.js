import React, { useState } from "react";

const Index = () => {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState({
    text: "",
    id: "",
  });
  const [editingItem, setEditingItem] = useState({
    id: "",
    isEditing: false,
  });

  const changeMessage = (e) => {
    setMessage({
      ...message,
      text: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem.isEditing) {
      // If editing, update the existing item
      const updatedList = list.map((item) => {
        if (item.id === editingItem.id) {
          return { ...item, text: message.text };
        }
        return item;
      });
      setList(updatedList);
      setEditingItem({ id: "", isEditing: false });
    } else {
      // If not editing, add a new item
      const newTodo = {
        text: message.text,
        id: new Date().getTime().toString(),
      };
      setList([...list, newTodo]);
    }
    setMessage({ text: "", id: "" });
  };

  const handleDelete = (id) => {
    const newTodos = list.filter((eachItem) => eachItem.id !== id);
    setList(newTodos);
  };

  const changeEditState = (id) => {
    setEditingItem({ id, isEditing: true });
    const editableItem = list.find((eachItem) => eachItem.id === id);
    setMessage({ ...message, text: editableItem.text, id: editableItem.id });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="enter some text"
          value={message.text}
          onChange={changeMessage}
        />
        <button type="submit">{editingItem.isEditing ? "Edit" : "Add"}</button>
      </form>
      <hr />
      {list.length === 0 && <h4>There are no items in the list</h4>}
      <ul>
        {list.map((eachItem) => {
          const { text, id } = eachItem;
          return (
            <li key={id}>
              <span>{text}</span>
              <button onClick={() => changeEditState(id)}>Edit</button>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
