function ToDoAppTaskAdding() {
  return (
    <div className="container ">
      <div className="row own-Row">
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
