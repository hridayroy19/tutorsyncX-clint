import Image from "next/image";

const Trusted = () => {
  return (
    <div className="w-full py-10 mt-14 container mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-around items-center gap-10">
        <div className="w-full max-w-sm flex justify-center">
          <Image
            src="https://i.ibb.co.com/Gv5FPZxK/1716195695-F-I-1-removebg-preview.png"
            width={500}
            height={400}
            alt="banner"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none"
          />
        </div>
        <div className="w-full max-w-lg text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-6">
            Trusted by parents & teachers
          </h1>
          <p className="text-base sm:text-lg">
            MyTutor is the UK most trusted tutoring platform by parents. We are
            rated 4.96/5 by students and parents from the 3.8 million (and
            counting!) lessons we’ve delivered so far.
          </p>
          <p className="mt-4 text-base sm:text-lg">
            And because our tutors get such good results, schools use them to
            support their teaching. We work with 1500 across the UK, targeting
            learning gaps and helping teens everywhere achieve their goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
