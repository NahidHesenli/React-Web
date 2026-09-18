import { configureStore } from "@reduxjs/toolkit";
import { RickMortyapi } from "../services/rickAndMortyApi";
import searchReducer from "./slices/searchSlice";

export const store= configureStore({
    reducer:{
        search:searchReducer,
        [RickMortyapi.reducerPath]:RickMortyapi.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(RickMortyapi.middleware)
    }
})