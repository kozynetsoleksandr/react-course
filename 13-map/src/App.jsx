import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const texts = [
  'Click me',
  'Click me',
  'click me please',
  'hit me',
  'press me',
  'Click me again',
  'press me',
];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, idx) => {
        return <Button onClick={incrementCount} text={text} key={idx}></Button>;
      })}
    </div>
  );
}

export default App;
