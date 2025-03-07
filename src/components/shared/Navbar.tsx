"use client";

import { useState } from "react";
import { LogOut, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { usePathname, useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { logout } from "@/services/AuthService";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { protectedRoutes } from "@/contants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setIsLoading } = useUser();

  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  const dashboardUrl =
    user?.role === "student"
      ? "/student/dashboard"
      : user?.role === "tutor"
      ? "/tutors/dashboard"
      : "/dashboard"; 

  return (
    <div className="border-b bg-background w-full sticky top-0 z-10">
      <div className="bg-gradient-to-bl border-b from-orange-200 to-white shadow-amber-400 w-full">
        <div className="container mx-auto flex justify-between items-center px-2">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <Image
                src="https://i.ibb.co.com/tP87HQk9/Tutorsync-X-Logo-250x150-removebg-preview.png"
                alt="TutorsyncX Logo"
                width={120}
                height={50}
              />
              <span className="text-2xl text-orange-700 font-serif">
                TutorsyncX
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-black font-semibold">
            <Link href="/" className="hover:text-orange-500">
              HOME
            </Link>
            <Link href="/findTutors" className="hover:text-orange-500">
              FIND TUTORS
            </Link>
            <Link href="/about" className="hover:text-orange-500">
              ABOUT
            </Link>
            <Link href="/blog" className="hover:text-orange-500">
              BLOG
            </Link>
            <Link href="/faq" className="hover:text-orange-500">
              FAQ
            </Link>
          </div>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <Link href={dashboardUrl}>
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600" onClick={handleLogout}>
                  <LogOut />
                  <span>Log Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button className="rounded-full px-2 size-10">Login</Button>
            </Link>
          )}

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md p-4 space-y-4 text-center text-black">
            <Link href="#" className="block hover:text-orange-400">
              TUITION JOBS
            </Link>
            <Link href="#" className="block hover:text-orange-400">
              PREMIUM TUTORS
            </Link>
            <Link href="/blog" className="block hover:text-orange-400">
              Blog
            </Link>
            <Link href="/faq" className="block hover:text-orange-400">
              FAQ
            </Link>
            <Link
              href="/login"
              className="block bg-orange-400 mt-2 px-4 py-2 border rounded-md hover:text-white"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
