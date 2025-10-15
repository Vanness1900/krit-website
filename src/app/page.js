import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-krit-black h-screen w-screen">
      <div>
        <Image src="Krit_Logotype.svg" alt="Krit Logo" width={500} height={500} />
      </div>
      <p className="font-blender text-white">test1</p>
      <p className="font-p font-bold text-white">test1</p>
      <p className="font-h text-white">test2 - Montserrat</p>
      <p className="font-montserrat text-white">test2 - Montserrat</p>
      <p className="font-s text-white">test3 - Reenie Beanie</p>
      <p className="font-mono text-white">test4 - Mono</p>
    </div>
    </>
  );
}
