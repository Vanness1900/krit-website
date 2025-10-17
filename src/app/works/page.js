import Link from 'next/link';
import Image from 'next/image';

const projects = [
    {
        title: "The Playlist",
        category: "Branding & Design",
        image: "/works/The_Playlist/9B_Product_Shot_2.jpg",
        slug: "The_Playlist"
    },
    {
        title: "Project Two",
        category: "Web Design",
        image: "/works/The_Playlist/6_Products.png",
        slug: "project-two"
    },
    {
        title: "Project Three",
        category: "UI/UX Design",
        image: "/works/The_Playlist/15_Poster_2.jpg",
        slug: "project-three"
    },
];

export default function Project() {
    return (
        <div className="min-h-screen bg-krit-white pt-28 lg:pt-32 pb-8 lg:pb-12">
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
                <p className="font-blender mb-12 text-krit-black">
                    All Works - Branding - Motion - Communication - Product - Packaging
                </p>

                {/* Project Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Link 
                            key={index}
                            href={`/works/${project.slug}`}
                            className="group cursor-pointer"
                        >
                            <div
                                key={index}
                                className="group cursor-pointer relative min-h-[30vh] lg:min-h-[50vh] p-4 lg:p-8 flex flex-col justify-between"
                            >
                                <div className="absolute inset-0 z-0 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Background overlay */}
                                <div className="absolute inset-0 bg-black/20 z-10" />

                                {/* Content */}
                                <div className="flex flex-col gap-0 z-20">
                                    <h3 className="font-montserrat font-bold text-krit-white group-hover:text-krit transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="font-blender text-krit-white">
                                        {project.slug}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

