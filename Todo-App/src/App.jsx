import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";
import Weather from "./Components/Weather";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Advanced To-Do App</h1>
        <Weather />
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
