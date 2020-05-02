import * as React from 'react';
import {connect} from "react-redux";
import {ApplicationState, CandidateInterviewDetails} from '../../store/application-state';
import {List, ListItem, ListItemText} from "@material-ui/core";

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

    const {room, interviewer, interviewType, email} = this.props.interviewDetails;

    return(
      <div className="centered-box-container padding-40">
        <List component="nav">
          <ListItem>
            <ListItemText primary={`Room: ${room}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Interviewer: ${interviewer}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Interview Type: ${interviewType}`} />
          </ListItem>
        </List>
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

