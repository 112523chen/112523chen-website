"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { handleVisibilityChange } from "~/utils";
import { projectData } from "~/assets/data/projectData.json";
import { type ProjectType } from "~/model";

const ProjectsPage = () => {
  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <main className="bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-wrap justify-center">
        {projectData.map((project: ProjectType) => (
          <Link
            key={project.id}
            href={`/projects/project/${project.id}`}
            className="m-8 w-96 cursor-pointer rounded-lg border border-gray-200 p-4 hover:shadow-2xl dark:border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
              {project.title}
            </h3>
            <p className="text-lg text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {project.details.length > 100
                ? `${project.details.substring(0, 100)}...`
                : project.details}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href={"/"} className="m-8 w-96 cursor-pointer text-center">
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default ProjectsPage;
