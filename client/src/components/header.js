import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {

  render(){
    return(
      <nav className ="navbar navbar-default navbar-fixed-top">

      <img
        src="logo.png"
        alt="logo"
        className="logo-img-head"
      />
        <div className = "container">

          <div className = "col-sm-6">
            <div className = "left">
              <a className = "navbar-brand" href="/">
                Pianotes
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#mobile-nav"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
          </div>

          <div className= "col-sm-6">
            <div className= "right">
              <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/legal">Terms</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
