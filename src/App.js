import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchUser } from './actions/userActions';
import { setToken } from './actions/tokenActions';
import Header from './components/SearchAndUser';
import SideMenu from './components/SideMenu';
import SongsDisplayed from './components/SongsDisplayed';
import './App.css';
require('dotenv').config();
class App extends Component {

  componentDidMount() {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    if (!hashParams.access_token) {
      window.location.href =
      `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_APP_CLIENT_ID}&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=https://pensive-bell-f3a15b.netlify.app`;
      window.history.pushState({}, null, '/')
    } else {
      this.props.setToken(hashParams.access_token);
      window.history.pushState({}, null, '/')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      this.props.fetchUser(nextProps.token);
    }
  }

  render() {

    return (
      <div className="App spotifyContainer">
        <div className="app-container">
          <div className="left-side-section">
            <SideMenu />
          </div>
          <div className="main-section">
            <Header />
            <div className="main-section-container">
              <SongsDisplayed/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  token: PropTypes.string,
  fetchUser: PropTypes.func,
  setToken: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {token: state.tokenReducer.token}
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchUser, setToken},
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
