import React, { Component } from 'react'
import './footer.css'
import PropTypes from 'prop-types'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p id="copyright">Copyright &copy; 2020. All rights reserved.</p>
        <div className="footer-container">
          <span>Two Brothers Lawn Care</span>
          <p id="companyEmail"><a href="mailto:info@twobrotherswichita.com">info@twobrotherswichita.com</a></p>
          <p id="companyPhoneNum">316.650.4981</p>
        </div>
      </div>
    )
  }
}