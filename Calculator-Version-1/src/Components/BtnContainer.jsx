import styles from "../Components/btnContainer.module.css";

const BtnContainer = () => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    // added nothing again nothing nnkjn
    <div className={styles.btn_container}>
      {buttonNames.map((buttonName) => (
        <button className={styles.btn}>{buttonName}</button>
      ))}
    </div>
  );
};
export default BtnContainer;
