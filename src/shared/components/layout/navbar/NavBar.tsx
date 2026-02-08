"use client";

import { useRef, useState } from "react";
import LinkList from "../../common/LinkList";
import ArrowIcon from "../../ui/ArrowIcon";
import { link } from "@/shared/lib/schemas/definitions";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import screenBreakpoints from "@/shared/lib/breakpoints";
import HamburgerMenu from "./HamburgerMenu";
import useNavBarAnimations from "./useNavBarAnimations";

const links: link[] = [
  {
    text: "About me",
    href: "#about",
  },
  {
    text: "Projects",
    href: "#projects",
  },
  {
    text: "Services",
    href: "#services",
  },
  {
    text: "Connect",
    href: "#contact",
  },
];

function NavBar() {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

  const handleCloseMenu = () => {
    setIsMenuShown(false);
  };

  const container = useRef<HTMLElement>(null);

  useNavBarAnimations(container);

  return (
    <>
      <header
        className="fixed w-full mix-blend-exclusion z-20 invisible"
        id="navbar-animation"
        ref={container}
      >
        <nav className="flex justify-between section-padding py-6 items-center text-white *:uppercase">
          <a
            href="#"
            className="w-min font-bold-condensed text-2xl leading-[0.75] lg:text-3xl"
            onClick={handleCloseMenu}
          >
            Ahmed Ibrahim
          </a>
          <LinkList
            links={links}
            listStyle="hidden lg:flex justify-between gap-x-[4vw]"
            linkStyle="font-light uppercase bracket-hover-animation"
          />
          <a
            href="mailto:ahmed.ibrahim.elsayed01@gmail.com"
            target="_blank"
            className="hidden lg:flex text-lg underline-animation group gap-x-2"
          >
            Contact me <ArrowIcon />
          </a>
          <button
            className="font-light lg:hidden"
            onClick={() => setIsMenuShown((prev) => !prev)}
          >
            {isMenuShown ? (
              <span className="bracket-hover-animation">close</span>
            ) : (
              <span className="relative after:content-['+'] after:absolute after:bottom-1/2 after:text-xs">
                Menu
              </span>
            )}
          </button>
        </nav>
      </header>
      <HamburgerMenu onClose={handleCloseMenu} isMenuShown={isMenuShown} />
    </>
  );
}
export default NavBar;
