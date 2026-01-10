import { type PanelData } from "@/lib/schemas/definitions";
import TablePanel from "./TablePanel";

interface TableProps {
  panelsData: PanelData[];
}

function Table({ panelsData }: TableProps) {
  const panels = panelsData.map((panelData, index) => (
    <TablePanel
      key={panelData.id}
      {...{
        ...panelData,
        index,
      }}
    />
  ));

  return <div className="flex *:flex-1 border-t border-b">{panels}</div>;
}

export default Table;
