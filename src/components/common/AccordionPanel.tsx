import type { AccordionPanelData } from "@/lib/schemas/definitions";
import { getNumeratedIndex } from "@/lib/utils/common";

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
      className="font-bold-condensed uppercase tracking-tighter text-xl md:text-2xl lg:text-3xl	"
    >
      / {keyword}
    </li>
  ));

  return (
    <div
      className={`border-b border-dark-gray px-4 md:px-6 md:py-4 space-y-6 py-2 ${
        isSelected ? "bg-white" : ""
      }`}
    >
      <div className="flex items-center space-x-4 cursor-pointer ">
        {!isSelected && (
          <span className="text-secondary text-sm tracking-tighter md:text-base lg:text-lg">
            {getNumeratedIndex(index)}
          </span>
        )}
        <h2
          className="text-3xl font-bold-condensed uppercase tracking-tighter md:text-4xl lg:md:text-5xl"
          onClick={onClick}
        >
          {title}
        </h2>
      </div>
      {isSelected && (
        <>
          <div className={`flex ${index % 2 ? "flex-row-reverse" : ""}`}>
            {keywords && (
              <ul className={`flex-1 ${index % 2 ? "*:ms-2" : ""}`}>
                {keywordsItems}
              </ul>
            )}
            <figure
              className={`flex-1 ${
                !keywords ? "lg:flex-[0.5] lg:mx-auto" : ""
              } `}
            >
              <img className="w-full" src={imageLink} alt={title} />
            </figure>
          </div>
          {previewLink && (
            <div className="text-center underline">
              <a
                href={previewLink}
                className="uppercase"
                style={{ color: colorTheme }}
                target="_blank"
              >
                Preview
              </a>
            </div>
          )}
          <p className="text-center uppercase font-light mb-4 md:text-base lg:text-xl lg:w-[60%] lg:mx-auto">
            {description}
          </p>
        </>
      )}
    </div>
  );
}

export default AccordionPanel;
