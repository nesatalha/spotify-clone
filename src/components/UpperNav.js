import { React, useState } from "react";
import { ReactComponent as HomeIcon } from "../svgs/HomeIcon.svg";
import { ReactComponent as Ara } from "../svgs/Ara.svg";

const UpperNav = (props) => {

  return (
    <div className="upperNav">
      <div className="searchBar">
        <Ara />
        <input
          type="text"
          placeholder="Ara"
          className="searchBarInput"
        onChange={(e)=>{props.onChangeSearch(e.target.value)}}
        ></input>
      </div>
      <div className="userInfo">
        <HomeIcon />
        <p>User info</p>
      </div>
    </div>
  );
};

export default UpperNav;
