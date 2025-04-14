"use client";
import { BookOpenIcon, ShoppingCartIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from "react";
import { Nunito } from 'next/font/google';
import ItemCard from "@/components/ItemCard";

// Import Nunito font and set default weight
const nunito = Nunito({
  weight: ['800'],
});

const Home = () => {

  // Var to store list of items
  const [items, setItems] = useState([]);
  
  // Var to represent cart
  const [cart, setCart] = useState(0);

  // Var to store search query
  const [searchQuery, setSearchQuery] = useState("");

  // Var to store filtered items based on search query
  const filteredItems = items.filter((item) => {
    return item.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Get items from items.json once components are rendered
  useEffect(() => {
    const getItemData = async () => {
      // Get item data from JSON file
      const response = await fetch("/items.json");
      const data = await response.json();
      const items = data.items;
      setItems(items);
    };
    getItemData();
  }, []);

  // Function to handle adding item to cart
  const addToCart = () => {
    setCart(cart + 1);
  }

  return (
    <div className="space-y-8 p-4">
      <nav className={`p-4 flex text-white items-center justify-between shadow-md ${nunito.className}`} style={{ backgroundColor: "#00C763", borderRadius: "10px" }}>
        <div className="flex text-3xl font-semibold items-center gap-x-2">
          <BookOpenIcon className="w-10 h-10" />
          MiniMart Bookstore
        </div>
        
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-2 border-2 border-white rounded-full px-2">
            <input
              className="bg-transparent text-white px-4 py-2 focus:outline-none focus:ring-0 background-color: transparent"
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <MagnifyingGlassCircleIcon className="w-8 h-8" />
          </div>

          <div className="flex items-center gap-x-2 border-2 border-white rounded-full py-1 px-3">
            <ShoppingCartIcon className="w-7 h-7" />
            <span>{cart}</span>
          </div>
        </div>
      </nav>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item, index) => (
          < ItemCard
            item={item}
            key={index}
            src={item.img}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;