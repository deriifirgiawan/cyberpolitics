import { HomePage, Walikota } from "@/components";

export default function WalikotaPage() {
  return (
    <main>
      <Walikota.Navbar />
      <Walikota.Banner />
      <HomePage.SectionProblem type="bandung" />
      <HomePage.SectionCaption />
      <HomePage.SectionSolution />
    </main>
  );
}
