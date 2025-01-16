import rootSlice from './rootSlice.js';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

// Use rootSlice.reducer in combineReducers
const reducer = combineReducers({
    root: rootSlice.reducer,
});

// Configure the store with the combined reducer
const store = configureStore({ reducer });

export default store;