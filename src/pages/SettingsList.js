import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
  prevTitle: {
    marginLeft: 24,
  },
  title: {
    display: 'flex',
    flex: 1,
  },
  listItemDescription: {
    paddingTop: 4,
  },
  sliderListItem: {
    paddingBottom: 0,
  },
  listItemDescriptionTypography: {
    textTransform: 'none',
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
    name: 'New Voicemail',
    setting: 'Tri-tone',
  },
  {
    name: 'New Mail',
    setting: 'None',
  },
  {
    name: 'Sent Mail',
    setting: 'Swoosh',
  },
  {
    name: 'Calendar Alerts',
    setting: 'Chord',
  },
  {
    name: 'Reminder Alerts',
    setting: 'None',
  },
  {
    name: 'Airdrop',
    setting: 'Pulse',
  },
];

export default function SettingsList() {
  const classes = useStyles();

  const [value, setValue] = React.useState(true);

  const handleChange = () => {
    setValue(!value);
  };

  return (
    <div>
      <AppBar elevation={0} color="transparent">
        <Toolbar variant="dense">
          <Link component={RouterLink} to="/" className={classes.title}>
            <Typography variant="h6" color="primary" className={classes.prevTitle}>
              Settings
            </Typography>
          </Link>
          <Typography variant="h6" color="inherit">
            Sound & Haptics
          </Typography>
          <div className={classes.title} />
        </Toolbar>
      </AppBar>
      <Toolbar variant="dense" />
      <List>
        <ListSubheader disableSticky>Vibrate</ListSubheader>
        <ListItem>
          <ListItemText primary="Vibrate on Ring" />
          <ListItemSecondaryAction>
            <Switch checked={value} onClick={handleChange} />
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemText primary="Vibrate on Silent" />
          <ListItemSecondaryAction>
            <Switch />
          </ListItemSecondaryAction>
        </ListItem>
        <ListSubheader disableSticky>Ringers and Alerts</ListSubheader>
        <ListItem className={classes.sliderListItem}>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <VolumeDown color="action" />
            </Grid>
            <Grid item xs>
              <Slider arialabel="ringer volume" defaultValue={50} />
            </Grid>
            <Grid item>
              <VolumeUp color="action" />
            </Grid>
          </Grid>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemText primary="Vibrate on Silent" />
          <ListItemSecondaryAction>
            <Switch />
          </ListItemSecondaryAction>
        </ListItem>
        <ListSubheader disableSticky className={classes.listItemDescription}>
          <Typography variant="body2" className={classes.listItemDescriptionTypography}>
            The volume of the ringer and alerts will not be affected by the volume buttons.
          </Typography>
        </ListSubheader>
        <ListSubheader disableSticky>Sound and Vibration Patterns</ListSubheader>
        {soundSettings.map((item, index) => (
          <React.Fragment key={item.name}>
            <ListItem button component={RouterLink} to="/radiolist">
              <ListItemText primary={item.name} />
              {item.setting}
              <ChevronRightIcon color="action" />
            </ListItem>
            {index < soundSettings.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
        <ListSubheader disableSticky />
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
