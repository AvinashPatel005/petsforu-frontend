import React, { useState } from 'react'
import ShopCard from './ShopCard'
import Rating from './Rating'
import ShopDetail from './ShopDetail'
import Search from './Search'
import PetList from './PetList'
import { useDispatch, useSelector } from 'react-redux'

const Panel = () => {
    const { panel } = useSelector((state) => state.mapNavigation);
    const dispatch = useDispatch();

    const handleClosePetList = () => {
        dispatch(resetNavigation());
    };
    return (
        <div className='w-[400px] h-[calc(100vh-60px)] shadow-2xl bg-primary-bg border-r-1 border-gray-400 relative'>
            {
                <>
                    {panel  === "SEARCH" && <Search />}
                    {panel  === "SHOP_DETAIL" && <ShopDetail />}
                    {panel === "PET_LIST" && <PetList onClose={handleClosePetList} />}
                </>
            }
        </div>
    )
}

export default Panel
