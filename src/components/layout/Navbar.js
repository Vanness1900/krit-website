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
                            className="h-12 w-auto lg:h-16"
                        />
                    </Link>

                    {/* Desktop Navigation + Hamburger */}
                    <div className="flex items-center gap-8 lg:gap-12">
                        {/* Desktop Links - hidden on mobile */}
                        <Link 
                            href="/works/The_Playlist"
                            className={`font-montserrat text-krit-black hover:text-krit transition-all duration-300 ease-in-out text-2xl
                                ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                                hidden lg:block
                            `}
                        >
                            Works
                        </Link>
                        <span 
                            className={`font-montserrat text-gray-400 cursor-not-allowed transition-all duration-300 ease-in-out text-2xl
                                ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                                hidden lg:block
                            `}
                        >
                            Us
                        </span>

                        {/* Hamburger Button - shows on all screen sizes */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex flex-col gap-1.5 w-8 h-8 justify-center relative z-50"
                            aria-label="Toggle menu"
                        >
                            <span
                                className={`block self-start h-1 rounded bg-krit-black transition-all duration-300 ${
                                isOpen ? 'w-8 rotate-45 translate-y-2.5' : 'w-6'
                                }`}
                            />
                            <span
                                className={`block self-end h-1 rounded bg-krit-black transition-all duration-300 ${
                                isOpen ? 'opacity-0' : 'w-6 opacity-100'
                                }`}
                            />
                            <span
                                className={`block self-start h-1 rounded bg-krit-black transition-all duration-300 ${
                                isOpen ? 'w-8 -rotate-45 -translate-y-2.5' : 'w-6'
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
                        <span 
                            className="font-blender font-bold text-gray-400 cursor-not-allowed text-2xl"
                        >
                            US
                        </span>
                        <Link 
                            href="/works" 
                            className="font-blender font-bold text-krit-black hover:text-krit transition-colors text-2xl"
                            onClick={() => setIsOpen(false)}
                        >
                            WORKS
                        </Link>
                        <span 
                            className="font-blender font-bold text-gray-400 cursor-not-allowed text-2xl"
                        >
                            INITIATIVES
                        </span>
                        <span 
                            className="font-blender font-bold text-gray-400 cursor-not-allowed text-2xl"
                        >
                            STORIES
                        </span>
                        <span 
                            className="font-blender font-bold text-gray-400 cursor-not-allowed text-2xl"
                        >
                            GOODS
                        </span>
                    </nav>
                </div>

                {/* WHO Section - Middle Left (Mobile Only) */}
                <div className="self-start max-w-xs">
                    <h2 className="font-montserrat font-bold text-4xl text-krit-black mb-6">
                        WHO?
                    </h2>
                    <p className="font-blender text-krit-black text-base mb-4">
                        Lorem ipsum dolor sit amet
                    </p>
                    <p className="font-blender text-krit-black text-base mb-8">
                        Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
                    </p>
                    <Link 
                        href="/team" 
                        className="font-blender font-bold text-krit-black hover:text-krit transition-colors text-base inline-flex items-center gap-2"
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
                        <p className="font-blender font-bold text-krit-black text-2xl">
                            LET&apos;S TALK
                        </p>
                    </div>
                    <div>
                        
                        <p className="font-blender text-krit-black text-base">
                            It&apos;s free of charge and we don&apos;t bite.
                        </p>
                    </div>
                </div>
            </div>

            {/* DESKTOP LAYOUT - Keeping absolute positioning */}
            <div className="hidden lg:block h-full pt-28 px-12 py-12 relative">
                {/* WHO Section - Center Left (Desktop Only) */}
                <div className="absolute top-1/2 left-12 -translate-y-1/2 max-w-md">
                    <h2 className="font-montserrat font-bold text-5xl text-krit-black mb-6">
                        WHO?
                    </h2>
                    <p className="font-blender text-krit-black text-2xl mb-4">
                        Lorem ipsum dolor sit amet
                    </p>
                    <p className="font-blender text-krit-black text-2xl mb-8">
                        Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
                    </p>
                    <Link 
                        href="/team" 
                        className="font-blender font-bold text-krit-black hover:text-krit transition-colors text-2xl inline-flex items-center gap-2"
                    >
                        MEET THE TEAM <span>→</span>
                    </Link>
                </div>

                {/* Navigation Links - Center Right (Desktop Only) */}
                <div className="absolute top-1/2 right-12 -translate-y-1/2">
                    <nav className="flex flex-col items-end gap-6">
                        <span 
                            className="font-blender font-bold text-gray-400 cursor-not-allowed text-3xl"
                        >
                            US
                        </span>
                        <Link 
                            href="/works" 
                            className="font-blender font-bold text-krit-black hover:text-krit transition-colors text-3xl"
                            onClick={() => setIsOpen(false)}
                        >
                            WORKS
                        </Link>
                        <span 
                            className="font-blender font-bold text-gray-400 cursor-not-allowed text-3xl"
                        >
                            INITIATIVES
                        </span>
                        <span 
                            className="font-blender font-bold text-gray-400 cursor-not-allowed text-3xl"
                        >
                            STORIES
                        </span>
                        <span 
                            className="font-blender font-bold text-gray-400 cursor-not-allowed text-3xl"
                        >
                            GOODS
                        </span>
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
                        <p className="font-blender font-bold text-krit-black text-3xl">
                            LET&apos;S TALK
                        </p>
                    </div>
                    <div>
                        
                        <p className="font-blender text-krit-black text-2xl">
                            It&apos;s free of charge and we don&apos;t bite.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}