import React from 'react'

const Hero = () => {
    return (
        <div className='text-primary-bg h-[400px] w-full bg-[url(/images/hero.avif)] bg-cover  bg-op bg-no-repeat bg-[25%_45%]'>
            <div className='bg-[#00000070] h-full w-full flex justify-center items-center'>
                <div className='max-w-[1100px] flex flex-col gap-2'>
                    <h1 className='text-6xl font-bold'>
                        PETSFORU
                    </h1>
                    <h2 className='text-xl font-bold '>
                        MAKE YOUR PETS HAPPY
                    </h2>
                    <p>Welcome to Petsforu, where we provide everything your furry, feathered, and scaly friends need to stay happy and healthy. From high-quality pet food and accessories to grooming and wellness products, we ensure the best care for your beloved pets.</p>
                    <button className='my-2 border-2 border-white px-2 py-1 w-fit bg-[#fff3] hover:bg-[white] hover:text-primary transition-all ease-in' >READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
