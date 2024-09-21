"use client";
import { HomeData } from "@/data/home.data";

export const SectionCaption = () => {
	const { captions } = HomeData;

	return (
		<section
			data-aos="fade-out"
			data-aos-duration="2100"
			data-aos-once="true"
			className="bg-[#171414] w-full py-12 px-6 lg:px-[72px] md:px-[72px] mt-12 text-center flex justify-center"
		>
			<span className="lg:mx-[200px] md:mx-[200px] mx-0 text-sm font-semibold italic">
				{captions}
			</span>
		</section>
	);
};
