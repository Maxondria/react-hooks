import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");

  const addNote = e => {
    e.preventDefault();
    setNotes([...notes, { title }]);
    setTitle("");
  };

  const onRemove = title => {
    setNotes(
      notes.filter(note => {
        return note.title !== title;
      })
    );
  };

  return (
    <div>
      <h1>Notes</h1>
      <p>Add Note</p>
      {notes.map(note => (
        <div key={note.title}>
          <h3>{note.title}</h3>
          <button onClick={() => onRemove(note.title)}>Remove</button>
        </div>
      ))}
      <form onSubmit={addNote}>
        <input
          type="text"
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

ReactDOM.render(<NotesApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
