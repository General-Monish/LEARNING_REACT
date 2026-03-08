import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
function App() {
      let games = ["God Of War", "Uncharted", "The Last Of Us", "Horizon Zero Dawn", "Spider-Man"];
  return (
    // <React.Fragment>
    //   <h1>Playstaion Games Lists</h1>
    //   <ul class="list-group">
    //     <li class="list-group-item">God Of War</li>
    //     <li class="list-group-item">Uncharted</li>
    //     <li class="list-group-item">The Last Of Us</li>
    //     <li class="list-group-item">Horizon Zero Dawn</li>
    //     <li class="list-group-item">Spider-Man</li>
    //   </ul>
    // </React.Fragment>
    <>
      <h1>Playstaion Games Lists</h1>
      <ul className="list-group">
        {games.map((game) => (
          <li key={game} className="list-group-item">
            {game}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
