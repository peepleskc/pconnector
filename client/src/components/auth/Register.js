import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
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
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="register-page">
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
              <div className="col-md-8 m-auto">
                <h1 className="h3"> Register Here</h1>
                <form noValidate onSubmit={this.onSubmit}>
                  <label htmlFor="email">Full Name</label>
                  <TextFieldGroup
                    placeholder="full name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <label htmlFor="email">Email</label>
                  <TextFieldGroup
                    placeholder="your@email"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <label htmlFor="email">Password</label>
                  <TextFieldGroup
                    placeholder="create password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                  />
                  <label htmlFor="email">Confirm Password</label>
                  <TextFieldGroup
                    placeholder="re-type password"
                    name="password2"
                    type="password"
                    value={this.state.password2}
                    onChange={this.onChange}
                    error={errors.password2}
                  />
                  <div className="terms">
                    <input
                      type="checkbox"
                      name="checkbox"
                      value="check"
                      id="agree" /> I have read and agree to the <Link to="/legal" target='_blank'> Terms and Conditions</Link>
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

        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
