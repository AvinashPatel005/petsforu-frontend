import React from "react";
import Heading from "./Heading";

const pricingPlans = [
  {
    name: "BASIC",
    price: 49,
    color: "bg-black",
    features: [true, true, false, false],
  },
  {
    name: "STANDARD",
    price: 99,
    color: "bg-highlight",
    features: [true, true, true, false],
  },
  {
    name: "EXTENDED",
    price: 149,
    color: "bg-black",
    features: [true, true, true, true],
  },
];

const PricingCard = ({ plan }) => {
  return (
    <div className="w-full sm:w-1/3 p-4 mb-10">
      <div className="bg-secondary-bg rounded-lg shadow-lg overflow-hidden text-center">
        <h2 className="text-2xl font-bold py-4">{plan.name}</h2>
        <p className="text-gray-500">The Best Choice</p>

        <div className={`py-4 ${plan.color} text-white text-3xl font-bold`}>
          ₹{plan.price} <span className="text-lg font-normal">/ Mo</span>
        </div>

        <ul className="py-4 px-6 text-gray-700">
          {["24/7 Vet Helpline", "Vaccination", "Grooming", "Insurance"].map((feature, index) => (
            <li key={index} className="flex justify-between border-b py-2">
              {feature}
              <span>{plan.features[index] ? <i className="bi bi-check2 text-primary"></i> : <i className="bi bi-x-lg text-red-500"></i>}</span>
            </li>
          ))}
        </ul>

        <div className="py-4">
          <button className="bg-primary cursor-pointer text-white px-6 py-2 rounded-full font-bold hover:bg-highlight2 transition">
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

const Subscription = () => {
  return (
    <div className="max-w-[1100px] w-full mt-10">
      <Heading heading={"PRICING PLAN"} decscription={"COMPETITIVE PRICING FOR PET SERVICES"} />

      <div className="flex flex-wrap justify-center ">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Subscription;
