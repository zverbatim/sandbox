import React, { Component} from 'react'
import PropTypes from 'prop-types'
import Login from './Login'
import Logout from './Logout'
import { loginUser, logoutUser } from '../action'

export default class Navbar extends Component {

  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props

    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <a className="navbar-brand" href="#">Quotes App</a>
          <div className='navbar-form'>

            {!isAuthenticated &&
            <Login
              errorMessage={errorMessage}
              onLoginClick={ creds => dispatch(loginUser(creds)) }
            />
            }

            {isAuthenticated &&
            <Logout onLogoutClick={() => dispatch(logoutUser())} />
            }

          </div>
        </div>
      </nav>
    )
  }

}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}