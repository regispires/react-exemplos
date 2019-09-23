import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  MenuItem,
  Select,
  Typography,
  TextField,
  InputAdornment,
  OutlinedInput,
  FormControl,
  withStyles
}
  from '@material-ui/core';

import styles from './styles';

import SearchIcon from '@material-ui/icons/SearchOutlined';

import GoogleIcon from '../ReviewCard/icons/google.jpg';
import BookingIcon from '../ReviewCard/icons/booking_icon.png';
import TripAdvisorIcon from '../ReviewCard/icons/tripadvisor_icon.png';

class ReviewsToolbar extends Component {

  state = {
    selectedSourceOptions: 'all',
    selectedSortOptions: 'mostRelated',
    searchText:'',
  };

  handleChangeSourceOptions = (value) => {
    this.setState({
      selectedSourceOptions: value
    });
    this.props.handleSource(value);
  };

  handleChangeSortOptions = (value) => {
    this.setState({
      selectedSortOptions: value
    });
    this.props.handleSortBy(value);
  };

  handleChangeSearchText = (value) => {
    this.setState({
      searchText: value
    });
    this.props.handleSearchComment(value);
  };

  render() {
    const { classes, className } = this.props;

    const {selectedSourceOptions, selectedSortOptions, searchText } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <div className={rootClassName}>
        <FormControl className={classes.formControl}>
          <Select
            input={<OutlinedInput/>}
            onChange={event => this.handleChangeSourceOptions(event.target.value)}
            value={selectedSourceOptions}
          >
            <MenuItem value={'all'}>
              <Typography
                variant="h6"
              >
                Bütün İncelemeler
              </Typography>
            </MenuItem>

            <MenuItem value={'google'}>
              <Typography
                variant="h6"
              >
                <img alt="Google" className={classes.site} src={GoogleIcon}/>
                Google
              </Typography>
            </MenuItem>

            <MenuItem value={'booking'}>
              <Typography
                variant="h6"
              >
                <img alt="Booking" className={classes.site} src={BookingIcon}/>
                Booking.com
              </Typography>
            </MenuItem>

            <MenuItem value={'tripAdvisor'}>
              <Typography
                variant="h6"
              >
                <img alt="tripAdvisor" className={classes.site} src={TripAdvisorIcon}/>
                TripAdvisor
              </Typography>
            </MenuItem>

          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Select
            input={<OutlinedInput/>}
            onChange={event => this.handleChangeSortOptions(event.target.value)}
            value={selectedSortOptions}
          >
            <MenuItem value={'mostRelated'}>
              <Typography
                variant="h6"
              >
                En alakalı
              </Typography>
            </MenuItem>

            <MenuItem value={'mostRecent'}>
              <Typography
                variant="h6"
              >
                En yeni
              </Typography>
            </MenuItem>

            <MenuItem value={'highestPoint'}>
              <Typography
                variant="h6"
              >
                En yüksek puan
              </Typography>
            </MenuItem>

            <MenuItem value={'lowestPoint'}>
              <Typography
                variant="h6"
              >
                En düşük puan
              </Typography>
            </MenuItem>

          </Select>
        </FormControl>
        <TextField
          className={classes.inputField}
          id="outlined-adornment-weight"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          onChange={event => this.handleChangeSearchText(event.target.value)}
          placeholder="Yorumlarda ara"
          value={searchText}
          variant="outlined"
        />
      </div>
    );
  }
}

ReviewsToolbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  handleSource: () => {},
  handleSortBy: () => {},
  handleSearchComment: () => {}
};

export default withStyles(styles)(ReviewsToolbar);
