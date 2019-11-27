import { RepoNode } from 'common/types'

export enum CategoryPriority {
  backend = 1,
  android = 2,
  ios = 3,
  iot = 4,
}

export const sortItems = (repos: RepoNode[]): RepoNode[] =>
  repos
    .sort((repo1, repo2) =>
      repo1.node.isFeatured === repo2.node.isFeatured
        ? 0
        : repo1.node.isFeatured
        ? -1
        : 1
    )
    .sort(
      (repo1, repo2) =>
        CategoryPriority[repo1.node.category] -
        CategoryPriority[repo2.node.category]
    )
