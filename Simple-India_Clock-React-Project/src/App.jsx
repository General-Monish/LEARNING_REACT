import Clock_Title from "./Components/Clock_Title";
import Clock_Paragraph from "./Components/Clock_parah";
import Clock_Heading from "./Components/Clock_heading";
import Clock_TimeAndDate from "./Components/Clock_TimeAndDate";
import "./App.css";
function App() {

return (
  <center className="clock-container">
    <Clock_Title />
    <Clock_Paragraph />
    <Clock_Heading />
    <Clock_TimeAndDate />
  </center>
);
}
export default App
