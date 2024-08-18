import { useState } from "react";
import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { paraGraph, wordsAtom } from "./store/atom";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  return (
    <div className="main">
      <h1 className="heading">Para generator</h1>
      <Input />
      <Para />
    </div>
  );
}

function Input() {
  const setWords = useSetRecoilState(wordsAtom);
  const [input, setInput] = useState(0);

  const handleGenerate = () => {
    setWords(input);
  };

  return (
    <div>
      <input
        placeholder="Enter no of words"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate Paragraph</button>
    </div>
  );
}

function Para() {
  const paragraph = useRecoilValue(paraGraph);
  return <p>{paragraph}</p>;
}

export default App;
