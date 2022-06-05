import { createStore, combineReducers } from "@reduxjs/toolkit";
import indicatorsReducer from "./indicators/reducer";

const reducers = combineReducers({
    indicatorsReducer,
});

const store = createStore(reducers);

export default store;