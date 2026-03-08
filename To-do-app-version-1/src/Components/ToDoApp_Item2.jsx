function ToDoAppItem2() {
    let toDoName = "Buy Playstation games soon";
    let toDoDate = "25/02/2026";
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">{toDoName}</div>
        <div class="col-4">{toDoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-outline-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoAppItem2;
