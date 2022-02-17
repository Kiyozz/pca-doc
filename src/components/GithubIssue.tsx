import Link from "@docusaurus/Link";
import React from "react";
import { issueUrl } from "@site/src/utils/github-issue";

const GithubIssue = ({ issue }: { issue: number }) => {
  return <Link to={issueUrl(issue)}>#{issue}</Link>;
};

export default GithubIssue;
