import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {Typography, Button, LinearProgress } from '@material-ui/core';

// Shared components
import { Portlet, PortletContent, PortletFooter } from 'components';
import companyLogo from '../../logo-mandalina-suites.png';

// Component styles
import styles from './styles';

class AccountProfile extends Component {
  render() {
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletContent>
          <div className={classes.details}>
            <div className={classes.info}>
              <Typography variant="h2">Mandalina Luxury Suites</Typography>
              <Typography className={classes.locationText} variant="body1">
                Andifli Mah. Niyazi Acun Sokak No:11
              </Typography>
              <Typography className={classes.locationText} variant="body1">
                Kaş / Antalya, Turkey
              </Typography>
              <Typography className={classes.locationText} variant="body1">
                Phone: +90 (242) 836 30 10
              </Typography>
              <Typography className={classes.locationText} variant="body1">
                E-mail: info@mandalinaluxurysuites.com
              </Typography>
            </div>
            <img alt="companyLogo" className={classes.site} src={companyLogo}/>
          </div>
          <div className={classes.progressWrapper}>
            <Typography variant="body1">Profile Completeness: 70%</Typography>
            <LinearProgress
              value={70}
              variant="determinate"
            />
          </div>
        </PortletContent>
        <PortletFooter>
          <Button
            className={classes.uploadButton}
            color="primary"
            variant="text"
          >
            Upload picture
          </Button>
          <Button variant="text">Remove picture</Button>
        </PortletFooter>
      </Portlet>
    );
  }
}

AccountProfile.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountProfile);
