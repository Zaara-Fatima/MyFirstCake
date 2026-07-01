import React, { useState, useEffect } from "react";
import { Button } from "../Button";
// import { cakes } from '../Home/Hero'
import { ProductCard } from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getproductThunk } from "../../store/productSlice";
import { addToCartThunk } from "../../store/cartSlice";

export const MenuComp = () => {
  const menu_opt = [
    {
      name: "All",
      icon: "cake",
    },
    {
      name: "Birthday Cakes",
      icon: "cake",
    },
    {
      name: "Wedding Cakes",
      icon: "favorite",
    },
    {
      name: "Cakes",
      icon: "cake",
    },
    {
      name: "Pasteries",
      icon: "bakery_dining",
    },
  ];

  const { items, loading, error } = useSelector((state) => state.products);

 
  console.log(items)


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproductThunk());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    console.log("Button clicked", product);
    dispatch(
      addToCartThunk({
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
      }),
    );
    
  };

  

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="flex flex-col justify-center items-center gap-10 py-8 min-h-screen">
      <div className="flex flex-col gap-2 max-w-xl">
        <div className="text-center text-xl font-bold">Our Delicious Menu</div>
        <p className="text-center text-lg font-medium text-[#5a5a5a]">
          Explore our delightful selection of handcrafted cakes, pastries, and
          desserts, perfect for any occasiion. Freshly baked with love,
          everyday.{" "}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        {menu_opt.map((item, index) => (
          <div
            className="bg-[#ffeb89] rounded-2xl hover:bg-[#b76e79] hover:text-white"
            key={index}
          >
            <Button text={item.name} icon={item.icon}  />
          </div>
        ))}
      </div>
      <div className="md:max-w-4xl sm:max-w-lg max-w-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
          {items.map((product) => (
            <div key={product._id}>
              <ProductCard
                title={product.name}
                featured_img={product.image}
                price={`$ ${product.price}`}
                button
                onAddtoCart={()=>handleAddToCart(product)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
