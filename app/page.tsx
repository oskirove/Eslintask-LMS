import HeroSection from "@/components/HeroSection";
import NavMenu from "@/components/NavMenu";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main>
      <NavMenu />
      <div className="container mt-5 mx-auto px-4">
        <section>
          <HeroSection />
        </section>
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12",
        )}
      />
    </main>
  );
}
