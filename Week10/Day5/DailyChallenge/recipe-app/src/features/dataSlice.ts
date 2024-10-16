import {ApiResponse} from "../types/typesResponse.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RequestOptions} from "../types/typesRequest.ts";
import {makeRequest} from "../api/api.ts";

interface DataState {
    data: ApiResponse | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: DataState = {
    data: null,
    status: 'idle',
    error: null
}

export const fetchDataSlice = createAsyncThunk(
    'dataSlice/fetchDataSlice',
    async (options: RequestOptions): Promise<ApiResponse | undefined> => {
        const data = await makeRequest(options);
        return data;
    }
)

const dataSlice = createSlice({
    name: 'dataSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataSlice.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDataSlice.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload || null;
            })
            .addCase(fetchDataSlice.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Something went wrong';
            });
    }
})

export default dataSlice.reducer;