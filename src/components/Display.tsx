import React from "react";
import { phrases } from "~/assets/data/phrases.json";
import { Typewriter } from "react-simple-typewriter";
// import { mobileTextData } from "~/assets/data/mobileDisplayData.json";

const Display = () => {
  return (
    <section
      className="w-full py-6 pb-40 pt-36 sm:pl-4 sm:pr-4 md:py-12 md:pb-64 md:pl-64 md:pr-64 md:pt-72"
      id="home"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="my-4 text-5xl font-bold tracking-tighter text-gray-900 sm:text-6xl xl:text-7xl/none dark:text-gray-50">
              Alex Chen
            </h1>
            <div className="text-3xl font-semibold tracking-tighter text-gray-700 sm:text-4xl xl:text-5xl/none dark:text-gray-300">
              <Typewriter words={phrases} loop={0} cursor={true} />
            </div>
          </div>
          <p className="max-w-[600px] text-lg text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            I am a final year{" "}
            <span className="text-blue-500 dark:text-blue-300">
              data science
            </span>{" "}
            student studying at{" "}
            <span className="text-blue-500 dark:text-blue-300">CUNY</span> while
            also learning more about{" "}
            <span className="text-blue-500">full stack development</span> in my
            free time with a mission of connecting people with data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Display;
