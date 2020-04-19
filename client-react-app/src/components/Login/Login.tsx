import * as React from 'react';
import {connect} from "react-redux";
import { Button, TextField } from '@material-ui/core';
import AccesibilityIcon from '@material-ui/icons/AccessibilityOutlined';
import { ApplicationState } from '../../store/application-state';
import {Link} from "react-router-dom";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

interface LoginState {
  userName: string,
  password: string,
  badCredentials: boolean,
}


class LoginContainer extends React.Component<{}, LoginState> {

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
      badCredentials: false
    }
  }

  login = (userName: string, password: string) => {
      console.log('Logging...')
  }
  
  changeUserName = (event: any) => {
    this.setState({
      userName: event.target.value
    })
  }

  changePassword = (event: any) => {
    this.setState({
      password: event.target.value
    })
  }


  render() {
    return(
      <div style={{display: 'flex', height: '100%'}}>
        <div className="login-container">
        <ValidatorForm onSubmit={(event) => {
          event.preventDefault();
          return this.login(this.state.userName, this.state.password);
        }} >
          <div style={{alignSelf: 'center'}}>
            <AccesibilityIcon style={{marginLeft: '48%'}}/>
          </div>
          <h1 style={{textAlign: 'center'}}>
            Sign in to access the app!
          </h1>
          <h3 style={{textAlign: 'center', color: 'gray'}}>
            Or <Link to='signup'><u><b>register</b></u></Link> if you don't have an account.
          </h3>
          <div>
            <TextValidator
              name="username"
              placeholder="User name"
              variant="outlined"
              value={this.state.userName}
              margin="normal"
              onChange={this.changeUserName}
              className="width-100"
              validators={['required']}
              errorMessages={['This field is required']}
            />
          </div>

          <div style={{width: '100%'}}>
            <TextValidator
              name="password"
              placeholder="Password"
              variant="outlined"
              value={this.state.password}
              margin="normal"
              onChange={this.changePassword}
              type="password"
              className="width-100"
              validators={['required']}
              errorMessages={['This field is required']}
            />
          </div>

          <div>
            <Button type="submit" variant='contained' className="width-100" style={{marginTop: 8}}>Log in</Button>
          </div>

          <div style={{marginTop: 20, textAlign: 'center'}}>{this.state.badCredentials && 'Wrong username or password...'}</div>
        </ValidatorForm>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

