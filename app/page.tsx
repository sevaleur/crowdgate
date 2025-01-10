import FeaturedEvents from "@/components/FeaturedEvents";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden max-auto">
      <Hero />
      <Grid /> 
      <FeaturedEvents />
    </main>
  );
}
