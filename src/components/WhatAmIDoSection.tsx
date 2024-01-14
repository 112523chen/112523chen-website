import React from "react";

const WhatAmIDoSection = () => {
  return (
    <section
      className="w-full py-6 pb-36 pt-36 sm:pl-4 sm:pr-4 md:py-12 md:pb-96 md:pl-64 md:pr-64 md:pt-72"
      id="what-am-i-doing"
    >
      <div className="container px-4 md:ml-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl xl:text-6xl/none dark:text-gray-50">
              What I&apos;m Doing Now
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: January 15, 2024
            </p>
          </div>
          <p className="max-w-[600px] text-lg text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Currently, I am working on a new project using the{" "}
            <span className="font-bold text-blue-600 dark:text-blue-300">
              T3 Stack
            </span>{" "}
            that will be released soon. I am also learning more about{" "}
            <span className="font-bold text-blue-600 dark:text-blue-300">
              cloud computing
            </span>{" "}
            and its applications in modern software development. Stay tuned for
            more updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatAmIDoSection;
