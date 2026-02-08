"use client";

import { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTablePanelAnimations } from "./useTablePanelAnimations";
import { PanelData } from "@/shared/lib/schemas/definitions";
import { getNumeratedIndex } from "@/shared/lib/utils/common";
interface TablePanelProps extends Omit<PanelData, "id"> {
  index: number;
}

function TablePanel({
  title,
  description,
  imageLink,
  index,
  keywords,
}: TablePanelProps) {
  const container = useRef<HTMLDivElement>(null);

  useTablePanelAnimations(container);

  const keywordsItems = keywords?.map((keyword, index) => (
    <li key={keyword + index} className="overflow-hidden">
      <div className="font-bold-condensed uppercase tracking-tighter text-xl md:text-2xl table-keywords-animation">
        / {keyword}
      </div>
    </li>
  ));

  return (
    <div
      className="border-r px-4 py-7 hover:flex-[2.75] group flex flex-col hover:justify-between h-120 hover:bg-white transition-[flex] flex-1 duration-1000"
      ref={container}
    >
      <div className="font-bold-condensed relative">
        <div className="-tracking-widest group-hover:text-4xl group-hover:tracking-tighter transition-[font-size] duration-500 ">
          {getNumeratedIndex(index)}
        </div>
        <div className="overflow-hidden absolute right-0 top-0">
          <div className="font-bold-condensed text-3xl xl:text-4xl uppercase tracking-tighter lg:max-xl:text-end -translate-y-[110%] text-nowrap panel-title-animation">
            <span className="xl:me-5">//</span> {title}
          </div>
        </div>
      </div>
      <div className="uppercase group-hover:hidden font-bold-condensed text-3xl tracking-tighter">
        {title}
      </div>
      <div className={`flex ${index % 2 ? "flex-row-reverse" : ""}`}>
        <ul className={`flex-1 ${index % 2 ? "*:ms-2" : ""}`}>
          {keywordsItems}
        </ul>
        <figure className="flex-1 invisible panel-image-animation">
          <LazyLoadImage
            className="w-full"
            src={imageLink}
            alt={title}
            effect="blur"
          />
        </figure>
      </div>
      <p className="uppercase font-light text-base text-start invisible panel-description-animation">
        {description}
      </p>
    </div>
  );
}

export default TablePanel;
