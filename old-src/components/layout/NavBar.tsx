import HamburgerMenu from "@/components/layout/HamburgerMenu";
import useMediaQuery from "@/hooks/useMediaQuery";
import screenBreakpoints from "@/lib/breakpoints";
import type { link } from "@/lib/schemas/definitions";
import { useState } from "react";
import LinkList from "../common/LinkList";
import ArrowIcon from "../ui/ArrowIcon";

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
  // Desktop or larger
  const isLg = useMediaQuery(`(min-width:${screenBreakpoints.lg})`);

  const handleCloseMenu = () => {
    setIsMenuShown(false);
  };

  return (
    <>
      <header
        className="fixed w-full mix-blend-exclusion z-20 invisible"
        id="navbar-animation"
      >
        <nav className="flex justify-between section-padding py-6 items-center text-white *:uppercase">
          <a
            href="#"
            className="w-min font-bold-condensed text-2xl leading-[0.75] lg:text-3xl"
            onClick={handleCloseMenu}
          >
            Ahmed Ibrahim
          </a>
          {isLg ? (
            <>
              <LinkList
                links={links}
                listStyle="flex justify-between gap-x-[4vw]"
                linkStyle="font-light uppercase bracket-hover-animation"
              />
              <a
                href="mailto:ahmed.ibrahim.elsayed01@gmail.com"
                target="_blank"
                className="flex text-lg underline-animation group gap-x-2"
              >
                Contact me <ArrowIcon />
              </a>
            </>
          ) : (
            <button
              className="font-light"
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
          )}
        </nav>
      </header>
      {!isLg && (
        <HamburgerMenu onClose={handleCloseMenu} isMenuShown={isMenuShown} />
      )}
    </>
  );
}
export default NavBar;
