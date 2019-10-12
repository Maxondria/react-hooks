import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const NotesApp = () => {
  const defaultNotes = JSON.parse(localStorage.getItem("notes"));
  const [notes, setNotes] = useState(defaultNotes || []);
  const [title, setTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  });

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

// const App = props => {
//   const [count, setCount] = useState(props.count);
//
//   useEffect(() => {
//     console.log("Running...");
//   });
//
//   return (
//     <div>
//       The count is at: {count}
//       <button onClick={() => setCount(count + 1)}>+1</button>
//     </div>
//   );
// };
//
// App.defaultProps = {
//   count: 0
// };

ReactDOM.render(<NotesApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
