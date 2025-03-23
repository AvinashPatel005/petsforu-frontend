import { useState } from "react";
import Heading from "../Home/components/Heading";
import Footer from "../../components/Footer";
import QuickAccess from "../../components/QuickAccess";

const products = [
  { id: 1, name: "Dog Food", category: "Food", price: 2730,discount: "3%",discountprice: 220, image: "images/dogfood1.jpg" },
  { id: 2, name: "Cat Toy", category: "Toys", price: 1220,discount: "8%",discountprice: 220, image: "images/cattoy1.jpeg" },
  { id: 3, name: "Dog Cloth", category: "Accessories", price: 5340,discount: "2%",discountprice: 220, image: "images/dogcloth1.jpeg" },
  { id: 4, name: "Dog Shampoo", category: "Grooming", price: 1445,discount: "3%",discountprice: 220, image: "images/dogshampoo1.jpeg" },
  { id: 5, name: "Cat Food", category: "Food", price: 2325,discount: "3%",discountprice: 220, image: "images/catfood1.avif" },
  { id: 6, name: "Dog Toy", category: "Toys", price: 1462,discount: "8%",discountprice: 220, image: "images/dogtoy1.jpeg" },
  { id: 7, name: "Cat Cloth", category: "Accessories", price: 890,discount: "8%",discountprice: 220, image: "images/catcloth1.jpeg" },
  { id: 8, name: "Dog Brush", category: "Grooming", price: 118,discount: "8%",discountprice: 220, image: "images/dogbrush1.webp" },
];

const bestSellerscat = [
  { id: 9, name: "Whiskas Dry Cat Food", price: 224, discount: "3%",discountprice: 220, image: "images/whiskas.jpg" },
  { id: 10, name: "Royal Canin Fit Cat Food", price: 3266, discount: "8%",discountprice: 220, image: "images/royalcanin.jpg" },
  { id: 11, name: "Me-O Creamy Cat Treats", price: 98, discount: "2%",discountprice: 220, image: "images/meo.jpg" },
  { id: 12, name: "Whiskas Wet Cat Food", price: 582, discount: "3%",discountprice: 220, image: "images/whiskas_wet.jpg" },
  { id: 13, name: "Whiskas Wet Cat Food", price: 582, discount: "3%",discountprice: 220, image: "images/whiskas_wet.jpg" },
  { id: 14, name: "Royal Canin Fit Cat Food", price: 3266, discount: "8%",discountprice: 220, image: "images/royalcanin.jpg" },
  { id: 15, name: "Royal Canin Fit Cat Food", price: 3266, discount: "8%",discountprice: 220, image: "images/royalcanin.jpg" },

];
const bestSellersdog = [
  { id: 9, name: "Acana Dry Dog Food - Sport & Agility (11.4kg)", price: 224, discount: "3%",discountprice: 220, image: "images/whiskas.jpg" },
  { id: 10, name: "Acana Adult Dry Dog Food for Large Breeds", price: 3266, discount: "8%",discountprice: 220, image: "images/royalcanin.jpg" },
  { id: 11, name: "Acana Dry Dog Food for Large Breed Puppies", price: 98, discount: "2%",discountprice: 220, image: "images/meo.jpg" },
  { id: 12, name: "Ocean Dog Pumpkin Codfish & Orange Adult", price: 582, discount: "3%",discountprice: 220, image: "images/whiskas_wet.jpg" },
  { id: 13, name: "Ancestral Grain Dog Chicken & Pomegranate", price: 582, discount: "3%",discountprice: 220, image: "images/whiskas_wet.jpg" },
  { id: 14, name: "Acana Dry Dog Food for Large Breed Puppies", price: 3266, discount: "8%",discountprice: 220, image: "images/royalcanin.jpg" },
  { id: 15, name: "Acana Adult Dry Dog Food for Large Breeds", price: 3266, discount: "8%",discountprice: 220, image: "images/royalcanin.jpg" },

];

export default function Product() {
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("latest");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products
    .filter((product) => category === "All" || product.category === category)
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low-high") {
      return a.price - b.price;
    } else if (sortOption === "price-high-low") {
      return b.price - a.price;
    } else {
      return b.id - a.id;
    }
  });

  return (
    <>
    <div className="text-center flex flex-col items-center bg-primary-bg">
      <div className="mb-10">
        <img
          src={"images/petsbanner.jpg"}
          alt="Pet Products Banner"
          className="h-[500px] w-[100vw] object-cover object-top"
        />
      </div>
      <Heading decscription="PRODUCTS" />

      {/* Search Bar */}
      <div className="flex justify-center my-5">
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-300 px-4 py-2 rounded-lg w-[300px] focus:outline-none focus:ring-2 focus:ring-highlight2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="my-5 flex gap-4">
        <select
          className="border border-gray-300 px-3 py-2 rounded-lg"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Toys">Toys</option>
          <option value="Accessories">Accessories</option>
          <option value="Grooming">Grooming</option>
        </select>
        <select
          className="border border-gray-300 px-3 py-2 rounded-lg"
          onChange={(e) => setSortOption(e.target.value)}
          value={sortOption}
        >
          <option value="latest">Sort by Latest</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-5 gap-10 max-w-[1300px] w-full mb-10">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <div
              key={product.id}
              className="product-card bg-white relative py-10 px-4 overflow-hidden shadow-lg rounded-md flex flex-col items-center gap-2"
            >
              <img src={product.image} alt={product.name} className="h-[200px]" />
              <h2 className="text-s ">{product.name}</h2>
              <small>⭐⭐⭐⭐</small>
              <span className="text-gray-500 line-through text-lg">₹{product.discountprice}</span>
              <p className="font-bold">₹{product.price} <span className="text-sm text-gray-600">({product.discount} OFF)</span></p>
              <button className="mt-2 bg-primary hover:bg-highlight text-white py-1 px-4 rounded-lg">
              Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 col-span-5">No products found</p>
        )}
      </div>
      {/* Best Sellers Section */}
      <h2 className="text-2xl font-bold text-primary my-5">BEST SELLER FOR CAT</h2>
      <div className="grid grid-cols-5 gap-10 max-w-[1300px] w-full mb-10">
        {bestSellerscat.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-md p-4 flex flex-col items-center">
            <img src={product.image} alt={product.name} className="h-[150px]" />
            <h3 className="text-s">{product.name}</h3>
            <small>⭐⭐⭐⭐</small>
            <span className="text-gray-500 line-through text-lg">₹{product.discountprice}</span>
            <p className=" font-bold">₹{product.price} <span className="text-sm text-gray-600">({product.discount} OFF)</span></p>
            <button className="mt-2 bg-primary hover:bg-highlight text-white py-1 px-4 rounded-lg">Add to Cart</button>
          </div>
        ))}
      </div>
            {/* Best Sellers Section */}
            <h2 className="text-2xl font-bold text-primary my-5">BEST SELLER FOR DOG</h2>
      <div className="grid grid-cols-5 gap-10 max-w-[1300px] w-full mb-10">
        {bestSellersdog.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-md p-4 flex flex-col items-center">
            <img src={product.image} alt={product.name} className="h-[150px]" />
            <h3 className="text-s">{product.name}</h3>
            <small>⭐⭐⭐⭐</small>
            <span className="text-gray-500 line-through text-lg">₹{product.discountprice}</span>
            <p className=" font-bold">₹{product.price} <span className="text-sm text-gray-600">({product.discount} OFF)</span></p>
            <button className="mt-2 bg-primary hover:bg-highlight text-white py-1 px-4 rounded-lg">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
    <QuickAccess/>
    <Footer />
    </>

  );
}
