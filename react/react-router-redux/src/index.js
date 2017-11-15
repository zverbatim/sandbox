import registerServiceWorker from './registerServiceWorker';
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import {Route, Link} from 'react-router-dom'

import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'

import reducers from './reducers' // Or wherever you keep your reducers

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

const Home = () => <p>Home</p>
const About = () => <p>About</p>
const Topics = () => <p>Topics</p>

const Navigation = () => (
  <nav>
    <Link to="/">Home</Link>
    <br/>
    <Link to="/about">About</Link>
    <br/>
    <Link to="/topics">Topics</Link>
  </nav>
)


const Routes = () => (
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/topics" component={Topics}/>
  </div>
)

const App = () => (
  <div>
    <Navigation/>
    <hr/>
    <Routes/>
  </div>
)


// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <App {...store}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();