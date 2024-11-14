import HeroSection from "@/components/blocks/HeroSection";
import PricingCards from "@/components/blocks/PricingCard";
import Navbar from "@/components/layout/Navbar";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
export default function HomePage() {
  return (
    <div className="dark min-w-screen min-h-screen">
      <Navbar />

      <HeroSection />
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Scroll Animations
                </span>
              </h1>
            </>
          }
        >
          <img
            src={`/linear.webp`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      <PricingCards />
    </div>
  );
}
