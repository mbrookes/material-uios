import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    backgroundImage: 'url("watch.png")',
    backgroundSize: 'cover',
  },
  drawer: {
    margin: '0 8px',
    backgroundColor: 'transparent',
  },
  buttonGroup: {
    backgroundColor: 'rgb(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
  },
  cancelButton: {
    backgroundColor: 'rgb(255, 255, 255, 0.7)',
    margin: '8px 0 24px',
    backdropFilter: 'blur(10px)',
    fontWeight: '500',
  },
});

export default function ActionSheet() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const history = useHistory();

  const handleClose = () => {
    setOpen(false);
    history.push('/');
  };

  return (
    <div className={classes.root}>
      <Drawer
        anchor="bottom"
        open={open}
        onClose={handleClose}
        aria-label="action sheet"
        classes={{ paper: classes.drawer }}
      >
        <ButtonGroup
          variant="text"
          orientation="vertical"
          size="large"
          fullWidth
          className={classes.buttonGroup}
        >
          <Button color="secondary" onClick={handleClose}>
            Close This Tab
          </Button>
          <Button color="primary">New Tab</Button>
          <Button color="primary">New Private Tab</Button>
        </ButtonGroup>
        <Button
          onClick={handleClose}
          variant="text"
          size="large"
          fullWidth
          color="primary"
          className={classes.cancelButton}
        >
          Cancel
        </Button>
      </Drawer>
    </div>
  );
}
