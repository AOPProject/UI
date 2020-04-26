import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Typography} from "@material-ui/core";
import candidateIcon from '../../assets/candidate-icon.svg';
import employeeIcon from '../../assets/employee-icon.svg';
import './WelcomePage.css';
import {palette} from "../../styles/palette";
import history from '../../history';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 'auto',
    '& > *': {
      margin: theme.spacing(12),
      width: theme.spacing(100),
      height: theme.spacing(100),
    },
  },
}));

export function WelcomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}
             className="box"
             onClick={() => {history.push('/candidate-page')}}>
        <div style={{margin: 'auto'}}>
          <Typography variant={"h5"}
                      style={{marginTop: 24, color: palette.autumnGrey.ultraDark, textAlign: 'center'}}>
            Candidate
          </Typography>
          <img src={candidateIcon} alt="Candidate-icon" className="box-icon"/>
        </div>
      </Paper>
      <Paper elevation={3}
             className="box"
             onClick={() => {history.push('/login')}}>
        <div style={{margin: 'auto'}}>
          <Typography variant={"h5"}
                      style={{marginTop: 24, color: palette.autumnGrey.ultraDark, textAlign: 'center'}}>
            Employee
          </Typography>
          <img src={employeeIcon} alt="Employee-icon" className="box-icon"/>
        </div>
      </Paper>
    </div>
  );
}