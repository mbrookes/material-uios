import React from 'react';
import clsx from 'clsx';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    left: 0,
    width: '100%',
    zIndex: -1,
    transition: theme.transitions.create('left', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  out: {
    left: -110,
  },
  toolbar: {
    justifyContent: 'center',
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const pageList = [
  {
    name: 'Settings List',
    path: '/list',
  },
  {
    name: 'Avatar List',
    path: '/avatarlist',
  },
  {
    name: 'Action Sheet',
    path: '/action',
  },
  {
    name: 'Alert Dialog',
    path: '/dialog',
  },
];

export default function Home() {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={clsx(classes.root, { [classes.out]: location.pathname !== '/' })}>
      <Toolbar variant="dense" className={classes.toolbar}>
        <Typography variant="h6" color="inherit">
          Pages
        </Typography>
      </Toolbar>
      <List className={classes.list} dense>
        {pageList.map((item, index) => (
          <React.Fragment key={item.name}>
            <ListItem button component={RouterLink} to={item.path} key={item.name}>
              <ListItemText primary={item.name} />
              <ChevronRightIcon color="action" />
            </ListItem>
            {index < pageList.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}
