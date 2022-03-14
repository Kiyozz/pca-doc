import { githubLink } from "../../env";

export const issueUrl = (issue: number) => {
  return `${githubLink}/issues/${issue}`;
};
