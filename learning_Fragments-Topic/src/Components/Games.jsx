import styles from "./Games.module.css";

const Games = (props) => {
  return (
          <li className={`${styles["playstation-games"]} list-group-item`}>
            {props.games}
          </li>
  );
};

export default Games;