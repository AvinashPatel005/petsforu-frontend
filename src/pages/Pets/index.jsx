import React, { useEffect, useState } from 'react'
import Map from './components/Map'
import Panel from './components/Panel.jsx';
import ImageView from './components/ImageView.jsx';
import { fetchNearbyPetShops } from '../../redux/slices/petshop/index.js';
import { useDispatch } from 'react-redux';
const Pet = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchNearbyPetShops());
  }, [dispatch]);

  return (
    <div className='flex pt-[60px]'>
      <Panel/>
      <Map/>
      <ImageView />
    </div>
  )
}

export default Pet
