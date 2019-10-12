import React from "react";
import Note from "./Note";

const NoteList = ({ notes, onRemove }) => {
  return notes.map(note => (
    <Note key={note.title} note={note} onRemove={onRemove} />
  ));
};

export default NoteList;
