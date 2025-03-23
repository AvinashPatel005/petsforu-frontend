import { configureStore } from "@reduxjs/toolkit"
import imageViewerSlice from './slices/imageviewer'
import petShopSlice from './slices/petshop'
import shopDetailSlice from "./slices/shopdetail";
import mapNavSlice from "./slices/mapnav";
import  petListSlice from "./slices/petlist";
import  mapSlice from "./slices/map";
export const store = configureStore({
    reducer:{
        imageViewer : imageViewerSlice,
        petShop : petShopSlice,
        shopDetail : shopDetailSlice,
        petList: petListSlice,
        mapNavigation: mapNavSlice,
        map:mapSlice
    }
})