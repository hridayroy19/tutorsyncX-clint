"use client";
import Counter from "@/components/modules/home/counter/Counter";
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
      <Counter/>
    
      <TuitionTypes />
      <PopularTutor />
      {/* <FindSubjcet /> */}
      <Trusted />
     
      <WhyChooseUs/>
      <Testimonials/>
    </div>
  );
}
