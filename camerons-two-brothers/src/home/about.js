import React, { Component } from 'react'
import './styles/about.css'
import NavButton from '../common/NavButton'

let text = `
Two Brothers Lawn Care is a family owned and operated business with deep roots in the community.  We started 12 years ago with two mowers and a dedication to customer service.  

Our goal is to treat you like part of the family and to care for your lawn like it was our own. Our mission is simple: To always offer excellent service at a fair price.
`

/*
Button.propTypes = {
  active: PropTypes.string,
  exact: PropTypes.bool,
  type: PropTypes.string,
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
*/

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h1>What We're About</h1>
        <div className="about">
          <p className="text-content">{text}</p>
          <div id="mower-img"></div>
        </div>
        <br />
        <p className="text-content">Contact us today for more information. 316-650-4981</p>
        
        {/* <div id="learn-more">
          <NavButton path="/about" exact={false} type="info"  text="Learn More" />
        </div> */}
      </div>
    )
  }
}
