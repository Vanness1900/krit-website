import Image from 'next/image';
import Link from 'next/link';
import ButtonRound from '@/components/ui/ButtonRound';

const ProjectList = [
    {
        title: "The Playlist",
        description: "An amazing project description.",
        image: "/9B_Product_Shot_2.jpg",
    },
    {
        title: "The Playlist",
        description: "Another amazing project description.",
        image: "/9B_Product_Shot_2.jpg",
    },
    {
        title: "The Playlist",
        description: "Third project with cool details.",
        image: "/9B_Product_Shot_2.jpg",
    },
    {
        title: "The Playlist",
        description: "Fourth project showcase here.",
        image: "/9B_Product_Shot_2.jpg",
    },
    {
        title: "The Playlist",
        description: "Fifth project with unique features.",
        image: "/9B_Product_Shot_2.jpg",
    },
    {
        title: "The Playlist",
        description: "Sixth project with unique features.",
        image: "/9B_Product_Shot_2.jpg",
    },
];

export default function HomeProject() {
    return (
        <div className="max-w-screen-2xl mx-auto w-screen">
            {/* Grid container: 1 column on mobile, masonry-style grid on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-fr">
                {ProjectList.map((project, index) => (
                    <div
                        key={index}
                        // First project and every odd project after takes full width on desktop
                        className={`relative min-h-[400px] lg:min-h-[500px] p-8 lg:p-12 flex flex-col justify-between ${
                            index === 0 || index % 3 === 0 ? 'lg:col-span-2' : 'lg:col-span-1'
                        }`}
                    >
                        {/* Background image */}
                        <div className="absolute inset-0 -z-10">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Background overlay */}
                        <div className="absolute inset-0 bg-black/25 -z-5" />

                        {/* Content */}
                        <div className="flex flex-col gap-0">
                            <h3 className="font-montserrat font-bold text-krit-white text-4xl lg:text-5xl">
                                {project.title}
                            </h3>
                            <p className="font-blender text-krit-white text-xl lg:text-2xl">
                                {project.description}
                            </p>
                        </div>

                        {/* Button positioned at bottom right */}
                        <div className="self-end">
                            <ButtonRound text="Krit Life" />
                        </div>
                    </div>
                ))}
            </div>
            <Link href="/project" className="flex justify-center underline font-blender font-bold text-krit-black text-xl lg:text-2xl hover:text-krit transition-colors duration-300 pt-6 lg:pt-12">
                More Works
            </Link>
        </div>
    );
}