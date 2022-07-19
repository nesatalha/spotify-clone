import { React, useState } from "react";
import Data from "./data.json";
import { ReactComponent as Filter } from "../svgs/Filtre.svg";
import { ReactComponent as Search } from "../svgs/Ara.svg";

const SideSearch = () => {
  const [sideSearchText, setSideSearchText] = useState("");

  let sideSearchHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSideSearchText(lowerCase);
  };

  const sideFilteredData = Data.filter((el) => {
    if (sideSearchText == "") {
      return el;
    } else {
      return (
        el.name.toLowerCase().includes(sideSearchText) +
        el.description.toLowerCase().includes(sideSearchText)
      );
    }
  });

  return (
    <div className="sideSearch">
      <div className="sideBarHeader">
        <h3>Çalma lisetelerin</h3>
      </div>
      <div className="searchBarSide">
        <Search />
        <input
          type="text"
          placeholder="Ara"
          className="searchBarInput"
          onChange={sideSearchHandler}
        ></input>
        <Filter />
      </div>
      {sideFilteredData.map((Data) => {
        return (
          <ul className="sideList">
            <li className="sideListItem">{Data.name}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default SideSearch;
