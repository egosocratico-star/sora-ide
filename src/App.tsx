import { useState } from 'react'
import AppShell from '@components/layout/AppShell'
import { useAppStore } from '@stores/app'

function App() {
  const { currentProject } = useAppStore()

  return (
    <div className="w-full h-screen bg-sora-bg">
      {currentProject ? (
        <AppShell />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-light tracking-tight text-sora-text">
              Sora IDE
            </h1>
            <p className="text-sora-text-secondary text-lg">
              Build without the noise.
            </p>
            <p className="text-sm text-sora-text-secondary max-w-md">
              An elegant AI-native development environment.
            </p>
            <div className="flex gap-3 justify-center mt-8">
              <button className="px-6 py-2 bg-sora-panel hover:bg-sora-border text-sora-text rounded-sora transition-colors">
                Create Project
              </button>
              <button className="px-6 py-2 bg-sora-panel hover:bg-sora-border text-sora-text rounded-sora transition-colors">
                Open Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
