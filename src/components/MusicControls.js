import React from "react";
import Slider from "@mui/material/Slider";
import { ReactComponent as Line } from "../svgs/Dikdortgen.svg";
import { ReactComponent as Play } from "../svgs/Oynat.svg";
import { ReactComponent as Rewind } from "../svgs/Geri.svg";
import { ReactComponent as Circle } from "../svgs/Halka.svg";

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
          <div className="controlButtons">
            <div className="rewindButton">
              <span className="lineHelper">
                <Line />
              </span>
              <Rewind />
            </div>
            <div className="playButton">
              <div>
                <Circle />
              </div>
              <div className="playButtonHelper">
                <Play />
              </div>
            </div>
            <div className="forwardButton">
              <Play />
              <span className="lineHelper">
                <Line />
              </span>

            </div>
          </div>
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
