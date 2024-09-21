"use client";
import { HomeData } from "@/data/home.data";
import { SectionProblemItem } from "./SectionProblemItem";

export const SectionProblem = () => {
	const { sectionProblem } = HomeData;
	return (
		<section
			id="#problem"
			className="text-center w-full mt-12 lg:mt-[400px] md:mt-[400px] px-6 lg:px-[72px] md:px-[72px]"
		>
			<h1
				data-aos="fade-out"
				data-aos-duration="1100"
				data-aos-once="true"
				className="lg:text-3xl md:text-3xl text-2xl font-bold"
			>
				{sectionProblem.title}
			</h1>

			<div className="mt-16 flex flex-wrap gap-4 justify-center items-center">
				{sectionProblem.lists.map((value, index) => (
					<SectionProblemItem
						key={`problem--${index}`}
						title={value.title}
						subtitle={value.subtitle}
					/>
				))}
			</div>
		</section>
	);
};
