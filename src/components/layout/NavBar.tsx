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
    href: "#",
  },
  {
    text: "Projects",
    href: "#",
  },
  {
    text: "Services",
    href: "#",
  },
  {
    text: "Connect",
    href: "#",
  },
];

function NavBar() {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);
  // Desktop or larger
  const isLg = useMediaQuery(`(min-width:${screenBreakpoints.lg})`);

  return (
    <>
      <header className="fixed w-full mix-blend-exclusion z-20">
        <nav className="flex justify-between section-padding py-6 items-center text-white *:uppercase">
          <a
            href="#"
            className="w-min font-bold-condensed text-2xl leading-[0.75] lg:text-3xl"
          >
            Ahmed Ibrahim
          </a>
          {isLg ? (
            <>
              <LinkList
                links={links}
                listStyle="flex justify-between gap-x-[4vw]"
                linkStyle="flex items-center gap-x-2 font-light uppercase"
              />
              <a href="#" className="flex border-b text-lg">
                Contact me <ArrowIcon />
              </a>
            </>
          ) : (
            <button
              className="font-light"
              onClick={() => setIsMenuShown((prev) => !prev)}
            >
              {isMenuShown ? (
                <span>[ close ]</span>
              ) : (
                <span className="relative after:content-['+'] after:absolute after:bottom-1/2 after:text-xs">
                  Menu
                </span>
              )}
            </button>
          )}
        </nav>
      </header>
      {!isLg && isMenuShown && <HamburgerMenu />}
    </>
  );
}
export default NavBar;
