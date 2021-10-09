import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Index.js is the Main JS file, where we call the main component name App.
// First we need to import the component we want to display like line 3.
// ReactDOM.render means what to render on the page.
// To call a component just add, <Name of the component/> in the tag.

// Also index.html is the main file, where everything is displayed.
// So, where the <App /> will display. Is where the "Tag which has an id of root".
