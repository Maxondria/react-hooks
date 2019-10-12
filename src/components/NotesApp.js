import React, { useReducer, useEffect } from "react";
import notesReducer from "../reducers/notesReducer";
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";

const NotesApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);

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

  const onRemove = title => {
    dispatch({ type: "REMOVE_NOTE", title });
  };

  return (
    <div>
      <h1>Notes</h1>
      <NoteList notes={notes} onRemove={onRemove} />
      <AddNoteForm dispatch={dispatch} />
    </div>
  );
};

export default NotesApp;
