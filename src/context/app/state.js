import React, { useReducer  } from 'react'
import AppContext from './context'
import { AppReducer, initialState, START_LOADING, END_LOADING, ASYNC_ERROR } from './reducer'
const AppState = (props) => {

    const [ appState, appDispatch ] = useReducer(AppReducer, undefined, initialState)

    const isPromise = (obj) => {
        return (
            !!obj &&
            (typeof obj === "object" || typeof obj === "function") &&
            typeof obj.then === "function"
        );
    }

    const wrapperappDispatch = (dispatch) => {
        return (action) => {
            if(isPromise(action.payload)) {
                dispatch({ type: START_LOADING });
                action.payload
                .then((result) => {
                    dispatch({ type: END_LOADING });
                    dispatch({ type: action.type, payload: result });
                })
                .catch((error) => {
                    dispatch({ type: END_LOADING })
                    dispatch({ type: ASYNC_ERROR, payload: error.message })
                    dispatch({ type: action.type, payload: error });
                })
            } else {
                dispatch(action);
            }
        }
    }

    return (
        <AppContext.Provider
            value={{ appState: appState, appDispatch: wrapperappDispatch(appDispatch) }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState