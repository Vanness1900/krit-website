'use client';

import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        {/* Main Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-krit-white">
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-6">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center">
                <img 
                    src="/Krit_Logotype.svg" 
                    alt="Krit Logo" 
                    className="h-8 w-auto lg:h-10"
                />
                </a>

                {/* Desktop Navigation + Hamburger */}
                <div className="flex items-center gap-8 lg:gap-12">
                {/* Desktop Links - hidden on mobile */}
                <a 
                    href="/works" 
                    className="hidden lg:block font-montserrat text-krit-black hover:text-krit transition-colors text-lg"
                >
                    Works
                </a>
                <a 
                    href="/us" 
                    className="hidden lg:block font-montserrat text-krit-black hover:text-krit transition-colors text-lg"
                >
                    Us
                </a>

                {/* Hamburger Button - shows on all screen sizes */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-col gap-1.5 w-8 h-8 justify-center items-end relative z-50"
                    aria-label="Toggle menu"
                >
                    <span 
                    className={`block h-0.5 bg-krit-black transition-all duration-300 ${
                        isOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'
                    }`}
                    />
                    <span 
                    className={`block h-0.5 bg-krit-black transition-all duration-300 ${
                        isOpen ? 'opacity-0' : 'w-6 opacity-100'
                    }`}
                    />
                    <span 
                    className={`block h-0.5 bg-krit-black transition-all duration-300 ${
                        isOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'
                    }`}
                    />
                </button>
                </div>
            </div>
            </div>
        </nav>

        {/* Full Screen Menu Overlay */}
        <div 
            className={`fixed inset-0 bg-krit-white z-50 transition-all duration-500 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
            <div className="h-full flex flex-col">
            {/* Top Bar with Close Button and Logo */}
            <div className="px-6 lg:px-12 py-6 flex items-center justify-between">
                {/* Close Button */}
                <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center"
                aria-label="Close menu"
                >
                <span className="block w-6 h-0.5 bg-krit-black rotate-45 absolute" />
                <span className="block w-6 h-0.5 bg-krit-black -rotate-45 absolute" />
                </button>

                {/* Logo */}
                <img 
                src="/Krit_Logotype.svg" 
                alt="Krit Logo" 
                className="h-8 w-auto lg:h-10"
                />
            </div>

            {/* Menu Content */}
            <div className="flex-1 flex">
                {/* Left Side - WHO Section */}
                <div className="w-full lg:w-1/2 px-6 lg:px-12 py-12 flex flex-col justify-between">
                <div>
                    <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-krit-black mb-6">
                    WHO?
                    </h2>
                    <p className="font-blender text-krit-black text-sm lg:text-base mb-4">
                    Lorem ipsum dolor sit amet
                    </p>
                    <p className="font-blender text-krit-black text-sm lg:text-base mb-8">
                    Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
                    </p>
                    <a 
                    href="/team" 
                    className="font-montserrat font-bold text-krit-black hover:text-krit transition-colors text-sm inline-flex items-center gap-2"
                    >
                    MEET THE TEAM <span>→</span>
                    </a>
                </div>

                {/* Let's Talk Section */}
                <div className="hidden lg:flex items-end gap-4">
                    <img 
                    src="/character.svg" 
                    alt="Character" 
                    className="w-16 h-auto"
                    />
                    <div>
                    <p className="font-montserrat font-bold text-krit-black text-lg mb-1">
                        LET'S TALK
                    </p>
                    <p className="font-blender text-krit-black text-xs">
                        It's free of charge and we don't bite.
                    </p>
                    </div>
                </div>
                </div>

                {/* Right Side - Navigation Links */}
                <div className="hidden lg:flex lg:w-1/2 items-center justify-end px-12">
                <nav className="flex flex-col items-end gap-6">
                    <a 
                    href="/us" 
                    className="font-montserrat font-bold text-krit-black hover:text-krit transition-colors text-2xl"
                    onClick={() => setIsOpen(false)}
                    >
                    US
                    </a>
                    <a 
                    href="/works" 
                    className="font-montserrat font-bold text-krit-black hover:text-krit transition-colors text-2xl"
                    onClick={() => setIsOpen(false)}
                    >
                    WORKS
                    </a>
                    <a 
                    href="/initiatives" 
                    className="font-montserrat font-bold text-krit-black hover:text-krit transition-colors text-2xl"
                    onClick={() => setIsOpen(false)}
                    >
                    INITIATIVES
                    </a>
                    <a 
                    href="/stories" 
                    className="font-montserrat font-bold text-krit-black hover:text-krit transition-colors text-2xl"
                    onClick={() => setIsOpen(false)}
                    >
                    STORIES
                    </a>
                    <a 
                    href="/goods" 
                    className="font-montserrat font-bold text-krit-black hover:text-krit transition-colors text-2xl"
                    onClick={() => setIsOpen(false)}
                    >
                    GOODS
                    </a>
                </nav>
                </div>

                {/* Mobile Navigation - Full Width */}
                <div className="lg:hidden absolute bottom-0 right-0 px-6 pb-12">
                <nav className="flex flex-col items-end gap-4">
                    <a 
                    href="/us" 
                    className="font-montserrat font-bold text-krit-black hover:text-krit transition-colors text-xl"
                    onClick={() => setIsOpen(false)}
                    >
                    US
                    </a>
                    <a 
                    href="/works" 
                    className="font-montserrat font-bold text-krit-black hover:text-krit transition-colors text-xl"
                    onClick={() => setIsOpen(false)}
                    >
                    WORKS
                    </a>
                    <a 
                    href="/initiatives" 
                    className="font-montserrat font-bold text-krit-black hover:text-krit transition-colors text-xl"
                    onClick={() => setIsOpen(false)}
                    >
                    INITIATIVES
                    </a>
                    <a 
                    href="/stories" 
                    className="font-montserrat font-bold text-krit-black hover:text-krit transition-colors text-xl"
                    onClick={() => setIsOpen(false)}
                    >
                    STORIES
                    </a>
                    <a 
                    href="/goods" 
                    className="font-montserrat font-bold text-krit-black hover:text-krit transition-colors text-xl"
                    onClick={() => setIsOpen(false)}
                    >
                    GOODS
                    </a>
                </nav>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}