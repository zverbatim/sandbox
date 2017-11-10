import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loginUser, fetchQuote, fetchSecretQuote} from '../action'
import Login from '../component/Login'
import Navbar from '../component/Navbar'
import Quotes from '../component/Quotes'

class App extends Component {
  render() {
    const {dispatch, quote, isAuthenticated, errorMessage, isSecretQuote} = this.props
    return (
      <div>
        <Navbar
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />
        <div className='container'>
          {/*<Quotes*/}
            {/*onQuoteClick={() => dispatch(fetchQuote())}*/}
            {/*onSecretQuoteClick={() => dispatch(fetchSecretQuote())}*/}
            {/*isAuthenticated={isAuthenticated}*/}
            {/*quote={quote}*/}
            {/*isSecretQuote={isSecretQuote}*/}
          {/*/>*/}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  quote: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  // isSecretQuote: PropTypes.bool.isRequired
}

// These props come from the application's
// state when it is started
function mapStateToProps(state) {

  const {quotes, auth} = state
  const {quote, authenticated} = quotes
  const {isAuthenticated, errorMessage} = auth

  return {
    quote,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(App)