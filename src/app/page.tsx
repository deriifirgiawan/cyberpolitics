import { HomePage, Navbar } from "@/components/templates";
import { Footer } from "@/components/templates/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePage.SectionBanner />
      <HomePage.SectionProblem type="default" />
      <HomePage.SectionCaption />
      <HomePage.SectionSolution />
      <Footer />
    </main>
  );
}
