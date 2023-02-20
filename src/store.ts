import { configureStore } from '@reduxjs/toolkit';
import allreducers from './sliceReducer';
import logger from 'redux-logger'

export const store = configureStore({ 
    reducer:allreducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})