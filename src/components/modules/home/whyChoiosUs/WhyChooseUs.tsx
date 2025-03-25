'use client';

import { Button } from "@/components/ui/button";
import { PhoneCall, Zap, ShieldCheck, ThumbsUp } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: PhoneCall, text: "24/7 Live Support" },
  { icon: Zap, text: "Fast Responsive" },
  { icon: ShieldCheck, text: "Safe Community" },
  { icon: ThumbsUp, text: "Better Than Others" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-sm text-gray-500 font-semibold">--WHY CHOOSE US</h3>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          We intend to expand <span className="text-green-500">Excellent</span> education.
        </h2>
      </div>
      
<div className="grid grid-cols-2">
<div className="grid grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6">
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-3">
              <feature.icon size={24} />
            </div>
            <p className="text-gray-700 font-medium">{feature.text}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-6">
        <div className="max-w-md">
          <Image 
            src="https://i.ibb.co.com/XkMLp5GD/depositphotos-255322186-stock-photo-attractive-happy-freelancer-using-laptop.webp" 
            alt="Customer Support" 
            width={500} 
            height={300} 
            className="rounded-3xl shadow-lg" 
          />
        </div>
      </div>
</div>
      
      <div className="text-center mt-10">
        <Button className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 text-lg rounded-xl">Get Started</Button>
      </div>
    </section>
  );
}
