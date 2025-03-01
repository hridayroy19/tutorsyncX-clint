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
        <div className="flex space-x-4 mt-2">
          <span>My Home</span>
          <span>Pictures</span>
          <span>🌟 References</span>
          <span>🌟 Friends</span>
          <span>🌟 Favorites</span>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Overview</h2>
        <div className="mt-2">
          <p>☐</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">
          3 references ★ 3 Confirmed & Positive
        </h2>
        <ul className="mt-2 space-y-2">
          <li>Fluent in French; learning English</li>
          <li>No hometown listed</li>
          <li>Member since 2017</li>
          <li>Commercial</li>
          <li>Trade</li>
          <li>No hometown listed</li>
          <li>100% complete profile</li>
        </ul>
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
