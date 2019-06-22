import React from "react";
import { Circle, Home, ChevronLeft, ChevronDown, ChevronUp, ChevronRight, ArrowLeft, Rewind, Play, Pause, FastForward, Loader, RotateCcw } from "react-feather";
import { RokuConsumer } from "components/RokuContext";
import "./Remote.css";

const size = 50;
const gridScaleFactor = 2.3;
const padding = size / 2;
const flexGrow = 1;

const flexCellStyle = { flexGrow, padding };
const flexRowStyle = { display: "flex" };
const gridStyle = { display: "grid", gridTemplateColumns: "auto auto auto" };

const Remote =
  () => (
    <div style={{ maxWidth: 500, textAlign: "center", cursor: "pointer" }}>
      <RokuConsumer>
        {({ pressKey }) => (
          <>
            <div style={flexRowStyle}>
              <div className="remote-button" style={flexCellStyle} onClick={() => pressKey("Back")}>
                <ArrowLeft size={size} />
              </div>
              <div className="remote-button" style={flexCellStyle} onClick={() => pressKey("Home")}>
                <Home size={size} />
              </div>
            </div>
            <div style={gridStyle}>
              <div />
              <div className="remote-button" onClick={() => pressKey("Up")}>
                <ChevronUp size={gridScaleFactor * size} />
              </div>
              <div />
              <div className="remote-button" onClick={() => pressKey("Left")}>
                <ChevronLeft size={gridScaleFactor * size} />
              </div>
              <div className="remote-button" onClick={() => pressKey("Select")}>
                <Circle size={gridScaleFactor * size} />
              </div>
              <div className="remote-button" onClick={() => pressKey("Right")}>
                <ChevronRight size={gridScaleFactor * size} />
              </div>
              <div />
              <div className="remote-button" onClick={() => pressKey("Down")}>
                <ChevronDown size={gridScaleFactor * size} />
              </div>
              <div />
            </div>
            <div style={flexRowStyle}>
              <div className="remote-button" style={flexCellStyle} onClick={() => pressKey("InstantReplay")}>
                <RotateCcw size={size} />
              </div>
              <div className="remote-button" style={flexCellStyle} onClick={() => pressKey("Info")}>
                <Loader size={size} />
              </div>
            </div>
            <div style={flexRowStyle}>
              <div className="remote-button" style={flexCellStyle} onClick={() => pressKey("Rev")}>
                <Rewind size={size} />
              </div>
              <div className="remote-button" style={flexCellStyle} onClick={() => pressKey("Play")}>
                <Play size={size} />
                <Pause size={size} />
              </div>
              <div className="remote-button" style={flexCellStyle} onClick={() => pressKey("Fwd")}>
                <FastForward size={size} />
              </div>
            </div>
          </>
        )}
      </RokuConsumer>
    </div>
  );

export default Remote;
