import React, { Component } from 'react'
import { Label, Input, Button, ButtonCircle, Heading, Badge } from 'rebass'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    people: [],
    number: [],
    value: '',
    isShuffled: false
  }
  addName = (event) => {
    const value = event.target.value
    if(event.key==='Enter') {
      this.setState(prevState => ({
        people: [...prevState.people, value]
      }))
    }
  }

  deleteName = (value) => {
    this.setState({ people: this.state.people.filter(person => person !== value) })
  }

  shuffle = () => {
    const { people } = this.state
    this.setState({ people: people.sort(() => Math.random() - 0.5) })
    this.setState({ isShuffled: true })
  }

  render() {
    const { people, isShuffled } = this.state
    return (
      <div className="App">
        <header className="App-header">
        <Heading
          is='h5'
          fontSize={[ 4, 5, 6 ]}>
          LEVVEL SEAT ASSIGNER
        </Heading>

          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <Label>ADD NAME ON THE LIST</Label>
            <Input defaultValue='' placeholder='Name' onKeyPress={this.addName} />
          </div>
          <div>
            {
              (people && !isShuffled) &&
              people.map((person, i) => <ButtonCircle key={i} onClick={() => this.deleteName(person)}>{person}</ButtonCircle>)
            }
          </div>
        </header>
        <div>
          {!isShuffled && <Button onClick={this.shuffle}>SHUFFLE</Button>}
          {isShuffled &&
            people.map((person, i) => 
              <Heading key={i}>
                {i+1}
                <Badge fontSize='13'>
                  {person}
                </Badge>
              </Heading>
            )
          }
        </div>
      </div>
    )
  }
}

export default App
