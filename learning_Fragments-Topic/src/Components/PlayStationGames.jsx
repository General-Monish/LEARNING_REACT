import Games from "./Games";
const PlayStationGames = ({ gamesItems }) => {
  return (
    <ul className="list-group">
      {gamesItems.map((game) => (
        <Games
          key={game}
          games={game}
          handleBuyButton={() => alert(`You have bought ${game}`)}
        />
      ))}
    </ul>
  );
};

export default PlayStationGames;
