import React from "react";
import image1 from "../Blog/image1.png";
import image2 from "../Blog/image2.png";
import image3 from "../Blog/image3.png";

function Blog() {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center px-28">
        <h1 className="font-bold text-3xl">Our Blog</h1>
        <div className="text-right break-words">
          <p>Stay up to date with the latest tech trends</p>
          <p className="pr-36"> and news in the pets.</p>
        </div>
      </div>
      <div className="text-right pr-72 pt-3">
        <button className="border rounded-lg px-6 border-orange-500 hover:bg-orange-500 hover:text-white text-orange-500 py-2 transition duration-300">
          View All
        </button>
      </div>

      <div className="grid grid-cols-3 px-24 pt-5 gap-4"> {/* Adjusted gap */}
        <div className="flex flex-col">
          <div className="bg-blue-400 pl-8 pt-10 rounded-lg"> {/* Reduced padding */}
            <img  src={image1} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center pt-2">
            <h1 className="font-bold pr-8">The Amazing Difference a Year of Travelling</h1>
            <p className="text-sm pt-2 pr-4 text-center">There isn’t a relationship around that can survive without</p><p className="text-sm pr-12"> trust. My relationship with my dog Peyton is deep.</p>
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="bg-orange-400 pl-8 pt-10 rounded-lg"> {/* Reduced padding */}
            <img src={image2} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center pt-2">
            <h1 className="font-bold">Reflections on 5 Months of Travel: Time to Hang</h1>
            <p className="text-sm pt-2 text-center">Doting pet parents have a relentless need to constantly</p>
            <p className="text-sm pr-20"> photograph every adorable pet moment.</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="bg-blue-400 pl-8 pt-10 rounded-lg"> {/* Reduced padding */}
            <img src={image3} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center pt-2">
            <h1 className="font-bold">How to Save Money While Visiting Africa</h1>
            <p className="text-sm pt-2 text-center">It is easy to forget that animals are living creatures with a</p>
            <p className="text-sm pr-64"> beating heart.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
