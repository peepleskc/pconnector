import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SelectListGroup from './common/SelectListGroup';
import Footer from './footer';

class Landing extends Component {
  constructor() {
    super()
    this.state = {
      composer: '',
      title: '',
      tempo: '',
      time_signature: '',
      key_signature: '',
      clef: '',
      instrument: '',
      pdf: '',
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
      composer: this.state.composer,
      title: this.state.title,
      tempo: this.state.tempo,
      time_signature: this.state.time_signature,
      key_signature: this.state.key_signature,
      clef: this.state.clef,
      instrument: this.state.instrument,
      pdf: this.state.pdf
    }

  }

  render() {

    const { errors } = this.state;

    // Select options for time
    const time = [
      { label: 'select time signature', value: 0 },
      { label: '4/4', value: '4/4' },
      { label: '3/4', value: '3/4' },
      { label: '2/4', value: '2/4' },
      { label: '6/8', value: '6/8' }
    ];

    // Select options for key
    const key = [
      { label: 'select key signature', value: 0 },
      { label: 'Key of C', value: 'Key of C' },
      { label: 'Key of F', value: 'Key of F' },
      { label: 'Key of B Flat', value: 'Key of B Flat' },
      { label: 'Key of E Flat', value: 'Key of E Flat' },
      { label: 'Key of A Flat', value: 'Key of A Flat' },
      { label: 'Key of D Flat', value: 'Key of D Flat' },
      { label: 'Key of G Flat', value: 'Key of G Flat' },
      { label: 'Key of C Flat', value: 'Key of C Flat' },
      { label: 'Key of G', value: 'Key of G' },
      { label: 'Key of D', value: 'Key of D' },
      { label: 'Key of A', value: 'Key of A' },
      { label: 'Key of E', value: 'Key of E' },
      { label: 'Key of B', value: 'Key of B' },
      { label: 'Key of F Sharp', value: 'Key of F Sharp' },
      { label: 'Key of C Sharp', value: 'Key of C Sharp' }
    ];

    // Select options for clef
    const clef = [
      { label: 'select clef', value: 0 },
      { label: 'Treble', value: 'Treble' },
      { label: 'Bass', value: 'Bass' },
      { label: 'Alto', value: 'Alto' },
      { label: 'Tenor', value: 'Tenor' }
    ];

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
                accept=".mp3, .wav, .aac, .flac, "/>
              </form>
            </div>
        </div>

        <div className="upload-page">
          <div className="col-md-8 mt5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="upload-text"> Please Fill:</h1>
                <div className="form-group">
                  <label htmlFor="composer">Composer's Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="composer"
                    placeholder="enter name"
                    value={this.state.composer}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="enter title"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tempo">Tempo</label>
                  <input
                    type="text"
                    className="form-control"
                    name="tempo"
                    placeholder="enter tempo"
                    value={this.state.tempo}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time-signature">Time Signature</label>
                  <SelectListGroup
                  placeholder="time signature"
                  name="time-signature"
                  value={this.state.status}
                  onChange={this.onChange}
                  options={time}
                  error={errors.status}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="key-signature">Key Signature</label>
                  <SelectListGroup
                  placeholder="key signature"
                  name="key-signature"
                  value={this.state.status}
                  onChange={this.onChange}
                  options={key}
                  error={errors.status}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password2">Clef</label>
                  <SelectListGroup
                  placeholder="clef"
                  name="clef"
                  value={this.state.status}
                  onChange={this.onChange}
                  options={clef}
                  error={errors.status}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="instrument">Instrument</label>
                  <input
                    type="text"
                    className="form-control"
                    name="instrument"
                    placeholder="enter instrument used"
                    value={this.state.instrument}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pdf-name">PDF Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="pdf-name"
                    placeholder="enter name for pdf"
                    value={this.state.pdf}
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
          </div>

        <Footer />
      </div>
    )
  }
}

export default Landing;
