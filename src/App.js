import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



// сделать, чтобы внутри квадрата был или крестик или нолик
// при нажатии чтобы переключало
// прочитать https://habr.com/ru/post/429712/

const Square = ()=>{

const [color, setColor]= useState("red")
  
  return(


    <div style={{width: 100, height: 100, backgroundColor: color}} onClick={()=>{setColor(color=="green" ? "red" : "green")}}></div>


  )


}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Square color="aqua" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
