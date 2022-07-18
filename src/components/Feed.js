import { React, useState } from "react";
import { ReactComponent as Ara } from "../svgs/Ara.svg";
import FeedContent from "./FeedContent";
import Avatar from "@mui/material/Avatar";

const Feed = () => {
  const [searchText, setSearchText] = useState("");

  let searchHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearchText(lowerCase);
  };
  // console.log(searchText)

  return (
    <div className="feed">
      <div className="upperNav">
        <div className="searchBar">
          <Ara />
          <input
            type="text"
            placeholder="Ara"
            className="searchBarInput"
            onChange={searchHandler}
          ></input>
        </div>
        <div className="userInfo">
          <Avatar
            src="./svgs/ProfilePic.svg"
            sx={{ height: 33, width: 33, marginRight: 2 }}
          />
          <p>MDP</p>
        </div>
      </div>

      <FeedContent input={searchText} />
    </div>
  );
};

export default Feed;
