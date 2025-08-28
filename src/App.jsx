import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";

import Todo from "./components/Todo";
import TodoNew from "./components/TodoNew";

function App() {
  const listItem = [
    {
      name: "Buy Milk",
      date: "1/12/2023",
    },
    {
      name: "Go To College",
      date: "1/12/2023",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <TodoNew itemsList={listItem} />
    </center>
  );
}

export default App;
