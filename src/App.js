import React, { Component } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import KanyeRobot from './components/KanyeRobot'
import styles from './App.css'

class App extends Component{
  constructor(props){
    super(props)
    // creating a state object that contains a key of "name" and a value of "Bob"
    this.state = {
        userInput:""

    }
  }
  handleChange = (event) => {
      this.setState({userInput: event.target.value})

  }

  render(){
    return(
      <div>
        <input
            value={ this.state.userInput }
            onChange= {this.handleChange}
        />
        <GoodRobot
            input={this.state.userInput}
            className={styles.robotClass}
        />
        <BadRobot
            input={this.state.userInput}
        />
        <KanyeRobot
            input={this.state.userInput}
        />
      </div>
    )
  }
}
export default App
