import React, { Component } from 'react';
import './style.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsElapsed: 0,
      buttonText: 'INICIAR'
    }

    this.timer = null
    this.start = this.start.bind(this)
    this.clear = this.clear.bind(this)
  }

  getSeconds() {
    return ('0' + this.state.secondsElapsed % 60).slice(-2)
  }

  getMinutes() {
    return Math.floor(this.state.secondsElapsed / 60)
  }

  start() {
    let state = this.state;

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.buttonText = 'INICIAR';
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.secondsElapsed += 1;
        this.setState(state);
      }, 1000);
      state.buttonText = 'PAUSAR';
    }

    this.setState(state);
  }

  clear() {
    if (this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
    }

    let state = this.state
    state.secondsElapsed = 0
    state.buttonText = 'INICIAR'
    this.setState(state)
  }

  render() {
    return (
      <div className="container">
        <img src={require('./assets/cronometro.png')} className="img" />
        <a className="timer">{this.getMinutes()}:{this.getSeconds()}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.start}>{this.state.buttonText}</a>
          <a className="botao" onClick={this.clear}>ZERAR</a>
        </div>
      </div>
    )
  }

}

export default App;
