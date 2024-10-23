import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import { getreducer } from "./fetch/reducer";
import { postreducer } from "./post/reducer";
import {thunk} from "redux-thunk";

const createRoot=combineReducers({
    getreducer,
    postreducer
})



export const store=legacy_createStore(createRoot, applyMiddleware(thunk));



