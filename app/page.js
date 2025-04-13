"use client";
import { useState, useEffect } from "react";
import ItemCard from "@/components/ItemCard";

const Home = () => {

  // Var to store list of items
  const [items, setItems] = useState([]);

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

  return (
      <div className="space-y-8 p-4">
          <div className="space-y-6">
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item, index) => (
              < ItemCard
                item={item}
                key={index}
                src={item.img}
              />
            ))}
          </div>
      </div>
  );
};

export default Home;