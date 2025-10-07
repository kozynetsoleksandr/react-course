import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue" text="123">
        <h2>Text inside Wrapper</h2>
        <button>CLick me</button>
      </Wrapper>
      <Wrapper color="lightgreen" text="123">
        <h2>Text inside Wrapper</h2>
        <button>Another text</button>
        <input type="text" placeholder="Enter value" />
      </Wrapper>
    </div>
  );
}

export default App;
