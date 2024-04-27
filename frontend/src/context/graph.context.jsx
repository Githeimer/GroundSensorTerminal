import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const GraphContext = createContext();

export const GraphReducer = (state, action) => {
    switch (action.type) {
        case 'STORE':
            // console.log(action.payload);
            // console.log(state.data);
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        default:
            return state;
    }
}

export const GraphContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(GraphReducer, {
        data: []
    });

    return (
        <GraphContext.Provider value={{ ...state, dispatch }}>
            {children}
        </GraphContext.Provider>
    )
}

GraphContextProvider.propTypes = {
    children: PropTypes.node
}