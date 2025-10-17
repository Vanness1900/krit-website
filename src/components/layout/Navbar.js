'use client';

import Image from 'next/image';
import Link from 'next/link';
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
                    <Link href="/" className="flex items-center relative z-50">
                        <Image
                            src="/logo/Krit_Logotype.svg" 
                            alt="Krit Logo" 
                            width={64}
                            height={64}
                            className="h-8 w-auto lg:h-12"
                        />
                    </Link>

                    {/* Desktop Navigation + Hamburger */}
                    <div className="flex items-center gap-8 lg:gap-12">
                        {/* Desktop Links - hidden on mobile */}
                        <Link 
                            href="/works/The_Playlist"
                            className={`text-krit-black hover:text-krit transition-all duration-300 ease-in-out
                                ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                                hidden lg:block
                            `}
                        >
                            Works
                        </Link>
                        <span 
                            className={`text-gray-400 cursor-not-allowed transition-all duration-300 ease-in-out
                                ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                                hidden lg:block
                            `}
                        >
                            Us
                        </span>

                        {/* Hamburger Button - shows on all screen sizes */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex flex-col gap-1 w-6 h-6 justify-center relative z-50"
                            aria-label="Toggle menu"
                        >
                            <span
                                className={`block self-start h-1 rounded bg-krit-black transition-all duration-300 ${
                                isOpen ? 'w-8 rotate-45 translate-y-2.5' : 'w-5'
                                }`}
                            />
                            <span
                                className={`block self-end h-1 rounded bg-krit-black transition-all duration-300 ${
                                isOpen ? 'opacity-0' : 'w-5 opacity-100'
                                }`}
                            />
                            <span
                                className={`block self-start h-1 rounded bg-krit-black transition-all duration-300 ${
                                isOpen ? 'w-8 -rotate-45 -translate-y-2.5' : 'w-5'
                                }`}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        {/* Full Screen Menu Overlay */}
        <div 
            className={`fixed top-0 left-0 right-0 bottom-0 bg-krit-white z-30 transition-transform duration-500 ease-in-out ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            {/* MOBILE LAYOUT - Using justify-between wrapper */}
            <div className="lg:hidden h-full flex flex-col justify-between pt-24 px-6 py-12">
                {/* Navigation Links - Top Right (Mobile Only) */}
                <div className="self-end">
                    <nav className="flex flex-col items-end gap-4">
                        <h6 
                            className=" font-blender text-gray-400 cursor-not-allowed"
                        >
                            US
                        </h6>
                        <Link 
                            href="/works" 
                            className="font-bold text-krit-black hover:text-krit transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            WORKS
                        </Link>
                        <h6 
                            className=" font-blender text-gray-400 cursor-not-allowed"
                        >
                            INITIATIVES
                        </h6>
                        <h6 
                            className=" font-blender text-gray-400 cursor-not-allowed"
                        >
                            STORIES
                        </h6>
                        <h6 
                            className=" font-blender text-gray-400 cursor-not-allowed"
                        >
                            GOODS
                        </h6>
                    </nav>
                </div>

                {/* WHO Section - Middle Left (Mobile Only) */}
                <div className="self-start max-w-xs">
                    <h2 className="font-bold text-krit-black mb-6">
                        WHO?
                    </h2>
                    <p className="text-krit-black mb-4">
                        Lorem ipsum dolor sit amet
                    </p>
                    <p className="text-krit-black mb-8">
                        Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
                    </p>
                    <Link 
                        href="/team" 
                        className="font-bold text-krit-black hover:text-krit transition-colors inline-flex items-center gap-2"
                    >
                        MEET THE TEAM <span>→</span>
                    </Link>
                </div>

                {/* Let's Talk - Bottom Right (Mobile Only) */}
                <div className="self-end flex flex-col items-end gap-0">
                    <div className="flex gap-4 items-end">
                        <Image 
                            src="/logo/Krit_Hamburger_Mascot.svg" 
                            alt="Character"
                            height={64}
                            width={64}
                            className="w-auto h-32 mb-2"
                        />
                        <h5 className="font-bold font-blender text-krit-black">
                            LET&apos;S TALK
                        </h5>
                    </div>
                    <div>
                        
                        <p className="text-krit-black">
                            It&apos;s free of charge and we don&apos;t bite.
                        </p>
                    </div>
                </div>
            </div>

            {/* DESKTOP LAYOUT - Keeping absolute positioning */}
            <div className="hidden lg:block h-full pt-28 px-12 py-12 relative">
                {/* WHO Section - Center Left (Desktop Only) */}
                <div className="absolute top-1/2 left-12 -translate-y-1/2 max-w-md">
                    <h2 className="font-bold text-krit-black mb-6">
                        WHO?
                    </h2>
                    <p className="text-krit-black mb-2">
                        Lorem ipsum dolor sit amet
                    </p>
                    <p className="text-krit-black mb-8">
                        Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
                    </p>
                    <Link 
                        href="/team" 
                        className="font-bold text-krit-black hover:text-krit transition-colors inline-flex items-center gap-2"
                    >
                        MEET THE TEAM <span>→</span>
                    </Link>
                </div>

                {/* Navigation Links - Center Right (Desktop Only) */}
                <div className="absolute top-1/2 right-12 -translate-y-1/2">
                    <nav className="flex flex-col items-end gap-6">
                        <h6 
                            className="font-bold font-blender text-gray-400 cursor-not-allowed"
                        >
                            US
                        </h6>
                        <Link 
                            href="/works" 
                            className="font-bold text-krit-black hover:text-krit transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            WORKS
                        </Link>
                        <h6 
                            className="font-bold font-blender text-gray-400 cursor-not-allowed"
                        >
                            INITIATIVES
                        </h6>
                        <h6 
                            className="font-bold font-blender text-gray-400 cursor-not-allowed"
                        >
                            STORIES
                        </h6>
                        <h6 
                            className="font-bold font-blender text-gray-400 cursor-not-allowed"
                        >
                            GOODS
                        </h6>
                    </nav>
                </div>

                {/* Let's Talk - Bottom Right (Desktop Only) */}
                <div className="flex flex-col absolute bottom-12 right-12 items-end gap-0">
                    <div className="flex gap-4 items-end">
                        <Image 
                            src="/logo/Krit_Hamburger_Mascot.svg" 
                            alt="Character"
                            height={64}
                            width={64}
                            className="w-auto h-32 mb-2"
                        />
                        <h5 className="font-bold font-blender text-krit-black">
                            LET&apos;S TALK
                        </h5>
                    </div>
                    <div>
                        
                        <p className="text-krit-black">
                            It&apos;s free of charge and we don&apos;t bite.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}