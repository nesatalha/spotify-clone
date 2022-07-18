import React from "react";
import { ReactComponent as HomeIcon } from "../svgs/HomeIcon.svg";
import { ReactComponent as Logo } from "../svgs/SpotifyLogo.svg";
import { ReactComponent as Gozat } from "../svgs/Gozat.svg";
import { ReactComponent as Kitaplik } from "../svgs/Kitaplik.svg";
import SideSearch from "./SideSearch";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="logo">
        <Logo />
      </div>
      <ul>
        <li className="active">
          <HomeIcon />
          Giriş
        </li>
        <li>
          <Gozat />
          Gözat
        </li>
        <li>
          <Kitaplik />
          Kitaplık
        </li>
      </ul>
      <SideSearch />
    </div>
  );
};

export default SideBar;
