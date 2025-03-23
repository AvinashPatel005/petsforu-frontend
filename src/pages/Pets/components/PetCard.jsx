import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setImage } from '../../../redux/slices/imageviewer';

const PetCard = ({ breed, species, age, gender, images, description, vaccinations }) => {
    const [isExpanded, setExpanded] = useState(false)
    const dispatch = useDispatch()
    const scrollRef = useRef(null);

    const scrollLeft = (e) => {
        e.stopPropagation()
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
        }
    };

    const scrollRight = (e) => {
        e.stopPropagation()
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
        }
    };
    return (
        <div className='py-4 px-4 cursor-pointer border-b-1  border-gray-400 hover:bg-gray-200' onClick={() => setExpanded((v) => !v)}>
            <div className='flex'>
                <div className='mr-4'>
                    <h2 className='font-semibold'>{breed}</h2>
                    <p className='text-sm'> <i className={`bi bi-gender-${gender.toLowerCase()} ${gender == "Male" ? "text-blue-500" : "text-pink-700"}`}></i> {species}</p>
                    <p className='text-sm text-gray-700'>{description}</p>
                </div>
                <img className='rounded-md w-[60px] h-[60px] object-cover' src="/map/petdp.jpg" alt="dp" />
            </div>
            {
                isExpanded &&
                <div>
                    <p className='text-sm text-gray-700 mt-4 mb-2'><i className="bi bi-image"></i> Photos</p>
                    <div className='relative w-full'>

                        {
                            images.length > 3 && <i onClick={scrollLeft} className='bi bi-arrow-left-circle-fill absolute left-0 top-10 text-2xl cursor-pointer z-10'></i>
                        }
                        <div ref={scrollRef} className='flex gap-4 overflow-x-scroll scrollbar-hide'>
                            {images.map((img, i) => (
                                <img key={i} src='/map/petdp.jpg' onClick={(e) => {
                                    e.stopPropagation()
                                    dispatch(setImage('/map/petdp.jpg'))
                                }} className='rounded-md border border-gray-400 w-[100px] h-[100px] object-cover' />
                            ))}
                        </div>
                        {
                            images.length > 3 && <i onClick={scrollRight} className='bi bi-arrow-right-circle-fill absolute right-0 top-10 text-2xl cursor-pointer z-10'></i>
                        }

                    </div>
                    <p className='text-sm text-gray-700 my-4'><i className="bi bi-cake2-fill"></i> Age : {age} years</p>

                    {
                        vaccinations.length > 0 &&
                        <>
                            <p className='text-sm text-gray-700'><i className="bi bi-capsule"></i> Vaccinations</p>
                            <ul>
                                {
                                    vaccinations.map((v, i) => (
                                        <li className='text-sm text-gray-700' key={i}>{v}</li>
                                    )
                                    )
                                }
                            </ul>
                        </>
                    }
                    <button onClick={(e) => e.stopPropagation()} className="bg-primary cursor-pointer text-xs text-white px-4 py-1 rounded-sm hover:bg-highlight2 transition">
                        Book Appointment
                    </button>
                </div>
            }
        </div>
    )
}

export default PetCard
