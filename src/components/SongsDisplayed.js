import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSongs } from '../actions/songActions';
import "../styles/SongsDisplayed.css";

class SongsDisplayed extends Component {
  componentWillReceiveProps(nextProps) {
    if ( nextProps.token !== "" && nextProps.fetchSongsPending && nextProps.viewType === "songs") {
      this.props.fetchSongs(nextProps.token);
    }
  }

  renderSongs() {
    return this.props.songs.map((song, i) => {
      return (
        <li className="user-song-item" key={i}>
          <button className="play-song">
            <a className="play" href={song.track.external_urls.spotify} target="_blank" rel="noreferrer">PLAY</a>
          </button>
          <div className="song-title"><p>{song.track.name}</p></div>
          <div className="song-artist"><p>{song.track.artists[0].name}</p></div>
          <div className="song-album">
            <p>{song.track.album.name}</p>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="song-header-container">
          <div className="song-header"><h2># TITLE</h2></div>
          <div className="song-header"><h2>ARTIST</h2></div>
          <div className="song-header"><h2>ALBUM</h2></div>
        </div>
        <div className="songContainer">{this.props.songs && this.renderSongs()}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    songId: state.songsReducer.songId,
    viewType: state.songsReducer.viewType,
    fetchSongsPending: state.songsReducer.fetchSongsPending,
    songs: state.songsReducer.songs ? state.songsReducer.songs : '',
  };

};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchSongs}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SongsDisplayed);
