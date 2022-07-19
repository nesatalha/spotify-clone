import { React, useState } from "react";
import Data from "./data.json";

const FeedContent = (props) => {
  const filteredData = Data.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return (
        el.name.toLowerCase().includes(props.input) +
        el.description.toLowerCase().includes(props.input)
      );
    }
  });

  return (
    <div className="feedContent">
      <h1>Yakında Çalanlar</h1>
      <div className="cardsWrapper">
        {filteredData.map((Data) => {
          console.log(Data.images[0].url);
          return (
            <div className="card" key={Data.id}>
              <div className="cardImage">
                <img src={Data.images[0].url}></img>
              </div>
              <div className="cardContent">
                <div className="cardName">{Data.name}</div>
                <div className="cardDesc">{Data.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeedContent;
