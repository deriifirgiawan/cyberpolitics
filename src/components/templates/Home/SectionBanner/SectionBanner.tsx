"use client";
import { HomeData } from "@/data/home.data";
import { TypingAnimation } from "../TypingAnimation";
import { Hero } from "../Hero";
import { Background } from "../Background";
import styles from "./SectionBanner.module.css";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const SectionBanner = () => {
	const { title, subtitles } = HomeData;
	const [showElement, setShowElement] = useState({
		dot1: false,
		dot2: false,
		dot3: false,
		message: false,
	});

	useEffect(() => {
		const timers: NodeJS.Timeout[] = [];

		timers.push(
			setTimeout(() => {
				setShowElement((prevState) => ({ ...prevState, dot1: true }));
			}, 100)
		);

		timers.push(
			setTimeout(() => {
				setShowElement((prevState) => ({ ...prevState, dot2: true }));
			}, 200)
		);

		timers.push(
			setTimeout(() => {
				setShowElement((prevState) => ({ ...prevState, dot3: true }));
			}, 300)
		);

		timers.push(
			setTimeout(() => {
				setShowElement((prevState) => ({ ...prevState, message: true }));
			}, 600)
		);

		return () => {
			timers.forEach((timer) => clearTimeout(timer));
		};
	}, []);

	return (
		<section className="overflow-hidden">
			<Background />

			<section className="lg:px-[72px] md:px-[72px] px-6 flex justify-between items-center">
				<section className="absolute top-[90px] lg:top-[30rem] md:top-[30rem]">
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

				<div className="absolute lg:right-[160px] md:right-[60px] top-[232px] right-[2rem]">
					<div className="flex gap-4 relative">
						<div className="hidden lg:block md:block absolute right-[14rem] lg:right-[300px] md:right-[300px] top-[-108px]">
							<div
								data-aos="fade-out"
								data-aos-duration="500"
								data-aos-once="true"
								style={{ opacity: showElement.message ? 1 : 0 }}
								className="border-2 border-[#54F4FC] p-4 lg:h-[100px] md:h-[100px] lg:w-[400px] md:w-[400px] rounded-md text-center flex justify-center items-center"
							>
								<h1 className="font-bold text-xs lg:text-base md:text-base">
									Hallo, Selamat Datang di CyberPolitics.AI
								</h1>
							</div>
							<div className="relative">
								{showElement.dot3 && (
									<div
										data-aos="fade-out"
										data-aos-duration="500"
										data-aos-once="true"
										className={cn(
											"absolute right-[-24px] border-2 border-[#54F4FC] w-[32px] h-[32px] rounded-full",
											styles.dot3
										)}
									/>
								)}

								{showElement.dot2 && (
									<div
										data-aos="fade-out"
										data-aos-duration="500"
										data-aos-once="true"
										className={cn(
											"absolute right-[-32px] top-8 border-2 border-[#54F4FC] w-[24px] h-[24px] rounded-full",
											styles.dot2
										)}
									/>
								)}

								{showElement.dot1 && (
									<div
										data-aos="fade-out"
										data-aos-duration="500"
										data-aos-once="true"
										className={cn(
											"absolute right-[-42px] top-14 border-2 border-[#54F4FC] w-[10px] h-[10px] rounded-full",
											styles.dot1
										)}
									/>
								)}
							</div>
						</div>
						<Hero />
					</div>
				</div>
			</section>
		</section>
	);
};
