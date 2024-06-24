import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"] });

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
			<body className={figtree.className}>{children}</body>
		</html>
	);
}
