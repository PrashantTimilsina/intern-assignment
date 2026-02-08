import Navbar from "@/app/_components/Navbar";

import Hero from "./_components/Hero";
import Seller from "./_components/Seller";
import KeyFeatures from "./_components/KeyFeatures";
import RealTime from "./_components/RealTime";
import Tools from "./_components/Tools";
import Testimonials from "./_components/Testimonials";
import Blogs from "./_components/Blogs";
import FAQ from "./_components/FAQ";
import NewsLetter from "./_components/NewsLetter";
import Footer from "./_components/Footer";

function App() {
  return (
    <main>
      {/* <header className="sticky top-0 z-50 w-full bg-white">
        <Navbar />
      </header> */}
      <section>
        <Hero />
      </section>
      <section className="bg-background_brand mt-6 lg:mt-26 lg:py-12 py-8 ">
        <Seller />
      </section>
      <section className="lg:py-25 py-6">
        <KeyFeatures />
      </section>
      <section className=" bg-primary-darker_brand lg:py-25 py-6">
        <RealTime />
      </section>
      <section className="bg-background_brand lg:py-25 py-6 max-lg:px-4">
        <Tools />
      </section>
      <section className="lg:py-25 py-6">
        <Testimonials />
      </section>
      <section className="bg-background_brand lg:py-25 py-6">
        <Blogs />
      </section>
      <section className="lg:py-25 py-6">
        <FAQ />
      </section>
    </main>
  );
}

export default App;
