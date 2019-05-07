import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';


const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class SideNav extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;


    const sideList = (
      <div className={classes.list}>
        <List >
            <Link to="/launches/upcoming" >
                <ListItem button key={1} >
                <ListItemText primary="Launches" />
                </ListItem> 
            </Link>
            <Link to="/launches/fav">
                <ListItem button key={2} >
                    <ListItemText primary="My Launches" />
                </ListItem> 
            </Link>
            <Link to="/launches/past">
                <ListItem button key={2} >
                    <ListItemText primary="Past Launches" />
                </ListItem> 
            </Link>
            <Link to="/organizations">
                <ListItem button key={4} >
                    <ListItemText primary='Organizations' />
                </ListItem>
            </Link>
            <Link to="/profile">
                <ListItem button key={5} >
                    <ListItemText primary='Profile' />
                </ListItem>
            </Link>
            <Link to="/">     
                <ListItem button key={6} >
                    <ListItemText primary='Home' />
                </ListItem>   
            </Link>
        </List>
      </div>
    );

   
    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}><i class="material-icons">menu</i></Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}


export default withStyles(styles)(SideNav);