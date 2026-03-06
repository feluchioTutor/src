import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Steps />
      
      {/* Здесь будут блоки Reviews и CTA */}
      <div className="h-40" /> 
    </main>
  );
}