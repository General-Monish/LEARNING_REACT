import ToDoAppName from "./Components/ToDoApp_Name";
import ToDoAppTaskAdding from "./Components/ToDoApp_TaskAdding";
import ToDoApp_Items from "./Components/ToDoApp_Items";
import "./App.css";

function App() {
  const todoItems = [
    { name: "Playstation-GOW", gameNumber: "1" },
    { name: "Playstation-Last_OF_US", gameNumber: "2" },
    { name: "Playstation-SpiderMan", gameNumber: "3" },
  ];

  return (
    <center className="todo-container">
      <ToDoAppName />
      <ToDoAppTaskAdding />
      <ToDoApp_Items items={todoItems} />
    </center>
  );
}

export default App;
