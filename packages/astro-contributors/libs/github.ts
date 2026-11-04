const PAGE_SIZE = 100;

const contributorsCache = new Map<string, Promise<GitHubContributor[]>>();

export async function getGitHubContributors(
  repo: string,
  ignore: string[] = []
) {
  const contributors = await loadGitHubContributors(repo);

  return contributors.filter(({ login }) => !ignore.includes(login));
}

export function getGitHubProfileUrl(login: string) {
  return `https://github.com/${login}`;
}

export function getGitHubAvatarUrl(id: number) {
  return `https://avatars.githubusercontent.com/u/${id}?s=64`;
}

function loadGitHubContributors(repo: string) {
  if (import.meta.env.DEV) return fetchGitHubContributorsOrWarn(repo);

  const cached = contributorsCache.get(repo);
  if (cached) return cached;

  const contributors = fetchGitHubContributorsOrWarn(repo, () =>
    contributorsCache.delete(repo)
  );
  contributorsCache.set(repo, contributors);

  return contributors;
}

async function fetchGitHubContributorsOrWarn(
  repo: string,
  onError?: () => void
) {
  try {
    return await fetchGitHubContributors(repo);
  } catch (error) {
    onError?.();
    warnGitHubFetchError(repo, error);
    return [];
  }
}

async function fetchGitHubContributors(
  repo: string,
  page = 1
): Promise<GitHubContributor[]> {
  const contributors = await fetchGitHubContributorsPage(repo, page);

  if (contributors.length < PAGE_SIZE) return contributors;

  return [...contributors, ...(await fetchGitHubContributors(repo, page + 1))];
}

async function fetchGitHubContributorsPage(repo: string, page: number) {
  const response = await fetch(getGitHubContributorsUrl(repo, page), {
    headers: getGitHubHeaders(import.meta.env.PUBLIC_GITHUB_TOKEN),
  });

  if (!response.ok) {
    throw new Error(
      `Request to fetch the GitHub contributors failed with status ${response.status}.`
    );
  }

  return (await response.json()) as GitHubContributor[];
}

function getGitHubContributorsUrl(repo: string, page: number) {
  return `https://api.github.com/repos/${repo}/contributors?per_page=${PAGE_SIZE}&page=${page}`;
}

function getGitHubHeaders(token: string | undefined): Record<string, string> {
  const headers = { "User-Agent": "astro-docs/1.0" };

  if (!token) return headers;

  return { ...headers, Authorization: getGitHubAuthorization(token) };
}

function getGitHubAuthorization(token: string) {
  if (!token.includes(":")) return `Bearer ${token}`;

  return `Basic ${Buffer.from(token, "binary").toString("base64")}`;
}

function warnGitHubFetchError(repo: string, error: unknown) {
  const message = error instanceof Error ? error.message : String(error);

  console.warn(
    `[astro-contributors] Failed to fetch the contributors of the "${repo}" GitHub repository.\n${message}`
  );
}

export interface GitHubContributor {
  contributions: number;
  id: number;
  login: string;
}
