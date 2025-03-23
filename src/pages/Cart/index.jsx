import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import QuickAccess from "../../components/QuickAccess";
import Heading from "../Home/components/Heading";

const Cart = ({ cartItems = [], removeFromCart }) => {
  const totalPrice = cartItems.length > 0 ? cartItems.reduce((acc, item) => acc + item.price, 0) : 0;

  return (
    <>
    <div className="w-full flex flex-col items-center p-8 h-screen justify-between">
      {cartItems.length === 0 ? (
        <div className="text-center">
          <h2 className="p-8"><Heading decscription="CART"/></h2>
          <p className="text-gray-500 mt-1 p-5">Oops, your cart is feeling a bit light. Time to give it some love and add some goodies!</p>
          <Link to="/product" className="mt-4 bg-primary text-white px-6 py-2 rounded-full hover:bg-highlight2">Continue Shopping</Link>
        </div>
      ) : (
        <div className="w-full max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4 p-10">Your Cart</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
              <p className="flex-1 text-lg ml-4">{item.name}</p>
              <p className="text-lg font-semibold">₹{item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 text-lg font-bold">Total: ₹{totalPrice}</div>
          <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">Proceed to Checkout</button>
        </div>
      )}
      
      <div className="flex justify-center space-x-12 mt-8">
        <div className="text-center">
          <span className="text-xl">✅</span>
          <p className="font-semibold">Trusted brands</p>
        </div>
        <div className="text-center">
          <span className="text-xl">📦</span>
          <p className="font-semibold">Free returns</p>
        </div>
        <div className="text-center">
          <span className="text-xl">🔒</span>
          <p className="font-semibold">Secure payments</p>
        </div>
      </div>
      
      <div className="bg-green-100 w-full mt-8 p-4 flex justify-around text-green-700 text-sm">
        <div className="flex items-center space-x-2">
          <span>🚚</span>
          <p>24hr Delivery <br /> <span className="text-gray-600">In 24 cities</span></p>
        </div>
        <div className="flex items-center space-x-2">
          <span>🐶</span>
          <p>1,50,000+ <br /> <span className="text-gray-600">Happy pet parents</span></p>
        </div>
        <div className="flex items-center space-x-2">
          <span>🩺</span>
          <p>Complimentary vet consult <br /> <span className="text-gray-600">For every new member</span></p>
        </div>
        <div className="flex items-center space-x-2">
          <span>💊</span>
          <p>Pet Pharmacy <br /> <span className="text-gray-600">Exclusive</span></p>
        </div>
      </div>
      </div>
    
    <QuickAccess/>
    <Footer />
    </>
  );
};

export default Cart;
