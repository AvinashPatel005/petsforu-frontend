import React from 'react'
import ShopCard from './ShopCard'
import PetCard from './PetCard'
import { useDispatch, useSelector } from 'react-redux';;
import { setPanel } from '../../../redux/slices/mapnav';
import { fetchShopDetail, setShopId } from '../../../redux/slices/shopdetail';
import Spinner from '../../../components/Spinner';
import { changeCenter } from '../../../redux/slices/map';

const Search = () => {
    const { shops, status, error } = useSelector((state) => state.petShop);
    const dispatch = useDispatch();
    return (
        <>
            <div className='ring-1 rounded-4xl h-[40px] ring-gray-400 mx-4 px-6 my-[20px] flex items-center justify-between'>
                <input type="text" placeholder='Search for Pets or Shelters' className='focus:outline-0 py-1 w-full' />
                <i className='bi bi-search cursor-pointer pl-1'></i>
            </div>
            <div className='flex flex-col h-[calc(100vh-140px)] overflow-scroll'>
                {
                   status === 'loading' ? <Spinner />:
                    shops.map((item, index) => (
                        item.species!=undefined?
                        <PetCard key={index} {...item}/>
                        :
                        <ShopCard key={index} {...item} onclick={(pid) => {
                            dispatch(fetchShopDetail(pid))
                            dispatch(setPanel("SHOP_DETAIL"))
                            dispatch(changeCenter([item.location.latitude,item.location.longitude]))
                            dispatch(setShopId(pid))
                        }} />
                    ))
                }
            </div>
        </>
    )
}

export default Search
