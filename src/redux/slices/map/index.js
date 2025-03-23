import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mapRef: null
};

const mapSlice = createSlice({
    name: "mapView",
    initialState: {
      zoom: 15,
      center: [20.298059, 85.8248],
    },
    reducers: {
      changeZoom: (state, action) => {
        state.zoom = action.payload;
      },
      changeCenter: (state, action) =>{
        state.center = action.payload;
      }
    },
  });

export const { changeZoom,changeCenter } = mapSlice.actions;
export default mapSlice.reducer;
