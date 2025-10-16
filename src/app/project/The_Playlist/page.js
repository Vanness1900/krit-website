import Image from 'next/image';
import Link from 'next/link';

export default function ProjectPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header with back button and project title */}
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
                <Link 
                    href="/works" 
                    className="flex items-center gap-2 text-krit-black hover:opacity-70 transition-opacity"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    <span className="font-blender text-base lg:text-lg">Back to Works</span>
                </Link>
                
                <h1 className="font-montserrat font-bold text-2xl lg:text-3xl text-krit-black uppercase tracking-wide">
                    LOREM IPSUM DOLOR
                </h1>
            </div>

            {/* Hero Image */}
            <div className="w-full h-[400px] lg:h-[600px] relative bg-gray-300">
                <Image
                    src="/1_Title_Card.jpg"
                    alt="Project Hero"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Section */}
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column - Main Content */}
                    <div className="flex flex-col gap-8">
                        {/* Category */}
                        <p className="font-blender text-sm lg:text-base text-gray-600 uppercase tracking-wide">
                            Lorem ipsum dolor
                        </p>

                        {/* Project Title */}
                        <h2 className="font-montserrat font-bold text-4xl lg:text-6xl text-krit-black">
                            Project Title
                        </h2>

                        {/* Description Paragraphs */}
                        <p className="font-blender text-base lg:text-lg text-krit-black leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <p className="font-blender text-base lg:text-lg text-krit-black leading-relaxed">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <p className="font-blender text-base lg:text-lg text-krit-black leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    {/* Right Column - Project Details */}
                    <div className="flex flex-col gap-8">
                        {/* Detail Item 1 */}
                        <div>
                            <h3 className="font-montserrat font-bold text-xl lg:text-2xl text-krit-black mb-2">
                                Lorem Ipsum
                            </h3>
                            <p className="font-blender text-base lg:text-lg text-gray-600">
                                Lorem Ipsum
                            </p>
                        </div>

                        {/* Detail Item 2 */}
                        <div>
                            <h3 className="font-montserrat font-bold text-xl lg:text-2xl text-krit-black mb-2">
                                Lorem Ipsum
                            </h3>
                            <p className="font-blender text-base lg:text-lg text-gray-600">
                                Lorem Ipsum
                            </p>
                        </div>

                        {/* Detail Item 3 */}
                        <div>
                            <h3 className="font-montserrat font-bold text-xl lg:text-2xl text-krit-black mb-2">
                                Lorem Ipsum
                            </h3>
                            <p className="font-blender text-base lg:text-lg text-gray-600">
                                Lorem Ipsum
                            </p>
                        </div>

                        {/* Detail Item 4 */}
                        <div>
                            <h3 className="font-montserrat font-bold text-xl lg:text-2xl text-krit-black mb-2">
                                Lorem Ipsum
                            </h3>
                            <p className="font-blender text-base lg:text-lg text-gray-600">
                                Lorem Ipsum
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}