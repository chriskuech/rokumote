import config from "config.json";
import { isString } from "util";
import { toast } from "react-toastify";
import { createContext, FunctionComponent } from "react";
import React from "react";

const KEY = "roku";

interface Roku {
  name: string;
  ip: string;
}

function isRoku(value: any): value is Roku {
  return value && isString(value.name) && isString(value.ip);
}

const storedState = localStorage.getItem(KEY);
let roku = isRoku(storedState) ? storedState : config.rokus[0];
// const { Provider, Consumer } = createContext(roku);

// export const RokuConsumer = Consumer;

// export const RokuContext: FunctionComponent =
//   () => (
//     <Provider value={}>

//     </Provider>
//   );

// https://developer.roku.com/docs/developer-program/discovery/external-control-api.md#keypress-example
export type Key =
  | "Home"
  | "Rev"
  | "Fwd"
  | "Play"
  | "Select"
  | "Left"
  | "Right"
  | "Down"
  | "Up"
  | "Back"
  | "InstantReplay"
  | "Info"
  | "Backspace"
  | "Search"
  | "Enter"
  | "VolumeDown"
  | "VolumeMute"
  | "VolumeUp"
  | "PowerOff"
  ;

export const pressKey: (key: Key) => void =
  (key) =>
    fetch(`http://${roku.ip}:8060/keypress/${key}`, { method: "post", mode: "no-cors" })
      .catch(toast.error);

export const setRoku: (newRoku: Roku) => void =
  (newRoku) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(newRoku));
      roku = newRoku;
    } finally {
      toast.error("Failed to update the roku");
    }
  }

export const getRoku: () => Roku =
  () => roku;

