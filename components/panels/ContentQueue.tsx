import { useState } from 'react'
import { StatusPill, PlatformTag, Btn } from '../UI'
import { queueData } from '../../lib/data'
import styles from './panels.module.css'

export default function ContentQueue() {
  const [platform, setPlatform] = useState('All')
  const [status, setStatus] = useState('All')
  const [type, setType] = useState('All')

  const filtered = queueData.filter(r =>
    (platform === 'All' || r.platform === platform) &&
    (status === 'All' || r.status === status) &&
    (type === 'All' || r.type.startsWith(type))
  )

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
        <select className={styles.sel} value={platform} onChange={e => setPlatform(e.target.value)}>
          {['All','LinkedIn','Instagram','Facebook'].map(p => <option key={p}>{p}</option>)}
        </select>
        <select className={styles.sel} value={status} onChange={e => setStatus(e.target.value)}>
          {['All','draft','pending','approved','published','rejected'].map(s => <option key={s}>{s}</option>)}
        </select>
        <select className={styles.sel} value={type} onChange={e => setType(e.target.value)}>
          {['All','Text','Text+Image'].map(t => <option key={t}>{t}</option>)}
        </select>
        <div style={{ marginLeft: 'auto' }}>
          <Btn>Export CSV</Btn>
        </div>
      </div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th><th>Date</th><th>Title</th><th>Type</th><th>Platform</th><th>Status</th><th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(r => (
              <tr key={r.id}>
                <td style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--hint)' }}>{r.id}</td>
                <td style={{ fontSize: 11, color: 'var(--hint)' }}>{r.date}</td>
                <td>{r.title}</td>
                <td style={{ fontSize: 11, color: 'var(--hint)' }}>{r.type}</td>
                <td><PlatformTag platform={r.platform} /></td>
                <td><StatusPill status={r.status} /></td>
                <td><Btn style={{ padding: '3px 8px', fontSize: 11 }}>View</Btn></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: 10, fontSize: 11, color: 'var(--hint)' }}>
        Showing {filtered.length} of {queueData.length} entries
      </div>
    </div>
  )
}
