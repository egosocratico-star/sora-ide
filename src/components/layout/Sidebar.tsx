import { useState } from 'react'
import { FileText, Search, GitBranch, Play, Zap } from 'lucide-react'

type SidebarSection = 'explorer' | 'search' | 'git' | 'run' | 'ai'

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<SidebarSection>('explorer')

  const sections: Array<{ id: SidebarSection; icon: typeof FileText; label: string }> = [
    { id: 'explorer', icon: FileText, label: 'Explorer' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'git', icon: GitBranch, label: 'Git' },
    { id: 'run', icon: Play, label: 'Run' },
    { id: 'ai', icon: Zap, label: 'AI' },
  ]

  return (
    <div className="w-64 border-r border-sora-border bg-sora-sidebar flex flex-col">
      {/* Navigation */}
      <div className="h-12 border-b border-sora-border flex items-center justify-around">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`p-2 transition-colors ${
                activeSection === section.id
                  ? 'text-sora-text border-b-2 border-sora-text'
                  : 'text-sora-text-secondary hover:text-sora-text'
              }`}
              title={section.label}
            >
              <Icon size={18} />
            </button>
          )
        })}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-3">
        {activeSection === 'explorer' && (
          <div className="space-y-2">
            <div className="text-xs font-medium text-sora-text-secondary uppercase tracking-wider">Files</div>
            <div className="text-sm text-sora-text-secondary">Open a project to see files</div>
          </div>
        )}
        {activeSection === 'search' && (
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-2 py-1 text-sm bg-sora-editor border border-sora-border rounded-sora text-sora-text placeholder-sora-text-secondary"
            />
          </div>
        )}
        {activeSection === 'ai' && (
          <div className="text-sm text-sora-text-secondary">AI section</div>
        )}
      </div>
    </div>
  )
}
