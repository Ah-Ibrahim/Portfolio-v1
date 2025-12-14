import type { link } from "@/lib/schemas/definitions";
import { createTimeObject } from "@/lib/utils/time";
import { useEffect, useState } from "react";
import LinkList from "@/components/common/LinkList";

const timeObject = createTimeObject();
const links: link[] = [
	{
		text: "LinkedIn",
		href: "https://www.linkedin.com/in/ahmed-ibrahim-807258243/",
	},
	{
		text: "Github",
		href: "https://github.com/Ah-Ibrahim",
	},
];

function HamburgerMenu() {
	const [time, setTime] = useState<string>(timeObject.getTime());
	const timeZone = timeObject.getTimeZone();

	useEffect(() => {
		const id = setInterval(() => {
			setTime(timeObject.getTime());
		}, 1000);

		return () => clearInterval(id);
	}, []);

	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "";
		};
	}, []);

	return (
		<nav
			aria-label="Main navigation"
			className="bg-white fixed inset-0 w-full h-full pt-19.5 flex flex-col pb-2 section-padding z-10">
			<div className="font-light text-xs text-right uppercase tracking-widest">
				<div>Alexandria, Egypt:</div>
				<div>
					({timeZone}) {time}
				</div>
			</div>
			<ul className="uppercase text-5xl font-bold-condensed space-y-3 my-auto tracking-tighter">
				<li>
					<a href="#">About me</a>
				</li>
				<li>
					<a href="#">Works</a>
				</li>
				<li>
					<a href="#">Services</a>
				</li>
				<li>
					<a href="#">Connect</a>
				</li>
			</ul>
			<div className="space-y-4 mt-auto">
				<LinkList
					links={links}
					listStyle="flex justify-between"
          linkStyle="flex items-center gap-x-2 font-light uppercase bracket-hover-animation"
				/>
				<div className="text-center font-bold-condensed text-2xl">
					<a
						href="mailto:ahmed.ibrahim.elsayed01@gmail.com"
            className="underline-animation"
          >
						ahmed.ibrahim.elsayed01@gmail.com
					</a>
				</div>
				<div className="text-sm text-center text-secondary">
					&copy; All Rights Reserved. 2025 AhmedIbrahim
				</div>
			</div>
		</nav>
	);
}
export default HamburgerMenu;
