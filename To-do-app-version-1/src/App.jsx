import ToDoAppName from "./Components/ToDoApp_Name";
import ToDoAppTaskAdding from "./Components/ToDoApp_TaskAdding";
import ToDoAppItem1 from "./Components/ToDoApp_Item1";
import ToDoAppItem2 from "./Components/ToDoApp_Item2";

function App() {
  return (
    <center class="todo-container">
      <ToDoAppName />
      <ToDoAppTaskAdding />
      <ToDoAppItem1 />
      <ToDoAppItem2 />
    </center>
  );
}

export default App;
