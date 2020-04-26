import * as React from 'react';
import {connect} from "react-redux";
import {ApplicationState, CandidateInterviewDetails} from '../../store/application-state';

interface CandidateInterviewState {
}

interface CandidateInterviewProps {
  interviewDetails: CandidateInterviewDetails
}


class CandidatePage extends React.Component<CandidateInterviewProps, CandidateInterviewState> {

  constructor(props) {
    super(props);

    this.state = {
    }
  }


  render() {

    const {room, interviewer, interviewType} = this.props.interviewDetails;

    return(
      <div className="centered-box-container padding-40">
          <div>Room: {room}</div>
          <div>Interviewer: {interviewer}</div>
          <div>Interview Type: {interviewType}</div>
      </div>
    )
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
    interviewDetails: state.candidate
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidatePage);

