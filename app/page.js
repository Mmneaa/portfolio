"use client";
import Header from "./Components/Header/header";
import Introduction from "./Components/Introduction/introduction";
import About from "./Components/About/about";
import Skills from "./Components/Skills/skills";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Introduction id="introduction" />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
