import React, { useState } from "react";

export const DeleteContext = React.createContext({
  callback: () => {},
  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  setCallback: (callback = () => {}) => {}
});

export const DeleteContextProvider = ({ children }) => {
  /** @type {[(() => {}), React.Dispatch<React.SetStateAction<(() => {})>>]} */
  // @ts-ignore
  const [callback, setCallback] = useState(() => {});
  return (
    <DeleteContext.Provider
      value={{
        callback,
        // @ts-ignore
        setCallback
      }}
    >
      {children}
    </DeleteContext.Provider>
  );
};
