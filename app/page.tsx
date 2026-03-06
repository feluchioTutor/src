import Navbar from "../components/Navbar";
import Hero from "../components/Hero.tsx";
import Steps from "../components/Steps.tsx";
import Reviews from "../components/Reviews.tsx";
import CTA from "../components/CTA.tsx";

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