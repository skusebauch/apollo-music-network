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
import { useQuery } from '@apollo/react-hooks';
import { GET_SONGS } from '../graphql/queries';

function SongList() {
  const { data, loading, error } = useQuery(GET_SONGS);
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
  if (error) return <div>Error fetching songs...</div>;

  return (
    <div>
      {data.songs.map(song => (
        <Song key={song.id} song={song} />
      ))}
    </div>
  );
}

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
