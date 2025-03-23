import React from 'react'
import Hero from './components/Hero'
import Service from './components/Service'
import Product from './components/Product'
import Banner from './components/Banner'
import Subscription from './components/Subscription'
import Footer from '../../components/Footer'
import QuickAccess from '../../components/QuickAccess'

const Home = () => {
    return (
        <div className='flex flex-col items-center bg-primary-bg pt-[60px]'>
            <Hero/>
            <Service/>
            <Product/>
            <Banner/>
            <Subscription/>
            <QuickAccess/>
            <Footer/>
        </div>
    )
}
export default Home
