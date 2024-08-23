import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-pink-200 px-4 py-10">
      <div className="border-b border-gray-400 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h1 className="font-bold text-lg">TRAVEL AGENTS</h1>
            <p className="mt-2 text-sm">
              We believe brand interaction is key in communication. Real
              innovations and a positive.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-gray-700 hover:text-gray-900 transition duration-300" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl text-gray-700 hover:text-gray-900 transition duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl text-gray-700 hover:text-gray-900 transition duration-300" />
              </a>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg">About Us</h1>
            <div className="mt-3 text-sm">
              <p>Features</p>
              <p className="mt-2">FAQ's</p>
              <p className="mt-2">News</p>
              <p className="mt-2">Pricing</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg">Company</h1>
            <div className="mt-3 text-sm">
              <p>Core Values</p>
              <p className="mt-2">Partner W/ us</p>
              <p className="mt-2">Blog</p>
              <p className="mt-2">Contact</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg">Support</h1>
            <div className="mt-3 text-sm">
              <p>Support centers</p>
              <p className="mt-2">Feedback</p>
              <p className="mt-2">Accessibility</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg">Get in touch</h1>
            <input
              className="mt-3 p-2 w-full border border-gray-300 rounded-md"
              type="text"
              placeholder="Your email here"
            />
            <button className="bg-orange-500 text-white py-2 px-4 rounded-lg mt-3 w-full hover:bg-orange-600 transition duration-300">
              <a href="">Get Access</a>
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">Simon Kadili © 2024 All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
