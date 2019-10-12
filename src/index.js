import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log("ComponentDidMount");
    const defaultNotes = JSON.parse(localStorage.getItem("notes"));

    if (Array.isArray(defaultNotes) && defaultNotes.length > 0) {
      setNotes(defaultNotes);
    }
  }, []);

  useEffect(() => {
    console.log("ComponentDidUpdate");
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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

// const App = props => {
//   const [count, setCount] = useState(props.count);
//   const [title, setTitle] = useState("count");
//   const [prevCount, setPrevCount] = useState(count);
//
//   useEffect(() => {
//     console.log("Running as ComponentDidMount");
//   }, []);
//
//   useEffect(() => {
//     console.log("Running as ComponentDidUpdate");
//     document.title = count;
//   }, [count]);
//
//   return (
//     <div>
//       The calculated {title} is: {prevCount} + {count === 0 ? "0" : "1"} ={" "}
//       {count}
//       <br />
//       <input
//         type="text"
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//       />
//       <button
//         onClick={() => {
//           setPrevCount(count);
//           setCount(count + 1);
//         }}
//       >
//         +1
//       </button>
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
