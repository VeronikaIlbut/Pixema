import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FilmState, MovieInfo} from "../../interfaces/interfaces";

const ApiKey = "32ac23e8";

export const fetchOneFilm = createAsyncThunk <MovieInfo, string | undefined> (
    'selectedfilm/fetchOneMovie',
    async function (imdbID, {rejectWithValue}) {
        try {
            const responce = await fetch(`https://www.omdbapi.com/?apikey=${ApiKey}&i=${imdbID}&plot=full`);
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

const initialState: FilmState = {
    selectedFilm: null,
    status: null,
    error: null
}

const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        return builder.addCase(fetchOneFilm.pending, (state: any) => {
            state.status = "loading";
            state.error = null;
        }),
        builder.addCase(fetchOneFilm.fulfilled, (state: any, {payload}: {payload: any}) => {
            state.status = "resolved";
            state.error = null;
            console.log (payload)
            state.selectedFilm = payload;
            console.log (state.selectedFilm)
        }),
        builder.addCase(fetchOneFilm.rejected, isError)
    }
});

const isError = (state: any, {payload}: {payload: any}) => {
    state.status = "rejected";
    state.error = payload;
};

const {reducer} = filmSlice;
export default reducer;