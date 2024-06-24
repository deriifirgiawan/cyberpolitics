"use client";
import { useEffect } from "react";
import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useNavbar } from "./hooks";
import {
	$activeStyle,
	$activeTextStyle,
	$defaultStyle,
	$defaultTextStyle,
	$defaultTextStyleSheet,
} from "./Navbar.style";
import { ImageConstant } from "@/constants";
import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { navMenuData } from "@/data/nav-menu.data";

export const Navbar = () => {
	const { scrolled, setScrolled, openSheet, setOpenSheet } = useNavbar();

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setScrolled(scrollTop >= 200);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<nav className={scrolled ? $activeStyle : $defaultStyle}>
			<div className="hidden gap-16 lg:flex md:hidden justify-center">
				{navMenuData.map((value) => {
					return (
						<a
							className={scrolled ? $activeTextStyle : $defaultTextStyle}
							href={`${value.slug}`}
							key={value.id}
							target="_blank"
							rel="noopener noreferrer"
						>
							{value.name}
						</a>
					);
				})}
			</div>

			<div className="block md:flex lg:hidden gap-2">
				<button onClick={() => setOpenSheet(true)}>
					<Menu className={`${scrolled ? "text-black" : "text-white"}`} />
				</button>
			</div>
			<Sheet open={openSheet}>
				<SheetContent onCloseSheet={() => setOpenSheet(false)}>
					<div className="gap-4 flex-col flex mt-9">
						{navMenuData.map((value) => {
							if (value.type === "navigate") {
								return (
									<Link
										className={
											scrolled ? $activeTextStyle : $defaultTextStyleSheet
										}
										href={`/${value.slug}`}
										key={value.id}
									>
										{value.name}
									</Link>
								);
							}

							return (
								<div key={value.id}>
									<Link
										className={
											scrolled ? $activeTextStyle : $defaultTextStyleSheet
										}
										href={`/${value.slug}`}
									>
										{value.name}
									</Link>
									<div className="flex flex-col">
										{value.subLink?.map((item) => (
											<Link
												key={item.id}
												className={`${
													scrolled ? $activeTextStyle : $defaultTextStyleSheet
												} ml-4`}
												href={`/${item.slug}`}
											>
												- {item.name}
											</Link>
										))}
									</div>
								</div>
							);
						})}
					</div>
				</SheetContent>
			</Sheet>
		</nav>
	);
};
