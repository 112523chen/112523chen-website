import Link from "next/link";
import React from "react";
import { ChevronLeft } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="hidden flex-wrap items-center justify-between bg-gray-800 p-6 md:flex">
      <li className="mr-6 flex flex-shrink-0 items-center text-white">
        <Link href="/" className="flex items-center">
          <ChevronLeft />
          <span className="text-xl font-semibold tracking-tight">
            Go Back Home
          </span>
        </Link>
      </li>
      <li className="flex flex-shrink-0 items-center">
        <p className="text-xl font-semibold tracking-tight text-white">
          Press <kbd>⌘</kbd> + <kbd>K</kbd> to see what you can do
        </p>
      </li>
    </nav>
  );
};

export default Navbar;
