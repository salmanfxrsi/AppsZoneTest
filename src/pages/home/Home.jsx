import Experience from "./experience/Experience";
import Hero from "./hero/Hero";

const Home = () => {
  return (
    <div>
      <section className="w-11/12 lg:w-7/12 mx-auto">
        <Hero />
      </section>
      <section className="w-11/12 lg:w-7/12 mx-auto py-24">
        <Experience />
      </section>
    </div>
  );
};

export default Home;
