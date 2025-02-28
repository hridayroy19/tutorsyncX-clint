"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const LoginForm = () => {
  const [role, setRole] = useState<"guardian" | "tutor">("tutor");
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-orange-50 to-white p-4">
        {/* Left Section  */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-3xl font-semibold text-orange-600 flex items-center gap-2">
            Welcome Back <span className="wave">👋</span>
          </h2>
          <p className="text-gray-600 lg:text-3xl text-lg ">
            <span className="font-semibold text-orange-500">Login</span> with
            your data that you entered during registration.
          </p>
          <Image
            src="https://i.ibb.co.com/39JpHWtw/71ao-Rz-Ztc-L-removebg-preview.png"
            alt="Tutor and Student"
            width={400}
            height={300}
            className="mx-auto md:mx-0 bg-cover"
          />
          <p className="text-orange-500 font-semibold text-lg">
            টিউশন বা টিউটর খুঁজে পাবার সেরা প্লাটফর্ম <br />{" "}
            hrhridoyroy503@gmail.com
          </p>
        </div>

        <Card className="md:w-1/2 max-w-md w-full p-6 shadow-lg">
          <CardContent>
            <div className="flex justify-center gap-4 mb-6">
              <Button
                variant="outline"
                className={cn(
                  "flex items-center gap-2 px-6 py-2",
                  role === "guardian" && "border-orange-500 bg-orange-100"
                )}
                onClick={() => setRole("guardian")}
              >
                👨‍👧 Student
              </Button>
              <Button
                variant="outline"
                className={cn(
                  "flex items-center gap-2 px-6 py-2",
                  role === "tutor" && "border-orange-500 bg-orange-100"
                )}
                onClick={() => setRole("tutor")}
              >
                🧑‍🏫 Tutor
              </Button>
            </div>

            <h3 className="text-2xl font-semibold text-orange-500 text-center">
              Login Now
            </h3>

            <div className="space-y-4 mt-4">
              <label className="text-gray-700 font-medium">
                Mobile Number (+88)
              </label>
              <Input type="text" placeholder="01********" className="w-full" />
              <label className="text-gray-700 font-medium">Password</label>
              <Input
                type="password"
                placeholder="example: employee@+%123"
                className="w-full"
              />
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox" /> Remember
                  me
                </label>
                <a href="#" className="text-orange-500 text-sm">
                  Forgot password?
                </a>
              </div>
              <Button className="w-full mt-2 bg-orange-500 text-white hover:bg-orange-600">
                Login
              </Button>
            </div>
            <p className="text-gray-600 text-center mt-7">
              If you are not registered, please{" "}
              <Link href="/register" className="text-orange-500 font-semibold">
                Login
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
