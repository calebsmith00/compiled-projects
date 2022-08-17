import './contact.css'
import React, { Component } from 'react'
import axios from 'axios'

export default class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName: '',
      email: '',
      message: ''
    }    
  }

  enableButton = (button, enabled = true) => {
    let ele = document.getElementById(button);
    ele.disabled = !enabled;
  }

  onChange = e => {
    let propertyName = e.target.name
    let value = e.target.value
    let currentState = this.state
    currentState[propertyName] = value
    this.setState(currentState)

    this.enableButton("submit");
    this.enableButton("clear");
  }

  handleClick = e => {
    e.preventDefault()
    let fullName = this.state.fullName
    let email = this.state.email
    let message = this.state.message

    let validInput = this.validateInput(fullName, email, message)
    // Proceed if the input is valid
    if (validInput) {
      const contact = { 
          name: fullName,
          email,
          message
      }

      // Create a POST request to send email for contact purposes
      axios.post(`/api/sendEmail`, contact)
        .then(res => {
          if (res.data.messageSuccess) {
            this.clearFields()
            this.setState({
              messageSent: 'Your message was successfully delivered! We will be in touch'
            })
          }
        })
    }

  }
  validateInput = (fullName, email, message) => {
    // Do all fields have a value?
    if (!fullName || !email || !message) return false
    
    // Is the email valid?
    if (!email.includes('@')) return false

    return true
  }

  clearFields = e => {
    if (e) e.preventDefault()
    this.setState({
      fullName: '',
      email: '',
      message: ''
    })

    this.enableButton("submit", false);
    this.enableButton("clear", false);
  }

  componentDidMount = () => {
    this.enableButton("submit", false);
    this.enableButton("clear", false);
  }
  
  render() {   
    return (
      <div className="wrapper">
        <div className="contactContainer">
            <h1>Request a Quote</h1>
            <p id="testCharges">Our charges are based on the size of your yard and complexity of your needs.  Call or e-mail us for a free, friendly and fair estimate.</p>
            {/* FORM CONTAINER */ }
            <form onSubmit={this.handleClick} className="formContainer">          
              <div className="fieldContainer">
                {/* NAME CONTAINER */}
                <p>Name <b>*</b></p>
                <input className="nameInput" name="fullName" type="text" value={this.state.fullName} onChange={this.onChange} placeholder={'Full name'} />
        
                {/* EMAIL CONTAINER */}
                <p>Email <b>*</b></p>
                <input className="emailInput" name="email" text="text" placeholder={'your@email.com'} onChange={this.onChange}  value={this.state.email} />


                {/* MESSAGE CONTAINER */}
                <p>Message <b>*</b></p>
                <textarea rows="5" className="messageInput" name="message" placeholder="Message" onChange={this.onChange} value={this.state.message}>
                </textarea>
                
                {/* BUTTONS CONTAINER */}
                <div id="buttonContainer" className="buttonContainer">
                  <p id="messageSent">{this.state.messageSent}</p>
                  
                  <button id="submit" type="submit">Submit</button>
                  <button id="clear" onClick={this.clearFields} type="reset">Clear</button>
                </div>
                
              </div>
          </form>
          
        </div>
        
      </div>
    )
  }
}