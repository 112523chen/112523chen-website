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
            I am a third-year data science student at New York City College of
            Technology, CUNY and CUNY Tech Prep Alumni with real-world
            experience in data analysis, quality assurance, and data
            engineering. Within these experiences, I have worked to connect
            people with data in investigator and engineer roles. I am passionate
            about learning more about this world through different lenses
            especially through data.
          </p>
          <p className="max-w-[600px] text-lg text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            My goal is to discover, analyze and harness &mdash; the power of
            &apos;data&apos;. Data is undoubtedly the new gold of the era we
            live in.
          </p>
          <p className="max-w-[600px] text-lg text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            When I am not in front of a screen, I’m most likely enjoying the
            local food and wonderful weather while reading or listening to
            music.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
