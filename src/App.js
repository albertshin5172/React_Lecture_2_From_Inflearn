//import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";

function App() {
  // 1. Conditional statements: if-else, switch
  // 2. Loop statements: for // map

  let Flag = false;
  let Arr = [1, 2, 3, 4, 5];

  function checkFlag(flag) {
    if (Flag) {
      return "It's true.";
    } else {
      return "It's False";
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Hello, React!</h1>
      {checkFlag(Flag)}
      {/* {Flag ? "It's true." : "It's false."} */}
      <br />
      {Arr.map((a, b) => {
        return (
          <div key={b}>
            <p>{a}</p>
          </div>
        );
      })}
      <Test />
    </div>
  );
}

export default App;
