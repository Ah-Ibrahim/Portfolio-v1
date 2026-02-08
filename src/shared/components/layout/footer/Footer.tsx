import { link } from "@/shared/lib/schemas/definitions";
import LinkList from "../../common/LinkList";
import FooterTime from "./FooterTime";
import Scrub from "./Scrub";

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

function Footer() {
  return (
    <footer className="bg-bg-primary section-padding py-4 space-y-8 md:space-y-10 lg:space-y-12 lg:pt-20 selection:text-white selection:bg-black">
      <div className="text-lg text-center font-bold-condensed xs:text-2xl md:text-3xl lg:text-4xl lg:text-end xl:text-5xl">
        <a
          href="mailto:ahmed.ibrahim.elsayed01@gmail.com"
          className="underline-animation"
        >
          ahmed.ibrahim.elsayed01@gmail.com
        </a>
      </div>
      <LinkList
        links={links}
        listStyle="flex justify-between"
        linkStyle="text-xs xs:text-base font-light uppercase bracket-hover-animation"
        newTab
      />
      <Scrub />
      <div className="lg:flex justify-between">
        <div className="hidden lg:block font-light text-xs text-right uppercase tracking-widest">
          <FooterTime />
        </div>
        <div className="text-xs xs:text-sm text-center text-text-secondary">
          &copy; All Rights Reserved. 2026 AhmedIbrahim
        </div>
      </div>
    </footer>
  );
}
export default Footer;
