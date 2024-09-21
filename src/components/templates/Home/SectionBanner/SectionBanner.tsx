import { ImageConstant } from "@/constants";
import { HomeData } from "@/data/home.data";
import Image from "next/image";

export const SectionBanner = () => {
	const { title } = HomeData;
	return (
		<section className="w-full relative px-6 lg:px-[72px] md:px-[72px] mt-[72px] md:mt-[400px] lg:mt-[400px] flex-col-reverse lg:flex-row md:flex-row flex items-center">
			<section className="block lg:absolute md:absolute z-20 w-full lg:w-2/4 md:w-2/4">
				<h1
					data-aos="fade-out"
					data-aos-duration="500"
					data-aos-once="true"
					className="text-2xl lg:text-4xl md:text-4xl font-bold"
				>
					{title}
				</h1>
				<h6
					data-aos="fade-out"
					data-aos-duration="700"
					data-aos-once="true"
					className="mt-4 lg:mt-6 md:mt-6 text-sm lg:text-2xl md:text-2xl"
				>
					Menggunakan <b className="text-[#54F4FC]">AI</b> dan{" "}
					<b className="text-[#54F4FC]">Big Data</b> untuk membantu Calon
					meningkatkan <b className="text-[#54F4FC]">Efektivitas</b> Kampanye
					melalui Analisis Data <b className="text-[#54F4FC]">Politik</b> yang{" "}
					<b className="text-[#54F4FC]">Akurat</b>
				</h6>
			</section>

			<section className="block lg:absolute md:absolute md:right-[3rem] lg:right-[3rem]">
				<Image
					src={ImageConstant.BANNER_HERO}
					alt="CyberPolitics"
					width={729}
					height={550}
				/>
			</section>
		</section>
	);
};
