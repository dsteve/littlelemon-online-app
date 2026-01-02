import "@/index.css";

import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";

function Home() {
  return (
    <main>
        <section>
          <Hero />
        </section>
        <section>
          <Highlights />
        </section>
        <section>
          <Testimonials />
        </section>
        <section>
          <About />
        </section>
    </main>
  );
}

export default Home;
