import LinkList from "@/components/common/LinkList";
import type { link } from "@/lib/schemas/definitions";

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
    <footer className="bg-bg-primary section-padding py-4 space-y-4 lg:pt-20">
      <div className="text-center font-bold-condensed text-2xl md:text-3xl lg:text-4xl lg:text-end xl:text-5xl">
        <a href="mailto:ahmed.ibrahim.elsayed01@gmail.com">
          ahmed.ibrahim.elsayed01@gmail.com
        </a>
      </div>
      <LinkList
        links={links}
        listStyle="flex justify-between"
        linkStyle="flex items-center gap-x-2 font-light uppercase"
      />
      <div className="uppercase font-bold-condensed text-6xl -tracking-wider text-center md:text-[17.15vw]">
        Ahmed Ibrahim
      </div>
      <div className="text-sm text-center text-secondary">
        &copy; All Rights Reserved. 2025 AhmedIbrahim
      </div>
    </footer>
  );
}
export default Footer;
