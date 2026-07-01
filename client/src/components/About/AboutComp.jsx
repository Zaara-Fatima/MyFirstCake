import React from "react";
import { ValueCard } from "./ValueCard";
import { Timeline } from "./timeLine";

export const AboutComp = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-8 py-8">
      <div className="text-center bg-[#FAFAFA] w-full py-10 px-10 ">
        <p className="text-[#b76e79] text-3xl font-extrabold ">Our Story, Our Passion</p>
        <p className="text-[#5a5a5a] text-lg font-semibold"> 
          At Sweet Delights, every cake tells a story, and every bite is a
          celebration. Discover the journey of our bakery, built on love,
          dedication, and the finest ingredients
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 place-content-center max-w-4xl gap-6 px-6 py-6">
        <div className="col-span-full text-center text-xl font-bold">Our Joureny of Sweetness</div>
        <div className="max-w-4xl ">
          <img src="https://tse3.mm.bing.net/th/id/OIP.h-e7XhPD3y2MeakSKBt3mAHaE8?w=2048&h=1366&rs=1&pid=ImgDetMain&o=7&rm=3" className="object-cover rounded-xl"></img>
        </div>
        <div className="max-w-xl flex flex-col justify-center ">
          <h1 className="text-lg font-semibold text-[#b76e79]">Our Humble Beginnings</h1>
          <p className=" text-sm text-[#5a5a5a] ">
            Sweet Delights began in 2005 with simple dream: to oake delicious
            cakes that brought smiles to faces. Our founder, Clara, started from
            her home kitchen, driven by a passion for traditional recipes and a
            desire to share her grandmother's beloved pastries with the
            neighborhood.
          </p>
        </div>
        <div className="max-w-xl flex flex-col justify-center">
          <h1 className="text-lg font-semibold text-[#b76e79]">Growth and Community</h1>
          <p className=" text-sm text-[#5a5a5a]">
            As word spread about Clara's exquisite cakes, Sweet Delights quickly
            outgrew its home kitchen. In 2007, we opened our first cozy shop,
            becoming a beloved community hub. We believe in sourcing local
            ingredients and fostering a warm, inviting atmosphere for all our
            customers.
          </p>
        </div>

        <div className="max-w-4xl ">
          <img src="https://s.alicdn.com/@sc04/kf/H31d3cc747e8c46b3b560e8fee00c3091E.jpg_720x720q50.jpg" className="object-cover rounded-xl"></img>
        </div>
        <div className="max-w-4xl ">
          <img src="https://i.pinimg.com/originals/d8/0c/f5/d80cf577b564dad91d7c6515aab496dc.jpg" className="object-cover rounded-xl"></img>
        </div>
          <div className="max-w-xl flex flex-col justify-center">
            <h1 className="text-lg font-semibold text-[#b76e79]"> Innovation in Every Bite</h1>
            <p className=" text-sm text-[#5a5a5a]">
              Today, Sweet Delights continues to honor its roots while embracing
              culinary innovation. Our team of passionate bakers constantly
              explores new flavors, techniques, and designs to create modern
              masterpieces that still carry the comforting taste of homemade
              goodness. Every cake is a work of art, baked with love.
            </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center bg-[#FAFAFA] max-w-6xl px-10 py-10 ">
        <h1 className="text-xl font-bold ">Our Mission & Values</h1>
        <p className="text-lg font-semibold text-[#5a5a5a] text-center max-w-2xl">
          To spread joy and create unforgettable moments through handcrafted baked goods, using only the finest ingredients and a sprinkle of love in every creation.
        </p>
        <div className="flex gap-6 flex-col md:flex-row max-w-6xl ">
          {values.map((value,index)=>
          <div className="">
            <ValueCard icon={value.icon} heading={value.heading} text={value.text}/>
          </div>)}
        </div>
      </div>
      <div>
        <Timeline/>
      </div>
    </div>
  );
};

const values = [
  {
    icon: "star_shine",
    heading: "Quality Ingredients",
    text: "We meticulously select the freshest, highest-quality ingredients to ensure every bite is a taste of perfection.",
  },
  {
    icon: "hand_package",
    heading: "Artisan Craftsmanship",
    text: "Our skilled bakers combine traditional techniques with creative flair, transforming simple ingredients into edible art.",
  },
  {
    icon: "sentiment_content",
    heading: "Customer Delight",
    text: "Your happiness is our priority. We strive to provide exceptional service and cakes that exceed expectations.",
  },
  {
    icon: "communities",
    heading: "Community Spirit",
    text: "We are proud to be a local bakery, supporting our community and creating a warm, welcoming space for everyone.",
  },
  {
    icon: "lightbulb",
    heading: "Creative Innovation",
    text: "Constantly exploring new flavors and designs to keep our menu exciting and delight your palate.",
  },
];
