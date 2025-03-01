import TutorsCard from "@/components/ui/cors/TutorsCard";

const PopularTutor = () => {
  return (
    <div className="mt-16 container mx-auto w-full px-4">
      <h1 className="text-center lg:text-4xl text-2xl font-medium text-gray-700">
        Our Popular Tutors
      </h1>
      <p className="text-center lg:text-2xl text-xl text-gray-700 mt-3 mb-10">
        Here are few of the Verified Teachers
      </p>
      <div className="grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-5 ">
        <TutorsCard />
        <TutorsCard />
        <TutorsCard />
        <TutorsCard />
        <TutorsCard />
      </div>
    </div>
  );
};

export default PopularTutor;
