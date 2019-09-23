import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {MenuItem, Select, withStyles} from '@material-ui/core';
import {Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl/FormControl';
import {
  DashboardOutlined as DashboardIcon,
  LockOpenOutlined as LockOpenIcon,
  InfoOutlined as InfoIcon,
  AccountBoxOutlined as AccountBoxIcon,
  SettingsOutlined as SettingsIcon,
  SwitchVideoOutlined as ChannelsIcon,
  CommentOutlined as ReviewsIcon
} from '@material-ui/icons';
import styles from './styles';
import TR from '../Sidebar/icons/TR_flag.png';
import EN from '../Sidebar/icons/US_flag.png';

class Sidebar extends Component {

  state = {selectedLang: 'EN'};

  handleChangeLang = (value) => {
    this.setState({
      selectedLang: value
    });
  };

  render() {
    const {classes, className} = this.props;
    const {selectedLang} = this.state;
    const rootClassName = classNames(classes.root, className);

    return (
      <nav className={rootClassName}>
        <div className={classes.logoWrapper}>
          <Link className={classes.logoLink} to="/">
            <img alt="logo" className={classes.logoImage} src="/images/logos/origami-bird.png"/>
            <Typography variant="h3">Hotel Insighter</Typography>
          </Link>
        </div>

        <Divider className={classes.logoDivider}/>

        <List component="div" disablePadding>

          <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink}
                    to="/dashboard">
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon/>
            </ListItemIcon>
            <ListItemText classes={{primary: classes.listItemText}} primary="Dashboard"/>
          </ListItem>

          <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink}
                    to="/channels">
            <ListItemIcon className={classes.listItemIcon}>
              <ChannelsIcon/>
            </ListItemIcon>
            <ListItemText classes={{primary: classes.listItemText}} primary="Channels"/>
          </ListItem>

          <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink}
                    to="/reviews">
            <ListItemIcon className={classes.listItemIcon}>
              <ReviewsIcon/>
            </ListItemIcon>
            <ListItemText classes={{primary: classes.listItemText}} primary="Reviews"/>
          </ListItem>

          <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink}
                    to="/sign-in">
            <ListItemIcon className={classes.listItemIcon}>
              <LockOpenIcon/>
            </ListItemIcon>
            <ListItemText classes={{primary: classes.listItemText}} primary="Authentication"/>
          </ListItem>

          <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/register">
            <ListItemIcon className={classes.listItemIcon}>
              <LockOpenIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.listItemText }} primary="Register"/>
          </ListItem>

          <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/account">
            <ListItemIcon className={classes.listItemIcon}>
              <AccountBoxIcon/>
            </ListItemIcon>
            <ListItemText classes={{primary: classes.listItemText}} primary="Account"/>
          </ListItem>

          <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink}
                    to="/settings">
            <ListItemIcon className={classes.listItemIcon}>
              <SettingsIcon/>
            </ListItemIcon>
            <ListItemText classes={{primary: classes.listItemText}} primary="Settings"/>
          </ListItem>

        </List>

        <Divider className={classes.listDivider}/>

        <List component="div" disablePadding subheader={
          <ListSubheader className={classes.listSubheader}>
            Support
          </ListSubheader>}
        >
          <ListItem className={classes.listItem} component="a" href="https://devias.io/contact-us" target="_blank">
            <ListItemIcon className={classes.listItemIcon}>
              <InfoIcon/>
            </ListItemIcon>
            <ListItemText classes={{primary: classes.listItemText}} primary="Customer support"/>
          </ListItem>
        </List>

        <Divider className={classes.listDivider}/>

        <List component="div" disablePadding
          /*    subheader={
          <ListSubheader className={classes.listSubheader}>
            Language
          </ListSubheader>}*/
        >
          <FormControl className={classes.language}>
            <Select
              onChange={event => this.handleChangeLang(event.target.value)}
              value={selectedLang}
            >
              <MenuItem value={'TR'}>{/*<img alt="TR" className={classes.icon} src={TR}*/}
                <Typography variant="h6">tr</Typography>
              </MenuItem>
              <MenuItem value={'EN'}>{/*<img alt="EN" className={classes.icon} src={EN}*/}
                <Typography variant="h6">en</Typography>
              </MenuItem>
            </Select>
          </FormControl>
        </List>

      </nav>
    );
  }
}

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
