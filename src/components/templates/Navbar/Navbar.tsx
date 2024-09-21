"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ImageConstant } from "@/constants";
import { navMenuData } from "@/data/nav-menu.data";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
	const [openSheet, setOpenSheet] = useState(false);
	return (
		<nav className="flex bg-[#0a0a0a] top-0 z-50 fixed transition-all duration-300 w-full items-center justify-between py-4 px-6 lg:px-[72px] md:px-[72px]">
			<Image
				src={ImageConstant.LOGO}
				alt="CyberPolitics.AI"
				width={200}
				height={200}
				priority
			/>

			<div className="hidden gap-16 lg:flex md:hidden justify-center w-full">
				{navMenuData.map((value) => {
					return (
						<a
							className="font-semibold hover:text-[#54F4FC] text-white text-sm"
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

			<div className="hidden lg:block md:hidden">
				<Button
					variant="outline"
					className="bg-transparent border-2 border-[#54F4FC] text-[#54F4FC] hover:bg-[#54F4FC] font-bold"
				>
					Hubungi Kami
				</Button>
			</div>

			<div className="block md:flex lg:hidden gap-2">
				<button onClick={() => setOpenSheet(true)}>
					<Menu className="text-white" />
				</button>
			</div>
			<Sheet open={openSheet}>
				<SheetContent
					className="bg-[#0a0a0a] text-slate-100 border-l-0"
					onCloseSheet={() => setOpenSheet(false)}
				>
					<div className="gap-4 flex-col flex mt-9">
						{navMenuData.map((value) => {
							return (
								<a
									className="font-semibold hover:text-[#54F4FC]"
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

					<div className="w-full mt-4">
						<Button
							variant="outline"
							className="bg-transparent border-2 border-[#54F4FC] text-[#54F4FC] hover:bg-[#54F4FC] font-bold"
						>
							Hubungi Kami
						</Button>
					</div>
				</SheetContent>
			</Sheet>
		</nav>
	);
};
