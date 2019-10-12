import React, { useState } from "react";

const AddNoteForm = ({ dispatch }) => {
  const [title, setTitle] = useState("");

  const saveNote = e => {
    e.preventDefault();
    dispatch({ type: "ADD_NOTE", title });
    setTitle("");
  };

  return (
    <form onSubmit={saveNote}>
      <p>Add Note</p>
      <input
        type="text"
        value={title}
        onChange={({ target: { value } }) => setTitle(value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNoteForm;
