import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    backgroundImage: 'url("map.png")',
    backgroundSize: 'cover',
  },
});

export default function AlertDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const history = useHistory();

  const handleClose = () => {
    setOpen(false);
    history.push('/');
  };

  return (
    <div className={classes.root}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" align="center">
          Current Location
          <br />
          Not Available
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            align="center"
            variant="subtitle2"
            color="textPrimary"
          >
            Your current location cannot be determined at this time.
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus fullWidth>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
