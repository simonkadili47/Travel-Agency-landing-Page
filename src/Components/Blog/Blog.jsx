import React from "react";
import image1 from "../Blog/image1.png";
import image2 from "../Blog/image2.png";
import image3 from "../Blog/image3.png";

function Blog() {
  return (
    <div className="mt-8 px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="font-bold text-2xl md:text-3xl mb-4 md:mb-0">Our Blog</h1>
        <div className="text-center md:text-right">
          <p>Stay up to date with the latest tech trends</p>
          <p>and news in the pets.</p>
        </div>
      </div>
      <div className="text-center md:text-right mt-4">
        <button className="border rounded-lg px-6 border-orange-500 hover:bg-orange-500 hover:text-white text-orange-500 py-2 transition duration-300">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="relative flex flex-col">
          <div className="border-t-8 border-l-8 border-blue-400 p-2 rounded-lg"> {/* Increased border width */}
            <img src={image1} alt="Blog 1" className="w-full h-64 object-cover rounded-lg" />
          </div>
          <div className="flex flex-col justify-center items-center p-4 bg-white rounded-b-lg">
            <h1 className="font-bold text-lg text-center mb-2">The Amazing Difference a Year of Travelling</h1>
            <p className="text-sm text-center">There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep.</p>
          </div>
        </div>

        <div className="relative flex flex-col">
          <div className="border-t-8 border-l-8 border-orange-400 p-2 rounded-lg"> {/* Increased border width */}
            <img src={image2} alt="Blog 2" className="w-full h-64 object-cover rounded-lg" />
          </div>
          <div className="flex flex-col justify-center items-center p-4 bg-white rounded-b-lg">
            <h1 className="font-bold text-lg text-center mb-2">Reflections on 5 Months of Travel: Time to Hang</h1>
            <p className="text-sm text-center">Doting pet parents have a relentless need to constantly photograph every adorable pet moment.</p>
          </div>
        </div>

        <div className="relative flex flex-col">
          <div className="border-t-8 border-l-8 border-blue-400 p-2 rounded-lg"> {/* Increased border width */}
            <img src={image3} alt="Blog 3" className="w-full h-64 object-cover rounded-lg" />
          </div>
          <div className="flex flex-col justify-center items-center p-4 bg-white rounded-b-lg">
            <h1 className="font-bold text-lg text-center mb-2">How to Save Money While Visiting Africa</h1>
            <p className="text-sm text-center">It is easy to forget that animals are living creatures with a beating heart.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
