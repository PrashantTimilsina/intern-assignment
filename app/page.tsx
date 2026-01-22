import Navbar from "@/app/_components/Navbar";

import Hero from "./_components/Hero";
import Seller from "./_components/Seller";
import KeyFeatures from "./_components/KeyFeatures";

function App() {
  return (
    <main>
      <header className="sticky top-0 z-50  h-12 w-full bg-white">
        <Navbar />
      </header>
      <section>
        <Hero />
      </section>
      <section className="bg-seller mt-10 lg:mt-16 lg:py-12 py-8 ">
        <Seller />
      </section>
      <section>
        <KeyFeatures />
      </section>
    </main>
  );
}

export default App;
