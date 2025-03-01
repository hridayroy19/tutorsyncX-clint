import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

export default function TutorsProfile() {
  return (
    <div className="  p-4">
      <Card className="w-full max-w-sm bg-[#ecab49d2] text rounded-xl shadow-lg">
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

          <h2 className="text-xl font-bold mt-3">Laure Sabatié</h2>
          <p className="text-sm opacity-90">
            Belin-Béliet, New Aquitaine, France
          </p>

          <div className="mt-4 w-full">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-200 w-5 h-5" />
              <span>Payment verified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-200 w-5 h-5" />
              <span>Phone verified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-200 w-5 h-5" />
              <span>Government ID verified</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <XCircle className="text-red-400 w-5 h-5" />
              <span>Address not verified</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
