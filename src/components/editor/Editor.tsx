import { useAppStore } from '@stores/app'

export default function Editor() {
  const { openTabs, activeTabId } = useAppStore()

  const activeTab = openTabs.find((t) => t.id === activeTabId)

  return (
    <div className="w-full h-full flex flex-col bg-sora-editor">
      {/* Tab Bar */}
      {openTabs.length > 0 && (
        <div className="h-10 border-b border-sora-border flex items-center overflow-x-auto bg-sora-sidebar">
          {openTabs.map((tab) => (
            <div
              key={tab.id}
              className={`px-3 py-2 text-sm border-r border-sora-border cursor-pointer transition-colors ${
                tab.id === activeTabId
                  ? 'bg-sora-editor text-sora-text'
                  : 'text-sora-text-secondary hover:text-sora-text'
              }`}
            >
              {tab.filePath.split('/').pop()}
              {tab.isDirty && <span className="ml-1 text-yellow-500">●</span>}
            </div>
          ))}
        </div>
      )}

      {/* Editor Content */}
      <div className="flex-1 overflow-hidden flex items-center justify-center">
        {activeTab ? (
          <div className="text-sora-text-secondary text-sm">
            Editor: {activeTab.filePath}
          </div>
        ) : (
          <div className="text-sora-text-secondary text-sm">No file open</div>
        )}
      </div>
    </div>
  )
}
