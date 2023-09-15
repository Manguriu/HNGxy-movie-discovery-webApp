"use client";
import Navbar from "@/components/Navbar";
import FeaturedMovies from "@/components/Featured/FeaturedMovies";
import Hero from "@/components/heroMain/Hero";
import Transition from "@/components/Transition";

export default function Home() {
  return (
    <main className="max-container bg-white">
      <Transition />
      <section>
        <Navbar />
      </section>
      <section className="wide:sm:pb-24 pb-12">
        <Hero />
      </section>
      <section className="sm:px-[10rem] px-8 sm:py-5 py-4 ">
        <FeaturedMovies />
      </section>
    </main>
  );
}
