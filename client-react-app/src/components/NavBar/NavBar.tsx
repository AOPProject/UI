import * as React from 'react';
import '../../style.css';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AccountCircle, Home } from '@material-ui/icons';
import { ApplicationState } from '../../store/application-state';

interface NavBarProps{
  userName: string,
  isAuthenticated: boolean,
}

class NavBarContainer extends React.Component<NavBarProps, {}> {
  render() {
    const loginInfo = this.props.isAuthenticated ? this.props.userName : <AccountCircle/>;

    return(
      <React.Fragment>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Link to="/" style={{width: '5%', display: 'flex', justifyContent: 'center'}}>
              <Home style={{ color: 'white' }}/>
            </Link>
            <Typography variant="h6" style={{width: '90%', display: 'flex', justifyContent: 'center'}}>
              <Link to="/" style={{color: 'white'}}>AOP</Link>
            </Typography>
            <Link to={this.props.isAuthenticated ? '/profile' :'/login'} style={{width: '5%', display: 'flex', justifyContent: 'center', color: 'white'}}>
              {loginInfo}
            </Link>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
    userName: state.profile.userName,
    isAuthenticated: state.profile.isAuthenticated
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
