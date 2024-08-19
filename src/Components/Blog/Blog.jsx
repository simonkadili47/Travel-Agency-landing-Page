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

      {/* <div className='flex gap-4 pl-28 w-auto h-auto mt-5 object-cover mb-4 mr-16'> */}
      <div className="grid grid-cols-3  px-24 pt-5 ">
        <div className="flex flex-col">
          <div className="bg-blue-400 pl-8 ml-12 pt-12 mr-0">
            <img src={image1} alt="" />
          </div>

          <div className="flex flex-col justify-center items-center pt-2">
          <h1 className="pr-12 font-bold">The Amazing Difference a Year of </h1>
          <h1 className="pr-56 font-bold">Travelling</h1>
          <p className="pl-12 text-sm pt-2">There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep.</p>
          </div>

        </div>
        <div className="flex flex-col">
          <div className="bg-orange-400 pl-8 ml-12 pt-12 mr-0 ">
            <img src={image1} alt="" />
          </div>
         
          <div className="flex flex-col justify-center items-center pt-2">
          <h1 className="pr-10 font-bold"> Reflections on 5 Months of Travel:  </h1>
          <h1 className="pr-48 font-bold">Time to Hang</h1>
          <p className="pl-10 text-sm pt-2">Doting pet parents have a relentless need to constantly photograph every adorable pet moment. </p>
          
          </div>
          
          
        </div>
        <div className="flex flex-col">
          <div className="bg-blue-400 pl-8 ml-12 pt-12 mr-0">
            <img src={image1} alt="" />
          </div>
           
          <div className="flex flex-col justify-center items-center pt-2">
          <h1 className="pr-6 font-bold"> How to Save Money While Visiting  </h1>
          <h1 className="pr-56 font-bold">Africa .</h1>
          <p className="pl-14 text-sm pt-2">It is easy to forget that animals are living creatures with a beating heart. </p>
          
          </div>
          
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Blog;
