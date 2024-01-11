"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { handleVisibilityChange } from "~/utils";
import { projectData } from "~/assets/data/projectData.json";
import { type ProjectType, TopicType } from "~/model";
import { ToggleGroup, ToggleGroupItem } from "src/components/ui/toggle-group";

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
              window.location.href = "/#home";
              setOpen(false);
            }}
          >
            Go to Start of Page
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

const ProjectsPage = () => {
  const [topic, setTopic] = React.useState<TopicType>(TopicType.All);
  const [projects, setProjects] = React.useState<ProjectType[]>(projectData);

  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (topic === TopicType.All) {
      setProjects(projectData);
    } else {
      setProjects(
        projectData.filter((project) => project.topics.includes(topic)),
      );
    }
  }, [topic]);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-800">
      <CommandLine />
      <h1 className="py-16 text-center text-4xl font-semibold text-gray-900 dark:text-gray-50">
        Projects
      </h1>
      <ToggleGroup
        type="single"
        value={topic}
        onValueChange={(value) => setTopic(value as TopicType)}
        className="flex w-screen justify-center"
      >
        {Object.values(TopicType).map((topic: TopicType) => (
          <ToggleGroupItem
            key={topic}
            value={topic}
            aria-label={`Toggle ${topic}`}
          >
            <div className="h-16 w-fit text-2xl font-semibold text-gray-900 hover:text-gray-700 active:text-gray-500 dark:text-gray-50 dark:hover:text-gray-300 dark:active:text-gray-400">
              {convertTopicToText(topic)}
            </div>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="flex flex-wrap justify-center">
        {projects.length === 0 ? (
          <div className="flex h-[50vh] w-screen items-center justify-center">
            <p className="text-center text-2xl font-semibold text-gray-900 dark:text-gray-50">
              No projects found for{" "}
              <span className="text-red-500">{convertTopicToText(topic)}</span>
            </p>
          </div>
        ) : (
          projects.map((project: ProjectType) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
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
      <div className="flex justify-center">
        <Link href={"/"} className="m-8 w-96 cursor-pointer text-center">
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default ProjectsPage;
