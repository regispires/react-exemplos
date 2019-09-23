import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import validate from 'validate.js';
import _ from 'underscore';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Button,
  Checkbox,
  CircularProgress,
  Grid,
  TextField,
  Typography,
    Fade
} from '@material-ui/core';

// Shared utilities
import validators from 'common/validators';

// Component styles
import styles from './styles';

// Form validation schema
import schema from './schema';

import { Footer } from '../../layouts/Dashboard/components';

import MuiPhoneNumber from "material-ui-phone-number";


validate.validators.checked = validators.checked;

// Service methods
const signUp = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
};

class Register extends Component {
  state = {
    values: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      policy: false
    },
    touched: {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
      policy: null
    },
    errors: {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      policy: null
    },
    isValid: false,
    isLoading: false,
    submitError: null,
    showSuccessMessage: false
  };

  handleBack = () => {
    const { history } = this.props;

    history.goBack();
  };

  validateForm = _.debounce(() => {
    const { values } = this.state;

    const newState = { ...this.state };
    const errors = validate(values, schema);

    newState.errors = errors || {};
    newState.isValid = errors ? false : true;

    this.setState(newState);
  }, 300);

  handleFieldChange = (field, value) => {
    const newState = { ...this.state };

    newState.submitError = null;
    newState.touched[field] = true;
    newState.values[field] = value;

    this.setState(newState, this.validateForm);
  };

  handleSignUp = async () => {
    try {
      const { history } = this.props;
      const { values } = this.state;

      this.setState({ isLoading: true });

      await signUp({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password
      });

      this.setState({showSuccessMessage: true});
      //history.push('/sign-in');
      this.setState({ isLoading: false });
    } catch (error) {
      this.setState({
        isLoading: false,
        serviceError: error
      });
    }
  };

  render() {
    const { classes } = this.props;
    const {
      values,
      touched,
      errors,
      isValid,
      submitError,
      isLoading,
        showSuccessMessage
    } = this.state;

    const showFirstNameError =
      touched.firstName && errors.firstName ? errors.firstName[0] : false;
    const showLastNameError =
      touched.lastName && errors.lastName ? errors.lastName[0] : false;
    const showEmailError =
      touched.email && errors.email ? errors.email[0] : false;
    const showPasswordError =
      touched.password && errors.password ? errors.password[0] : false;
    const showPolicyError =
      touched.policy && errors.policy ? errors.policy[0] : false;

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
                    Register
                  </Typography>
                  <Typography
                      className={classes.subtitle}
                      variant="body1"
                  >
                    Use your work email to register... it's free.
                  </Typography>

                    <div className={classes.fields}>
                      <TextField
                          className={classes.textField}
                          label="First name"
                          name="firstName"
                          onChange={event =>
                              this.handleFieldChange('firstName', event.target.value)
                          }
                          value={values.firstName}
                          variant="outlined"
                      />
                      {showFirstNameError && (
                          <Typography
                              className={classes.fieldError}
                              variant="body2"
                          >
                            {errors.firstName[0]}
                          </Typography>
                      )}
                      <TextField
                          className={classes.textField}
                          label="Last name"
                          onChange={event =>
                              this.handleFieldChange('lastName', event.target.value)
                          }
                          value={values.lastName}
                          variant="outlined"
                      />
                      {showLastNameError && (
                          <Typography
                              className={classes.fieldError}
                              variant="body2"
                          >
                            {errors.lastName[0]}
                          </Typography>
                      )}
                      <TextField
                          className={classes.textField}
                          label="Email"
                          name="email"
                          onChange={event =>
                              this.handleFieldChange('email', event.target.value)
                          }
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
                          label="Company Name"
                          name="companyName"
                          variant="outlined"
                      />
                      <TextField
                          className={classes.textField}
                          label="Company Address"
                          name="companyAddress"
                          variant="outlined"
                      />
                      <div className={classes.phoneNumber}>
                        <MuiPhoneNumber name="phone"
                                        label="Phone Number"
                                        data-cy="user-phone"
                                        defaultCountry={"tr"}
                                        variant="outlined"/>
                      </div>
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
                        <CircularProgress className={classes.progress} />
                    ) : (
                        <Button
                            className={classes.signUpButton}
                            color="primary"
                            /*disabled={!isValid}*/
                            onClick={this.handleSignUp}
                            size="large"
                            variant="contained"
                        >
                          Register now
                        </Button>
                    )}

                </form>
              </div>

              <Fade in={this.state.showSuccessMessage}>
                  <Typography
                      className={classes.successMessage}
                      variant="h1"
                  >
                    Hella narwhal Cosby sweater McSweeney's, salvia kitsch before
                    they sold out High Life.
                  </Typography>
              </Fade>

              <Footer/>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Register.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(Register);
