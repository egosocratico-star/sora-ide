import { create } from 'zustand'
import { Project, EditorTab, Checkpoint } from '@types/index'

interface AppState {
  // Project
  currentProject: Project | null
  setCurrentProject: (project: Project | null) => void

  // Editor
  openTabs: EditorTab[]
  activeTabId: string | null
  addTab: (tab: EditorTab) => void
  closeTab: (tabId: string) => void
  setActiveTab: (tabId: string) => void
  updateTab: (tabId: string, updates: Partial<EditorTab>) => void

  // UI State
  sidebarVisible: boolean
  setSidebarVisible: (visible: boolean) => void
  aiPanelVisible: boolean
  setAIPanelVisible: (visible: boolean) => void
  terminalVisible: boolean
  setTerminalVisible: (visible: boolean) => void
  focusMode: boolean
  setFocusMode: (enabled: boolean) => void

  // Theme
  theme: 'dark' | 'light'
  setTheme: (theme: 'dark' | 'light') => void

  // Checkpoints
  checkpoints: Checkpoint[]
  addCheckpoint: (checkpoint: Checkpoint) => void
  restoreCheckpoint: (checkpointId: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  // Project
  currentProject: null,
  setCurrentProject: (project) => set({ currentProject: project }),

  // Editor
  openTabs: [],
  activeTabId: null,
  addTab: (tab) => set((state) => ({
    openTabs: [...state.openTabs, tab],
    activeTabId: tab.id,
  })),
  closeTab: (tabId) => set((state) => ({
    openTabs: state.openTabs.filter((t) => t.id !== tabId),
    activeTabId: state.activeTabId === tabId ? state.openTabs[0]?.id || null : state.activeTabId,
  })),
  setActiveTab: (tabId) => set({ activeTabId: tabId }),
  updateTab: (tabId, updates) => set((state) => ({
    openTabs: state.openTabs.map((t) => t.id === tabId ? { ...t, ...updates } : t),
  })),

  // UI State
  sidebarVisible: true,
  setSidebarVisible: (visible) => set({ sidebarVisible: visible }),
  aiPanelVisible: false,
  setAIPanelVisible: (visible) => set({ aiPanelVisible: visible }),
  terminalVisible: false,
  setTerminalVisible: (visible) => set({ terminalVisible: visible }),
  focusMode: false,
  setFocusMode: (enabled) => set({ focusMode: enabled }),

  // Theme
  theme: 'dark',
  setTheme: (theme) => set({ theme }),

  // Checkpoints
  checkpoints: [],
  addCheckpoint: (checkpoint) => set((state) => ({
    checkpoints: [...state.checkpoints, checkpoint],
  })),
  restoreCheckpoint: (checkpointId) => {
    set((state) => ({
      checkpoints: state.checkpoints,
    }))
  },
}))
