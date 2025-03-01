import Herosection from "@/components/modules/home/herosection/Herosection";
import PopularTutor from "@/components/modules/home/herosection/PopularTutor";
import FindSubjcet from "@/components/modules/home/subjcet/FindSubjcet";
import TuitionTypes from "@/components/modules/home/TuitionTypes/TuitionTypes";

export default function HomePage() {
  return (
    <div className="bg-amber-50">
      <Herosection />
      <PopularTutor/>
      <FindSubjcet/>
      <TuitionTypes />
    </div>
  );
}
