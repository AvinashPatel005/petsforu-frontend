import React from 'react';
import Rating from './Rating';
import { useDispatch, useSelector } from 'react-redux';
import { setPanel } from '../../../redux/slices/mapnav';
import Spinner from '../../../components/Spinner';
import { clearShopDetail } from '../../../redux/slices/shopdetail';
import { fetchPetListByShopId } from '../../../redux/slices/petlist';

const ShopDetail = () => {
    const { shop, error, status } = useSelector((state) => state.shopDetail);
    const dispatch = useDispatch();
    const day = new Date().getDay();

    return (
        <div className='h-full'>
            <i onClick={() => {
                dispatch(setPanel("SEARCH"))
                dispatch(clearShopDetail())
            }} className="absolute top-0 bi m-2 bi-arrow-left-circle-fill text-2xl text-primary-bg cursor-pointer [text-shadow:_1px_1px_14px_rgb(0_0_0_/_100%)] hover:text-highlight"></i>
            {
                status === 'loading' ? <Spinner />
                    :
                    <>
                        <img src="/map/shop.jpg" alt="img" className="h-[250px] w-full object-cover" />

                        <div className="px-4 py-4">
                            <h2 className="font-semibold text-xl">{shop.name}</h2>
                            <div className="flex items-center gap-1">
                                <span className="text-xs">{shop.ratings.average}</span>
                                <Rating rating={shop.ratings.average} />
                                <span className="text-xs">({shop.ratings.total_reviews})</span>
                            </div>
                            <p className="text-md mt-2">{shop.location.address + ', ' + shop.location.city}</p>
                            <p className="text-md mb-4">{shop.location.state + ', ' + shop.location.postal_code}</p>

                            <div className="flex items-center gap-1 mb-4">
                                <i className="bi bi-envelope"></i>
                                <span className="text-md">{shop.contact.email}</span>
                            </div>

                            <div>
                                <i className="bi bi-clock mr-1"></i>
                                Hours
                            </div>
                            <table className="petshop-hours">
                                <tbody>
                                    {Object.keys(shop.hours).map((key, index) => (
                                        <tr key={index} className={index === day ? 'font-semibold' : ''}>
                                            <td className="pr-4 text-sm">{key.charAt(0).toUpperCase() + key.substring(1, 3)}</td>
                                            <td className="text-sm">{shop.hours[key]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <button
                                onClick={() => {
                                    dispatch(setPanel("PET_LIST"))
                                    dispatch(fetchPetListByShopId(shop.id))
                                }}
                                className="ring ring-primary-bg/100 text-primary-bg bg-primary hover:bg-highlight cursor-pointer rounded-sm py-0.5 px-4 absolute bottom-2 right-2"
                            >
                                PETS
                            </button>
                        </div>
                    </>
            }
        </div >
    );
};

export default ShopDetail;
