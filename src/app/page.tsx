import { HomePage, Navbar } from "@/components/templates";

export default function Home() {
	return (
		<main>
			<Navbar />
			<HomePage.SectionCarousel />
		</main>
	);
}
