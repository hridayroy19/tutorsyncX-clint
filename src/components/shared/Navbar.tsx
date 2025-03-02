"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="border-b bg-background w-full sticky top-0 z-10">
      <nav className=" bg-gradient-to-bl  border-b from-orange-200 to-white  shadow-amber-400 w-full">
        <div className="container mx-auto flex justify-between items-center px-2">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <Image
                src="https://i.ibb.co.com/tP87HQk9/Tutorsync-X-Logo-250x150-removebg-preview.png"
                alt="TutorsyncX Logo"
                width={120}
                height={50}
              />
              <span className=" text-2xl text-orange-700 font-serif ">
                TutorsyncX
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-black font-semibold">
            <Link href="#" className="hover:text-orange-500">
              TUITION JOBS
            </Link>
            <Link href="/findTutors" className="hover:text-orange-500">
              FIND TUTORS
            </Link>
            <Link href="#" className="hover:text-orange-500">
              TUTOR REQUEST
            </Link>
            <Link href="/faq" className="hover:text-orange-500">
             FAQ
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 border rounded-md text-black bg-orange-400 hover:bg-orange-600 hover:text-white"
            >
              Login
            </Link>
          </div>

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
            <Link href="#" className="block hover:text-orange-400">
              TUTOR REQUEST
            </Link>
            <Link href="/faq" className="block hover:text-orange-400">
              FAQ
            </Link>
            <Link
              href="#"
              className="block bg-orange-400 mt-2 px-4 py-2 border rounded-md  hover:text-white"
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
