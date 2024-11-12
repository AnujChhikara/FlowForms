import { Cover } from "@/components/ui/cover";
export default function HeroSection() {
  return (
    <div className="h-[30rem] w-full bg-grid-small-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-img:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl">FormFlow</h1>
        <h2 className="text-4xl md:text-4xl lg:text-4xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Collect and manage form submissions <br />
          at <Cover>warp speed</Cover>
        </h2>
      </div>
    </div>
  );
}
