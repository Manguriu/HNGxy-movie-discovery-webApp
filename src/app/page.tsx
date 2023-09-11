import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedMovies from "@/components/Featured/FeaturedMovies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="max-container bg-white">
      <section>
        <Navbar />
      </section>
      <section className="xl:sm:pr-16 pr-8 wide:sm:pb-24 pb-12 sm:pl-16 pl-8">
        <Hero />
      </section>
      <section className="sm:px-[10rem] px-8 sm:py-5 py-4 ">
        <FeaturedMovies />
      </section>
      <section className="">
        <Footer />
      </section>
    </main>
  );
}
