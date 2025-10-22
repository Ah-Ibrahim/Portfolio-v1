function NavBar() {
  return (
    // NOTE: Inversion is working but needs background elements
    <header className="fixed w-full mix-blend-exclusion">
      <nav className="flex justify-between px-4 py-6 items-center text-white *:uppercase">
        <a href="#" className="w-min bold-text text-2xl leading-[0.75] ">
          Ahmed Ibrahim
        </a>
        <a
          href="#"
          className="font-light relative after:content-['+'] after:absolute after:bottom-1/2 after:text-xs"
        >
          Menu
        </a>
      </nav>
    </header>
  );
}
export default NavBar;
