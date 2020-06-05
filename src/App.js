import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link as RouterLink, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Slide from '@material-ui/core/Slide';
import Home from './pages/Home';
import AlertDialog from './pages/AlertDialog';
import SettingsList from './pages/SettingsList';
import AvatarList from './pages/AvatarList';
import RadioList from './pages/RadioList';
import ActionSheet from './pages/ActionSheet';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles({
  backIcon: {
    position: 'fixed',
    top: 11,
    left: 16,
    zIndex: 10000,
  },
});

const Blank = () => <div />;

function App(props) {
  const { location } = props;
  const history = useHistory();
  const classes = useStyles();
  const backPaths = ['/list', '/avatarlist', '/radiolist'];
  const goBack = () => history.goBack();

  return (
    <div>
      <Home />
      <Fade in={backPaths.includes(location.pathname)} timeout={{ enter: 300, exit: 300 }}>
        <ArrowBackIosIcon color="primary" onClick={goBack} className={classes.backIcon} />
      </Fade>
      <TransitionGroup>
        <Slide direction="left" key={location.key} timeout={{ enter: 300, exit: 300 }}>
          <Switch location={location}>
            <Route exact path="/" component={Blank} />
            <Route path="/action" component={ActionSheet} />
            <Route path="/list" component={SettingsList} />
            <Route path="/radiolist" component={RadioList} />
            <Route path="/avatarlist" component={AvatarList} />
            <Route path="/dialog" component={AlertDialog} />
          </Switch>
        </Slide>
      </TransitionGroup>
    </div>
  );
}

App.propTypes = {
  location: PropTypes.object,
};

export default withRouter(App);
