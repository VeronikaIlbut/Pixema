import { configureStore } from '@reduxjs/toolkit'
import  moviesReducer from "../slice/moviesSlice";
import  searchReducer from "../slice/searchSlice";
import  trendsReducer from "../slice/trendsSlice";
import filmReducer from "../slice/filmSlice";


const rootReduce = {
  movies: moviesReducer,
  search:searchReducer,
  trends: trendsReducer,
  film: filmReducer,
  
}

const store = configureStore({
  reducer: rootReduce,
})

export default store;