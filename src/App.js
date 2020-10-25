import React from 'react';
import AddSong from './components/AddSong';
import Header from './components/Header';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';

function App() {
  return (
    <>
      <Header />
      <AddSong />
      <SongList />
      <SongPlayer />
    </>
  );
}

export default App;
