import { saveAs } from "file-saver";
import { Download } from "lucide-react";
import type { Transaction } from "../types";

const ExportButton = ({ data }: { data: Transaction[] }) => {
  const handleExport = () => {
    // convert to json
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], {
      type: "application/json;charset=utf-8",
    });
    saveAs(blob, "export_data.json");
  };

  // return neu khong co data
  if (data.length === 0) return null;

  return (
    <button
      onClick={handleExport}
      className="flex gap-2 items-center mx-auto mt-12 rounded-full bg-[#5064dc] px-5 py-3 font-medium drop-shadow-lg text-white"
    >
      Export to JSON file
      <Download className="size-5"/>
    </button>
  );
};

export default ExportButton;
