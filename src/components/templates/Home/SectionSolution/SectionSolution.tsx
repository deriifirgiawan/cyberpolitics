"use client";

import { HomeData } from "@/data/home.data";
import { SectionSolutionItem } from "./SectionSolutionItem";

export const SectionSolution = () => {
	const { solutions } = HomeData;
	return (
		<section
			id="#solution"
			className="text-center w-full mt-16 px-6 lg:px-[72px] md:px-[72px]"
		>
			<h1
				data-aos="fade-out"
				data-aos-duration="1100"
				data-aos-once="true"
				className="lg:text-3xl md:text-3xl text-2xl font-bold"
			>
				{solutions.title}
			</h1>

			<div className="mt-16 flex flex-wrap gap-4 justify-center items-center">
				{solutions.list.map((value, index) => (
					<SectionSolutionItem
						key={`problem--${index}`}
						title={value.title}
						subtitle={value.description}
						img={value.image}
					/>
				))}
			</div>
		</section>
	);
};
