export const fetchSongsPending = () => {
  return {
    type: 'FETCH_SONGS_PENDING'
  };
};

export const fetchSongsSuccess = songs => {
  return {
    type: 'FETCH_SONGS_SUCCESS',
    songs
  };
};

export const fetchSongsError = () => {
  return {
    type: 'FETCH_SONGS_ERROR'
  };
};

export const fetchSongs = accessToken => {
  return dispatch => {
    const request = new Request(`https://api.spotify.com/v1/me/tracks?limit=50`, {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken
      })
    });

    dispatch(fetchSongsPending());

    fetch(request).then(res => {
      if(res.statusText === "Unauthorized") {
        window.location.href = './';
      }

      dispatch(fetchSongsSuccess(res.items));
    }).catch(err => {
      dispatch(fetchSongsError(err));
    });
  };
};

export const searchSongsPending = () => {
  return {
    type: 'SEARCH_SONGS_PENDING'
  };
};

export const searchSongsSuccess = songs => {
  return {
    type: 'SEARCH_SONGS_SUCCESS',
    songs
  };
};

export const searchSongsError = () => {
  return {
    type: 'SEARCH_SONGS_ERROR'
  };
};

export const searchSongs = (searchTerm, accessToken) => {
  return dispatch => {
    const request = new Request(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken,
        'Accept': 'application/json'
      })
    });

    dispatch(searchSongsPending());

    fetch(request).then(res => {
      if(res.statusText === "Unauthorized") {
        window.location.href = './';
      }
      return res.json();
    }).then(res => {
      res.items = res.tracks.items.map(item => {
        return {
          track: item
        };
      });
      dispatch(searchSongsSuccess(res.items));
    }).catch(err => {
      dispatch(fetchSongsError(err));
    });
  };
};

