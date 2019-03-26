import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';

class Landing extends Component {
  render() {
    return(
      <div className ="landing-page">
        <div className="texts">

          <p1>Create Sheet Music</p1>
          <p>Convert your sound files to sheet music</p>
        </div>

        <Link to="/login">
          <div className="outer-box">
            <div className="banner-text">
              <div className="social-links">
                <img class= "icon" src="music-file.png"/>
              </div>
              <p>Log in to get started</p>
            </div>
        </div>
        </Link>

        <Footer />
      </div>
    )
  }
}

export default Landing;
