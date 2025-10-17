'use client';

export default function ScrollButton() {
    const handleScroll = (e) => {
        e.preventDefault();
        const element = document.getElementById('projects');
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            // 96px for mobile, 128px for desktop (lg breakpoint is 1024px)
            const offset = window.innerWidth >= 1024 ? 128 : 96;
            const offsetPosition = elementPosition - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <a 
            href="#projects" 
            className="flex flex-col items-center gap-1 group cursor-pointer"
            onClick={handleScroll}
        >
            <p className="font-blender text-krit-black group-hover:text-krit transition-colors duration-500">
                see what we mean
            </p>
            {/* Chevron down icon */}
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="size-4 group-hover:text-krit transition-colors duration-500 group-hover:animate-bounce"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
        </a>
    );
}

