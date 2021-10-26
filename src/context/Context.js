import React, { useContext, useReducer, createContext } from 'react';

export const StateContext = createContext();
export const DispatchContext = createContext();

//hooks for using context inside react function
export const useStateContext = () => useContext(StateContext);
export const useDispatchContext = () => useContext(DispatchContext);

//general context provider
const ContextProvider = ({ children, initialState, reducer }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default ContextProvider;
