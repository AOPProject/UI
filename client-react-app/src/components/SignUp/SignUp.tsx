import * as React from 'react';
import {connect} from "react-redux";
import {Button, LinearProgress} from '@material-ui/core';
import AccesibilityIcon from '@material-ui/icons/AccessibilityOutlined';
import {ApplicationState} from '../../store/application-state';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {ProfileActions} from "../../store/profile/profile.actions";

interface SignUpState {
  email: string,
}

interface SignUpProps {
  createAccount: (email: string) => void;
  loading: boolean;
  error: boolean;
}


class SignUp extends React.Component<SignUpProps, SignUpState> {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  createAccount = (email: string) => {
    this.props.createAccount(email);
  };

  changeEmail = (event: any) => {
    this.setState({
      email: event.target.value
    })
  };

  render() {
    return(
      <div className="centered-box-container">
        {this.props.loading && <LinearProgress variant="indeterminate"/>}
        <div className="padding-40">
          <ValidatorForm onSubmit={(event) => {
            event.preventDefault();
            return this.createAccount(this.state.email);
          }} >
            <div style={{alignSelf: 'center'}}>
              <AccesibilityIcon style={{marginLeft: '48%'}}/>
            </div>
            <h3 style={{textAlign: 'center'}}>
              Add your email to create an account!
            </h3>

            <div style={{width: '100%'}}>
              <TextValidator
                name="email"
                placeholder="Email"
                variant="outlined"
                value={this.state.email}
                margin="normal"
                onChange={this.changeEmail}
                className="width-100"
                validators={['required']}
                errorMessages={['This field is required']}
              />
            </div>

            <div >
              <Button type="submit"
                      variant='contained'
                      className="width-100"
                      style={{marginTop: 16}}>
                Request account creation
              </Button>
            </div>

            <div style={{marginTop: 20, textAlign: 'center'}}>{this.props.error && 'Whoops! Something went wrong!'}</div>
          </ValidatorForm>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
    loading: state.profile.loading,
    error: state.profile.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createAccount: (email: string) => dispatch(ProfileActions.registerStart(email))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

