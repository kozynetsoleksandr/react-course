import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animalName="Dog" age={9} hasPet={false} />
      <PetInfo animalName="Cat" age={12} hasPet />
    </div>
  );
}

export default App;
