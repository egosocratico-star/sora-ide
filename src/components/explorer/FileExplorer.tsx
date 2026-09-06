import { useState } from 'react'
import { ChevronDown, ChevronRight, File, Folder, Plus, Trash2 } from 'lucide-react'

interface FileNode {
  id: string
  name: string
  type: 'file' | 'folder'
  children?: FileNode[]
  expanded?: boolean
}

export default function FileExplorer() {
  const [files, setFiles] = useState<FileNode[]>([
    {
      id: '1',
      name: 'src',
      type: 'folder',
      expanded: true,
      children: [
        { id: '1.1', name: 'components', type: 'folder', expanded: false, children: [] },
        { id: '1.2', name: 'stores', type: 'folder', expanded: false, children: [] },
        { id: '1.3', name: 'App.tsx', type: 'file' },
        { id: '1.4', name: 'main.tsx', type: 'file' },
      ],
    },
    {
      id: '2',
      name: 'public',
      type: 'folder',
      expanded: false,
      children: [],
    },
    {
      id: '3',
      name: 'package.json',
      type: 'file',
    },
  ])

  const toggleExpand = (id: string) => {
    const toggle = (nodes: FileNode[]): FileNode[] =>
      nodes.map((node) =>
        node.id === id
          ? { ...node, expanded: !node.expanded }
          : { ...node, children: node.children ? toggle(node.children) : undefined }
      )
    setFiles(toggle(files))
  }

  const renderNode = (node: FileNode, depth: number = 0) => (
    <div key={node.id}>
      <div
        className="flex items-center gap-1 px-2 py-1 hover:bg-sora-panel cursor-pointer text-sora-text text-sm"
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
      >
        {node.type === 'folder' && (
          <button
            onClick={() => toggleExpand(node.id)}
            className="hover:bg-sora-border rounded p-0"
          >
            {node.expanded ? (
              <ChevronDown size={16} className="text-sora-text-secondary" />
            ) : (
              <ChevronRight size={16} className="text-sora-text-secondary" />
            )}
          </button>
        )}
        {node.type === 'folder' ? (
          <Folder size={16} className="text-yellow-500" />
        ) : (
          <File size={16} className="text-blue-400" />
        )}
        <span>{node.name}</span>
      </div>
      {node.expanded &&
        node.children &&
        node.children.map((child) => renderNode(child, depth + 1))}
    </div>
  )

  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-10 border-b border-sora-border px-3 flex items-center justify-between">
        <span className="text-xs font-medium text-sora-text-secondary uppercase">Explorer</span>
        <div className="flex gap-1">
          <button className="p-1 hover:bg-sora-panel rounded text-sora-text-secondary hover:text-sora-text">
            <Plus size={14} />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {files.map((node) => renderNode(node))}
      </div>
    </div>
  )
}
