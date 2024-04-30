import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MovieResp, Movies,} from "../../interfaces/interfaces";

const ApiKey = "113df6aa";

interface searchState {
    search: Movies[];
    status: string | null;
    error: string | null;
}
interface searchParams {
    title: string;
}

export const fetchSearch = createAsyncThunk <MovieResp, searchParams> (
    'search/fetchSearch',
    async function ({ title }, {rejectWithValue}) {
        try {
            const responce = await fetch(`https://www.omdbapi.com/?apikey=${ApiKey}&s=${title}`);
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

const initialState: searchState = {
    search: [],
    status: null,
    error: null,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        return builder.addCase(fetchSearch.pending, (state) => {
            state.status = "loading";
            state.error = null;
        }),
        builder.addCase(fetchSearch.fulfilled, (state, {payload}) => {
            state.status = "resolved";
            state.error = null;
            state.search = payload.Search;
            console.log(state.search)
        }),
        builder.addCase(fetchSearch.rejected, isError)
    }
});

const isError = (state: searchState, {payload}: {payload: any}) => {
    if (payload) {
    state.status = "rejected";
    state.error = payload;
    state.search = [];
    }
};

const { reducer} = searchSlice;
export default reducer;



