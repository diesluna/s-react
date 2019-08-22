import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>TEST CODE GOGOGOGOGO!!!</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

console.log(`NODE_ENV = ${process.env.NODE_ENV}`);

export default App;
