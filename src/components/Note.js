import React from "react";

const Note = ({ note, onRemove }) => {
  return (
    <div>
      <h3>{note.title}</h3>
      <button onClick={() => onRemove(note.title)}>Remove</button>
    </div>
  );
};

export default Note;
