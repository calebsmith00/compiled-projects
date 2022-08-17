import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/button.css'

class Button extends Component {
  render() {
    const {  className, text, handleClick } = this.props
    return (
      <div className={`btn-generic ${className}`}>
        <button onClick={handleClick}>
          {text}
        </button>
      </div>
    )
  }
}

Button.defaultProps = {
  handleClick: e => console.log('click')
}

Button.propTypes = {
  netlify: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func
}

export default Button
