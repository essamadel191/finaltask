"use client";

import { useState, useEffect } from "react";
import { Product } from "@/Types/product.type";
import HomeCard from "../HomeCard/HomeCard";

interface DynamicSearchProps {
  products: Product[];
}

export default function DynamicSearch({ products }: DynamicSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // debounce search (3 seconds)
  useEffect(() => {
    const handler = setTimeout(() => {
      const filtered = products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }, 1000);

    return () => clearTimeout(handler);
  }, [searchTerm, products]);

  return (
    <>
      <div className="my-5">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-3 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap">
        {filteredProducts.map((product) => (
          <HomeCard key={product.id} product={product} />
        ))}
        {filteredProducts.length === 0 && (
          <p className="text-center w-full mt-10">No products found.</p>
        )}
      </div>
    </>
  );
}
