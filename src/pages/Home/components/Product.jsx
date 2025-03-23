import React, { useEffect, useRef } from 'react'
import Heading from './Heading'
import { Link } from 'react-router';

const Product = () => {
    const products = [
        {
            image: "/images/product.png",
            name: "McFood Plus",
            price: 19
        },
        {
            image: "/images/product.png",
            name: "Burger Deluxe",
            price: 25
        },
        {
            image: "/images/product.png",
            name: "Cheesy Fries",
            price: 10
        },
        {
            image: "/images/product.png",
            name: "Chicken Wrap",
            price: 15
        },
        {
            image: "/images/product.png",
            name: "McFood Plus",
            price: 19
        },
        {
            image: "/images/product.png",
            name: "Burger Deluxe",
            price: 25
        },
        {
            image: "/images/product.png",
            name: "Cheesy Fries",
            price: 10
        },
        {
            image: "/images/product.png",
            name: "Chicken Wrap",
            price: 15
        }
    ];
    const carouselRef = useRef(null);
    const intervalRef = useRef(null);
    const startCarousel = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                if (carouselRef.current) {
                    carouselRef.current.scrollLeft += carouselRef.current.scrollWidth / 6.5;
                    console.log(carouselRef.current.scrollLeft,carouselRef.current.clientWidth,carouselRef.current.scrollWidth);
                    
                    if (
                        carouselRef.current.scrollLeft + carouselRef.current.clientWidth >= 
                        carouselRef.current.scrollWidth-10
                    ) {
                        carouselRef.current.scrollLeft = 0;
                    }
                }
            }, 2000);
        }
    };

    const stopCarousel = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        startCarousel();
        return () => stopCarousel();
    }, []);

    return (
        <div className='max-w-[1100px] w-full mt-10 flex flex-col items-center'>
            <div className='self-start'>
                <Heading heading={"PRODUCTS"} decscription={"PRODUCTS FOR YOUR BEST FRIEND"} />
            </div>
            <div ref={carouselRef} className="flex gap-4 my-4 w-full overflow-hidden carousel mask-gradient" onMouseEnter={stopCarousel}
                        onMouseLeave={startCarousel}>
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="product-card flex flex-col relative shrink-0 items-center w-[220px] bg-secondary-bg py-6 cursor-pointer"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-[220px]"
                        />
                        <p className="font-semibold mb-2">{product.name}</p>
                        <span>₹{product.price}</span>
                        <button className='add-to-cart absolute bottom-0 bg-highlight text-primary-bg text-sm py-1 px-4 rounded-t-sm cursor-pointer'><i className='bi bi-cart'></i></button>
                    </div>
                ))}
            </div>
            <Link className='bg-primary text-primary-bg px-8 py-1 cursor-pointer hover:bg-highlight' to="/products">MORE</Link>
        </div>
    )
}

export default Product
