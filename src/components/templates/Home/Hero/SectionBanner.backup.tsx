import { ImageConstant } from "@/constants";
import { HomeData } from "@/data/home.data";
import { TypingAnimation } from "../TypingAnimation";

export const SectionBanner = () => {
	const { title, subtitles } = HomeData;
	return (
		<section className="relative">
			<img
				className="w-full h-[600px] lg:h-screen md:h-screen object-cover"
				src={ImageConstant.BANNER_GIF}
				alt="Banner"
			/>
			<section className="absolute top-[28rem] lg:top-[40rem] md:top-[18rem] lg:px-[72px] md:px-[72px] px-6">
				<h1
					data-aos="fade-out"
					data-aos-duration="500"
					data-aos-once="true"
					className="text-2xl lg:text-4xl md:text-4xl font-bold"
				>
					{title}
				</h1>
				<div className="mt-0 lg:mt-6 md:mt-6">
					<TypingAnimation texts={subtitles} />
				</div>
			</section>

			{/* <section className="block lg:absolute md:absolute md:right-[3rem] lg:right-[3rem]">
				<Image
					src={ImageConstant.BANNER_HERO}
					alt="CyberPolitics"
					width={729}
					height={550}
				/>
			</section> */}
		</section>
	);
};
