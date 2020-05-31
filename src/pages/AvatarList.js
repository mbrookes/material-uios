import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  prevTitle: {
    marginLeft: 24,
  },
  title: {
    display: 'flex',
    flex: 1,
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const listItems = [
  {
    name: 'Remy Sharp',
    image: '/static/images/avatar/1.jpg',
    message: "I'll be in your neighborhood doing errands this…",
  },
  {
    name: 'Travis Howard',
    image: '/static/images/avatar/1.jpg',
    message: "Wish I could come, but I'm out of town this…",
  },
  {
    name: 'Cindy Baker',
    image: '/static/images/avatar/1.jpg',
    message: 'Do you have Paris recommendations? Have you ever…',
  },
];

export default function AvatarList() {
  const classes = useStyles();
  return (
    <div>
      <Toolbar variant="dense">
        <Link component={RouterLink} to="/" className={classes.title}>
          <Typography variant="h6" color="primary" className={classes.prevTitle}>
            Pages
          </Typography>
        </Link>
        <Typography variant="h6" color="inherit">
          Messages
        </Typography>
        <div className={classes.title} />
      </Toolbar>
      <List className={classes.list} dense>
        {listItems.map((item, index) => (
          <ListItem key={item.name} divider={index < listItems.length - 1}>
            <ListItemAvatar>
              <Avatar alt={item.name} src={item.image} />
            </ListItemAvatar>
            <ListItemText primary={item.name} secondary={item.message} />
            <ChevronRightIcon color="action" />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
