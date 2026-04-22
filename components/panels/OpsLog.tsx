import { useState } from 'react'
import { Card, Btn } from '../UI'
import { opsLogs } from '../../lib/data'
import styles from './panels.module.css'

const dotColor: Record<string, string> = {
  success: 'var(--green)',
  info: 'var(--blue)',
  warn: 'var(--amber)',
  error: 'var(--red)',
}

export default function OpsLog() {
  const [filter, setFilter] = useState('All')
  const [range, setRange] = useState('Today')

  const filtered = opsLogs.filter(l => filter === 'All' || l.type === filter.toLowerCase())

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap', alignItems: 'center' }}>
        <select className={styles.sel} value={filter} onChange={e => setFilter(e.target.value)}>
          {['All', 'Success', 'Info', 'Warn', 'Error'].map(f => <option key={f}>{f}</option>)}
        </select>
        <select className={styles.sel} value={range} onChange={e => setRange(e.target.value)}>
          {['Today', 'Last 7 days', 'Last 30 days'].map(r => <option key={r}>{r}</option>)}
        </select>
        <div style={{ display: 'flex', gap: 6, marginLeft: 8 }}>
          {['success', 'info', 'warn', 'error'].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'var(--muted)' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: dotColor[t] }} />
              {t}
            </div>
          ))}
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <Btn>Export log</Btn>
        </div>
      </div>

      <Card>
        {filtered.map((log, i) => (
          <div key={i} className={styles.logRow}>
            <div className={styles.logTime}>{log.time}</div>
            <div className={styles.logDot} style={{ background: dotColor[log.type] || dotColor.info }} />
            <div className={styles.logMsg}>{log.msg}</div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{ padding: '24px', textAlign: 'center', color: 'var(--hint)', fontSize: 12 }}>No logs match the selected filter</div>
        )}
      </Card>

      <div style={{ marginTop: 10, fontSize: 11, color: 'var(--hint)' }}>
        Showing {filtered.length} of {opsLogs.length} log entries · Auto-refreshes every 30s
      </div>
    </div>
  )
}
