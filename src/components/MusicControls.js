import React from "react";
import Slider from "@mui/material/Slider";

const MusicControls = () => {
  return (
    <div>
      <div className="footer">
        <div className="songDisplay">
          {/* <img></img>
            <div>
                <h6>isim</h6>
                <p>grup</p>
            </div> */}
        </div>
        <div className="emptyDiv"></div>

        <div className="controls">
          <div className="controlButtons">PLAY CONTROLS</div>
          <div className="controlBar">
            <Slider disabled small />
          </div>
        </div>
        <div className="emptyDiv"></div>
      </div>
    </div>
  );
};

export default MusicControls;
