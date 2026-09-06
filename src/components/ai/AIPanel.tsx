import { useState } from 'react'

type AIPanelMode = 'ask' | 'edit' | 'agent' | 'explain'

export default function AIPanel() {
  const [mode, setMode] = useState<AIPanelMode>('ask')
  const [message, setMessage] = useState('')

  const modes: Array<{ id: AIPanelMode; label: string }> = [
    { id: 'ask', label: 'Ask' },
    { id: 'edit', label: 'Edit' },
    { id: 'agent', label: 'Agent' },
    { id: 'explain', label: 'Explain' },
  ]

  return (
    <div className="w-full h-full flex flex-col">
      {/* Mode selector */}
      <div className="h-10 border-b border-sora-border flex items-center">
        {modes.map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={`flex-1 text-xs font-medium transition-colors ${
              mode === m.id
                ? 'text-sora-text border-b-2 border-sora-text'
                : 'text-sora-text-secondary hover:text-sora-text'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        <div className="text-sm text-sora-text-secondary">
          {mode === 'ask' && 'Ask anything about your code'}
          {mode === 'edit' && 'Select code and describe what you want to change'}
          {mode === 'agent' && 'Start an agent to handle complex tasks'}
          {mode === 'explain' && 'Select code to get an explanation'}
        </div>
      </div>

      {/* Input */}
      <div className="h-24 border-t border-sora-border p-3">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="w-full h-full px-2 py-2 bg-sora-editor border border-sora-border rounded-sora text-sora-text placeholder-sora-text-secondary text-sm resize-none"
        />
      </div>
    </div>
  )
}
