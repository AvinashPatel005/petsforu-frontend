import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    const routes = ["home","pets","product","contact"]
    const navItemStyles = 'px-2 flex items-center h-full'
    return (
        <div className='  z-100 bg-highlight2 flex px-2 items-center font-semibold justify-between h-[60px] shadow fixed w-full'>

            <div className='flex gap-4 items-center'>
            <i className='bi-shop text-4xl'></i>
            <h1 className='text-3xl font-bold'>PETSFORU</h1>
            </div>
            <ul className='flex h-full'>
                {routes.map((route, index) => (
                    <li key={index} className='text-xl'><Link to={route!=='home'?route:"/"} className= {navItemStyles}>{route.toUpperCase()}</Link></li>
                ))}
                <Link to={"/cart"} className='text-3xl flex items-center px-2 hover:cursor-pointer'><i className="bi bi-cart2 "></i></Link>
                <Link to={"/profile"} className='text-3xl flex items-center px-2 hover:cursor-pointer'><i className="bi bi-person-circle "></i></Link>
            </ul>
        </div>
    )
}

export default Navbar
