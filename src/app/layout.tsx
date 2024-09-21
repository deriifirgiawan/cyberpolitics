import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/components";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Cyberpolitics.AI",
	description: `Memanfaatkan Artificial Intelligence dan big data untuk memberikan
						solusi bagi para calon dalam meningkatkan efektivitas kampanye
						mereka melalui pengumpulan dan analisis data politik yang akurat dan
						komprehensif.`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<AOSInit />
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
