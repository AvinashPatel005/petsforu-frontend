import  { createSlice } from '@reduxjs/toolkit'

export const imageViewerSlice = createSlice({
    initialState:null,
    name: 'imageViewer',
    reducers: {
        setImage: (state, action) => action.payload,
        removeImage: (state) => null,
    }
})

export const { setImage, removeImage } = imageViewerSlice.actions
export default imageViewerSlice.reducer