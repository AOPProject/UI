import * as React from 'react';
import {connect} from "react-redux";
import {Button, LinearProgress} from '@material-ui/core';
import AccesibilityIcon from '@material-ui/icons/AccessibilityOutlined';
import {ApplicationState} from '../../store/application-state';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {CandidateActions} from "../../store/candidate/candidate.actions";

interface CandidatePageState {
  email: string,
}

interface CandidatePageProps {
  getInterviewDetails: () => void;
  loading: boolean;
  error: boolean;
}


class CandidatePage extends React.Component<CandidatePageProps, CandidatePageState> {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  checkEmail = (email: string) => {
    console.log(`Checking email: ${email} ...`);
    this.props.getInterviewDetails();
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
            return this.checkEmail(this.state.email);
          }} >
            <div style={{alignSelf: 'center'}}>
              <AccesibilityIcon style={{marginLeft: '48%'}}/>
            </div>
            <h3 style={{textAlign: 'center'}}>
              Add your email to find out details about your interview!
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
                Get details
              </Button>
            </div>

            <div style={{marginTop: 20, textAlign: 'center'}}>{this.props.error && 'Whoops! You email was not found on our servers.'}</div>
          </ValidatorForm>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
    loading: state.candidate.loading,
    error: state.candidate.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getInterviewDetails: () => dispatch(CandidateActions.getInterviewDetailsStart())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidatePage);

