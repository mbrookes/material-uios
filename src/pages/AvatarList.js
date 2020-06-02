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

const useStyles = makeStyles({
  prevTitle: {
    marginLeft: 24,
  },
  title: {
    display: 'flex',
    flex: 1,
  },
  listItemTextPrimary: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  listItemTextPrimaryTime: {
    display: 'flex',
    alignItems: 'center',
  },
});

const listItems = [
  {
    name: 'Remy Sharp',
    image: '/static/images/avatar/1.jpg',
    time: '9:38 AM',
    message: "I'll be in your neighborhood doing errands this…",
  },
  {
    name: 'Travis Howard',
    image: '/static/images/avatar/1.jpg',
    time: 'Tuesday',
    message: "Wish I could come, but I'm out of town this…",
  },
  {
    name: 'Cindy Baker',
    image: '/static/images/avatar/1.jpg',
    time: '8/2/22',
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
      <List dense>
        {listItems.map((item, index) => (
          <ListItem key={item.name} divider={index < listItems.length - 1}>
            <ListItemAvatar>
              <Avatar alt={item.name} src={item.image} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <span className={classes.listItemTextPrimary}>
                  {item.name}
                  <Typography
                    component="span"
                    variant="body2"
                    color="textSecondary"
                    className={classes.listItemTextPrimaryTime}
                  >
                    {item.time}
                    <ChevronRightIcon color="inherit" />
                  </Typography>
                </span>
              }
              secondary={item.message}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
