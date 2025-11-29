import About from "@/components/about";
import Contact from "@/components/contact";
import HeroSection from "@/components/hero_section";
import NavigationBar from "@/components/navigation_bar";
import Project from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <HeroSection />
      <About />
      <Skills />
      <Project />
    </div>
  );
}
