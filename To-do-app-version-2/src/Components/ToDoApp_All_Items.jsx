
function ToDoApp_All_Items({toDoName,toDoDate}) {
  return (
    <div className="container">
      <div className="row own-Row">
        <div className="col-6">{toDoName}</div>
        <div className="col-4">{toDoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-outline-danger own-Button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoApp_All_Items;
