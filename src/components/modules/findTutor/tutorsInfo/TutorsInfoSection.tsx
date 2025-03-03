import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import React from "react";

const ProfileSection = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="text-end flex justify-end items-center gap-3">
        <Button>Send Request </Button>
        <Button>
          <MessageCircle />
        </Button>
        <Button> More </Button>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">About</h2>

        <p>
          I am going on a trip with my best friend this time, Célia. She is a
          Parisian recently and I am in Bordeaux in the south west of France.
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Overview</h2>
        <div className="mt-2">
          <p></p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg mb-2 font-semibold">
          Expected Minimum Salary : 5000 Tk/Month
        </h2>
        <h2 className="text-lg mb-2 font-semibold">Current Status for Tuition : Available</h2>
        <h2 className="text-lg mb-2 font-semibold">Days Per Week : 4 Day/Week, 5 Day/Week</h2>
        <h2 className="text-lg mb-2 font-semibold">Tuitoring Experience : 6 Years</h2>
        <h2 className="text-lg mb-2 font-semibold">Extra Facilities : Phone help</h2>
        <h2 className="text-lg mb-2 font-semibold">
          Preferred Medium of Instruction : Bangla Medium, English Version, Test
          Preparation
        </h2>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">About Me</h2>
        <p className="mt-2">
          I am going on a trip with my best friend this time, Célia. She is a
          Parisian recently and I am in Bordeaux in the south west of France.
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;
