import type { link } from "@/lib/schemas/definitions";

interface LinkListProps {
  links: link[];
  listStyle: string;
  linkStyle: string;
}

function LinkList({ links, linkStyle, listStyle }: LinkListProps) {
  const items = links.map((link, index) => (
    <li key={link.text + index}>
      <a href={link.href} target="_blank" className={linkStyle}>
        {link.text}
      </a>
    </li>
  ));

  return <ul className={listStyle}>{items}</ul>;
}

export default LinkList;
