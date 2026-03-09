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
      // conditionally rendering the error message if there are no games available in the games array and also rendering the list of games using the PlayStationGames component.
      <ErrorMessage gamesItems={games} />
      // gamesItems prop is passed to the PlayStationGames component, which will use it to render the list of games. If the games array is empty, the ErrorMessage component will display a message indicating that no games are available.
      <PlayStationGames gamesItems={games} />
    </>
  );
}
export default App;
