import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stack } from "@/components/Stack";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <a href="#work" className="skip-link">
        Skip to projects
      </a>
      <Header />
      <main className="flex-1">
        <Hero />
        <Work />
        <Experience />
        <Education />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
