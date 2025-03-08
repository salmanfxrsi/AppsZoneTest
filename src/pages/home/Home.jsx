import Contact from "./contact/Contact";
import Experience from "./experience/Experience";
import Hero from "./hero/Hero";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

const Home = () => {
  return (
    <main className="w-11/12 lg:w-7/12 mx-auto flex flex-col gap-48 py-24">
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* Experience Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="font-poppins">
        <Projects />
      </section>

      {/* Projects Section */}
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
