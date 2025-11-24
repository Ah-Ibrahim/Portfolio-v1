import AccordionPanel from "@/components/common/AccordionPanel";
import type { AccordionPanelData } from "@/lib/schemas/definitions";
import { useState } from "react";

interface AccordionProps {
  panelsData: AccordionPanelData[];
}

function Accordion({ panelsData }: AccordionProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const items = panelsData.map((panelData, index) => (
    <AccordionPanel
      key={panelData.id}
      {...{
        ...panelData,
        isSelected: selectedId === panelData.id,
        index,
        onClick: handleClick.bind(null, panelData.id),
      }}
    />
  ));

  return <div className="flex flex-col">{items}</div>;
}
export default Accordion;
