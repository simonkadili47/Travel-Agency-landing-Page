import React from "react";
import { FaInstagram } from "react-icons/fa";



function Footer() {
  return (
    <div className="bg-pink-200 pl-5 py-40 pt-16 pb-2  ">
      <div className="grid grid-cols-5 gap-4 border-b   border-gray-400 pb-24">
        <div className="pl-12">
          <h1>TRAVEL AGENTS</h1>
          <div className="pt-2">
            <p>
              We believe brand interaction is key in communication. Real
              innovations and a positive.
            </p>
            <div className="pt-4">
            <FaInstagram />
            </div>
           
          </div>
          <div></div>
        </div>
        <div className="pl-32">
          <h1>About Us</h1>
          <div className="pt-3 text-sm">
            <p>Features</p>
            <p className="pt-2">FAQ's</p>
            <p className="pt-2">News</p>
            <p className="pt-2">Pricing</p>
          </div>
        </div>
        <div className="pl-16">
          <h1>Campany</h1>
          <div className="pt-3 text-sm">
            <p>Core Values</p>
            <p className="pt-2">Patner W/ us</p>
            <p className="pt-2">Blog</p>
            <p className="pt-2">Contact</p>
          </div>
        </div>
        <div>
          <h1>Support</h1>
          <div className="pt-3 text-sm">
            <p>Support centers</p>
            <p className="pt-2">Feedback</p>
            <p className="pt-2">Accessibility</p>
          </div>
        </div>
        <div className="pr-16">
          <h1>Get in touch</h1>
          <div className="pt-3 text-sm">
            <input className="p-4" type="text" placeholder="Your email here" />
          </div>
          <div className="pt-2 px-10">
            <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300">
              <a href="">Get Access</a>
            </button>
          </div>
        </div>
      </div>
      <div className="text-center pt-3">
        <p>Simon kadili © 2024 All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
