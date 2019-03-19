import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { register } from './userfunctions';
import Footer from './footer';

class Register extends Component {
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

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }

    register(user).then(res => {
      this.props.history.push('/profile')
    })
  }

  render() {
    return (
      <div className="background">
        <div className="container">
          <img
            src="user.png"
            alt="logo"
            className="logo-img-account"
          />
          <div className="row">
            <div className="col-md-8 mt5 mx-auto">
              <form noValidate onSubmit={this.onSubmit}>
                <h1 className="h3"> Register Here</h1>
                <div className="form-group">
                  <label htmlFor="email">Full Name</label>
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
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="your@email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="create password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password2">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password2"
                    placeholder="re-enter password"
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                </div>
                <div className="terms">
                  <input
                    type="checkbox"
                    name="checkbox"
                    value="check"
                    id="agree" /> I have read and agree to the <a href="/legal" target='_blank'> Terms and Conditions</a>
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
      </div>
      <Footer />
    </div>
    )
  }
}

export default Register;
