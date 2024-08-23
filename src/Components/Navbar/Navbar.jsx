import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navlinks = [
    { id: "1", name: "HOME", link: "/#" },
    { id: "2", name: "ABOUT US", link: "/#about us" },
    { id: "3", name: "TOUR PACKAGES", link: "/#tour packages" },
    { id: "4", name: "OUR SERVICES", link: "/#our services" },
    { id: "5", name: "GALLERY", link: "/#gallery" },
    { id: "6", name: "CONTACT", link: "/#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-8">
                <div>
                    <h1 className='text-xl font-bold font-serif'>TRAVEL AGENTS</h1>
                </div>
                <div className='hidden md:flex space-x-10'>
                    {Navlinks.map((link) => (
                        <a key={link.id} href={link.link} className='text-black hover:text-orange-500'>
                            {link.name}
                        </a>
                    ))}
                </div>
                <div className='md:hidden'>
                    <button 
                        className='text-gray-700 focus:outline-none'
                        onClick={toggleMenu}
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
                <div className="flex flex-col items-center py-4">
                    {Navlinks.map((link) => (
                        <a 
                            key={link.id} 
                            href={link.link} 
                            className='text-black hover:text-orange-500 py-2'
                            onClick={toggleMenu} // Close menu on link click
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
