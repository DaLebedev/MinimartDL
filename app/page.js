"use client";
import { useState, useEffect } from "react";
import { BookOpenIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Nunito } from 'next/font/google';
import ItemCard from "@/components/ItemCard";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['800'],
});

const Home = () => {

  // Var to store list of items
  const [items, setItems] = useState([]);
  
  // Var to represent cart
  const [cart, setCart] = useState(0);

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
    console.log(cart);
  }

  return (
    // TODO: ADD SEARCH BAR
    <div className="space-y-8 p-4">
      <nav className={`p-4 flex text-white items-center justify-between shadow-md ${nunito.className}`} style={{ backgroundColor: "#00C763", borderRadius: "10px" }}>
        {/* Logo and Title */}
        <div className="flex text-3xl font-semibold items-center gap-x-2">
          <BookOpenIcon className="w-10 h-10" />
          MiniMart Bookstore
        </div>
        
        {/* Cart Icon */}
        <div className="flex items-center gap-x-2 border-2 border-white rounded-full py-1 px-3">
          <ShoppingCartIcon className="w-7 h-7" />
          <span>{cart}</span>
        </div>
      </nav>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
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