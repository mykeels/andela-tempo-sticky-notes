import React, { useState } from "react";

export const DeleteContext = React.createContext({
  callback: () => {},
  setCallback: ((callback) => {}) satisfies React.Dispatch<React.SetStateAction<() => void>>
});

export const DeleteContextProvider = ({ children }: { children: any }) => {
  const [callback, setCallback] = useState<() => void>(() => {});
  return (
    <DeleteContext.Provider
      value={{
        callback,
        setCallback
      }}
    >
      {children}
    </DeleteContext.Provider>
  );
};
