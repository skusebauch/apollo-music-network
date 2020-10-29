import React from 'react';
import AddSong from './components/AddSong';
import Header from './components/Header';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';
import { Grid, useMediaQuery, Hidden } from '@material-ui/core';

function App() {
  // would be same like "(min-width: xxxpx)"
  const greaterThanSmall = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const greaterThanMedium = useMediaQuery(theme => theme.breakpoints.up('md'));

  /*{greaterThanSmall && <Header />} or using Hidden*/

  return (
    <>
      <Hidden only='xs'>
        <Header />
      </Hidden>

      <Grid
        style={{ paddingTop: greaterThanSmall ? '80px' : '10px' }}
        container
        spacing={3}
      >
        <Grid item xs={12} md={7}>
          <AddSong />
          <SongList />
        </Grid>
        <Grid
          style={
            greaterThanMedium
              ? {
                  position: 'fixed',
                  width: '100%',
                  right: 0,
                  top: 70,
                }
              : {
                  position: 'fixed',
                  left: 0,
                  width: '100%',
                  bottom: 0,
                }
          }
          item
          xs={12}
          md={5}
        >
          <SongPlayer />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
