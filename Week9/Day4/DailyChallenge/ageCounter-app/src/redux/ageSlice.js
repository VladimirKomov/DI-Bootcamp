import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const ageUpAsync = createAsyncThunk(
    'age/ageUpAsync',
    async (years) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(years);
            }, 1000*years);
        });
    }
)

export const ageDownAsync = createAsyncThunk(
    'age/ageDownAsync',
    async (years) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(-years);
            }, 1000*years);
        });
    }
)

const initialState = {
    age: 0,
    loading: false,
}

const ageSlice = createSlice({
    name: 'age',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(ageUpAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(ageUpAsync.fulfilled, (state, action) => {
                state.age += action.payload;
                state.loading = false;
            })
            .addCase(ageDownAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(ageDownAsync.fulfilled, (state, action) => {
                console.log('Current age:', state.age);
                state.age += action.payload;
                console.log('New age after decrease:', state.age);
                state.loading = false;
            });
    },
})

export default ageSlice.reducer;