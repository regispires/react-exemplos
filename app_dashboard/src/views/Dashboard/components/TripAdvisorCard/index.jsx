import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Typography } from '@material-ui/core';

// Material icons
import {
  ArrowUpward as ArrowUpwardIcon,
} from '@material-ui/icons';
import TripAdvisorIcon from './tripadvisor_icon.png'
import TripAdvisorRatingIcon from './trip-advisor-rating.svg'

// Shared components
import { Paper } from 'components';

// Component styles
import styles from './styles';

class TripAdvisorCard extends Component {
  render() {
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Paper
        {...rest}
        className={rootClassName}
      >
        <div className={classes.content}>
          <div className={classes.details}>
            <Typography
              className={classes.title}
              variant="body2"
            >
              TripAdvisor
            </Typography>
            <Typography
              className={classes.value}
              variant="h3"
            >
              4.2
            </Typography>
          </div>
          <div className={classes.iconWrapper}>
            <img alt="TripAdvisor"  className={classes.channelIcon} src={TripAdvisorIcon}/>
          </div>
        </div>
        <div className={classes.rating}>
          <div className={classes.flex}>
            <img alt="TripAdvisorRatingIcon" src={TripAdvisorRatingIcon}/>
            <Typography variant="body1">Location</Typography>
          </div>
          <div className={classes.flex}>
            <img alt="TripAdvisorRatingIcon" src={TripAdvisorRatingIcon}/>
            <Typography variant="body1">Cleanliness</Typography>
          </div>
          <div className={classes.flex}>
            <img alt="TripAdvisorRatingIcon" src={TripAdvisorRatingIcon}/>
            <Typography variant="body1">Service</Typography>
          </div>
          <div className={classes.flex}>
            <img alt="TripAdvisorRatingIcon" src={TripAdvisorRatingIcon}/>
            <Typography variant="body1">Value</Typography>
          </div>
        </div>
        <div className={classes.footer}>
          <Typography
            className={classes.difference}
            variant="body2"
          >
            <ArrowUpwardIcon />
            16%
          </Typography>
          <Typography
            className={classes.caption}
            variant="caption"
          >
            Since last month
          </Typography>
        </div>
      </Paper>
    );
  }
}

TripAdvisorCard.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TripAdvisorCard);
