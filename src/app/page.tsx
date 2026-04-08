"use client";

import { useFadeIn } from "./hooks/useFadeIn";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import About from "./components/About";
import Reasons from "./components/Reasons";
import Services from "./components/Services";
import CaseStudy from "./components/CaseStudy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  useFadeIn();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <About />
        <Reasons />
        <Services />
        <CaseStudy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
