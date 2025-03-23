import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeImage } from '../../../redux/slices/imageviewer'

const ImageView = () => {
    const image = useSelector(state => state.imageViewer)
    const dispatch = useDispatch()
    return (
        image != null && 
        <div className='absolute flex items-center right-0 z-1000 bg-black h-[calc(100vh-60px)]'>
            <i onClick={()=>dispatch(removeImage())} className='bi bi-x-circle-fill absolute text-4xl top-10 right-10 text-highlight cursor-pointer'></i>
            <img src={image} className='w-[calc(100vw-400px)]' />
        </div>
    )
}

export default ImageView
