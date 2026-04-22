import { useState } from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/panels/Dashboard'
import Upload from '../components/panels/Upload'
import ContentQueue from '../components/panels/ContentQueue'
import LLMEngine from '../components/panels/LLMEngine'
import Generating from '../components/panels/Generating'
import Approval from '../components/panels/Approval'
import Publishing from '../components/panels/Publishing'
import Settings from '../components/panels/Settings'
import Analytics from '../components/panels/Analytics'
import OpsLog from '../components/panels/OpsLog'
import styles from '../styles/Home.module.css'

const panelMeta: Record<string, { title: string; sub: string }> = {
  dashboard: { title: 'Dashboard', sub: 'Overview' },
  upload: { title: 'Upload Excel', sub: 'Module 1' },
  queue: { title: 'Content Queue', sub: 'Module 1' },
  llm: { title: 'LLM Engine', sub: 'Module 2' },
  generating: { title: 'Generating', sub: 'Module 2' },
  approval: { title: 'Approvals', sub: 'Module 4' },
  publishing: { title: 'Publishing', sub: 'Module 5' },
  settings: { title: 'Settings', sub: 'Module 6' },
  analytics: { title: 'Analytics', sub: 'Module 7' },
  opslog: { title: 'Ops Log', sub: 'Module 8' },
}

export default function Home() {
  const [active, setActive] = useState('dashboard')
  const meta = panelMeta[active]

  const renderPanel = () => {
    switch (active) {
      case 'dashboard': return <Dashboard onNav={setActive} />
      case 'upload': return <Upload />
      case 'queue': return <ContentQueue />
      case 'llm': return <LLMEngine />
      case 'generating': return <Generating />
      case 'approval': return <Approval />
      case 'publishing': return <Publishing />
      case 'settings': return <Settings />
      case 'analytics': return <Analytics />
      case 'opslog': return <OpsLog />
      default: return <Dashboard onNav={setActive} />
    }
  }

  return (
    <>
      <Head>
        <title>ContentFlow — AI Content Automation Platform</title>
        <meta name="description" content="AI-powered content automation platform with LLM generation, approval workflows, and social media publishing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.platform}>
        <Sidebar active={active} onChange={setActive} />

        <main className={styles.main}>
          <div className={styles.topbar}>
            <div className={styles.topbarTitle}>
              {meta.title}
              <span className={styles.topbarSub}>{meta.sub}</span>
            </div>
            <button className={styles.btn} onClick={() => setActive('upload')}>↓ Template</button>
            <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => setActive('upload')}>+ New Campaign</button>
          </div>

          <div className={styles.content}>
            {renderPanel()}
          </div>
        </main>
      </div>
    </>
  )
}
