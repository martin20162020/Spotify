import React from "react";
import { connect } from "react-redux";
import "../styles/UserDetails.css";

const UserDetails = ({displayName }) => (
  <div className="user-details-container">
    <p className="user-name">{displayName}</p>
  </div>
);

const mapStateToProps = state => {
	return {
		displayName: state.userReducer.user ? state.userReducer.user.display_name : ''
	};
};

export default connect(mapStateToProps)(UserDetails);

