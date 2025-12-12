import type { AccordionPanelData } from "@/lib/schemas/definitions";

interface TablePanelProps extends Omit<AccordionPanelData, "id"> {
  index: number;
}

function TablePanel({
  title,
  description,
  imageLink,
  index,
  keywords,
}: TablePanelProps) {
  const keywordsItems = keywords?.map((keyword, index) => (
    <li
      key={keyword + index}
      className="font-bold-condensed uppercase tracking-tighter text-xl md:text-2xl"
    >
      / {keyword}
    </li>
  ));

  return (
    <div className="border-r px-4 py-7 hover:flex-[2.75] group flex flex-col hover:justify-between h-120 hover:bg-white">
      <div className="font-bold-condensed flex justify-between">
        <div className="-tracking-widest group-hover:text-4xl group-hover:tracking-tighter">
          00-{index + 1}
        </div>
        <div className="hidden font-bold-condensed text-4xl uppercase group-hover:block -translate-y-2 -translate-x-6 tracking-tighter">
          <span className="me-5">//</span> {title}
        </div>
      </div>
      <div className="uppercase group-hover:hidden font-bold-condensed text-3xl tracking-tighter">
        {title}
      </div>
      <div
        className={`hidden group-hover:flex ${
          index % 2 ? "flex-row-reverse" : ""
        }`}
      >
        <ul className={`flex-1 ${index % 2 ? "*:ms-2" : ""}`}>
          {keywordsItems}
        </ul>
        <figure className="flex-1">
          <img className="w-full" src={imageLink} alt={title} />
        </figure>
      </div>
      <p className="uppercase font-light text-base text-start hidden group-hover:block mt-6">
        {description}
      </p>
    </div>
  );
}

export default TablePanel;
