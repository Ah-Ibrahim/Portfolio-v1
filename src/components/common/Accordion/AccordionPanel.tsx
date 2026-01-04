import type { AccordionPanelData } from "@/lib/schemas/definitions";
import { getNumeratedIndex } from "@/lib/utils/common";
import { useRef } from "react";
import ArrowIcon from "../../ui/ArrowIcon";
import { useAccordionPanelAnimations } from "./useAccordionPanelAnimations";

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
  const container = useRef<HTMLDivElement>(null);
  const keywordsItems = keywords?.map((keyword, index) => (
    <li
      key={keyword + index}
      className="font-bold-condensed uppercase tracking-tighter text-xl md:text-2xl lg:text-3xl overflow-hidden"
    >
      <div className="accordion-keywords-animation">/ {keyword}</div>
    </li>
  ));

  useAccordionPanelAnimations(container, isSelected);

  return (
    <div
      className={`border-b border-dark-gray px-4 md:px-6 md:py-4 py-2`}
      ref={container}
    >
      <div
        className="flex items-center space-x-4 cursor-pointer"
        onClick={onClick}
      >
        <div className="overflow-hidden w-max shrink-0">
          <div className="text-secondary text-sm tracking-tighter md:text-base lg:text-lg accordion-index-animation text-nowrap">
            {getNumeratedIndex(index)}
          </div>
        </div>
        <h2 className="text-3xl font-bold-condensed uppercase tracking-tighter md:text-4xl lg:md:text-5xl accordion-title-animation">
          {title}
        </h2>
      </div>
      <div className="overflow-hidden box-border space-y-6 accordion-body-animation h-0">
        <div className={`flex mt-6 ${index % 2 ? "flex-row-reverse" : ""}`}>
          {keywords && (
            <ul className={`flex-1 ${index % 2 ? "*:ms-2" : ""}`}>
              {keywordsItems}
            </ul>
          )}
          <figure
            className={`flex-1 accordion-image-animation ${
              !keywords ? "lg:flex-[0.5] lg:mx-auto" : ""
            } `}
          >
            <img className="w-full" src={imageLink} alt={title} />
          </figure>
        </div>
        {previewLink && (
          <a
            href={previewLink}
            className="uppercase underline-animation flex w-max gap-x-2 group mx-auto accordion-description-animation"
            style={{ color: colorTheme }}
            target="_blank"
          >
            Preview <ArrowIcon />
          </a>
        )}
        <p className="text-center uppercase font-light mb-4 md:text-base lg:text-xl lg:w-[60%] lg:mx-auto accordion-description-animation">
          {description}
        </p>
      </div>
    </div>
  );
}

export default AccordionPanel;
