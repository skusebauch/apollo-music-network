import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  Typography,
  makeStyles,
} from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(3),
  },
  songInfoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  songInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  thumbnail: {
    objectFit: 'cover',
    width: 140,
    height: 140,
  },
}));

function SongList() {
  let loading = false;

  const song = {
    title: '- Piano Version - Sag mir wer - mit Kostas Karagiozidis',
    artist: 'Apache 207',
    thumbnail:
      'https://i.ytimg.com/vi/EKuV5gGD9tc/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLApUWlOBh9Q_HS1VJqPEW8jGjnKXw',
  };

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 50,
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      {Array.from({ length: 10 }, () => song).map((song, index) => (
        <Song key={index} song={song} />
      ))}
    </div>
  );
}

function Song({ song }) {
  const classes = useStyles();
  const { title, artist, thumbnail } = song;
  return (
    <Card className={classes.container}>
      <div className={classes.songInfoContainer}>
        <CardMedia image={thumbnail} className={classes.thumbnail} />
        <div className={classes.songInfo}>
          <CardContent>
            <Typography gutterBottom varaiant='h5' component='h2'>
              {title}
            </Typography>
            <Typography
              gutterBottom
              varaiant='body1'
              component='p'
              color='textSecondary'
            >
              {artist}
            </Typography>
          </CardContent>
        </div>
        <CardActions>
          <IconButton size='small' color='primary'>
            <PlayCircleOutlineIcon />
          </IconButton>
          <IconButton size='small' color='primary'>
            <FavoriteBorderIcon />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
}

export default SongList;
