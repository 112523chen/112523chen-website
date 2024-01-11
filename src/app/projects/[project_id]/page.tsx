import React from "react";
// import { projectData } from "~/assets/data/projectData.json";
// import { type ProjectType } from "~/model";

interface IndividualProjectPageProps {
  params: {
    project_id: string;
  };
}

const IndividualProjectPage: React.FC<IndividualProjectPageProps> = ({
  params,
}) => {
  const { project_id } = params;

  return <div>IndividualProjectPage: {project_id}</div>;
};

export default IndividualProjectPage;
