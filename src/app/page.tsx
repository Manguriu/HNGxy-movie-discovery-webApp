import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="max-container">
      <section>
        <Navbar />
      </section>
      <section className="xl:sm:pr-16 pr-8 wide:sm:pb-24 pb-12 sm:pl-16 pl-8">
        <Hero />
      </section>
    </main>
  );
}
