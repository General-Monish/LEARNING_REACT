import ErrorMessage from "./Components/ErrorMessage";
import PlayStationGames from "./Components/PlayStationGames";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  // const games=[];
  const games = [
    "God Of War",
    "Uncharted",
    "The Last Of Us",
    "Horizon Zero Dawn",
    "Spider-Man",
    "Ghost of Tsushima"
  ];
  return (
    //                               fragment
    // <React.Fragment>
    //   <h1>PlayStation Games Lists</h1>
    //   <ul class="list-group">
    //     <li class="list-group-item">God Of War</li>
    //     <li class="list-group-item">Uncharted</li>
    //     <li class="list-group-item">The Last Of Us</li>
    //     <li class="list-group-item">Horizon Zero Dawn</li>
    //     <li class="list-group-item">Spider-Man</li>
    //   </ul>
    // </React.Fragment>
    //                                  MAP Method
    // <>
    //   <h1>PlayStation Games Lists</h1>
    //   <ul className="list-group">
    //     {games.map((game) => (
    //       <li key={game} className="list-group-item">
    //         {game}
    //       </li>
    //     ))}
    //   </ul>
    // </>
    <>
      <h1>PlayStation Games Lists</h1>
      <ErrorMessage gamesItems={games} />
      <PlayStationGames gamesItems={games} />
    </>
  );
}
export default App;
