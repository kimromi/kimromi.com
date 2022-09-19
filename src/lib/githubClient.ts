import { Octokit } from 'octokit';
import { operations } from '@octokit/openapi-types';

export const client = new Octokit({ auth: process.env.GITHUB_TOKEN });

const owner = 'kimromi';

// ------------- Issues ------------- //
export const getIssues = async ({
  labels,
  state = 'all', // open and closed
}: {
  labels?: operations['issues/list-for-repo']['parameters']['query']['labels'];
  state?: operations['issues/list-for-repo']['parameters']['query']['state'];
}) => {
  return await client.paginate(client.rest.issues.listForRepo, {
    owner,
    repo: 'notes',
    per_page: 100,
    state,
    labels,
  });
};

export const getIssue = async ({ issueNumber }: { issueNumber: number }) => {
  return await client.rest.issues.get({
    owner,
    repo: 'notes',
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
    repo: 'notes',
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
