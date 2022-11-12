import React, { Component } from 'react'

export default class MyNewComponets extends Component {

  constructor(prop){
    super(prop);

    this.state = {
      ageCount: 0
    }
  }

  clickAge = event => {
    this.setState({
      ageCount: this.state.ageCount + 1
    })
  }

  render() {
    return (
      <div>
        <h1>{this.props.lastName}, {this.props.firstName}</h1>
        <p>Age: {this.props.age + this.state.ageCount}</p>
        <p>Hair Color: {this.props.hairColor}</p>
        <button onClick={ this.clickAge }>Brithday Button for {this.props.firstName} {this.props.lastName}</button>
      </div>
    )
  }
}
