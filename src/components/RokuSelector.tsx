import config from "config.json";
import { FunctionComponent } from "react";
import React from "react";
import "./RokuSelector.css";
import { RokuConsumer } from "components/RokuContext";

const Indicator: FunctionComponent<{ on?: boolean }> =
  ({ on }) => (
    <div
      style={{
        display: "inline-block",
        width: "0.8em",
        height: "0.8em",
        borderRadius: "50%",
        background: on ? "rgb(102, 45, 143)" : "#333",
        border: "0.2em solid #333",
        margin: "0.5em"
      }}
    />
  )

interface RokuSelectorOptionProps {
  name: string;
  ip: string;
  selected?: boolean;
  onClick: () => void;
}

const RokuSelectorOption: FunctionComponent<RokuSelectorOptionProps> =
  ({ name, selected, onClick }) => (
    <div style={{ display: "flex", alignItems: "center" }} onClick={onClick}>
      <Indicator on={selected} /> <div>{name}</div>
    </div>
  );

const RokuSelector =
  () => (
    <div className="roku-selector" style={{ padding: "0.3em", display: "flex", cursor: "pointer" }}>
      <RokuConsumer>
        {({ roku, setRoku }) => (
          <>
            <div className="placeholder" />
            <div className="options">
              {config.rokus.map((candidateRoku) => (
                <RokuSelectorOption
                  {...candidateRoku}
                  onClick={() => setRoku(candidateRoku)}
                  selected={roku.name === candidateRoku.name}
                  key={candidateRoku.name}
                />
              ))}
            </div>
          </>
        )}
      </RokuConsumer>
    </div>
  );

export default RokuSelector;
