import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles({
  prevTitle: {
    marginLeft: 24,
  },
  title: {
    display: 'flex',
    flex: 1,
  },
});

const soundSettings = [
  {
    name: 'Ring Tone',
    setting: 'Reflection',
  },
  {
    name: 'Text Tone',
    setting: 'Note',
  },
  {
    name: 'New Mail',
    setting: 'None',
  },
  {
    name: 'Sent Mail',
    setting: 'Text',
  },
];

export default function SettingsList() {
  const classes = useStyles();
  return (
    <div>
      <Toolbar variant="dense">
        <Link component={RouterLink} to="/" className={classes.title}>
          <Typography variant="h6" color="primary" className={classes.prevTitle}>
            Settings
          </Typography>
        </Link>
        <Typography variant="h6" color="inherit">
          Sound
        </Typography>
        <div className={classes.title} />
      </Toolbar>
      <List dense>
        <ListSubheader disableSticky>Sounds</ListSubheader>
        {soundSettings.map((item, index) => (
          <React.Fragment key={item.name}>
            <ListItem>
              <ListItemText primary={item.name} />
              {item.setting}
              <ChevronRightIcon color="action" />
            </ListItem>
            {index < soundSettings.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
        <ListSubheader disableSticky>Options</ListSubheader>
        <ListItem>
          <ListItemText primary="Keyboard Clicks" />
          <ListItemSecondaryAction>
            <Switch checked />
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemText primary="Lock Sound" />
          <ListItemSecondaryAction>
            <Switch />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
}
