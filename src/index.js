import React from "react";
import ReactDOM from "react-dom";
import NotesApp from "./components/NotesApp";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<NotesApp />, document.getElementById("root"));
serviceWorker.unregister();
