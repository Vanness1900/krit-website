import Carousel from "@/components/sections/Carousel";
import FAQ from "@/components/sections/FAQ";
import HomeProject from "@/components/sections/HomeProject";
import ScrollButton from "@/components/ui/ScrollButton";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* Outer wrapper with black background for full width */}
    <div className="">
      {/* Hero section - full screen height with centered content */}
      <div className="flex flex-col max-w-screen-2xl mx-auto px-6 lg:px-12 h-screen bg-krit-white pt-48 pb-12 gap-8 relative">
        {/* Mascot image - positioned absolutely to top right */}
        <Image
          src="/logo/Krit_Home_Mascot.svg"
          alt="Krit Mascot"
          width={64}
          height={64}
          className="h-36 w-auto lg:h-48 right-0 absolute"
        />
        
        {/* Content container - fills remaining space and distributes content vertically */}
        <div className="flex flex-col flex-1 justify-between pt-64 lg:pt-48">
          {/* Main headline */}
          <h3 className="font-montserrat font-bold">
            Better designs doesn&apos;t <br />
            just mean cooler visuals.
          </h3>
          
          {/* Subheadline - aligned to right side with max width constraints */}
          <h5 className="font-blender text-krit-black font-bold text-center leading-5 max-w-[60vw] lg:max-w-[40vw] place-self-end">
            It&apos;s better decisions, healthier people, and creative ecosystems
            that don&apos;t chew up the people inside them.
          </h5>
          
          {/* Call to action - centered at bottom of hero section */}
          <ScrollButton />
        </div>
      </div>

      <div id="projects">
        <HomeProject />
      </div>

      <Carousel />

      {/* Next section - content below hero */}
      <div className="flex flex-col max-w-screen-2xl mx-auto px-6 lg:px-12 gap-8 lg:gap-16">
        <h3 className="flex justify-center text-krit-black font-montserrat font-bold">
          Stories We&apos;re proud of
        </h3>
        <Image
          src="/logo/Project_Catalogue.svg"
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