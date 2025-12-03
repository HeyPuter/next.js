'use client'

import { useState, type ComponentType } from 'react'
import { AIExample, FileSystemExample, KVExample, OSExample, UIExample } from './components/examples'

type TabId = 'kv' | 'fs' | 'os' | 'ui' | 'ai'

type Tab = {
  id: TabId
  label: string
  description: string
  Component: ComponentType
}

const tabs: Tab[] = [
  {
    id: 'kv',
    label: 'KV store',
    description: 'Get/set and increment counters',
    Component: KVExample
  },
  {
    id: 'fs',
    label: 'File system',
    description: 'Read and write a demo file',
    Component: FileSystemExample
  },
  {
    id: 'os',
    label: 'OS',
    description: 'User profile + version info',
    Component: OSExample
  },
  {
    id: 'ai',
    label: 'AI chat',
    description: 'Prompt Puter AI and see replies',
    Component: AIExample
  },
  {
    id: 'ui',
    label: 'UI helpers',
    description: 'File picker example',
    Component: UIExample
  }
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>('kv')
  const active = tabs.find(tab => tab.id === activeTab) ?? tabs[0]
  const ActiveComponent = active.Component

  return (
    <div className="page-wrap">
      <header className="hero">
        <div className="logo-row">
          <a href="https://puter.com" target="_blank" rel="noreferrer">
            <img src="https://puter.com/images/logo.png" className="logo" alt="Puter logo" />
          </a>
        </div>
        <h1>Puter.js Examples</h1>
        <p className="hero-subtitle">Quick, runnable snippets for the most common Puter.js APIs.</p>
      </header>

      <nav className="tab-list" aria-label="Puter.js example tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab ${tab.id === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            type="button"
          >
            <span className="tab-title">{tab.label}</span>
            <span className="tab-desc">{tab.description}</span>
          </button>
        ))}
      </nav>

      <main className="tab-panel">
        <ActiveComponent />
      </main>
    </div>
  )
}
