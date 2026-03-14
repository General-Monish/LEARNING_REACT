import BtnContainer from "./Components/BtnContainer.jsx";
import Display from "./Components/Display.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.calculator}>
        <Display/>
        <BtnContainer/>
      </div>
    </>
  );
}
export default App;
