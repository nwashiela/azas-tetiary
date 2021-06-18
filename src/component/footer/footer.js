import React from "react";
import { Typography, AppBar, Toolbar} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      // padding: theme.spacing(1),
    },
    toolbar: {
      minHeight: 128,
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
  }));
function Footer() {
    const classes = useStyles();

  return (
    <footer className={classes.footer}>
    <AppBar position="static">
  <Toolbar variant="dense" className={classes.toolbar}>
    <Typography variant="body2" color="textSecondary" >
      <SearchIcon />
      </Typography>
      <Typography variant="body2" color="textSecondary">
     <AccountCircleSharpIcon />
      </Typography>
    
  </Toolbar>
</AppBar>
  </footer>
  

  
   
  );
}

export default Footer;
