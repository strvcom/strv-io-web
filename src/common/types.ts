import React from 'react'

export interface RepoNode {
  node: Repo
}

export interface Repo {
  category: string
  description: string
  icon: React.ReactNode
  name: string
  url: string
  isFeatured: boolean
}
