import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import validate from 'validate.js';
import _ from 'underscore';

// Material helpers
import {withStyles} from '@material-ui/core';

// Material components
import {
  Grid,
  Button,
  CircularProgress,
  TextField,
  Typography
} from '@material-ui/core';


import {Cancel} from '@material-ui/icons';


// Component styles
import styles from './styles';

/*import SweetAlert from 'sweetalert2';*/

// Form validation schema
import schema from './schema';

import {Footer} from '../../layouts/Dashboard/components';
import LoginService from '../../services/login/index';

// Service methods
const signIn = (credentials) => {
  return LoginService.login(credentials);
  /*  return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 1500);
    });*/
};

class SignIn extends Component {
  state = {
    values: {
      email: '',
      password: ''
    },
    touched: {
      email: false,
      password: false
    },
    errors: {
      email: null,
      password: null
    },
    isValid: false,
    isLoading: false,
    submitError: null,
    showSignInError: null
  };

  handleBack = () => {
    const {history} = this.props;

    history.goBack();
  };

  validateForm = _.debounce(() => {
    const {values} = this.state;

    const newState = {...this.state};
    const errors = validate(values, schema);

    newState.errors = errors || {};
    newState.isValid = errors ? false : true;

    this.setState(newState);
  }, 300);

  handleFieldChange = (field, value) => {
    const newState = {...this.state};

    newState.submitError = null;
    newState.touched[field] = true;
    newState.values[field] = value;

    this.setState(newState, this.validateForm);
  };

  handleSignIn = async () => {
    try {
      const {history} = this.props;
      const {values} = this.state;

      this.setState({isLoading: true});
      this.setState({showSignInError: false});

      let loginResult = await signIn({email: values.email, password: values.password});
      this.setState({isLoading: false});
      if (loginResult) {
        localStorage.setItem('isAuthenticated', true);
        history.push('/dashboard');
        this.setState({showSignInError: false});
      } else {
        localStorage.setItem('isAuthenticated', true);
        this.setState({showSignInError: true});
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        serviceError: error
      });
    }
  };

  render() {
    const {classes} = this.props;
    const {
      values,
      touched,
      errors,
      isValid,
      submitError,
      isLoading,
      showSignInError
    } = this.state;

    const showEmailError = touched.email && errors.email;
    const showPasswordError = touched.password && errors.password;

    /*    SweetAlert.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      type: 'error',
      confirmButtonText: 'Cool'
    });*/


    return (
      <div className={classes.root}>
        <Grid
          className={classes.grid}
          container
        >
          <Grid
            className={classes.quoteWrapper}
            item
            lg={5}
          >
            <div className={classes.quote}>
              <div className={classes.quoteInner}>
                <Typography
                  className={classes.quoteText}
                  variant="h1"
                >
                  Hella narwhal Cosby sweater McSweeney's, salvia kitsch before
                  they sold out High Life.
                </Typography>
                <div className={classes.person}>
                  <Typography
                    className={classes.name}
                    variant="body1"
                  >
                    Takamaru Ayako
                  </Typography>
                  <Typography
                    className={classes.bio}
                    variant="body2"
                  >
                    Manager at inVision
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            className={classes.content}
            item
            lg={7}
            xs={12}
          >
            <div className={classes.content}>
              <div className={classes.contentBody}>
                <form className={classes.form}>
                  <Typography
                    className={classes.title}
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                  <div className={classes.fields}>
                    <TextField
                      className={classes.textField}
                      label="Email address"
                      name="email"
                      onChange={event =>
                        this.handleFieldChange('email', event.target.value)
                      }
                      type="text"
                      value={values.email}
                      variant="outlined"
                    />
                    {showEmailError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2"
                      >
                        {errors.email[0]}
                      </Typography>
                    )}
                    <TextField
                      className={classes.textField}
                      label="Password"
                      name="password"
                      onChange={event =>
                        this.handleFieldChange('password', event.target.value)
                      }
                      type="password"
                      value={values.password}
                      variant="outlined"
                    />
                    {showPasswordError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2"
                      >
                        {errors.password[0]}
                      </Typography>
                    )}
                  </div>
                  {submitError && (
                    <Typography
                      className={classes.submitError}
                      variant="body2"
                    >
                      {submitError}
                    </Typography>
                  )}
                  {isLoading ? (
                    <CircularProgress className={classes.progress}/>
                  ) : (
                    <Button
                      className={classes.signInButton}
                      color="primary"
                      disabled={!isValid}
                      onClick={this.handleSignIn}
                      size="large"
                      variant="contained"
                    >
                      Sign in now
                    </Button>
                  )}
                  {showSignInError &&
                  <Typography
                    className={classes.signInError}
                    variant="subtitle2"
                  >
                    <Cancel/>
                    Username or password is wrong.
                  </Typography>
                  }

                  <Typography
                    className={classes.signUp}
                    variant="body1"
                  >
                    Don't have an account?{' '}
                    <Link
                      className={classes.signUpUrl}
                      to="/sign-up"
                    >
                      Sign up
                    </Link>
                  </Typography>
                </form>
              </div>
              <Footer/>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SignIn.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(SignIn);
