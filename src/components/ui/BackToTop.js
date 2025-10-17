'use client';

export default function BackToTop() {
    const handleScroll = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <a 
            href="#top" 
            onClick={handleScroll}
            className="font-blender text-krit-black hover:text-krit transition-colors duration-300"
        >
            Back to top
        </a>
    );
}

