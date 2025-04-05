import Clock from "./Clock";
import "./App.css";

function App() {
  const now = new Date();
  return <Clock time={now} />;
}

export default App;
