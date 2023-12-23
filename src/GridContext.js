import React, { createContext, useReducer } from "react";
import reducer, {initialState} from "./Reducer"

export const gridContext = createContext();

export const GridProvider = ({ children }) => (
  <gridContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </gridContext.Provider>
);
