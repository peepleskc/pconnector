import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {

  render(){
    return(
    <div className="header">
      <div className ="inner_header">

        <div className="logo_container">

          <Link to="/">
            <div className="logo-pic">
              <img
                src="logo.png"
                alt="logo"
                className="logo-img-head"
              />
            </div>

            <h1>Pianotes</h1>

          </Link>

        </div>

        <ul className="navigation">
            <Link to="/login"><li>Login</li></Link>
            <Link to="/legal"><li>Terms</li></Link>
            <Link to="/about"><li>About</li></Link>
        </ul>
      </div>
    </div>

    )
  }
}

export default Header
