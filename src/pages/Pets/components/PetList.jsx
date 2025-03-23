import React, { useState } from 'react';
import PetCard from './PetCard';
import { useDispatch, useSelector } from 'react-redux';
import { setPanel } from '../../../redux/slices/mapnav';
import Spinner from '../../../components/Spinner';
const PetList = () => {

    const dispatch = useDispatch()

    const { pets, error, status } = useSelector((state) => state.petList)


    return (
        <div >
            {
                status === 'loading' ? <Spinner />
                    :
                    <>
                        <div className='ring-1 rounded-4xl h-[40px] ring-gray-400 mx-4 px-6 my-[20px] flex items-center justify-between'>
                            <i className='bi-arrow-left-short text-3xl cursor-pointer' onClick={() => dispatch(setPanel("SEARCH"))}></i>
                            <input type="text" placeholder='Search for Pets' className='focus:outline-0 py-1 w-full' />
                            <i className='bi bi-search cursor-pointer pl-1'></i>
                        </div>

                        <div className="overflow-scroll h-[calc(100vh-140px)]">
                            {pets.map((pet) => (
                                <PetCard {...pet} key={pet.id} />
                            ))}
                        </div>
                    </>
            }

        </div>
    );
};

export default PetList;