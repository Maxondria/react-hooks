import React, { useReducer, useEffect } from "react";
import notesReducer from "../reducers/notesReducer";
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";
import NotesContext from "../context/notes.context";

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

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <h1>Notes</h1>
      <NoteList />
      <AddNoteForm />
    </NotesContext.Provider>
  );
};

export default NotesApp;
