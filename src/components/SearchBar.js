import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchSongs } from '../actions/songActions';
import "../styles/SearchBar.css";

class TrackSearch extends Component {
  state = {
    searchTerm: ""
  };

  updateSearchTerm = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  render() {
    return (
      <div className="track-search-container">
        <form
          onSubmit={() => {
            this.props.searchSongs(this.state.searchTerm, this.props.token);
          }}
        >
          <input
            onChange={this.updateSearchTerm}
            type="text"
            placeholder="Search for and Songs"
          />
          <button
            onClick={e => {
              e.preventDefault();
              this.props.searchSongs(this.state.searchTerm, this.props.token);
            }}
          >
            SEARCH
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.tokenReducer.token
  };

};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    searchSongs,
  }, dispatch);

};
export default connect(mapStateToProps, mapDispatchToProps)(TrackSearch);
