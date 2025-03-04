import { ITutors } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TutorsCard = ({ tutor }: { tutor: ITutors | null }) => {
  console.log(tutor);
  return (
    <div className=" lg:w-[300px] w-[350px] rounded-lg overflow-hidden shadow-lg bg-[#ffffffb6] mx-4">
      <div className="w-full h-48 relative">
        <Image
          src="https://i.ibb.co.com/tmRS5Lq/premium-photo-1682089789852-e3023ff6df24.jpg" // Update this path to your image
          alt="UTTAM KUMAR DAS"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-4 py-4">
        <div className="font-bold text-lg mb-2">{tutor?.name}</div>
        <p className="text-gray-700 text-base">
          I am an English teacher with 20+ years of teaching experience in
          English. I have enough numbers of degrees and
        </p>
        <div className="w-full border border-gray-700 mt-2"></div>
      </div>
      <div className="px-6 flex justify-between pt-2 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tutor?.location}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          271 Views
        </span>
      </div>
      <div className="px-6 mt-3 mb-2 w-full pb-4">
        <Link href={`/findTutors/${tutor?.id}`}>
          <button className="bg-orange-500 w-full hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TutorsCard;
