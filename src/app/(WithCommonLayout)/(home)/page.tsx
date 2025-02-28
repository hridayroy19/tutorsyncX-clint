import Herosection from "@/components/modules/home/herosection/Herosection";
import TuitionTypes from "@/components/modules/home/TuitionTypes/TuitionTypes";

export default function HomePage() {
  return (
    <div className="bg-amber-50">
      <Herosection />
      <TuitionTypes />
    </div>
  );
}
