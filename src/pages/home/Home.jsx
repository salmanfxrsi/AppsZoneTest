import Experience from "./experience/Experience";
import Hero from "./hero/Hero";
import Projects from "./projects/Projects";

const Home = () => {
  return (
    <main className="w-11/12 lg:w-7/12 mx-auto flex flex-col gap-24">
      {/* Hero Section */}
      <section>
        <Hero />
      </section>

      {/* Experience Section */}
      <section>
        <Experience />
      </section>

      {/* Projects Section */}
      <section className="font-poppins mt-12">
        <Projects />
      </section>
    </main>
  );
};

export default Home;
