import React from "react";
import "../styles/SideMenu.css";
import SpotifyLogoWhite from '../Images/SpotifyLogoWhite.png'


const SideMenu = () =>{
  return (
    <div className="sidebar">
      <img src={SpotifyLogoWhite} alt=""/>
    </div>
  );
};

export default SideMenu;
