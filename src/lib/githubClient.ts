import { Octokit } from 'octokit';

export const client = new Octokit({ auth: process.env.GITHUB_TOKEN });

const owner = 'kimromi';

// ------------- Issues ------------- //
export const getIssues = async ({ labels }: { labels?: string }) => {
  return await client.paginate(client.rest.issues.listForRepo, {
    owner,
    repo: 'scraps',
    per_page: 100,
    state: 'all', // open and closed
    labels,
  });
};

export const getIssue = async ({ issueNumber }: { issueNumber: number }) => {
  return await client.rest.issues.get({
    owner,
    repo: 'scraps',
    issue_number: issueNumber,
  });
};

export type Issue = Issues[number];
export type Issues = ReturnType<typeof getIssues> extends Promise<infer T>
  ? T
  : never;

// ------------- Comments ------------- //
export const getIssueComments = async ({
  issueNumber,
}: {
  issueNumber: number;
}) => {
  return await client.rest.issues.listComments({
    owner,
    repo: 'scraps',
    issue_number: issueNumber,
  });
};

export type Comment = Comments[number];
export type Comments = CommentsRes['data'];
export type CommentsRes = ReturnType<typeof getIssueComments> extends Promise<
  infer T
>
  ? T
  : never;
