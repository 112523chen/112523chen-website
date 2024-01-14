//* Definition of a project object
export interface ProjectType {
  id: number;
  title: string;
  details: string;
  skills: string[];
  isRepo: boolean;
  isWebApp: boolean;
  link: string;
  topics: string[];
}

//* Definition of a role object
export interface RoleType {
  id: number;
  title: string;
  employer: string;
  start: string;
  end: string;
  skills: string[];
  summary: string;
}

//* Definition of a topic object
export enum TopicType {
  All = "all",
  SoftwareEngineering = "software_engineering",
  WebDevelopment = "web_development",
  DataEngineering = "data_engineering",
  MachineLearning = "machine_learning",
  DataScience = "data_science",
}
//* Definition of a skill object
export interface SkillTypes {
  id: number;
  text: string;
  values: SkillType[];
}

//* Definition of a skill object
export interface SkillType {
  id: number;
  name: string;
  tooltopSummary: string;
}
