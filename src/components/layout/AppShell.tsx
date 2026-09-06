import { useAppStore } from '@stores/app'
import TopBar from './TopBar'
import Sidebar from './Sidebar'
import Editor from '../editor/Editor'
import AIPanel from '../ai/AIPanel'
import Terminal from '../terminal/Terminal'
import StatusBar from './StatusBar'

export default function AppShell() {
  const { sidebarVisible, aiPanelVisible, terminalVisible, focusMode } = useAppStore()

  return (
    <div className="w-full h-screen flex flex-col bg-sora-bg">
      {/* Top Bar */}
      {!focusMode && <TopBar />}

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        {sidebarVisible && !focusMode && <Sidebar />}

        {/* Center Panel */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Editor */}
          <div className="flex-1 overflow-hidden">
            <Editor />
          </div>

          {/* Terminal */}
          {terminalVisible && !focusMode && (
            <div className="h-48 border-t border-sora-border bg-sora-editor">
              <Terminal />
            </div>
          )}
        </div>

        {/* AI Panel */}
        {aiPanelVisible && !focusMode && (
          <div className="w-96 border-l border-sora-border bg-sora-panel">
            <AIPanel />
          </div>
        )}
      </div>

      {/* Status Bar */}
      {!focusMode && <StatusBar />}
    </div>
  )
}
