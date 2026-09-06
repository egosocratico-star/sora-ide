// Core types for Sora IDE

export interface Project {
  id: string
  name: string
  path: string
  description?: string
  createdAt: Date
  updatedAt: Date
}

export interface Workspace {
  id: string
  projectId: string
  name: string
  settings: Record<string, unknown>
}

export interface AIProvider {
  id: string
  name: string
  type: 'openai' | 'anthropic' | 'google' | 'openrouter' | 'ollama' | 'lm-studio' | 'custom'
  baseUrl?: string
  apiKeyReference?: string
  status: 'connected' | 'disconnected' | 'error'
}

export interface AIModel {
  id: string
  providerId: string
  name: string
  displayName: string
  capabilities: ('chat' | 'code' | 'reasoning' | 'vision' | 'function-calling')[]
  contextWindow: number
  local: boolean
  enabled: boolean
  cost?: {
    inputPer1k: number
    outputPer1k: number
  }
}

export interface EditorTab {
  id: string
  filePath: string
  isDirty: boolean
  isPreview: boolean
  cursorPosition?: { line: number; column: number }
}

export interface Checkpoint {
  id: string
  projectId: string
  timestamp: Date
  source: 'manual' | 'auto' | 'agent'
  changes: {
    files: string[]
    summary: string
  }
}

export interface ConversationMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  context?: string[]
  toolCalls?: Array<{
    name: string
    arguments: Record<string, unknown>
  }>
}

export interface Agent {
  id: string
  name: string
  specialization: 'architect' | 'coder' | 'debugger' | 'tester' | 'reviewer' | 'documentation'
  status: 'idle' | 'running' | 'paused' | 'completed'
  permissions: {
    canModifyFiles: boolean
    canRunCommands: boolean
    canInstallPackages: boolean
    canAccessNetwork: boolean
  }
}
