import ErrorMessage from "./Components/ErrorMessage";
import PlayStationGames from "./Components/PlayStationGames";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Components/Container";
import GamesInput from "./Components/GamesInput";
function App() {
  // const games=[];
  const games = [
    "God Of War",
    "Uncharted",
    "The Last Of Us",
    "Horizon Zero Dawn",
    "Spider-Man",
    "Ghost of Tsushima",
  ];
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  let gameEnteredByUser = "Seikro";
  return (
    //                                                         PROPS and CONDITIONAL RENDERING
    <Container>
      <h1 style={{ fontFamily: "Arial", fontWeight: 800 }}>
        PlayStation Games Lists
      </h1>
      {/* conditionally rendering the error message if there are no games available in the games array and also rendering the list of games using the PlayStationGames component. */}
      <ErrorMessage gamesItems={games} />
      {/* gamesItems prop is passed to the PlayStationGames component, which will use it to render the list of games. If the games array is empty, the ErrorMessage component will display a message indicating that no games are available. */}
      <GamesInput handleOnChange={handleOnChange} />
      <p>{gameEnteredByUser}</p>
      <PlayStationGames gamesItems={games} />
    </Container>
  );
}
export default App;
