import React from 'react'

const Heading = ({ heading, decscription }) => {
    return (
        <>
            <h3 className='text-highlight2 font-bold shadow-2xl'>{heading}</h3>
            <h1 className='text-primary text-4xl font-bold'>{decscription}</h1>
        </>
    )
}

export default Heading
