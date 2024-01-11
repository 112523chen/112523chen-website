import React from "react";

interface SkillsetSectionProps {
  sectionName: string;
  sectionData: string[];
}

const SkillsetSection: React.FC<SkillsetSectionProps> = ({
  sectionName,
  sectionData,
}) => {
  const skillSetData = sectionData.slice(0, 8);

  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
        {sectionName}
      </h3>
      <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {skillSetData.map((skill) => {
          return (
            <div
              key={skill}
              className="text-lg text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
            >
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsetSection;
