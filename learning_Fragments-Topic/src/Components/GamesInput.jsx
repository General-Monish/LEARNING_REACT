import styles from "./GamesInput.module.css";
const GamesInput = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter Games Here"
      className={styles["games-input"]}
      onChange={handleOnChange}
    />
  );
}; 
export default GamesInput;
