import "./App.scss";
import Left from "./Components/Left/Left";
import Center from "./Components/Center/Center";
import Right from "./Components/Right/Right";

function App() {
  return (
    <div className="app">
      <Left className="left" />
      <Center className="center" />
      <Right className="right" />
    </div>
  );
}

export default App;
