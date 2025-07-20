import Datashare from "../../data/Datashare";
import Tradingview from "./tradingview";

export default function Pageshare() {
  return (
    <div className="h-full">
      <div className="max-w-[1500px] mx-auto">
        <Tradingview />
      </div>
    </div>
  );
}
