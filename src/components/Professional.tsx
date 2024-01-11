import React from "react";
import ProfessionalExperience from "./ProfessionalExperience";
import { type RoleType } from "~/model";
import { History } from "~/assets/data/history.json";

const Professional = () => {
  return (
    <section className="w-full py-6 pb-40 pt-36 sm:pl-4 sm:pr-4 md:py-12 md:pb-64 md:pl-64 md:pr-64 md:pt-72">
      <div className="container px-4 md:ml-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl xl:text-6xl/none dark:text-gray-50">
              Professional Experience
            </h2>
          </div>
          <div className="space-y-6">
            {History.map((role: RoleType) => (
              <ProfessionalExperience key={role.id} roleData={role} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professional;
