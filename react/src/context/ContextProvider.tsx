import React, { createContext, useContext, useState, ReactNode } from "react";

interface StateContextType {
    user: { name: string } | null; 
    token: string | null;
    setUser: React.Dispatch<React.SetStateAction<{ name: string } | null>>; 
    setToken: (token: string | null) => void; 
}

const defaultState: StateContextType = {
    user: null,
    token: null,
    setUser: () => {}, 
    setToken: () => {} 
};

const StateContext = createContext<StateContextType>(defaultState);

interface ContextProviderProps {
    children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<{ name: string } | null>({name: 'John'});
    // const [token, setToken] = useState<string | null>('123');
    const [token, setToken] = useState<string | null>(localStorage.getItem('ACCESS_TOKEN'));

    const _setToken = (token: string | null) => {
        setToken(token);
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    };

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken: _setToken
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);

export default StateContext;
