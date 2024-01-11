import React from "react";
import Link from "next/link";
import { type ProjectType } from "~/model";
import { projectData } from "~/assets/data/projectData.json";
import Project from "./Project";

const ProjectsSection = () => {
  return (
    <section className="w-full py-6 pb-40 pt-36 sm:pl-4 sm:pr-4 md:py-12 md:pb-64 md:pl-64 md:pr-64 md:pt-72">
      <div className="container px-4 md:ml-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl xl:text-6xl/none dark:text-gray-50">
              Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectData.slice(0, 3).map((project: ProjectType) => (
              <Project
                key={project.id}
                projectName={project.title}
                projectDescription={project.details}
                projectLink={project.link}
              />
            ))}
          </div>
          <div className="mt-6">
            <Link
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
              href="/projects"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
