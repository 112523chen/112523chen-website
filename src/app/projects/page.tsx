"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { handleVisibilityChange } from "~/utils";
import { projectData } from "~/assets/data/projectData.json";
import { type ProjectType, TopicType } from "~/model";
import Navbar from "~/components/Navbar";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "src/components/ui/command";

const convertTopicToText = (topic: TopicType) => {
  switch (topic) {
    case TopicType.All:
      return "All";
    case TopicType.WebDevelopment:
      return "Web Development";
    case TopicType.SoftwareEngineering:
      return "Software Engineering";
    case TopicType.DataEngineering:
      return "Data Engineering";
    case TopicType.MachineLearning:
      return "Machine Learning";
    case TopicType.DataScience:
      return "Data Science";
  }
};

const CommandLine = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    const up = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keydown", up);

    return () => window.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem
            onSelect={() => {
              window.location.href = "/";
              setOpen(false);
            }}
          >
            Go to Start of Page
          </CommandItem>
          <CommandItem
            onSelect={() => {
              const number = Math.floor(Math.random() * projectData.length);

              const randomProject = projectData[number];

              if (randomProject) {
                window.location.href = `/projects/${randomProject.id}`;
              }

              setOpen(false);
            }}
          >
            See random project
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

const ProjectsPage = () => {
  const [currentTopic, setCurrentTopic] = React.useState<TopicType>(
    TopicType.All,
  );
  const [projects, setProjects] = React.useState<ProjectType[]>(projectData);

  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (currentTopic === TopicType.All) {
      setProjects(projectData);
    } else {
      setProjects(
        projectData.filter((project) => project.topics.includes(currentTopic)),
      );
    }
  }, [currentTopic]);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-800">
      <CommandLine />
      <Navbar />
      <h1 className="pb-8 text-center text-4xl font-semibold text-gray-900 dark:text-gray-50">
        Projects
      </h1>
      <div className="mx-4 mb-8 flex flex-wrap justify-center">
        {Object.values(TopicType).map((topic: TopicType) => (
          <button
            key={topic}
            type="button"
            onClick={() => setCurrentTopic(topic)}
            className={`m-2 rounded-md px-4 py-2 text-sm font-medium ${
              topic === currentTopic
                ? "bg-blue-400 text-white dark:bg-blue-500 dark:text-gray-50"
                : "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50"
            }`}
          >
            {convertTopicToText(topic)}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
        {projects.length === 0 ? (
          <div className="flex h-[50vh] w-screen items-center justify-center">
            <p className="text-center text-2xl font-semibold text-gray-900 dark:text-gray-50">
              No projects found for{" "}
              <span className="text-red-500">
                {convertTopicToText(currentTopic)}
              </span>
            </p>
          </div>
        ) : (
          projects.map((project: ProjectType) => (
            <Link
              key={project.id}
              // href={`/projects/${project.id}`} TODO: Uncomment this line when I have the project pages ready
              href={"/projects/"}
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
          ))
        )}
      </div>
      <div className="flex justify-center pb-8 md:hidden">
        <Link href="/">
          <button
            type="button"
            className="m-2 rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-50"
          >
            Go Back to Main Page
          </button>
        </Link>
      </div>

      {/* <div className="flex h-32 w-screen items-center justify-center">
        <p className="text-center text-2xl font-semibold text-gray-900 dark:text-gray-50">
          Made with ❤️ by Alex Chen
        </p>
      </div> */}
    </main>
  );
};

export default ProjectsPage;
