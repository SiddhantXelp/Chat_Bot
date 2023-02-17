import { configureStore } from '@reduxjs/toolkit';
import allreducers from './reducers/index';
import logger from 'redux-logger'

export const store = configureStore({ 
    reducer:allreducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})