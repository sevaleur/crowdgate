import FeaturedEvents from "@/components/FeaturedEvents";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col max-auto overflow-clip">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid /> 
      <FeaturedEvents />
      <Footer />
    </main>
  );
}
