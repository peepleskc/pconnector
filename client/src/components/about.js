import React, { Component } from 'react'
import Footer from './footer.js'
import './about.css'

class About extends Component {
  render() {
    return(
      <div className="about-background">
        <div className="aboutus">
          <div className="about-title">
            <h1>About Us</h1>
          </div>
          <p>{'\t'}Tu ne quaesieris, scire nefas, quem mihi, quem tibi
             finem di dederint, Leuconoe, nec Babylonios
             temptaris numeros. ut melius, quidquid erit, pati.
             seu pluris hiemes seu tribuit Iuppiter ultimam,
             quae nunc oppositis debilitat pumicibus mare
             Tyrrhenum. Sapias, vina liques et spatio brevi
             spem longam reseces. dum loquimur, fugerit invida
             aetas: carpe diem, quam minimum credula postero. </p>
        </div>

        <div className="story">
          <div className="about-title">
            <h1>Pianote's Story</h1>
          </div>
          <p>Tu ne quaesieris, scire nefas, quem mihi, quem tibi
             finem di dederint, Leuconoe, nec Babylonios
             temptaris numeros. ut melius, quidquid erit, pati.
             seu pluris hiemes seu tribuit Iuppiter ultimam,
             quae nunc oppositis debilitat pumicibus mare
             Tyrrhenum. Sapias, vina liques et spatio brevi
             spem longam reseces. dum loquimur, fugerit invida
             aetas: carpe diem, quam minimum credula postero. </p>
        </div>

        <div className="about-back">

          <h1>Meet The Team</h1>

          <div className="row">

            <div className="col-sm-6">
              <img
                src="https://today.ucf.edu/files/2012/09/Knightro1-548x365.jpeg"
                alt="logo"
                className="pic"
              />
              <h2>Piero Castillo</h2>
            </div>


            <div className="col-sm-6">
              <img
                src="https://today.ucf.edu/files/2012/09/Knightro1-548x365.jpeg"
                alt="logo"
                className="pic"
              />
              <h2>Kaycee Peeples</h2>
            </div>

          </div>

          <div className="row">

            <div className="col-sm-6">
              <img
                src="https://today.ucf.edu/files/2012/09/Knightro1-548x365.jpeg"
                alt="logo"
                className="pic"
              />
              <h2>Fazle Akbar</h2>
            </div>


            <div className="col-sm-6">
              <img
                src="https://today.ucf.edu/files/2012/09/Knightro1-548x365.jpeg"
                alt="logo"
                className="pic"
              />
              <h2>Jonathan Lai</h2>
            </div>

          </div>

        </div>
        <Footer />
      </div>
    )
  }
}

export default About;
