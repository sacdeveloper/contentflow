import { MetricCard, StatusPill, ProgressBar } from '../UI'
import styles from './panels.module.css'

const active = [
  { title: 'The Future of Remote Work Culture', platform: 'LinkedIn', type: 'Text only', model: 'DeepSeek', pct: 68, note: '~40s remaining' },
  { title: '5 Morning Habits of Top CEOs', platform: 'Instagram', type: 'Text + Image', model: 'DALL·E 3', pct: 85, note: 'generating image...' },
  { title: 'Building a Brand People Love', platform: 'Facebook', type: 'Text only', model: 'DeepSeek', pct: 22, note: 'writing article...' },
]

const queued = [
  { title: 'Scaling Without Burning Out', type: 'Text only', model: 'deepseek', pos: 'Next' },
  { title: 'Data-Driven Marketing 101', type: 'Text + Image', model: 'gpt-4o + dall-e', pos: '+2' },
  { title: 'Why Transparency Wins', type: 'Text only', model: 'deepseek', pos: '+3' },
]

export default function Generating() {
  return (
    <div>
      <div className={styles.metrics3}>
        <MetricCard label="In Queue" value="8" />
        <MetricCard label="Generating" value="3" deltaColor="var(--blue)" delta=" " />
        <MetricCard label="Completed Today" value="11" delta="↑ 4 vs yesterday" />
      </div>

      <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 12 }}>Active generations</div>
      {active.map((item, i) => (
        <div key={i} className={styles.genCard}>
          <div className={styles.genIcon}>◐</div>
          <div className={styles.genInfo}>
            <div className={styles.genTitle}>{item.title}</div>
            <div className={styles.genSub}>{item.platform} · {item.type} · {item.model} · {item.note}</div>
            <div style={{ marginTop: 6 }}><ProgressBar value={item.pct} color="var(--blue)" /></div>
          </div>
          <span style={{ fontSize: '10.5px', padding: '2px 8px', borderRadius: 20, fontWeight: 500, background: 'var(--blue-bg)', color: 'var(--blue-text)', flexShrink: 0 }}>{item.pct}%</span>
        </div>
      ))}

      <div style={{ fontSize: 13, fontWeight: 500, margin: '16px 0 12px' }}>Queue</div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead><tr><th>Title</th><th>Type</th><th>Model</th><th>Position</th><th>Status</th></tr></thead>
          <tbody>
            {queued.map((q, i) => (
              <tr key={i}>
                <td>{q.title}</td>
                <td style={{ fontSize: 11, color: 'var(--hint)' }}>{q.type}</td>
                <td style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px' }}>{q.model}</td>
                <td style={{ color: 'var(--hint)', fontSize: 11 }}>{q.pos}</td>
                <td><StatusPill status="draft" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
