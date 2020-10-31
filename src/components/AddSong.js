import React, { useState, useEffect } from 'react';
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
import SoundcloudPlayer from 'react-player/lib/players/SoundCloud';
import YoutubePlayer from 'react-player/lib/players/YouTube';

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
  const classes = useStyles();
  const [url, setUrl] = useState('');
  const [playable, setPlayable] = useState(false);
  const [dialog, setDialog] = useState(false);

  useEffect(() => {
    const isPlayable =
      SoundcloudPlayer.canPlay(url) || YoutubePlayer.canPlay(url);
    setPlayable(isPlayable);
  }, [url]);

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
        onChange={event => setUrl(event.target.value)}
        value={url}
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
        disabled={!playable}
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
