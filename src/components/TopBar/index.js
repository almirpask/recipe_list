import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    cursor: 'pointer',
  },
});
export default function TopBar() {  
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" onClick={() => history.push('/')} className={classes.root}>
            Marley Spoon
          </Typography>
        </Toolbar>
      </AppBar>      
    </div>
  );
}
