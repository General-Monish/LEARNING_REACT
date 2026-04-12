import styles from "./GamesInput.module.css";
const GamesInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Games Here"
      className={styles["games-input"]}
      onKeyDown={handleKeyDown}
    />
  );
}; 
export default GamesInput;
