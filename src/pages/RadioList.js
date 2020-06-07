import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import CheckIcon from '@material-ui/icons/Check';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TopBar from '../components/TopBar';

const useStyles = makeStyles({
  prevTitle: {
    marginLeft: 24,
    display: 'flex',
    flex: 1,
  },
  title: {
    display: 'flex',
    flex: 1,
  },
  listItemDescription: {
    paddingTop: 4,
  },
  emptyIcon: {
    width: 24,
    height: 24,
  },
  listItemDivider: {
    marginLeft: 48,
  },
});

const sounds = [
  'Reflection (Default)',
  'Apex',
  'Beacon',
  'Bulletin',
  'By The Seaside',
  'Chimes',
  'Circuit',
  'Constellation',
  'Cosmic',
  'Crystals',
  'Hillside',
  'Illuminate',
  'Night Owl',
  'Opening',
  'Playtime',
  'Presto',
  'Radar',
  'Radiate',
  'Ripples',
  'Sencha',
  'Signal',
  'Silk',
  'Slow Rise',
  'Stargaze',
  'Summit',
  'Twinkle',
  'Uplift',
  'Waves',
];

export default function RadioList() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Reflection (Default)');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const EmptyIcon = () => <div className={classes.emptyIcon} />;

  return (
    <React.Fragment>
      <AppBar elevation={0} color="transparent">
        <TopBar backLabel="Back" label="Ringtone" />
      </AppBar>
      <Toolbar variant="dense" />
      <List>
        <ListSubheader disableSticky>Ringtones</ListSubheader>
        <FormControl component="fieldset">
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            {sounds.map((sound) => (
              <React.Fragment key={sound}>
                <ListItem>
                  <FormControlLabel
                    value={sound}
                    control={
                      <Radio color="primary" icon={<EmptyIcon />} checkedIcon={<CheckIcon />} />
                    }
                    label={sound}
                  />
                </ListItem>
                <Divider variant="inset" component="li" className={classes.listItemDivider} />
              </React.Fragment>
            ))}
          </RadioGroup>
        </FormControl>
      </List>
    </React.Fragment>
  );
}
