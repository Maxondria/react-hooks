import React, { useContext } from "react";
import NotesContext from "../context/notes.context";
import useMousePosition from "../custom-hooks/mousemovent.hook";

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  const { x, y } = useMousePosition();

  return (
    <>
      <h3>{note.title}</h3>
      <button
        onClick={() => dispatch({ type: "REMOVE_NOTE", title: note.title })}
      >
        Remove
      </button>
      <p>
        Position X: {x}, Position Y: {y}
      </p>
    </>
  );
};

export default Note;
