import Navbar from "@/app/_components/Navbar";

import Hero from "./_components/Hero";
import Seller from "./_components/Seller";

function App() {
  return (
    <main>
      <header className="sticky top-0 z-50  h-14">
        <Navbar />
      </header>
      <section>
        <Hero />
      </section>
      <section className="bg-seller mt-16 py-12 ">
        <Seller />
      </section>
    </main>
  );
}

export default App;
