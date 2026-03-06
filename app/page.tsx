import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-amber-500 selection:text-black">
      <Navbar />
      <Hero />
      <Steps />
      <Reviews />
      <CTA />
    </main>
  );
}