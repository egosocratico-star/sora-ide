import { useAppStore } from '@stores/app'

export default function StatusBar() {
  const { currentProject } = useAppStore()

  return (
    <div className="h-8 border-t border-sora-border bg-sora-sidebar flex items-center justify-between px-4 text-xs text-sora-text-secondary">
      {/* Left */}
      <div className="flex items-center gap-4">
        <span>● Offline</span>
        {currentProject && <span>Project: {currentProject.name}</span>}
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <span>Ready</span>
      </div>
    </div>
  )
}
