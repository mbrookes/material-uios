import React from 'react';
import clsx from 'clsx';
import { useHistory, useLocation, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Home from './pages/Home';
import SettingsList from './pages/SettingsList';
import RadioList from './pages/RadioList';
import AvatarList from './pages/AvatarList';
import AlertDialog from './pages/AlertDialog';
import ActionSheet from './pages/ActionSheet';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: -1,
  },
  page: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    transition: theme.transitions.create('left', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  out: {
    left: -110,
  },
  backIcon: {
    position: 'fixed',
    top: 11,
    left: 16,
    zIndex: 10000,
  },
}));

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/settingslist', name: 'Settings List', Component: SettingsList },
  { path: '/settingslist/radiolist', name: 'Radio List', Component: RadioList },
  { path: '/avatarlist', name: 'Avatar List', Component: AvatarList },
  { path: '/alertdialog', name: 'Alert Dialog', Component: AlertDialog },
  { path: '/ctionsheet', name: 'Action Sheet', Component: ActionSheet },
];

function App() {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const backPaths = ['/settingslist', '/avatarlist', '/radiolist', '/settingslist/radiolist'];
  const goBack = () => history.goBack();

  return (
    <React.Fragment>
      <Fade in={backPaths.includes(location.pathname)} timeout={300}>
        <ArrowBackIosIcon color="primary" onClick={goBack} className={classes.backIcon} />
      </Fade>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path}>
          {({ match }) => {
            console.log(match ? match : '');
            return (
              <Slide direction="left" in={match != null} timeout={300} unmountOnExit>
                <div>
                  <div
                    className={clsx(classes.page, { [classes.out]: location.pathname !== path })}
                  >
                    <Component routes={routes} />
                  </div>
                </div>
              </Slide>
            );
          }}
        </Route>
      ))}
    </React.Fragment>
  );
}

export default App;
