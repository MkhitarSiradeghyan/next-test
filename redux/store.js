import { combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {servicesReducer} from "./reducers/servicesReducer";

const rootReducer = combineReducers({
    services: servicesReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))