import { CircularProgress } from '@material-ui/core';
import React from 'react';

function SongList() {
  let loading = false;
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
      <p>Song List component</p>
    </div>
  );
}

export default SongList;
