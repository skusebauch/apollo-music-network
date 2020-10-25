import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
  makeStyles,
} from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import { AddBoxOutlined } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  urlInput: {
    margin: theme.spacing(1),
  },
  addSongButton: {
    margin: theme.spacing(1),
  },
  dialog: {
    textAlign: 'center',
  },
  thumbnail: {
    width: '90%',
  },
}));
function AddSong() {
  const [dialog, setDialog] = useState(false);
  const classes = useStyles();

  const handleCloseDialog = () => {
    setDialog(false);
  };

  return (
    <div className={classes.container}>
      <Dialog
        className={classes.dialog}
        open={dialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle>Edit Song</DialogTitle>
        <DialogContent>
          <img
            src='https://i1.sndcdn.com/artworks-000670470790-ej1gvb-t500x500.jpg'
            alt='Sont thumbnail'
            className={classes.thumbnail}
          />
          <TextField margin='dense' name='title' label='Title' fullWidth />
          <TextField margin='dense' name='artist' label='Artist' fullWidth />
          <TextField
            margin='dense'
            name='thumbnail'
            label='Thumbnail'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color='secondary'>
            Cancel
          </Button>
          <Button variant='outlined' color='primary'>
            Add Song
          </Button>
        </DialogActions>
      </Dialog>
      <TextField
        className={classes.urlInput}
        placeholder='Add Youtube or Soundcloud Url'
        fullWidth
        margin='normal'
        type='url'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <LinkIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button
        className={classes.addSongButton}
        onClick={() => setDialog(true)}
        variant='contained'
        color='primary'
        endIcon={<AddBoxOutlined />}
      >
        ADD
      </Button>
    </div>
  );
}

export default AddSong;
