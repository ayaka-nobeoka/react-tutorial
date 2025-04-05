import HaikuList from './HaikuList';
import './App.css';

const haiku = [
  "I write, erase, rewrite",
  "Erase again, and then",
  "A poppy blooms."
];

function App() {
  return (
    <>
    <h1>俳句の表示(propsの練習)</h1>
    <HaikuList lines={haiku}/>
    </>
  );
}

export default App;
