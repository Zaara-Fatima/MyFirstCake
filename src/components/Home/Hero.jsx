import React, { useState } from "react";
import { Button } from "../Button";
import { ProductCard } from "../Menu/ProductCard";
import { CommentCard } from "../CommentCard";
import { cake2 } from "../../assets/images/images";

export const Hero = () => {
  const [visible, setVisible]=useState("3")
  return (
    <div className=" flex flex-col pt-6 ">
      <div
        className="relative w-full min-h-screen bg-center bg-repeat group "
        style={{
          backgroundImage: `url(${cake2})`,
          backgroundSize: "cover",
          
        }}
      >
         <div className="absolute inset-0 bg-[#5a5a5a74] group-hover:opacity-0 transition-opacity duration-300"></div>
        <div className="relative min-h-screen flex flex-col gap-6 justify-center items-center ">
          <div className=" font-bold text-6xl text-center max-w-2xl text-[#000000]" style={{textShadow:"2px 2px 8px rgba(0,0,0,0.50)"}}>
            Taste the Sweetness, celebrate the Moments.
          </div>
          <Button text="Order Now" className="bg-[#b76e79]  md:w-auto shrink-0 text-white mt-2"/>
        </div>
      </div>

      <div className="flex flex-col gap-6 bg-[#f4f4f4] py-20">
        <h1 className="text-xl font-bold text-center">Our Featured Delights</h1>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {cakes.slice(0,visible).map((cake, index) => (
              <ProductCard
                key={index}
                title={cake.title}
                featured_img={cake.img}
                price={cake.price}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="rounded-full w-2 h-2 bg-[#5a5a5a]"></div>
          <div className="rounded-full w-2 h-2 bg-[#b76e79]"></div>
        </div>
      </div>
      <div className="flex gap-6 flex-col py-20">
        <h1 className="text-xl font-bold text-center ">
          What Our Customers Say
        </h1>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {comments.map((comment, index) => (
              <div key={index} className="">
                <CommentCard
                  comment={comment.comment}
                  userImg={comment.userImg}
                  userName={comment.userName}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const comments = [
  {
    comment: "The cake was super delicious and fresh!",
    userName: "Aisha Khan",
    userImg:
      "https://tse4.mm.bing.net/th/id/OIP.nffjMgqVv9pQdAwdZPdEDAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    comment: "Beautiful design and tasted amazing. Highly recommended!",
    userName: "Rahul Sharma",
    userImg:
      "https://www.allkpop.com/upload/2025/04/content/232222/1745461326-03.jpg",
  },
  {
    comment: "Soft, creamy, and not too sweet. Loved it!",
    userName: "Neha Verma",
    userImg: "https://wallpaperaccess.com/full/5339685.jpg",
  },
];

export const cakes = [
  {
    title: "Chocolate Fudge Cake",
    img: "https://tse2.mm.bing.net/th/id/OIP.FmAxTddV1lbVgREsuyPh7QHaJr?rs=1&pid=ImgDetMain&o=7&rm=3",
    price: "$45.00",
  },
  {
    title: "Red Velvet Cake",
    img: "https://thescranline.com/wp-content/uploads/2023/06/RED-VELVET-CAKE-23-S-01.jpg",
    price: "$50.00",
  },
  {
    title: "Vanilla Cream Cake",
    img: "https://th.bing.com/th/id/OIP.RVfvOwCXRWmbgKBDMBdMNgHaLH?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    price: "$40.00",
  },
  {
    title: "Strawberry Dream Cake",
    img: "https://tse1.explicit.bing.net/th/id/OIP.0wfrh4LXvHaev05IPVgvBQHaJK?rs=1&pid=ImgDetMain&o=7&rm=3",
    price: "$45.00",
  },
  {
    title: "Elegent tired Wedding Cake",
    img: "https://i.pinimg.com/originals/b1/4d/8a/b14d8a0530bd8e701b894696e02811c5.jpg",
    price: "$180.00",
  },
  {
    title: "Chocolate Croissant",
    img: "https://i.pinimg.com/originals/9f/8f/7b/9f8f7b25b8eed73ac8091ac6856093ee.jpg",
    price: "$4.25",
  },
  {
    title: "Lemon Raspberry Tart",
    img: "https://i.pinimg.com/originals/0d/d9/5a/0dd95a94c561786634ac2d54307a6f6e.jpg",
    price: "$6.75",
  },
  {
    title: "Fruit and Floral Wedding Cake",
    img: "https://www.womangettingmarried.com/wp-content/uploads/2025/01/flower-and-fruit-wedding-cake-683x1024.jpg",
    price: "$220.00",
  },
  {
    title: "Almond Bear Claw",
    img: "https://tse3.mm.bing.net/th/id/OIP.EjDmLIvILwFL4ZMgRoUoAAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    price: "$4.50",
  },
  {
    title: "Caramel Macchiato Cake",
    img: "https://static-assets-prod.fnp.com/images/pr/l/v20221118185206/cream-drop-caramel-cake-half-kg-eggless_1.jpg",
    price: "$48.00",
  },
  {
    title: "Bluberry Muffins",
    img: "https://www.rainbownourishments.com/wp-content/uploads/2022/03/vegan-blueberry-muffins-1-1.jpg",
    price: "$3.25",
  },
  {
    title: "Confetti Celebration cake",
    img: "https://auntiescakery.com/wp-content/uploads/2023/12/Confetti-Birthday-Cake-tn-4.jpg",
    price: "$42.25",
  },
  
];
