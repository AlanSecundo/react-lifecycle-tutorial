import React from 'react';
import './App.css';
import { Content } from './components/Content'
import { Fade } from '@material-ui/core';

function App() {
  return (
    <Fade in timeout={2000}>
      <div className="App">
        <header>
          <h1>Ciclos de vida de um componente React</h1>
        </header>
        <Content />
        <footer>
          <span>Created by</span> <a href="https://www.alansecundo.com/br/" target="blank">Alan Secundo</a>
        </footer>
      </div>
    </Fade>
  );
}

export default App;
