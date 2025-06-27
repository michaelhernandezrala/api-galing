type GitHubProfile = {
  username: string;
  name: string | null;
  bio: string | null;
  company: string | null;
  location: string | null;
  email: string | null;
  blog: string | null;
  followers: number;
  following: number;
  publicRepos: number;
  publicGists: number;
  createdAt: string;
  updatedAt: string;
};

type GithubRepository = {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  watchers: number;
  size: number;
  isFork: boolean;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
};

type GitHubContributions = {
  totalCommits: number;
  weeks: Array<{
    week: string;
    total: number;
    days: number[];
  }>;
};

type GitHubData = {
  profile: GitHubProfile;
  repositories: GithubRepository[];
  contributions: GitHubContributions;
};

export default GitHubData;
