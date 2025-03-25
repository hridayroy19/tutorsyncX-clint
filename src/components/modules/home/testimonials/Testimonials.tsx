"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Redwan Rahman",
    title: "North South University\nTutor",
    image: "https://i.ibb.co.com/XGZX7sM/image-1.png",
    quote:
      " আপনাদের প্ল্যাটফর্মকে সাধুবাদ জানাই কারণ এই প্ল্যাটফর্মের মাধ্যমে আমি খুব কম সময়ে এবং সহজে ভালো একজন টিউটর পেয়েছি। আপনাদের টিউটর যাচাই প্রক্রিয়াটি বেশ স্বচ্ছ ও গঠনমূলক। এটা আমার কাছে খুবই ভালো লেগেছে। গ্রাহক সেবার এই মান সর্বদা অক্ষুণ্ণ থাকুক, এটাই প্রত্যাশা",
  },
  {
    name: "Debasish Bokshi",
    title: "Assistant Professor\nParent",
    image: "https://i.ibb.co.com/XGZX7sM/image-1.png",
    quote:
      "Tuition Terminal is one of the most faithful tuition job platforms.I have got 2 It must be said that they are too much active in solving tuition-related issues.Thanks to Tuition Terminal for cooperatives me.",
  },
  {
    name: "Debasish Bokshi",
    title: "Assistant Professor\nParent",
    image: "https://i.ibb.co.com/XGZX7sM/image-1.png",
    quote:
      "Tuition Terminal is one of the most faithful tuition job platforms.I have got 2 It must be said that they are too much active in solving tuition-related issues.Thanks to Tuition Terminal for cooperatives me.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Stakeholders <span className="text-[#ac0ed4e5]">Statements</span> About
        Us
      </h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border shadow-lg p-6 rounded-lg relative text-left"
          >
            <div className="flex flex-col items-center text-center">
              <div className="absolute  left-6 text-[#ac0ed4e5] text-6xl">
                “
              </div>
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={70}
                height={70}
                className="rounded-full"
              />
              <h3 className="mt-4 text-lg font-bold text-[#ac0ed4be]">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600 whitespace-pre-line">
                {testimonial.title}
              </p>
            </div>
            <p className="mt-4 text-gray-700 text-sm md:text-base">
              {testimonial.quote}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
