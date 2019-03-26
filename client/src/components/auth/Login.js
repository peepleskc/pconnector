import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="login">
        <div className="container">

          <div className="container1">
            <div style={{width: '100%', margin: 'auto'}}>
                <div className="account-logo">
                <img
                  src="user.png"
                  alt="logo"
                  className="logo-img-account"
                />
                </div>
            </div>

            <div className="row">
              <div className="col-md-8 mt5 m-auto">
                <h1 className="h3">Welcome Back!</h1>
                <form onSubmit={this.onSubmit}>
                  <label htmlFor="email">E-mail</label>
                  <TextFieldGroup
                    placeholder="your@email"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <label htmlFor="password">Password</label>
                  <TextFieldGroup
                    placeholder="password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                  />

                  <div className="register">
                    <Link to="/register" target="_top" class="cannot-login">Don't have an account? Register here</Link>
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

        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
