import Navbar from "@/app/_components/Navbar";
import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";

function App() {
  return (
    // <Button variant="outline" className="bg-primary text-btn-text-primary">
    //   Hello
    // </Button>
    <main>
      <section className="sticky top-0 z-50  h-14">
        <Navbar />
      </section>
      <section>
        <Hero />
      </section>
    </main>
  );
}

export default App;
