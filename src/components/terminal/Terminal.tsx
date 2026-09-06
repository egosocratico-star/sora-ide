import { useState } from 'react'

export default function Terminal() {
  const [_output] = useState<string[]>([])
  const [_input, setInput] = useState('')

  return (
    <div className="w-full h-full flex flex-col">
      {/* Terminal content */}
      <div className="flex-1 overflow-y-auto p-3 font-mono text-sm text-sora-text">
        <div className="text-sora-text-secondary">Terminal ready</div>
      </div>

      {/* Input line */}
      <div className="border-t border-sora-border px-3 py-2 flex items-center">
        <span className="text-sora-text-secondary mr-2">$</span>
        <input
          type="text"
          value={_input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent text-sora-text outline-none font-mono text-sm"
          placeholder="Enter command..."
        />
      </div>
    </div>
  )
}
