import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Objectives from "@/components/Objectives";
import Features from "@/components/Features";
import Creator from "@/components/Creator";
import Testimonials from "@/components/Testimonials";
import InsidePlatform from "@/components/InsidePlatform";
import Learn from "@/components/Learn";

const Index = () => {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Features />
      <InsidePlatform />
      <Objectives />
      <Creator />
      <Testimonials />
      <Learn/>
    </main>
  );
};

export default Index;