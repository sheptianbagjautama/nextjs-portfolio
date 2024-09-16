import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experiences";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

const Home = () => {
  return (
    <main className="flex flex-col items-center pt-20 md:pt-28 px-4">
      <Intro />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
