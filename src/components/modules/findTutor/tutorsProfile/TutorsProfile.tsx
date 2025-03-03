import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle} from "lucide-react";

export default function TutorsProfile() {
  return (
    <div className="  p-4">
      <Card className="w-full max-w-sm bg-[#f0ebeb] text rounded-xl shadow-lg">
        <CardContent className="flex flex-col items-center p-6">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white">
            <Image
              src="https://i.ibb.co.com/rFSYnXb/20230409234326-IMG-7354-removebg-removebg-preview.png" // Change this to a dynamic image URL if needed
              alt="Profile"
              layout="fill"
              objectFit="cover"
            />
            <span className="absolute bottom-0 right-0 bg-white p-1 rounded-full">
              <CheckCircle className="text-green-500 w-5 h-5" />
            </span>
          </div>

          <h2 className="text-2xl mb-1 font-bold mt-3">Laure Sabatié</h2>
          <p className="text-sm opacity-90">Location: Dhaka(Mirpur -10)</p>

          <div className="mt-4 w-full">
            <h1 className=" font-medium">Gender: Male</h1>
            <h1 className="font-medium">Qualification: BSC</h1>
            <div className="flex font-medium items-center gap-2">
              <span>Payment verified</span>{" "}
              <CheckCircle className="text-green-800 mt-2 w-5 h-5" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
