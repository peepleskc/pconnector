import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';

class Landing extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    //this.props.registerUser(newUser, this.props.history);
  }

  render() {
    return(
      <div className ="landing-page">
        <div className="texts">

          <p1>Create Sheet Music</p1>
          <p>Convert your sound files to sheet music</p>
        </div>

        <div className="outer-box">
          <div className="banner-text">
              <div className="social-links">
                <img class= "icon" src="music-file.png"/>
              </div>
              <p>Upload music file here</p>
              <form id="upload">
              <input
                className="file-upload"
                type="file"
                multiple="false"
                accept=".doc, application/msword, .docx, application/vnd.openxmlformats-officedocument.wordprocessingml.document, "/>
              </form>
            </div>
        </div>

        <div className="col-md-8 mt5 mx-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <h1 className="h3"> Fill the Following</h1>
              <div className="form-group">
                <label htmlFor="email">Composer's Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="enter name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="enter title"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Tempo</label>
                <input
                  type="text"
                  className="form-control"
                  name="tempo"
                  placeholder="enter tempo"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Time Signature</label>
                <input
                  type="text"
                  className="form-control"
                  name="time-signature"
                  placeholder="enter time signature"
                  value={this.state.password2}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Key Signature</label>
                <input
                  type="text"
                  className="form-control"
                  name="time-signature"
                  placeholder="enter key signature"
                  value={this.state.password2}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Clef</label>
                <input
                  type="text"
                  className="form-control"
                  name="time-signature"
                  placeholder="enter clef"
                  value={this.state.password2}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Instrument</label>
                <input
                  type="text"
                  className="form-control"
                  name="time-signature"
                  placeholder="enter instrument used"
                  value={this.state.password2}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password2">PDF Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="time-signature"
                  placeholder="enter name for pdf"
                  value={this.state.password2}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Done
              </button>
            </form>
          </div>

        <Footer />
      </div>
    )
  }
}

export default Landing;
