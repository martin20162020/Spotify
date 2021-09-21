import React from "react";
import UserDetails from "./UserDetailscomponent";
import TrackSearch from "./SearchBar";
import "../styles/SearchAndUser.css";

const Header = () => (
  <div className="header">
    <TrackSearch />
    <UserDetails />
  </div>
);


export default Header;
