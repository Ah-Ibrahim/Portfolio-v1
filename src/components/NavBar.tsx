function NavBar() {
  return (
    // TODO Remove white bg
    <header className="bg-white fixed w-full">
      <nav className="flex justify-between px-4 py-6 items-center text-white *:mix-blend-exclusion *:uppercase">
        <a href="#" className="w-min bold-text text-2xl leading-[0.75] ">
          Ahmed Ibrahim
        </a>
        <a
          href="#"
          className="font-extralight relative after:content-['+'] after:absolute after:bottom-1/2 after:text-xs"
        >
          Menu
        </a>
      </nav>
    </header>
  );
}
export default NavBar;
