import styles from "./Games.module.css";

const Games = (props) => {
  const BuyButtonClicked = (event) => {
    alert(`You have bought ${props.games}`);
  };
  return (
    // ${styles["playstation-games"]} --> this is our way to use the styles from the css module file, we can also use styles.playstation-games but for now i am keeping it outside of the className to show that we can use it in combination with other classes as well
    <li className={`list-group-item`}>
      {props.games}
      <button
        className={`${styles["buyButton"]} btn btn-success`}
        // here event handler is added to the button, when the button is clicked it will call the BuyButtonClicked function which will show an alert with the name of the game that was bought.Also we are passing the event object to the function so that we can use it to get the value of the button that was clicked.
        onClick={(event) => BuyButtonClicked(event)}
      >
        BUY
      </button>
    </li>
  );
};

export default Games;
