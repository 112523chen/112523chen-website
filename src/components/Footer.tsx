import React from "react";
import { linkData } from "~/assets/data/linkData.json";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "src/components/ui/tooltip";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-between space-y-4 border-t border-gray-200 p-4 md:flex-row md:space-y-0 dark:border-gray-700">
      <div className="text-md text-gray-700 dark:text-gray-200">
        <p>Design & Built by Alex Chen</p>
      </div>
      <div className="space-y-4 md:space-y-0">
        <ul className="flex list-none flex-wrap justify-center space-x-4 md:content-center md:space-x-8">
          {linkData.map((link) => {
            return (
              <li key={link.id}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      {/* <button className="text-md mb-2  bg-gray-200 text-gray-700 hover:bg-gray-300 md:mb-0 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                      type="button"> */}
                      <Link
                        target="_blank"
                        href={link.link}
                        className="text-md my-1 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-gray-200 px-4 py-2 font-medium text-gray-700 no-underline ring-offset-white transition-colors hover:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:my-0 md:mb-0 dark:bg-gray-700 dark:text-gray-200 dark:ring-offset-slate-950 dark:hover:bg-gray-600 dark:focus-visible:ring-slate-300"
                      >
                        {link.id}
                      </Link>
                      {/* </button> */}
                    </TooltipTrigger>
                    <TooltipContent className="text-gray-900 dark:text-gray-50">
                      {link.description}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
