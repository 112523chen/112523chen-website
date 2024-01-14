import React from "react";
import Link from "next/link";
import { type ProjectType } from "~/model";

// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "src/components/ui/hover-card";

interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({
  project: {
    title: projectName,
    details: projectDescription,
    link: projectLink,
    // skills,
  },
}) => {
  return (
    <Link
      target="_blank"
      href={projectLink}
      className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:shadow-2xl dark:border-gray-700"
    >
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
        {projectName}
      </h3>
      <p className="text-lg text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        {projectDescription}
      </p>
    </Link>

    // <HoverCard>
    //   <HoverCardTrigger className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:shadow-2xl dark:border-gray-700">
    //     <Link target="_blank" href={projectLink} className="">
    //       <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
    //         {projectName}
    //       </h3>
    //       <p className="text-lg text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
    //         {projectDescription}
    //       </p>
    //     </Link>
    //   </HoverCardTrigger>
    //   <HoverCardContent>Build with {skills.join(", ")}</HoverCardContent>
    // </HoverCard>
  );
};

export default Project;
