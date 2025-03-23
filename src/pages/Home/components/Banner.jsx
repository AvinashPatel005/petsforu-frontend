import React from 'react'

const Banner = () => {
    return (
        <div className='w-full mt-10 h-100 bg-[url(/images/banner.jpg)] bg-cover bg-no-repeat bg-center'>
            <div className='h-full flex justify-center items-center bg-[#00000070]'>
                <div className='max-w-[1100px] w-full'>
                    <h3 className='text-highlight2 font-bold'>SPECIAL OFFER</h3>
                    <h1 className='text-primary-bg text-4xl font-bold'>SAVE 50% ON ALL ITEMS YOUR FIRST ORDER</h1>
                    <p className='text-primary-bg'>Use coupon code <strong>FIRST50</strong> at checkout to avail this amazing discount.</p>
                    <p className='text-primary-bg'>Hurry! This limited-time offer won't last forever.</p>
                    <p className='text-primary-bg'><em>Terms & Conditions apply.</em></p>
                </div>
            </div>
        </div>
    )
}

export default Banner
