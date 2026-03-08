import ToDoAppName from "./Components/ToDoApp_Name";
import ToDoAppTaskAdding from "./Components/ToDoApp_TaskAdding";
import ToDoAppItem1 from "./Components/ToDoApp_Item1";
import ToDoAppItem2 from "./Components/ToDoApp_Item2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <ToDoAppName />
      <ToDoAppTaskAdding />
      <div className="item-container">
        <ToDoAppItem1 />
        <ToDoAppItem2 />
      </div>
    </center>
  );
}

export default App;
