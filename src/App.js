import React, {useState} from 'react';
import styled from "styled-components";
import './App.css';
import Character from './components/Character';

const StyledCont =styled.div`
display: flex;
flex-flow: column;
justify-content: center;

`;

const App = () => {
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  return (
    <StyledCont className="App">
      <h1 className="Header">STAR WARS Characters</h1>
      <Character />
    </StyledCont>
  );
}

export default App;
