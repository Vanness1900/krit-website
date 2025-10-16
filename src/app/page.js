import Carousel from "@/components/sections/Carousel";
import FAQ from "@/components/sections/FAQ";
import HomeProject from "@/components/sections/HomeProject";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* Outer wrapper with black background for full width */}
    <div className="">
      {/* Hero section - full screen height with centered content */}
      <div className="flex flex-col text-krit-black max-w-screen-2xl mx-auto px-6 lg:px-12 h-screen bg-krit-white pt-48 pb-12 gap-8">
        {/* Mascot image - positioned absolutely to top right */}
        <Image
          src="/Krit_Home_Mascot.svg"
          alt="Krit Mascot"
          width={64}
          height={64}
          className="h-36 w-auto lg:h-48 right-0 absolute"
        />
        
        {/* Content container - fills remaining space and distributes content vertically */}
        <div className="flex flex-col flex-1 justify-between pt-64 lg:pt-48">
          {/* Main headline */}
          <h1 className="font-montserrat font-bold text-2xl lg:text-5xl">
            Better designs doesn&apos;t <br />
            just mean cooler visuals.
          </h1>
          
          {/* Subheadline - aligned to right side with max width constraints */}
          <h2 className="font-blender text-krit-black font-bold text-xl lg:text-3xl text-center lg:text-left leading-5 max-w-[60vw] lg:max-w-[40vw] place-self-end">
            It&apos;s better decisions, healthier people, and creative ecosystems
            that don&apos;t chew up the people inside them.
          </h2>
          
          {/* Call to action - centered at bottom of hero section */}
          <div className="flex flex-col items-center gap-1">
            <p className="font-blender text-krit-black text-lg lg:text-2xl">
              see what we mean
            </p>
            {/* Chevron down icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
          </div>
        </div>
      </div>

      <HomeProject />

      <Carousel />

      {/* Next section - content below hero */}
      <div className="flex flex-col max-w-screen-2xl mx-auto px-6 lg:px-12 gap-8 lg:gap-16">
        <h2 className="flex justify-center text-krit-black font-montserrat font-bold text-2xl lg:text-5xl">
          Stories We&apos;re proud of
        </h2>
        <Image
          src="/Project_Catalogue.svg"
          alt="Project Catalogue"
          width={1920}
          height={1080}
          className="w-full"
        />
      </div>

      <FAQ />

    </div>
    </>
  );
}