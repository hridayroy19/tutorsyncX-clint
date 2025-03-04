"use client";

import ProfileSection from "@/components/modules/findTutor/tutorsInfo/TutorsInfoSection";
import TutorsProfile from "@/components/modules/findTutor/tutorsProfile/TutorsProfile";
import { ITutors } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Detailspage = () => {
  // const [tutor, setTutor] = useState(null);
  const [tutor, setTutor] = useState<ITutors | null>(null);
  console.log(tutor, "fast get");
  const params = useParams();
  const id = params.tutorsId;
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/tutor.json");
        console.log(response);
        const data = await response.json();
        console.log(data, "main data");

        const tutorData = data.find(
          (tutor: ITutors) => String(tutor?.id) === String(id)
        );
        console.log(tutorData);
        if (tutorData) {
          setTutor(tutorData); // Set the fetched tutor data
        } else {
          console.log("Tutor not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div className="container  bg-amber-50 w-full mx-auto">
      <div className="flex py-10 justify-start items-start">
        <TutorsProfile />
        <ProfileSection tutor={tutor} />
      </div>
    </div>
  );
};

export default Detailspage;
