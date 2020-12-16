import logo from './logo.svg';
import './App.css';
import MakingAnOrder from './MakingAnOrder';
import CreatingBouquet from './CreatingBouquet';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MakingAnOrder/>
      <CreatingBouquet
      number={49} 
      color="pink" 
      flower="peonies" 
      />
      <CreatingBouquet
      number={53} 
      color="red" 
      flower="roses" 
      />
      </header>
    </div>
  );
}
export default App;
