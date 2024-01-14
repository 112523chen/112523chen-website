import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section
      className="w-full py-6 pb-40 pt-36 sm:pl-4 sm:pr-4 md:py-12 md:pb-64 md:pl-64 md:pr-64 md:pt-72"
      id="about"
    >
      <div className="container px-4 sm:px-6 md:pl-1">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl xl:text-6xl/none dark:text-gray-50">
              About Me
            </h2>
          </div>

          <p className="max-w-[600px] text-lg text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            I&apos;m a final year college student and{" "}
            <Link
              href="https://cunytechprep.org/"
              target="_blank"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
            >
              CUNY Tech Prep Alumni
            </Link>{" "}
            who is pursuing a{" "}
            <span className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">
              Data Science
            </span>{" "}
            degree at New York City College of Technology, CUNY. I&apos;m a
            curious and passionate individual who is always looking for new
            opportunities. Some of the paste experiences I have are in{" "}
            <span
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
              title="Data Analysis"
            >
              data analysis
            </span>
            ,{" "}
            <span
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
              title="Data Analysis"
            >
              quality assurance
            </span>
            , and{" "}
            <span
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
              title="Data Engineering"
            >
              data engineering
            </span>
            . Within these experiences, I have worked to connect people with
            data in investigator and engineer roles.
          </p>
          <p className="max-w-[600px] text-lg text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            My goal is to discover, analyze and harness &mdash; the power of
            &apos;data&apos;. Data is undoubtedly the new gold of the era we
            live in.
          </p>
          <p className="max-w-[600px] text-lg text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            When I am not in front of a screen, I&apos; m most likely enjoying
            the local food and wonderful weather while reading or listening to
            music.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
