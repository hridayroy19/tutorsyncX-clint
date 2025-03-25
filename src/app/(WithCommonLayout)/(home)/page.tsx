"use client";
import Herosection from "@/components/modules/home/herosection/Herosection";
import PopularTutor from "@/components/modules/home/herosection/PopularTutor";
import Testimonials from "@/components/modules/home/testimonials/Testimonials";
// import FindSubjcet from "@/components/modules/home/subjcet/FindSubjcet";
import Trusted from "@/components/modules/home/trusted/Trusted";
import TuitionTypes from "@/components/modules/home/TuitionTypes/TuitionTypes";
import WhyChooseUs from "@/components/modules/home/whyChoiosUs/WhyChooseUs";

export default function HomePage() {
  return (
    <div className="">
      <Herosection />
      <Trusted />
      <PopularTutor />
      {/* <FindSubjcet /> */}
      <TuitionTypes />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
