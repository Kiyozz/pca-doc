import Link from "@docusaurus/Link";
import { issueUrl } from "../utils/github-issue";

const GithubIssue = ({ issue }: { issue: number }) => {
  return <Link to={issueUrl(issue)}>#{issue}</Link>;
};

export default GithubIssue;
