import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import Series from './Series'
import NewSeries from './NewSeries'

// functional-stateless component
const About = () => <section className="intro-section"><p><h1>Sobre</h1></p></section>

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header page-scroll">
                <a className="navbar-brand page-scroll" href="/">
                    <img src="images/logo.png" height="30" />
                </a>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/new">Nova Série</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </div>

            </div>
          </nav>

          <Route exact path='/' component={Home} />
          <Route exact path='/Series/:genre' component={Series} />
          <Route exact path='/new' component={NewSeries} />
          <Route exact path='/about' component={About} />

        </div>
      </Router>
    )
  }
}

export default App
