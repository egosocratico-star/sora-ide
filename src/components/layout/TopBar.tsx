import { useAppStore } from '@stores/app'
import { Settings, Search, Zap } from 'lucide-react'

export default function TopBar() {
  const { currentProject, setAIPanelVisible, aiPanelVisible } = useAppStore()

  return (
    <div className="h-12 border-b border-sora-border bg-sora-sidebar flex items-center justify-between px-4">
      {/* Left */}
      <div className="flex items-center gap-4">
        <div className="text-sm font-medium text-sora-text">
          {currentProject?.name || 'Sora'}
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-sora-panel rounded transition-colors text-sora-text-secondary hover:text-sora-text">
          <Search size={16} />
        </button>
        <button
          onClick={() => setAIPanelVisible(!aiPanelVisible)}
          className="p-2 hover:bg-sora-panel rounded transition-colors text-sora-text-secondary hover:text-sora-text"
        >
          <Zap size={16} />
        </button>
        <button className="p-2 hover:bg-sora-panel rounded transition-colors text-sora-text-secondary hover:text-sora-text">
          <Settings size={16} />
        </button>
      </div>
    </div>
  )
}
