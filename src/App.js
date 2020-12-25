import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Product} from './Product';
import MakingAnOrder from './MakingAnOrder';
import CreatingBouquet from './CreatingBouquet';
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
