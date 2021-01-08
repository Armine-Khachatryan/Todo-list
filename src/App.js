import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Product} from './components/Product';
import MakingAnOrder from './MakingAnOrder';
import CreatingBouquet from './CreatingBouquet';
import ToDo from './ToDo';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
      <ToDo/>
      <Product
      name='bananas'
      price='2$'
      description='Fresh bananas from Ecuador'
      />
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
