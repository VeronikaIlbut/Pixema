import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MovieResp, MoviesParams, MoviesState} from "../../interfaces/interfaces";

const ApiKey = "32ac23e8";


export const fetchAllmovies = createAsyncThunk <MovieResp, MoviesParams>(
    'movies/fetchAllmovies',
    
    async function ({titleFilm, page}, {rejectWithValue}) {
        try {
            const responce = await fetch(`https://www.omdbapi.com/?apikey=${ApiKey}&s=${titleFilm}&page=${page}`);
            if (!responce.ok) {
                throw new Error("Error")
            }
            const data = await responce.json();
            return data;
        }
        catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
)

const initialState: MoviesState = {
    films: [],
    status: null,
    error: null,
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        return builder.addCase(fetchAllmovies.fulfilled, (state, {payload}) => {
            state.status = "resolved";
            state.error = null;
            state.films.push(...payload.Search);
            console.log(payload.Search)
        }),
        builder.addCase(fetchAllmovies.rejected, isError)
    }
});

const isError = (state:  MoviesState, {payload}: {payload:any}) => {
    state.status = "rejected";
    state.error = payload;
};

const { reducer} = moviesSlice;
export default reducer;
