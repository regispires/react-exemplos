import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Dashboard as DashboardLayout } from 'layouts';

import {
  BookingCard,
  TripAdvisorCard,
} from './components';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  item: {
    height: '100%'
  }
});

class Dashboard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Dashboard">
        <div className={classes.root}>
          <Grid container spacing={4}>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <BookingCard className={classes.item} />
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TripAdvisorCard className={classes.item} />
            </Grid>

          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
