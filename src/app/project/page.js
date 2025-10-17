import Link from 'next/link';
import Image from 'next/image';

const projects = [
    {
        title: "The Playlist",
        category: "Branding & Design",
        image: "/9B_Product_Shot_2.jpg",
        slug: "The_Playlist"
    },
    {
        title: "Project Two",
        category: "Web Design",
        image: "/6_Products.png",
        slug: "project-two"
    },
    {
        title: "Project Three",
        category: "UI/UX Design",
        image: "/15_Poster_2.jpg",
        slug: "project-three"
    },
];

export default function Project() {
    return (
        <div className="min-h-screen bg-krit-white pt-32 pb-12">
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
                <h1 className="font-montserrat font-bold text-4xl lg:text-6xl mb-4 text-krit-black">
                    Project Gallery
                </h1>
                <p className="font-blender text-xl lg:text-2xl mb-12 text-krit-black">
                    Explore our collection of creative projects and case studies.
                </p>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Link 
                            key={index}
                            href={`/project/${project.slug}`}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                            </div>
                            <p className="font-blender text-sm text-gray-600 mb-1">
                                {project.category}
                            </p>
                            <h2 className="font-montserrat font-bold text-2xl lg:text-3xl text-krit-black group-hover:text-krit transition-colors duration-300">
                                {project.title}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

