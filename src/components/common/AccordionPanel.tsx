import type { AccordionPanelData } from "@/lib/schemas/definitions";

interface AccordionPanelProps extends Omit<AccordionPanelData, "id"> {
	isSelected: boolean;
	index: number;
	onClick: () => void;
}

function AccordionPanel({
	title,
	description,
	imageLink,
	previewLink,
	colorTheme,
	isSelected,
	index,
	onClick,
	keywords,
}: AccordionPanelProps) {
	const keywordsItems = keywords?.map((keyword, index) => (
		<li
			key={keyword + index}
			className="font-bold-condensed uppercase tracking-tighter text-xl">
			/ {keyword}
		</li>
	));

	return (
		<div
			className={`border-b border-dark-gray px-4 space-y-6 py-2 ${
				isSelected ? "bg-white" : ""
			}`}>
			<div className="flex items-center space-x-4 cursor-pointer ">
				{!isSelected && (
					<span className="text-secondary text-sm tracking-tighter">
						00-{index + 1}
					</span>
				)}
				<h2
					className="text-3xl font-bold-condensed uppercase tracking-tighter"
					onClick={onClick}>
					{title}
				</h2>
			</div>
			{isSelected && (
				<>
					<div className="flex *:flex-1">
						{keywords && <ul>{keywordsItems}</ul>}
						<figure>
							<img src={imageLink} alt={title} />
						</figure>
					</div>
					{previewLink && (
						<div className="text-center underline">
							<a
								href={previewLink}
								className="uppercase"
								style={{ color: colorTheme }}
								target="_blank">
								Preview
							</a>
						</div>
					)}
					<p className="text-center uppercase font-light mb-4">
						{description}
					</p>
				</>
			)}
		</div>
	);
}

export default AccordionPanel;
