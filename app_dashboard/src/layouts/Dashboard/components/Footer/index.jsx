import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Divider, Typography } from '@material-ui/core';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },

  company: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 0.5
  },

  logoImage: {
    width: '18px'
  }
});

class Footer extends Component {
  render() {
    const { classes, className } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <div className={rootClassName}>
        <Divider />
        <Typography
          className={classes.company}
          variant="body1"
        >
          &copy; Insighter Inc. 2019
        </Typography>
        <Typography variant="caption">
          <img
            alt="logo"
            className={classes.logoImage}
            src="/images/logos/origami-bird.png"
          />
          Created with love for the environment by designers and developers who
          love to work together in Istanbul office!
        </Typography>
      </div>
    );
  }
}

Footer.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
