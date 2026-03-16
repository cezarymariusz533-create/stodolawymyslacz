import Navigation from "@/components/Navigation";
import ArchiveSidebar from "@/components/ArchiveSidebar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PillarsSection from "@/components/PillarsSection";
import WorkshopsSection from "@/components/WorkshopsSection";
import PeopleSection from "@/components/PeopleSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-background text-foreground min-h-screen">
    <Navigation />
    <ArchiveSidebar />
    <main className="xl:mr-[140px]">
      <HeroSection />
      <AboutSection />
      <PillarsSection />
      <WorkshopsSection />
      <PeopleSection />
      <JoinSection />
    </main>
    <Footer />
  </div>
);

export default Index;
