import config from "config.json";
import { isString } from "util";
import { toast } from "react-toastify";
import { createContext, FunctionComponent, ReactNode, useState } from "react";
import React from "react";

const STORAGE_KEY = "roku";

///
// types
//

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

export interface Roku {
  name: string;
  ip: string;
}

export interface Context {
  roku: Roku;
  setRoku: (roku: Roku) => void;
  pressKey: (key: Key) => void;
}

function isRoku(value: any): value is Roku {
  return value && isString(value.name) && isString(value.ip);
}

///
// main
//

const storedState = localStorage.getItem(STORAGE_KEY);
const initialRoku = isRoku(storedState) ? storedState : config.rokus[0];

const notYetDefined = () => { throw new ReferenceError(); };
const { Provider, Consumer } = createContext<Context>({ roku: initialRoku, setRoku: notYetDefined, pressKey: notYetDefined });

export const RokuContext: FunctionComponent<{ children: ReactNode }> =
  ({ children }) => {
    const [roku, setContext] = useState<Roku>(initialRoku);

    const pressKey: (key: Key) => void =
      (key) =>
        fetch(`http://${roku.ip}:8060/keypress/${key}`, { method: "post", mode: "no-cors" })
          .catch(toast.error);

    const setRoku: (roku: Roku) => void =
      (roku) => {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(roku));
          setContext(roku);
        } finally {
          toast.error("Failed to update the roku");
        }
      };

    return (
      <Provider value={{ roku, setRoku, pressKey }}>
        {children}
      </Provider>
    )
  };

export const RokuConsumer = Consumer;
