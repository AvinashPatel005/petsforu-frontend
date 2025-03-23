import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
export const fetchNearbyPetShops = createAsyncThunk('petshops/fetchNearbyPetShops', async () => {
    const response = await fetch('/shopdata.json')
    const data = await response.json()
    return data;
});



export const petshopSlice = createSlice({
    name: 'petshops',
    initialState: { shops: [], status: 'idle', error: null },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNearbyPetShops.pending, (state) => { state.status = 'loading'; })
            .addCase(fetchNearbyPetShops.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.shops = action.payload;
            })
            .addCase(fetchNearbyPetShops.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export default petshopSlice.reducer;