import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';
import {CircularProgress, Grid, Typography} from '@material-ui/core';
import {Dashboard as DashboardLayout} from 'layouts';
/*import { getReviews } from 'services/reviews';*/
import ReviewServices from '../../services/reviews';
import ReviewsToolbar from './ReviewsToolbar/ReviewsToolbar';
import ReviewCard from './ReviewCard/ReviewCard';
import styles from './styles';

class Reviews extends Component {
  signal = true;

  state = {
    isLoading: false,
    reviews: [],
    reviewsTotal: 0,
    error: null,
    source: '',
    sortBy: '',
    searchComment: ''
  };

  async getReviews() {
    try {
      this.setState({isLoading: true});

      let reviews;
      if (this.state.source === 'booking') {
        if (this.state.sortBy === 'highestPoint') {
          reviews = await ReviewServices.getBookingReviewsSortByHighestPoint();
        } else if (this.state.sortBy === 'lowestPoint') {
          reviews = await ReviewServices.getBookingReviewsSortByLowestPoint();
        } else if (this.state.sortBy === 'mostRecent') {
          reviews = await ReviewServices.getBookingReviewsSortByMostRecent();
        } else if (this.state.searchComment) {
          reviews = await ReviewServices.getBookingReviewsCommentLike(this.state.searchComment);
        } else {
          reviews = await ReviewServices.getBookingReviews();
        }
      } else if (this.state.source === 'google') {
        if (this.state.sortBy === 'highestPoint') {
          reviews = await ReviewServices.getGoogleReviewsSortByHighestPoint();
        } else if (this.state.sortBy === 'lowestPoint') {
          reviews = await ReviewServices.getGoogleReviewsSortByLowestPoint();
        } else if (this.state.sortBy === 'mostRecent') {
          reviews = await ReviewServices.getGoogleReviewsSortByMostRecent();
        }
        else if (this.state.searchComment) {
          reviews = await ReviewServices.getGoogleReviewsCommentLike(this.state.searchComment);
        }
        else {
          reviews = await ReviewServices.getGoogleReviews();
        }
      } else {
        reviews = await ReviewServices.getAllReviews();
      }

      const reviewsTotal = reviews.length;

      if (this.signal) {
        this.setState({
          isLoading: false,
          reviews,
          reviewsTotal,
        });
      }
    } catch (error) {
      if (this.signal) {
        this.setState({isLoading: false, error});
      }
    }
  }

  componentWillMount() {
    this.signal = true;
    this.getReviews();
  }

  componentWillUnmount() {
    this.signal = false;
  }

  renderReviews() {
    const {classes} = this.props;

    const {isLoading, reviews} = this.state;

    if (isLoading) {
      return (
        <div className={classes.progressWrapper}>
          <CircularProgress/>
        </div>
      );
    }

    if (reviews.length === 0) {
      return (
        <Typography variant="h3">There are no reviews available.</Typography>
      );
    }

    return (
      <Grid container spacing={3}>
        {reviews.map(review => (
          <Grid item key={review.id} lg={12} md={12} sm={12} xs={12}>
            <Link to="#">
              <ReviewCard review={review}/>
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  }

  handleSourceChange = (source) => {
    this.setState({source: source}, () => {
      this.getReviews();
    });
  };

  handleSortChange = (sortBy) => {
    this.setState({sortBy: sortBy}, () => {
      this.getReviews();
    });
  };

  handleCommentSearchChange = (searchComment) => {
    this.setState({searchComment: searchComment}, () => {
      this.getReviews();
    });
  };


  render() {
    const {classes} = this.props;

    return (
      <DashboardLayout title="Reviews">
        <div className={classes.root}>
          <ReviewsToolbar handleSearchComment={this.handleCommentSearchChange} handleSortBy={this.handleSortChange}
            handleSource={this.handleSourceChange}
          />
          <div className={classes.content}>{this.renderReviews()}</div>
        </div>
      </DashboardLayout>
    );
  }
}

Reviews.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Reviews);
