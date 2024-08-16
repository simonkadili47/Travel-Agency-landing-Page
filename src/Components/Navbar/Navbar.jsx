import React from 'react';

const Navlinks = [
    { id: "1", name: "HOME", link: "/#" },
    { id: "2", name: "ABOUT US", link: "/#about us" },
    { id: "3", name: "TOUR PACKAGES", link: "/#tour packages" },
    { id: "4", name: "OUR SERVICES", link: "/#our services" },
    { id: "5", name: "GALLERY", link: "/#gallery" },
    { id: "6", name: "CONTACT", link: "/#contact" },
];

const Navbar = () => {
    return (
        <nav>
            <div className="container mx-auto flex justify-between items-center py-4 px-8">
                <div>
                    <h1 className='text-xl font-bold font-serif'>TRAVEL AGENTS</h1>
                </div>
                <div className='hidden md:flex space-x-10 justify-center w-full'>
                    {Navlinks.map((link) => (
                        <a key={link.id} href={link.link} className='text-black  hover:text-orange-500'>
                            {link.name}
                        </a>
                    ))}
                </div>
                <div className='md:hidden'>
                    <button className='text-gray-700 focus:outline-none'>
                        {/* Hamburger menu icon for mobile view */}
                        Menu
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
