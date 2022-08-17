import React, { Component } from 'react'
import './dashboard.css'
import Button from '../common/Button'
import { withRouter } from 'react-router-dom'
import netlifyIdentity from 'netlify-identity-widget'

const netlifyAuth = {
  isAuth: false,
  user: null,
  authenticate(callback) {
    this.isAuth = true
    netlifyIdentity.open()
    netlifyIdentity.on('login', user => {
      this.user = user;
      callback(user)
    })
  }
}

class Dashboard extends Component {
  handleClick = e => {
    netlifyIdentity.open('login')
    netlifyAuth.authenticate(() => {
      netlifyAuth.isAuth = true;
    })
  }

  constructor(props) {
    super(props)

    this.state = { authenticated: false }
  }

  componentDidMount() {
    let user = netlifyIdentity.currentUser()
    if (user) {
      this.setState({ authenticated: true, user, userName: user.user_metadata.full_name })
      if (user.app_metadata.roles[0] === 'developer') {
        this.setState({ developer: true })
      }
    }
  }

  render() {
    return (
      <div className="dashboard">
        {this.state.authenticated
          ? (
            <div className="dashboard-navigation">
              <h1 id="authenticated-user">{this.state.userName}</h1>
              <div className="right-aligned">
                <Button className="btn-invoices" text="Invoices" handleClick={this.handleClick} />
                <Button className="btn-logout" text="Logout" handleClick={this.handleClick} />
              </div>
            </div>
          )
          : <Button className="btn-login" text="Login" handleClick={this.handleClick} />
        }
      </div>
    )
  }
}

export default withRouter(Dashboard)
