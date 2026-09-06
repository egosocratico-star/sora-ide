import { create } from 'zustand'
import { Project } from '@types/index'
import { v4 as uuidv4 } from 'crypto'

interface ProjectState {
  // Projects
  projects: Project[]
  createProject: (name: string, description?: string) => Project
  deleteProject: (id: string) => void
  updateProject: (id: string, updates: Partial<Project>) => void
  getProject: (id: string) => Project | undefined
}

export const useProjectStore = create<ProjectState>((set, get) => ({
  projects: [],
  
  createProject: (name: string, description?: string) => {
    const now = new Date()
    const project: Project = {
      id: uuidv4(),
      name,
      path: `/projects/${name.toLowerCase().replace(/\s+/g, '-')}`,
      description,
      createdAt: now,
      updatedAt: now,
    }
    set((state) => ({
      projects: [...state.projects, project],
    }))
    return project
  },

  deleteProject: (id: string) => {
    set((state) => ({
      projects: state.projects.filter((p) => p.id !== id),
    }))
  },

  updateProject: (id: string, updates: Partial<Project>) => {
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === id
          ? { ...p, ...updates, updatedAt: new Date() }
          : p
      ),
    }))
  },

  getProject: (id: string) => {
    return get().projects.find((p) => p.id === id)
  },
}))
