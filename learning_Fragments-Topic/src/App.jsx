import { useState } from "react";
import ErrorMessage from "./Components/ErrorMessage";
import PlayStationGames from "./Components/PlayStationGames";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Components/Container";
import GamesInput from "./Components/GamesInput";
function App() {
  // useState hook is used to manage the state of the games list. The gamesList state variable holds the current list of games, and the setGamesList function is used to update this list when a new game is added.
  let [gamesList, setGamesList] = useState([]);
  const OnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newGame = event.target.value;
      event.target.value = "";
      setGamesList([...gamesList, newGame]);
      console.log(newGame);
    }
  };
  return (
    //                                                         PROPS and CONDITIONAL RENDERING
    <Container>
      <h1 style={{ fontFamily: "Arial", fontWeight: 800 }}>
        PlayStation Games List
      </h1>
      {/* The ErrorMessage component is rendered with the gamesList passed as a prop. This allows the ErrorMessage component to access the current list of games and display an appropriate message if the list is empty. */}
      
      <ErrorMessage gamesItems={gamesList} />
      {/*
      The GamesInput component is rendered with the OnKeyDown function passed as a prop. This allows the GamesInput component to call the OnKeyDown function when a key is pressed, enabling the functionality to add new games to the list when the Enter key is pressed.
      */}
      <GamesInput handleKeyDown={OnKeyDown} />
      <PlayStationGames gamesItems={gamesList} />
    </Container>
  );
}
export default App;
