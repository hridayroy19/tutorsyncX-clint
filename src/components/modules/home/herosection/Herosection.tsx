import { MapPin } from "lucide-react";
import Image from "next/image";
import Modal from "./Modal";


const Herosection =  () => {

  return (
    <div className="container border-b shadow mx-auto md:px-4 px-2 py-10 ">
      <div className="grid grid-cols-1 px-5 md:grid-cols-2  items-start text-center md:text-left">
        <div className=" lg:w-[700px] md:w-[500] w-full">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-orange-600"> Best</span> Tutoring Platform
          </h1>
          <h2 className=" text-4xl md:text-6xl font-bold leading-tight">
            for Home & Online Tuitions
          </h2>
          <p className="mt-5 flex gap-2 items-center text-gray-600 text-2xl">
            <span>
              <MapPin />
            </span>
            Find the Right Tutor in Your Area
          </p>
          <div>
            <Modal />
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="https://i.ibb.co/d4fNR8Qx/lesson-concept-illustration-114360-7937-1-removebg-preview.png"
            alt="Tutoring"
            width={350}
            height={500}
            className="lg:max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
