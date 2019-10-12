import React, { useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const notesReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_NOTES":
      return action.notes;
    case "ADD_NOTE":
      return [...state, { title: action.title }];
    case "REMOVE_NOTE":
      return state.filter(note => note.title !== action.title);
    default:
      return state;
  }
};

const NotesApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log("ComponentDidMount");
    const notes = JSON.parse(localStorage.getItem("notes"));

    if (Array.isArray(notes) && notes.length > 0) {
      dispatch({ type: "POPULATE_NOTES", notes });
    }
  }, []);

  useEffect(() => {
    console.log("ComponentDidUpdate");
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = e => {
    e.preventDefault();
    dispatch({ type: "ADD_NOTE", title });
    setTitle("");
  };

  const onRemove = title => {
    dispatch({ type: "REMOVE_NOTE", title });
  };

  return (
    <div>
      <h1>Notes</h1>
      <p>Add Note</p>
      {notes.map(note => (
        <Note key={note.title} note={note} onRemove={onRemove} />
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

const Note = ({ note, onRemove }) => {
  useEffect(() => {
    console.log("Setting Up Effect");

    return () => {
      //runs before component is taken out DOM
      console.log("ComponentDidUnmount");
    };
  }, []);
  return (
    <div>
      <h3>{note.title}</h3>
      <button onClick={() => onRemove(note.title)}>Remove</button>
    </div>
  );
};

ReactDOM.render(<NotesApp />, document.getElementById("root"));
serviceWorker.unregister();
