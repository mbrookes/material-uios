import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles({
  toolbar: {
    justifyContent: 'center',
  },
});

export default function Home(props) {
  const classes = useStyles();
  const { routes } = props;

  return (
    <React.Fragment>
      <Toolbar variant="dense" className={classes.toolbar}>
        <Typography variant="h6" color="inherit">
          Pages
        </Typography>
      </Toolbar>
      <List>
        {routes.map(
          (item, index) =>
            item.path !== '/' && (
              <React.Fragment key={item.name}>
                <ListItem button component={RouterLink} to={item.path} key={item.name}>
                  <ListItemText primary={item.name} />
                  <ChevronRightIcon color="action" />
                </ListItem>
                {index < routes.length - 1 && <Divider variant="inset" component="li" />}
              </React.Fragment>
            ),
        )}
      </List>
    </React.Fragment>
  );
}

Home.propTypes = {
  routes: PropTypes.array,
};
