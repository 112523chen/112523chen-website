"use client";
import React, { useEffect, useState } from "react";
import About from "~/components/About";
import Display from "~/components/Display";
import Footer from "~/components/Footer";
import Skillset from "~/components/Skillset";
import Professional from "~/components/Professional";
import ProjectsSection from "~/components/ProjectsSection";
import WhatAmIDoSection from "~/components/WhatAmIDoSection";
import { handleVisibilityChange } from "~/utils";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "src/components/ui/command";

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

          <CommandItem
            onSelect={() => {
              window.location.href = "/#about";
              setOpen(false);
            }}
          >
            Go to About Section
          </CommandItem>
          <CommandItem
            onSelect={() => {
              window.location.href = "/#skills";
              setOpen(false);
            }}
          >
            Go to see Alex&apos;s Skills
          </CommandItem>
          <CommandItem
            onSelect={() => {
              window.location.href = "/#experience";
              setOpen(false);
            }}
          >
            Go to see Where Alex has Worked
          </CommandItem>
          <CommandItem
            onSelect={() => {
              window.location.href = "/#projects";
              setOpen(false);
            }}
          >
            Go see Alex&apos;s Latest Projects
          </CommandItem>
          <CommandItem
            onSelect={() => {
              window.location.href = "/#what-am-i-doing";
              setOpen(false);
            }}
          >
            Go see What is Alex Doing Now
          </CommandItem>
          <CommandItem
            onSelect={() => {
              window.location.href = "/projects";
              setOpen(false);
            }}
          >
            View Alex&apos;s Projects
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Connect">
          <CommandItem
            onSelect={() => {
              window.open("https://www.linkedin.com/in/itsalexchen", "_blank");

              setOpen(false);
            }}
          >
            Connect with Alex on LinkedIn
          </CommandItem>
          <CommandItem
            onSelect={() => {
              window.open("https://github.com/112523chen", "_blank");
              setOpen(false);
            }}
          >
            View Alex&apos;s GitHub
          </CommandItem>
          <CommandItem
            onSelect={() => {
              window.open("mailto:itsalexchen@gmail.com", "_blank");
              setOpen(false);
            }}
          >
            Email Alex
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        {/* <CommandGroup heading="Commands">
          <CommandItem
            onSelect={() => {
              // update the user's preferred color scheme
              const darkModeOn = window.matchMedia(
                "(prefers-color-scheme: dark)",
              ).matches;

              if (darkModeOn) {
                console.log("dark mode on");
              }
              setOpen(false);
            }}
          >
            Set Page to Dark mode
          </CommandItem>
          <CommandItem
            onSelect={() => {
              const darkModeOn = window.matchMedia(
                "(prefers-color-scheme: dark)",
              ).matches;

              if (!darkModeOn) {
                console.log("dark mode off");
              }
              setOpen(false);
            }}
          >
            Set Page to Light mode
          </CommandItem>
        </CommandGroup> */}
      </CommandList>
    </CommandDialog>
  );
};

export default function HomePage() {
  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <main className="bg-gray-100 dark:bg-gray-800">
      <CommandLine />
      <Display />
      <About />
      <Skillset />
      <Professional />
      <ProjectsSection />
      <WhatAmIDoSection />
      <Footer />
    </main>
  );
}
