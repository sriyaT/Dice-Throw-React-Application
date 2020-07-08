import React, { Component } from 'react';
import  './App.css';


class App extends Component {

  state = {
    dice:1
  }
  throwDice = () =>{
    const diceValue = Math.floor(Math.random()*6 + 1);
    this.setState({
      dice: diceValue
    })
  }
  render(){
    return (
      <div className="App">
        <div className='container'>
              <div className='diceContainer'>
                <img className='dice' alt='dice-1' src={require(`./assets/dice-${this.state.dice}.png`)} />
              </div>
              <div className='button-container'>
                <button onClick= {this.throwDice} className='DiceBtn'>Let's Play</button>
              </div>
        </div>
      </div>
    );
  }
  
}

export default App;
