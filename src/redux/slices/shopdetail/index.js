import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchShopDetail = createAsyncThunk(
    "shopDetail/fetchShopDetail",
    async (shopId) => {
        const response = await fetch("/shopdata.json");
        const data = await response.json();
        await delay(500);

        const shop = data.find(shop => shop.id === shopId);
        if (!shop) throw new Error("Shop not found");
        return shop;
    }
);

const initialState = {
    shop: null,
    shopId:null,
    status: "idle",
    error: null,
};

const shopDetailSlice = createSlice({
    name: "shopDetail",
    initialState,
    reducers: {
        setShopId: (state,action)=>{
            state.shopId=action.payload
        },
        clearShopDetail: (state) => {
            state.shop = null;
            shopId=null;
            state.status = "idle";
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchShopDetail.pending, (state) => {
                state.status = "loading";
                state.shop = null;
            })
            .addCase(fetchShopDetail.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.shop = action.payload;
            })
            .addCase(fetchShopDetail.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export const { clearShopDetail ,setShopId } = shopDetailSlice.actions;
export default shopDetailSlice.reducer;