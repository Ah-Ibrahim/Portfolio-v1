import type { link } from "@/lib/schemas/definitions";

interface LinkListProps {
  links: link[];
  listStyle: string;
  linkStyle: string;
  newTab?: boolean;
}

function LinkList({
  links,
  linkStyle,
  listStyle,
  newTab = false,
}: LinkListProps) {
  const items = links.map((link, index) => (
    <li key={link.text + index}>
      <a
        href={link.href}
        target={newTab ? "_blank" : "_self"}
        className={linkStyle}
      >
        {link.text}
      </a>
    </li>
  ));

  return <ul className={listStyle}>{items}</ul>;
}

export default LinkList;
