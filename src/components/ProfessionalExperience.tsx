import React from "react";
import { type RoleType } from "~/model";

interface ProfessionalExperienceProps {
  roleData: RoleType;
}

const ProfessionalExperience: React.FC<ProfessionalExperienceProps> = ({
  roleData,
}) => {
  const {
    title,
    employer: company,
    start: startDate,
    end: endDate,
    skills: technologies,
    summary: description,
  } = roleData;

  return (
    <div className="mt-4">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
        {title} @ {company}
      </h3>
      <p className="my-2 text-lg text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        {startDate} - {endDate}
      </p>
      <p className="mb-2 max-w-[600px] text-lg text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        {description}
      </p>
      <p className="max-w-[600px] text-lg text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        Technologies: {technologies.join(", ")}
      </p>
    </div>
  );
};

export default ProfessionalExperience;
