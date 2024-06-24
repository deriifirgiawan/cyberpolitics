"use client";
import { useState } from "react";

export const useNavbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [openSheet, setOpenSheet] = useState(false);

	return {
		scrolled,
		openSheet,
		setOpenSheet,
		setScrolled,
	};
};
