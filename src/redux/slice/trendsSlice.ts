import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MovieResp, TrendState} from "../../interfaces/interfaces";

const ApiKey = "32ac23e8";

export const fetchTrends = createAsyncThunk <MovieResp, string | undefined > (
    'trends/fetchTrends',
    async function (title, {rejectWithValue}) {
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

const initialState: TrendState = {
    trends: [],
    status: null,
    error: null,
}

const trendsSlice = createSlice({
    name: 'trends',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        return builder.addCase(fetchTrends.pending, (state: any) => {
            state.status = "loading";
            state.error = null;
        }),
        builder.addCase(fetchTrends.fulfilled, (state: any, {payload}: {payload: any}) => {
            state.status = "resolved";
            state.error = null;
            state.trends = payload.Search;
        }),
        builder.addCase(fetchTrends.rejected, isError)
    }
});

const isError = (state: any, {payload}: {payload: any}) => {
    state.status = "rejected";
    state.error = payload;
};

const {reducer} = trendsSlice;
export default reducer;