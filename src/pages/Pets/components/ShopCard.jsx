import React from 'react'
import Rating from './Rating'

const ShopCard = ({ id,name, location,hours, ratings: { average, total_reviews },onclick }) => {
    const day = new Date().getDay();
    
    return (
        <div onClick={()=>onclick(id)} className='flex justify-between items-center p-4 cursor-pointer border-b-1 border-gray-400 hover:bg-gray-200'>
            <div>
                <h2 className='font-semibold text-md'>{name}</h2>
                <div className='flex items-center gap-1'>
                    <span className='text-xs'>{average}</span>
                    <Rating rating={average} />
                    <span className='text-xs'>({total_reviews})</span>
                </div>
                <div>
                <p className='text-sm'>{location.address}</p>
                <p className='text-sm'>{Object.values(hours)[day]}</p>
                </div>
            </div>
            <img src="/map/shop.jpg" className='rounded-full aspect-square h-14 object-cover object-left' alt="img" />
        </div>
    )
}

export default ShopCard
