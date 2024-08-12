import { createContext } from "react";

interface StateContextType {
    currentUser: string | null; 
    token: string | null;     
}

// Initialize with default values
const defaultState: StateContextType = {
    currentUser: null,
    token: null
};

const StateContext = createContext<StateContextType>(defaultState);

export default StateContext;
