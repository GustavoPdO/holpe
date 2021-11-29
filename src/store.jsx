import React, { createContext, useReducer } from "react";
import { authenticateUser } from "./services/auth"

import { mockedUser } from "./data/mockedEvents";

const initialState = {
    ...mockedUser,
    ...authenticateUser()
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        let newState;
        switch(action.type) {
            case "login_success":
                newState = {
                    userType: action.data ? "volunteer" : "solicitant"
                };
                return newState;
            case "set_profile":
                newState = {
                    ...action.data,
                    userType: action.data.isVolunteer ? "volunteer" : "solicitant"
                }
                console.log(newState)
                return newState;
            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>
};

export { store, StateProvider }