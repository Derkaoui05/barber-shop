import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
   <div>
    <Hero />
    <About />
    <Services />
    <Gallery />
   </div>
  );
}
