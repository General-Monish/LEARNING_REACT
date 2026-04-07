import styles from "./Games.module.css";

const Games = (props) => {
  return (
    // ${styles["playstation-games"]} --> this is our way to use the styles from the css module file, we can also use styles.playstation-games but for now i am keeping it outside of the className to show that we can use it in combination with other classes as well
    <li className={` list-group-item`}>
      {props.games}
    </li>
  );
};

export default Games;
