export interface RepoNode {
  node: Repo
}

export interface Repo {
  category: string[]
  description: string
  icon: string
  name: string
  url: string
  isFeatured: boolean
}

export interface Data {
  data: {
    allTools: {
      edges: RepoNode[]
    }
    allGuidelines: {
      edges: RepoNode[]
    }
    allKnowledge: {
      edges: RepoNode[]
    }
  }
}
