import styles from "./Components/App.module.css";

function App() {
  return (
    <>
      <div className={styles.calculator}>
        <input className={styles.input_display} type="text" />
        <div className={styles.btn_container}>
          <button className={styles.btn}>C</button>
          <button className={styles.btn}>1</button>
          <button className={styles.btn}>2</button>
          <button className={styles.btn}>+</button>
        </div>
      </div>
    </>
  );
}
export default App;
