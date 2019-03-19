import React, { Component } from 'react';
import {
  Footer as Foot,
  FooterSection,
  FooterLinkList,
  FooterDropDownSection
} from 'react-mdl';

import './footer.css';

class Footer extends Component {
  render() {
    return(
      <div className="footer-page">
        <hr/>
        <img
          src="logo-name.png"
          alt="logo"
          className="logo-img-foot"
        />
        <p>A Student Based Project</p>
      </div>
    )
  }
}

export default Footer;
