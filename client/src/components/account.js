import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { login } from './userfunctions';
import Footer from './footer';
import './account.css';

class Account extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange= this.onChange.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if(res){
        this.props.history.push('/profile')
      }
    })
  }

  render() {
    return(
      <div className="background">
        <div className="container">

          <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="account">
            <Cell col={12}>
              <div className="account-logo">
              <img
                src="user.png"
                alt="logo"
                className="logo-img-account"
              />
          </div>

            </Cell>
            </Grid>
        </div>
          <div className="row">
            <div className="col-md-8 mt5 mx-auto">
              <form noValidate onSubmit={this.onSubmit}>
                <h1 className="h3"> Welcome Back!</h1>
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
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <div className="register">
                  <a href="/register" target="_top" class="cannot-login">Don't have an account? Register here</a>
                </div>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block"
                >
                  Continue
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

export default Account;
