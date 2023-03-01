import { configureStore } from '@reduxjs/toolkit'

import widgetReducer from "../pages/Widget/widgetSlice"
import responseReducer from "../pages/Response/responseSlice"



export const store = configureStore({
  reducer: {

   widgetPage:widgetReducer,
   responsePage: responseReducer
 
  },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

