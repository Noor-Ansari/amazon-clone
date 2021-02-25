import React, {useReducer, useContext} from 'react';

export const Context = React.createContext();

function DataLayer({reducer, initialState, children}) {
    return (
        <Context.Provider value={useReducer(reducer, initialState)}>
            {children}
        </Context.Provider>
    )
}

export const useDataLayerValues = () => useContext(Context);

export default DataLayer;
