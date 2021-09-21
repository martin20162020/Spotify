const defaultState = {
  fetchSongsPending: true,
  songId: 0,
  viewType:'songs',
};

export const songsReducer = (state = defaultState, action) => {
  switch (action.type) {
  case "UPDATE_VIEW_TYPE":
    return {
      ...state,
      viewType: action.view
    };

  case "FETCH_SONGS_PENDING":
    return {
      ...state,
      fetchSongsPending: true
    };

  case "FETCH_SONGS_SUCCESS":
    return {
      ...state,
      songs: action.songs,
      fetchSongsError: false,
      fetchSongsPending: false,
      viewType: 'songs'
    };

  case "FETCH_SONGS_ERROR":
    return {
      ...state,
      fetchSongsError: true,
      fetchSongsPending: false
    };

  case "SEARCH_SONGS_PENDING":
    return {
      ...state,
      searchSongsPending: true
    };

  case "SEARCH_SONGS_SUCCESS":
    return {
      ...state,
      songs: action.songs,
      searchSongsError: false,
      searchSongsPending: false,
      viewType: 'search'
    };

  case "SEARCH_SONGS_ERROR":
    return {
      ...state,
      searchSongsError: true,
      searchSongsPending: false
    };

  case "FETCH_PLAYLIST_SONGS_PENDING":
    return {
      ...state,
      fetchPlaylistSongsPending: true
    };
  default:
    return state;
  }
};

export default songsReducer;
