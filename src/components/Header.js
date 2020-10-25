import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import RadioIcon from '@material-ui/icons/Radio';

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2),
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar color='secondary' position='fixed'>
      <Toolbar>
        <RadioIcon />
        <Typography className={classes.title} variant='h6' component='h1'>
          Sven's Music Network
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
