import './App.css';
import { Main } from './components/Main/Main';
import { Navbar } from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
    </div>
  );
}


export default App;
