import React, { FunctionComponent } from 'react';
import { Power, Volume1, Volume2, VolumeX } from "react-feather";
import "./TV.css";
import { pressKey } from 'services/roku';

const size = 50;
const padding = 10;

const buttonStyle = { padding };

const TV: FunctionComponent =
  () => (
    <div className="tv" style={{ padding: "0.3em", display: "flex" }}>
      <div className="options">
        <div className="tv-button" style={buttonStyle}>
          <Power className="power-button" size={size} onClick={() => pressKey("PowerOff")} />
        </div>
        <div className="tv-button" style={buttonStyle}>
          <Volume2 size={size} onClick={() => pressKey("VolumeUp")} />
        </div>
        <div className="tv-button" style={buttonStyle}>
          <Volume1 size={size} onClick={() => pressKey("VolumeDown")} />
        </div>
        <div className="tv-button" style={buttonStyle}>
          <VolumeX size={size} onClick={() => pressKey("VolumeMute")} />
        </div>
      </div>
      <div className="placeholder" />
    </div>
  )

export default TV;
