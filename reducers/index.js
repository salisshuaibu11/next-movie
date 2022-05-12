import { combineReducers } from "redux";

import moviesReducer from "./moviesReducer";

const combinedReducers = combineReducers({
  movies: moviesReducer,
});

export default combinedReducers;