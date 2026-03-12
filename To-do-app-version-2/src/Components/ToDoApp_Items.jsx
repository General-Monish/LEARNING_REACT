import ToDoApp_All_Items from "./ToDoApp_All_Items";

const ToDoApp_Items = ({ items }) => {
  return (
    <div className="item-container">
      {
      items.map((item , index) => (
        <ToDoApp_All_Items
        key={index}
        toDoName={item.name} toDoDate={item.gameNumber} />
      ))
      }
    </div>
  );
};
export default ToDoApp_Items;
