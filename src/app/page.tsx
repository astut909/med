import HeroSection from "../components/heroSection";
import { main } from "motion/react-client";
import Courses from "@/components/courses";
import Mst from "@/components/testimonial_cards";
import Instructor from "@/components/instructors";
import UpcomingWebinars from "@/components/upcomingWebinars";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased br-grid-white/[0.02]">
        
        <HeroSection />
        <Courses />
        <Mst />
        <UpcomingWebinars />
        <Instructor />
        <Footer/>

      </main>
     
    </>

  );
}

