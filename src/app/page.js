import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-blue-200">
      <div className="flex flex-col text-krit-black max-w-screen-2xl mx-auto px-6 lg:px-12 h-screen bg-krit-white pt-48 pb-12 gap-8">
        <Image
          src="/Krit_Home_Mascot.svg"
          alt="Krit Mascot"
          width={64}
          height={64}
          className="h-36 w-auto lg:h-48 right-0 absolute"
        />
        <div className="flex flex-col flex-1 justify-between pt-64">
          <h1 className="font-montserrat font-bold text-2xl lg:text-5xl">
            Better designs doesn't <br />
            just mean cooler visuals.
          </h1>
          <h2 className="font-blender text-krit-black font-bold text-xl lg:text-3xl text-center lg:text-left leading-5 max-w-[60vw] lg:max-w-[40vw] place-self-end">
            It's better decisions, healthier people, and creative ecosystems
            that don't chew up the people inside them.
          </h2>
          <div className="flex flex-col items-center gap-1">
            <p className="font-blender text-krit-black text-lg lg:text-2xl">
              see what we mean
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 pt-32">
        <p>hello</p>
      </div>
    </div>
    </>
  );
}
