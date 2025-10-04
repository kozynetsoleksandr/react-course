import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animalName="Dog" age={9} />
      <PetInfo animalName="Cat" age={12} />
    </div>
  );
}

export default App;
