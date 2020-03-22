import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import  Navbar from './navbar/NavBar.jsx'


function App() {
  // Extract our Sass variables into a JS object
  // eslint-disable-next-line import/no-webpack-loader-syntax
  const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./styles/color.scss');
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
      </div>
    </ThemeProvider>
  );
}

export default App;
