import React from "react";

export const ContextAction = React.createContext({
  setAngka: () => {},
  onHandlePercent: () => {},
  onHandleClear: () => {},
  onHandleAction: () => {},
  onHandlePlusMinus: () => {},
});

export const useAction = () => {
  return React.useContext(ContextAction);
};
