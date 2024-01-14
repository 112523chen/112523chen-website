import Link from "next/link";
import React from "react";
import { ChevronLeft } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="hidden flex-wrap items-center justify-between p-6 md:flex dark:bg-gray-800">
      <li className="mr-6 flex flex-shrink-0 items-center text-xl font-semibold tracking-tight text-black dark:text-white">
        <Link href="/" className="flex items-center">
          <ChevronLeft />
          <span className="text-xl font-semibold tracking-tight text-black dark:text-white">
            Go Back Home
          </span>
        </Link>
      </li>
      <li className="flex flex-shrink-0 items-center">
        <p className="text-xl font-semibold tracking-tight text-black dark:text-white">
          Press <kbd>⌘</kbd> + <kbd>K</kbd> to see what you can do
        </p>
      </li>
    </nav>
  );
};

export default Navbar;
