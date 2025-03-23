import React from 'react'
import Heading from './Heading'

const Service = () => {
    const services = [
        {
            name: "Adoption",
            description: "Find and adopt pets from verified sellers and breeders.",
            available: true,
            image: "/images/snacks.png"
        },
        {
            name: "Products",
            description: "Wide range of pet food, toys, and essentials.",
            available: true,
            image: "/images/snacks.png"
        },
        {
            name: "Grooming",
            description: "Grooming services including haircuts, and nail trimming.",
            available: true,
            image: "/images/snacks.png"
        },
        {
            name: "Healthcare",
            description: "Veterinary consultations, vaccinations, and pet health checkups.",
            available: true,
            image: "/images/snacks.png"
        },
        {
            name: "Boarding",
            description: "Safe and comfortable boarding facilities for your pets while you are away.",
            available: true,
            image: "/images/snacks.png"
        },
        {
            name: "Subscription",
            description: "All in one package for your pet's needs.",
            available: true,
            image: "/images/snacks.png"
        }
    ]
    return (
        <div className='max-w-[1100px] w-full mt-10'>
            <Heading heading={"SERVICES"} decscription={"OUR EXCELLENT PET CARE SERVICES"}/>
            <div className='grid-cols-2 grid my-4 gap-4'>
                {services.map((service, index) => {
                    return (
                        <div key={index} className='px-2 flex items-center gap-1 bg-secondary-bg h-36'>
                            <img src={service.image} className='w-20 h-20 ml-4 mr-3' />
                            <div>
                                <h2 className='text-xl font-semibold text-on-primary' key={index}>{service.name}</h2>
                                <p className='text-sm text-on-primary' >{service.description}</p>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Service
