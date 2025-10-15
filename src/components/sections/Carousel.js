'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

const carouselItems = [
    {
        description: "We're your honest collaborators, offering not just design work, but strategic creative thinking rooted in humanity and professional respect.",
        image: "/1_Title_Card.jpg"
    },
    {
        description: "Our approach prioritizes people first, creating experiences that resonate with real human needs and emotions.",
        image: "/6_Products.png"
    },
    {
        description: "We work alongside you as true partners, bringing fresh perspectives and innovative solutions to every challenge.",
        image: "/9B_Product_Shot_2.jpg"
    },
    {
        description: "Every project is an opportunity to create meaningful impact through careful consideration and expert execution.",
        image: "/15_Poster_2.jpg"
    }
];

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const SLIDE_DURATION = 5000; // 5 seconds per slide

    useEffect(() => {
        // Reset progress when slide changes
        setProgress(0);
        
        // Animate progress bar
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    return 100;
                }
                return prev + (100 / (SLIDE_DURATION / 50)); // Update every 50ms
            });
        }, 50);

        // Auto advance to next slide
        const slideTimeout = setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % carouselItems.length);
        }, SLIDE_DURATION);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(slideTimeout);
        };
    }, [activeIndex]);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 py-12">
            {/* Carousel container */}
            <div className="relative bg-krit-black rounded-3xl overflow-hidden min-h-[500px] lg:min-h-[600px] flex flex-col">
                {/* Background image - full brightness, no overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={carouselItems[activeIndex].image}
                        alt="Carousel image"
                        fill
                        className="object-cover transition-opacity duration-500"
                        priority
                    />
                </div>

                {/* Gradient overlay - only bottom half, black to transparent */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-5" />

                {/* Navigation progress bars at top */}
                <div className="flex gap-4 p-8 relative z-10">
                    {carouselItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden hover:bg-white/40 transition-colors"
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            {/* Animated progress bar */}
                            <div 
                                className="h-full bg-white rounded-full transition-all duration-75 ease-linear"
                                style={{ 
                                    width: index === activeIndex ? `${progress}%` : '0%'
                                }}
                            />
                        </button>
                    ))}
                </div>

                {/* Content area - bottom left */}
                <div className="flex-1 flex items-end p-8 lg:p-12 relative z-10">
                    <div className="max-w-2xl">
                        <p className="font-blender text-white text-xl lg:text-2xl transition-opacity duration-500">
                            {carouselItems[activeIndex].description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}