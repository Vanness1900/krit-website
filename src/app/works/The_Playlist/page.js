import Image from 'next/image';
import Link from 'next/link';
import BackToTop from '@/components/ui/BackToTop';

export default function ProjectPage() {
    return (
        <div className="min-h-screen bg-krit-white">
            {/* Header with back button and project title */}
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-6 flex flex-col lg:flex-row items-start justify-between">
                <Link 
                    href="/works" 
                    className="flex items-center gap-2 text-krit-black hover:text-krit transition-colors duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    <span className="font-blender">Back to Works</span>
                </Link>
                
                <h3 className="font-blender font-bold text-krit-black uppercase">
                    The Playlist
                </h3>
            </div>

            {/* Hero Image */}
            <div className="w-full h-[30vh] lg:h-[60vh] relative bg-gray-300">
                <Image
                    src="/works/The_Playlist/1_Title_Card.jpg"
                    alt="Project Hero"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Section */}
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
                {/* Category */}
                <div className="flex flex-col gap-8 mb-8">
                    <div className="flex flex-col lg:gap-2">
                        <p className="font-blender text-krit-black">
                            Bespoke Perfumes
                        </p>

                        {/* Project Title */}
                        <h3 className="font-montserrat font-bold text-krit-black">
                            The Playlist
                        </h3>
                    </div>

                    <Image
                            src="/works/The_Playlist/2_Product_Shot_1.jpg"
                            alt="Project Image"
                            width={500}
                            height={500}
                            className="w-full h-auto"
                        />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Column - Main Content */}
                    <div className="flex flex-col gap-6">
                        {/* Description Paragraphs */}
                        <p className="font-blender text-krit-black">
                            The Playlist began as an initiative to create personal fragrances based on musical preferences. Now, our fragrances have since evolved to be an ode to the musical genre of your choice. Through a collaboration between the senses of sound and smell, our perfumes tell an intimate story of their wearer.
                        </p>

                        <p className="font-blender text-krit-black">
                            The Playlist’s scents are designed to evoke the essence of each genre, embodying its melodic intricacies and emotional impression. Each of The Playlist’s perfumes is complex, distinctive, and passionately constructed to resonate the tune of your life.
                        </p>
                    </div>

                    {/* Right Column - Project Details */}
                    <div className="grid grid-cols-2 gap-8 lg:gap-12">
                        {/* Detail Item 1 */}
                        <div>
                            <h4 className="font-montserrat font-bold text-krit-black mb-1">
                                Lorem Ipsum
                            </h4>
                            <p className="font-blender text-krit-black">
                                Lorem Ipsum
                            </p>
                        </div>

                        {/* Detail Item 2 */}
                        <div>
                            <h4 className="font-montserrat font-bold text-krit-black mb-1">
                                Lorem Ipsum
                            </h4>
                            <p className="font-blender text-krit-black">
                                Lorem Ipsum
                            </p>
                        </div>

                        {/* Detail Item 3 */}
                        <div>
                            <h4 className="font-montserrat font-bold text-krit-black mb-1">
                                Lorem Ipsum
                            </h4>
                            <p className="font-blender text-krit-black">
                                Lorem Ipsum
                            </p>
                        </div>

                        {/* Detail Item 4 */}
                        <div>
                            <h4 className="font-montserrat font-bold text-krit-black mb-1">
                                Lorem Ipsum
                            </h4>
                            <p className="font-blender text-krit-black">
                                Lorem Ipsum
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
                <Image
                    src="/works/The_Playlist/4_Logo_Rationale.png"
                    alt="Project Image"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                />
                <Image  
                    src="/works/The_Playlist/5_Logo_Animation.gif"
                    alt="Project Animation"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    unoptimized
                />

                <div className="flex flex-col gap-6 py-16">
                    {/* Description Paragraphs */}
                    <p className="font-blender text-krit-black">
                        The Playlist is a multisensory experience merging fragrance and music to help you craft your own self-expression. By combining the two unlikely senses of sound and smell, you can tell the story of who you are.
                    </p>

                    <p className="font-blender text-krit-black">
                        You may not remember a name, but you will remember a smell; you will remember a tune. An unexpected pair it may be, music and perfume have become a part of us — a window to catch a glimpse of people’s story as you pass them by. With this understanding of the human condition and bona fide craftsmanship, The Playlist <br />
                        provides you a way to compose your own unforgettable window. Whether you’re a Tchaikovsky, Fitzgerald or Morissey, we listen. We understand. We craft your orchestra to life with every fragrance.
                    </p>

                    <p className="font-blender text-krit-black">
                        The Playlist lets you hit every note. We make each and every one of them last.
                    </p>
                </div>

                <Image
                    src="/works/The_Playlist/6_Products.png"
                    alt="Project Image"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                />

                <div className="flex flex-col gap-6 py-16">
                    <div className="flex flex-col gap-6">
                        {/* Description Paragraphs */}
                        <p className="font-blender text-krit-black">
                            If you&apos;d like to taste The Playlist&apos;s entry songs, go to Spotify and search for Andante, Ellington Mood, and High Voltage under the account &quot;56&quot;. If you are having trouble finding them, relax, we got that covered for you. Scan these barcode below for the respective album. Don&apos;t forget to put your headphone on, enjoy!
                        </p>
                    </div>
                </div>

                {/* Gallery Section */}
                <Image
                    src="/works/The_Playlist/7_Playlists_QRs.jpg"
                    alt="Project Image"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                />
                <Image  
                    src="/works/The_Playlist/8_Casette_Presentation.gif"
                    alt="Project Animation"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    unoptimized
                />
                <Image  
                    src="/works/The_Playlist/9_Tag_&_Product.gif"
                    alt="Project Animation"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    unoptimized
                />
                <Image
                    src="/works/The_Playlist/9B_Product_Shot_2.jpg"
                    alt="Project Image"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                />
                <Image
                    src="/works/The_Playlist/10_Product_Shot_3.jpg"
                    alt="Project Image"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                />
                <Image
                    src="/works/The_Playlist/11_Packaging.jpg"
                    alt="Project Image"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                />
                <Image
                    src="/works/The_Playlist/12_Product_Detail.jpg"
                    alt="Project Image"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                />
                <Image
                    src="/works/The_Playlist/13_Product_Card.jpg"
                    alt="Project Image"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                />
                <Image
                    src="/works/The_Playlist/14_Poster_1.jpg"
                    alt="Project Image"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                />
                <Image
                    src="/works/The_Playlist/15_Poster_2.jpg"
                    alt="Project Image"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                />
                <video
                    src="/works/The_Playlist/16_Website_Mockup.mp4"
                    alt="Project Animation"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    autoPlay
                    loop
                    muted
                />
                <Image  
                    src="/works/The_Playlist/17_Closing.gif"
                    alt="Project Animation"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    unoptimized
                />

                {/* Credits Section */}
                <div className="flex flex-col gap-6 py-16">
                    <div className="flex flex-col gap-6">
                        <p className="font-blender text-gray-500 italic">
                        © 2024. Krit Design Club. All rights reserved<br />
                        This is a non-commercial conceptual design project. All brand concepts, art, and design are copyright of Krit.
                        </p>

                        {/* Description Paragraphs */}
                        <p className="font-blender text-krit-black">
                        Design Principal: Vincent Tanvis
                            <br />
                            Creative Director: Gandhi Gultom
                            <br />
                            Creative Writer: Natbel
                            <br />
                            Lead Graphic Designer: Frederick Austin
                            <br />
                            Graphic Designer: Gandhi Gultom, Vincent Tanvis
                            <br />
                            Product Designer: Raven Ashley
                            <br />
                            Motion Graphic: Gandhi Gultom
                        </p>
                    </div>
                </div>

                {/* Awards Section */}
                <div className="py-16 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 lg:gap-32">
                        <h3 className="col-span-2 font-montserrat font-bold text-krit-black">
                            AWARDS
                        </h3>
                        
                        <div className="col-span-6 flex-1 flex-col gap-6 space-y-8">
                            <div className="flex justify-between items-center">
                                <span className="font-blender text-lg text-krit-black">
                                    London Design Awards (Gold)
                                </span>
                                <span className="font-blender text-lg text-krit-black">
                                    2024
                                </span>
                            </div>
                            
                            <hr className="border-krit-black border-t-1 mb-6" />

                            <div className="flex justify-between items-center">
                                <span className="font-blender text-lg text-krit-black">
                                    Graphis Awards (Silver)
                                </span>
                                <span className="font-blender text-lg text-krit-black">
                                    2024
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back to Top Button */}
                <div className="flex flex-col pb-16">
                    <hr className="border-krit-black border-t-1 mb-6" />
                    <div className="flex justify-end">
                        <BackToTop />
                    </div>
                </div>
            </div>
        </div>
    );
}