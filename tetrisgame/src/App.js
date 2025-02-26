import './App.css';
import React from "react";
import Game from './components/game';
import Menu from './components/menu'; 




function App() {
 return(
  <div className='App'>

    <Game rows={10} columns={20}/>

  </div>
 )

}

export default App;
