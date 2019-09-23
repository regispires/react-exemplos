import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Dashboard as DashboardLayout } from 'layouts';
import { Notifications, Password } from './components';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  }
});

class Settings extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Settings">
        <div className={classes.root}>
          <Grid container spacing={4}>
            <Grid item md={7} xs={12}>
              <Notifications />
            </Grid>
            <Grid item md={5} xs={12}>
              <Password />
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Settings);
