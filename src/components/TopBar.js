import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles({
  label: {
      display: 'flex',
      flex: 1,
      marginLeft: 24,
  },
  endLabel: {
    display: 'flex',
    flex: 1,
  }
});

export default function TopBar(props) {
  const { backLabel, label } = props;
  const classes = useStyles();
  const history = useHistory();
  const goBack = () => history.goBack();

  return (
    <Toolbar variant="dense">
      <Typography variant="h6" color="primary" className={classes.label} onClick={goBack}>
        {backLabel}
      </Typography>
      <Typography variant="h6" color="inherit">
        {label}
      </Typography>
      <div className={classes.label} />
    </Toolbar>
  );
}

TopBar.propTypes = {
  backLabel: PropTypes.array,
};
