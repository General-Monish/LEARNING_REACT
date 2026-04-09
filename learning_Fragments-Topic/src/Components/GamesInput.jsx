import styles from "./GamesInput.module.css";
const GamesInput = () => {
    const handleOnChange = (event)=>{
        console.log(event.target.value);
    }
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
