import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

function NavBar() {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

  return (
    <>
      <header className="fixed w-full mix-blend-exclusion z-10">
        <nav className="flex justify-between px-4 py-6 items-center text-white *:uppercase">
          <a href="#" className="w-min bold-text text-2xl leading-[0.75] ">
            Ahmed Ibrahim
          </a>
          <a
            href="#"
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
          </a>
        </nav>
      </header>
      {isMenuShown && <HamburgerMenu />}
    </>
  );
}
export default NavBar;
