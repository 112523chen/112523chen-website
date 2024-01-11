import React from "react";
import Link from "next/link";

interface ProjectProps {
  projectName: string;
  projectDescription: string;
  projectLink: string;
}

const Project: React.FC<ProjectProps> = ({
  projectName,
  projectDescription,
  projectLink,
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
  );
};

export default Project;
