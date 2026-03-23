import LinkList from "@/components/common/LinkList";
import useTime from "@/hooks/useTime";
import type { link } from "@/lib/schemas/definitions";
import { useRef } from "react";
import { useHamburgerAnimation } from "./useHamburgerAnimations";

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

function HamburgerMenu({
  onClose,
  isMenuShown,
}: {
  onClose: () => void;
  isMenuShown: boolean;
}) {
  const { time, timeZone } = useTime();

  const container = useRef<HTMLElement>(null);

  useHamburgerAnimation(container, isMenuShown);

  return (
    <nav
      aria-label="Main navigation"
      className="bg-white fixed inset-0 w-full h-full pt-19.5 flex flex-col pb-2 section-padding z-10"
      ref={container}
    >
      <div className="font-light text-xs text-right uppercase tracking-widest">
        <div>Alexandria, Egypt:</div>
        <div>
          ({timeZone}) {time}
        </div>
      </div>
      <ul className="uppercase text-5xl font-bold-condensed space-y-3 my-auto tracking-tighter">
        <li>
          <a href="#about" onClick={onClose}>
            About me
          </a>
        </li>
        <li>
          <a href="#projects" onClick={onClose}>
            Projects
          </a>
        </li>
        <li>
          <a href="#services" onClick={onClose}>
            Services
          </a>
        </li>
        <li>
          <a href="#contact" onClick={onClose}>
            Connect
          </a>
        </li>
      </ul>
      <div className="space-y-4 mt-auto">
        <LinkList
          links={links}
          listStyle="flex justify-between"
          linkStyle="text-sm xs:text-base flex items-center gap-x-2 font-light uppercase bracket-hover-animation"
          newTab
        />
        <div className="text-lg text-center font-bold-condensed xs:text-2xl">
          <a
            href="mailto:ahmed.ibrahim.elsayed01@gmail.com"
            className="underline-animation"
          >
            ahmed.ibrahim.elsayed01@gmail.com
          </a>
        </div>
        <div className="text-xs xs:text-sm text-center text-secondary">
          &copy; All Rights Reserved. 2026 AhmedIbrahim
        </div>
      </div>
    </nav>
  );
}
export default HamburgerMenu;
