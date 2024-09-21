"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
	texts: string[];
}
export const TypingAnimation = ({ texts }: Props) => {
	const [collectedText, setCollectedText] = useState<string>("");
	const [index, setIndex] = useState<number>(0);
	const [indexParagraph, setIndexParagraph] = useState<number>(0);
	const [completed, setCompleted] = useState<boolean>(false);

	const changeIndexParagraph = () => {
		if (indexParagraph === 0) {
			setIndexParagraph(1);
		} else {
			if (indexParagraph === texts.length - 1) {
				setIndexParagraph(0);
			} else {
				setIndexParagraph(indexParagraph + 1);
			}
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			const selectedText = texts[indexParagraph];
			if (index < selectedText.length) {
				setCollectedText((prevText) => prevText + selectedText[index]);
				setIndex((prevIndex) => prevIndex + 1);
			} else {
				setCompleted(true);

				setTimeout(() => {
					setCollectedText("");
					setIndex(0);
					changeIndexParagraph();
					setCompleted(false);
				}, 300);
			}
		}, 200);

		return () => {
			clearInterval(interval);
		};
	}, [texts, index, indexParagraph]);

	return (
		<div>
			<motion.span
				className={`text-2xl lg:text-4xl md:text-4xl font-bold border-r-2 text-[#54F4FC] animate-typing ${
					completed ? "bg-[#54F4FC] text-black" : "bg-transparent"
				}`}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				{collectedText}
			</motion.span>
		</div>
	);
};
