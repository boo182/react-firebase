import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../images/beeldi_logo.png';
import styled from 'styled-components';

const Logo = styled.img`
 cursor: pointer;
`;
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.primary.main
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    topBarRoot: {
      backgroundColor: theme.palette.primary.main,
    }
  }),
);

const ButtonAppBar = ({ goBackHome }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" classes={{ root: classes.topBarRoot }}>
        <Toolbar>
          <Logo src={logo} alt="Logo" height={62} onClick={() => goBackHome()} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  goBackHome: () => dispatch(push('/equipments'))
});


export default connect(false, mapDispatchToProps)(ButtonAppBar);