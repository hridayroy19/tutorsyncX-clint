import ProfileSection from "@/components/modules/findTutor/tutorsInfo/TutorsInfoSection";
import TutorsProfile from "@/components/modules/findTutor/tutorsProfile/TutorsProfile";

const page = () => {
  return (
    <div className="container  bg-amber-50 w-full mx-auto">
      <div className="flex py-10 justify-start items-start">
        <TutorsProfile />
        <ProfileSection />
      </div>
    </div>
  );
};

export default page;
