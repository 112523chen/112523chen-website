import React from "react";
import { linkData } from "~/assets/data/linkData.json";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-between space-y-4 border-t border-gray-200 p-4 md:flex-row md:space-y-0 dark:border-gray-700">
      <div className="text-md text-gray-700 dark:text-gray-200">
        <p>Design & Built by Alex Chen</p>
      </div>
      <div className="space-y-4 md:space-y-0">
        <ul className="flex list-none space-x-4 md:content-center">
          {linkData.map((link) => {
            return (
              <li key={link.id}>
                <Link target="_blank" href={link.link} className="no-underline">
                  <p className="text-gray-700 hover:text-blue-600 hover:underline dark:text-gray-200 dark:hover:text-blue-400">
                    {link.id}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
