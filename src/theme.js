import React from 'react';
import { grey } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#007AFF',
    },
    secondary: {
      main: '#FF3C30',
    },
    // error: {
    //   main: red.A400,
    // },
    background: {
      default: '#F2F1F3',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: ['"San Francisco"', '-apple-system', '"Helvetica Neue"', 'Arial', 'sans-serif'],
    h6: {
      fontSize: 16,
    },
    h5: {
      fontSize: 18,
    },
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        fontWeight: '400',
      },
    },
    MuiDialog: {
      paper: {
        margin: 48,
      },
    },
    MuiDialogActions: {
      root: {
        padding: 4,
      },
    },
    MuiDialogContent: {
      root: {
        paddingBottom: 0,
      },
    },
    MuiDialogTitle: {
      root: {
        paddingBottom: 0,
        '& h2': {
          lineHeight: 'inherit',
        },
      },
    },
    MuiDivider: {
      inset: {
        marginLeft: 16,
      },
    },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiListSubheader: {
      root: {
        fontSize: 16,
        textTransform: 'uppercase',
        lineHeight: '2em',
        backgroundColor: '#F2F1F3',
        paddingTop: 24,
        // color: 'primary',
      },
    },
    MuiListItemText: {
      primary: {
        fontSize: 16,
        // color: 'primary',
      },
    },
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 0,
      },
      colorSecondary: {
        padding: 1,
        '&$checked': {
          transform: 'translateX(16px)',
          color: 'white',
          '& + $track': {
            backgroundColor: '#52d869',
            opacity: 1,
            border: 'none',
          },
        },
        // '&$focusVisible $thumb': {
        //   color: '#52d869',
        //   border: '6px solid #fff',
        // },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 26 / 2,
        border: `1px solid ${grey[400]}`,
        backgroundColor: grey[50],
        opacity: 1,
        // transition: theme.transitions.create(['background-color', 'border']),
      },
    },
    MuiToolbar: {
      root: {
        backgroundColor: 'white',
        borderBottom: '1px solid lightgrey',
        justifyContent: 'space-between',
      },
    },
    MuiTypography: {
      subtitle2: {
        fontWeight: 400,
        lineHeight: 1.3,
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiCheckbox: {
      icon: <RadioButtonUncheckedIcon />,
      checkedIcon: <CheckCircleIcon />,
      color: 'primary',
    },
    MuiDialog: {
      PaperProps: {
        elevation: 0,
      },
    },
    MuiDrawer: {
      PaperProps: {
        elevation: 0,
      },
    },
  },
});

export default theme;
