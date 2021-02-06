import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/ToDo/ToDo'
function App() {
 
  return (
    <div className="App">
      <header className="App-header">
      <ToDo/>
      </header>
    </div>
  );
}
export default App;
