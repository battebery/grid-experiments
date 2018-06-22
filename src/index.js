import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const rows = [{
  _id: 1,
  "name": "name1",
  "qty": 1,
  "material": 10,
  "materialUOM": "EA",
  "materialTotal": 10
}, {
  _id: 2,
  "name": "name2",
  "qty": 2,
  "material": 20,
  "materialUOM": "EA",
  "materialTotal": 20
  }, {
    _id: 3,
    "name": "name3",
    "qty": 3,
    "material": 300,
    "materialUOM": "EA",
    "materialTotal": 30
  }]

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
