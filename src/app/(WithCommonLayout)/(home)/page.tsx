"use client";
import Herosection from "@/components/modules/home/herosection/Herosection";
import PopularTutor from "@/components/modules/home/herosection/PopularTutor";
import FindSubjcet from "@/components/modules/home/subjcet/FindSubjcet";
import Trusted from "@/components/modules/home/trusted/Trusted";
import TuitionTypes from "@/components/modules/home/TuitionTypes/TuitionTypes";
// import { useUser } from "@/context/UserContext";

export default function HomePage() {
  // const user = useUser();
  // console.log(user.user);

  return (
    <div className="bg-amber-50">
      <Herosection />
      <Trusted />
      <PopularTutor />
      <FindSubjcet />
      <TuitionTypes />
    </div>
  );
}
