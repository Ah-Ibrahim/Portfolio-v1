import type { link } from "@/lib/schemas/definitions";

interface LinkListProps {
	links: link[];
	linkStyle: string;
}

function LinkList({ links, linkStyle }: LinkListProps) {
	const items = links.map((link, index) => (
		<li key={link.text + index}>
			<a href={link.href} target="_blank" className={linkStyle}>
				[<span className="text-xs">{link.text}</span>]
			</a>
		</li>
	));

	return <ul className="flex justify-between">{items}</ul>;
}

export default LinkList;
