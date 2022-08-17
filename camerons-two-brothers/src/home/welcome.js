import React, { Component } from 'react'
import background from "../img/background-2.jpeg";

export default class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <img id="bg" alt="background" src={background} />
        <div className="content">
          <div className="slogan-container">
            <h1 id="welcome">Two Brothers Lawn Care</h1>
            <p id="motto">
              <i>"We treat everyone like family"</i>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
