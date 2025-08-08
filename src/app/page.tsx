import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Clients from "@/components/Clients";
import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FloatingThemeButton />
      <Hero />
      <VideoSection />
      <Benefits />
      <Process />
      <Clients />
      <CaseStudy />
      <Footer />
    </div>
  );
}

function FloatingThemeButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 toggle-fab">
      <ThemeToggle />
    </div>
  );
}
