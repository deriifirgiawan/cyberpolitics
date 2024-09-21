import { ImageConstant } from "@/constants";
import { HomeData } from "@/data/home.data";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
	const { socialMedia } = HomeData;
	return (
		<footer className="bg-[#171414]  p-4 md:p-8 lg:p-8 mt-[72px]">
			<section className="w-full flex flex-col md:flex-col lg:flex-row justify-between gap-4 mb-8">
				<div className="md:w-6/12 lg:w-6/12">
					<h4 className="text-xl md:text-3xl mb-4 text-[#54F4FC]">About Us</h4>
					<p className="mr-0 mb-4">
						CyberPolitics.AI memanfaatkan Artificial Intelligence dan big data
						untuk memberikan solusi bagi para calon legislatif dalam
						meningkatkan efektivitas kampanye mereka melalui pengumpulan dan
						analisis data politik yang akurat dan komprehensif.
					</p>
				</div>
			</section>

			<section className="w-full border-t-2 border-t-[#54F4FC] pt-4">
				<p>
					Copyright © {new Date().getFullYear()} CyberPolitics.AI - All rights
					reserved.
				</p>
				<div className="flex items-center mt-2">
					<Link href="#">
						<div className="border-r-2 pr-2">
							<p>Kebijakan Privasi</p>
						</div>
					</Link>

					<Link href="#">
						<div className="border-r-2 px-2">
							<p>Syarat Dan Ketentuan</p>
						</div>
					</Link>

					{/* <Link href="#">
						<div className="px-2 flex items-center gap-2">
							<Image
								src={ImageConstant.ICON_PLAYSTORE}
								alt="Download"
								width={16}
								height={16}
							/>
							<p>Download Aplikasi Kami</p>
						</div>
					</Link> */}
				</div>

				<div className="flex gap-2 items-center mt-8 justify-center md:justify-start lg:justify-start">
					{socialMedia.map((value) => (
						<Link
							key={value.icon}
							href={value.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={value.icon}
								alt={value.title}
								width={32}
								height={32}
							/>
						</Link>
					))}
				</div>
			</section>
		</footer>
	);
};
