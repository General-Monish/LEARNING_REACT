import style from '../Components/ToDoAppTaskAdding.module.css'

function ToDoAppTaskAdding() {
  return (
    <div className="container ">
      <div className={`${style["own-Row"]} row`}>
        <div className="col-6">
          <input type="text" placeholder="Enter To Do Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-outline-success own-Button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoAppTaskAdding;
