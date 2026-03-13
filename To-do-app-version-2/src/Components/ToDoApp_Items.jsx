import ToDoApp_All_Items from "./ToDoApp_All_Items";
import style from '../Components/ToDoApp_All_Items.module.css'

const ToDoApp_Items = ({ items }) => {
  return (
    <div className={`${style["item-container"]}`}>
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
