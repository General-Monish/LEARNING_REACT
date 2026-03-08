function App() {
  return (
    <center class="todo-container">
      <h1>To-Do App</h1>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter To Do Here" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-outline-success">Add</button>
          </div>
        </div>
                <div class="row">
          <div class="col-6">
            Buy Playstation game
          </div>
          <div class="col-4">
            25/02/2026
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-outline-danger">Danger</button>
          </div>
        </div>
                <div class="row">
          <div class="col-6">
            Buy Playstation games soon
          </div>
          <div class="col-4">
            25/02/2026
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-outline-danger">Danger</button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
