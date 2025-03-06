"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="container mx-auto md:px-16 px-8 py-12 ">
      {/* Hero Section */}
      <div className="max-w-3xl  mb-12">
        <h1 className="text-4xl font-bold">আমাদের সম্পর্কে</h1>
        <p className="mt-4 text-lg text-gray-600">
          আমাদের লক্ষ্য শিক্ষার্থীদের দক্ষ টিউটরদের সাথে সংযুক্ত করা, যাতে তারা
          উন্নত শিক্ষার সুযোগ পায়।
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">আমাদের টিম</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Card className="w-60 p-1 shadow-lg">
            <Image
              src="https://i.ibb.co.com/rFSYnXb/20230409234326-IMG-7354-removebg-removebg-preview.png"
              height={400}
              alt="images"
              width={500}
            />
            <CardContent>
              <h3 className="font-medium mt-1">Hridoy Chandra Roy</h3>
              <p className="text-gray-500  py-2 text-sm">Founder & CEO</p>
            </CardContent>
          </Card>
          <Card className="w-60 p-1 shadow-lg">
            <Image
              src="https://i.ibb.co.com/tmRS5Lq/premium-photo-1682089789852-e3023ff6df24.jpg"
              height={400}
              alt="image"
              width={500}
            />
            <CardContent>
              <h3 className="font-medium mt-1">Zeo lix </h3>
              <p className="text-gray-500 py-2 text-sm">Head of Operations</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Success Stories */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">সফলতার গল্প</h2>
        <p className="text-gray-600 max-w-2xl ">
          অনেক শিক্ষার্থী আমাদের প্ল্যাটফর্ম ব্যবহার করে তাদের আদর্শ টিউটর খুঁজে
          পেয়েছে এবং আরও উন্নত শিক্ষা গ্রহণ করছে।
        </p>
        <h1 className="mt-5 text-3xl text-orange-400">নীলার গল্প :</h1>
        <p className="mt-3">
          নীলা ঢাকার এক ছাত্র, যে সবসময় গণিত বুঝতে সমস্যায় পড়ত। স্কুলে ভালো
          ফলাফল করতে না পারার হতাশা থেকে, সে TutorLink-এর মাধ্যমে এক অভিজ্ঞ গণিত
          শিক্ষকের সন্ধান পায়। মাত্র ৩ মাসের মধ্যেই তার রেজাল্ট নাটকীয়ভাবে
          উন্নতি করে এবং সে এসএসসি পরীক্ষায় এ+ অর্জন করে!
          <br />
          <span className="mt-2 text-lg">
            {" "}
            <br /> নীলার ভাষায়
          </span>
          : <br /> আগে গণিত আমার কাছে একটা দুঃস্বপ্নের মতো ছিল। কিন্তু আমার
          টিউটরের সাহায্যে আমি আত্মবিশ্বাস ফিরে পেয়েছি। TutorLink আমার শিক্ষা
          জীবনে আশীর্বাদস্বরূপ!
        </p>

        <h1 className="mt-5 text-3xl text-orange-400">মেহেদীর স্যার গল্প :</h1>
        <p className="mt-3">
          মেহেদী স্যার একজন দক্ষ ইংরেজি শিক্ষক, কিন্তু তিনি তার যোগ্যতা অনুযায়ী
          শিক্ষার্থী পাচ্ছিলেন না। TutorLink-এ যোগ দেওয়ার পর, তিনি দেশের
          বিভিন্ন প্রান্ত থেকে শিক্ষার্থী পেতে শুরু করেন।
          <br />
          এখন তার অনলাইন ক্লাস এত জনপ্রিয় হয়েছে যে, তিনি একজন ফুল-টাইম অনলাইন
          শিক্ষক হিসেবে ক্যারিয়ার গড়েছেন! তার কথায়:
          <br />
          <span className="mt-2 text-lg">
            {" "}
            <br /> মেহেদীর ভাষায়
          </span>
          : <br /> আগে ভাবতাম, শুধু কোচিং সেন্টারেই ভালো পড়ানো যায়। কিন্তু
          TutorLink আমাকে দেখিয়েছে যে, অনলাইনে পড়িয়েও আমি হাজারো শিক্ষার্থীকে
          সাহায্য করতে পারি।
        </p>
      </div>

      {/* Vision */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          আমাদের ভবিষ্যৎ পরিকল্পনা
        </h2>
        <p className="text-gray-600 max-w-2xl ">
          আমরা আরও বেশি শিক্ষার্থী এবং টিউটরদের সংযুক্ত করতে চাই, এবং আমাদের
          প্ল্যাটফর্মে নতুন প্রযুক্তির সংযোজন করতে চাই।
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">🏆 আমাদের অর্জন</h2>
        <p className="text-gray-600 max-w-2xl ">
          ৫,০০০+ শিক্ষক তাদের পছন্দের শিক্ষার্থী পেয়েছেন
        </p>
        <p className="text-gray-600 max-w-2xl ">
          ৯৫% শিক্ষার্থী বলেছেন, তারা তাদের পরীক্ষায় ভালো ফল করেছে
        </p>
        <p className="text-gray-600 max-w-2xl ">
          ৯০% শিক্ষক বলছেন, তারা অর্থনৈতিকভাবে লাভবান হয়েছেন
        </p>
      </div>

      {/* Call to Action */}
      <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-lg">
        আমাদের সম্পর্কে আরও জানুন
      </Button>
    </div>
  );
};

export default AboutUs;
