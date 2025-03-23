import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchPetListByShopId = createAsyncThunk('pets/fetchPetList', async (id) => {
    await delay(500);
    const response = await fetch('/petdata.json');
    const data = await response.json();
    return data;
});

export const petListSlice = createSlice({
    name: 'pets',
    initialState: { pets: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPetListByShopId.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPetListByShopId.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.pets = action.payload;
            })
            .addCase(fetchPetListByShopId.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default petListSlice.reducer;
