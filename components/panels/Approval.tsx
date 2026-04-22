import { useState } from 'react'
import { StatusPill, PlatformTag, Btn } from '../UI'
import { approvalItems } from '../../lib/data'
import styles from './panels.module.css'

export default function Approval() {
  const [items, setItems] = useState(approvalItems)

  const approve = (id: number) => {
    setItems(items.map(i => i.id === id ? { ...i, status: 'approved' } : i))
  }

  const reject = (id: number) => {
    setItems(items.map(i => i.id === id ? { ...i, status: 'rejected' } : i))
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 14, alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ fontSize: 12, color: 'var(--muted)' }}>Send via:</div>
        <Btn>💬 Discord</Btn>
        <Btn>📱 WhatsApp</Btn>
        <div style={{ marginLeft: 'auto' }}>
          <Btn primary>Send all pending ↗</Btn>
        </div>
      </div>

      {items.map(item => (
        <div key={item.id} className={styles.approvalCard} style={{ opacity: item.status !== 'pending' ? 0.6 : 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, flexWrap: 'wrap', gap: 6 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <PlatformTag platform={item.platform} />
              <StatusPill status={item.status} />
            </div>
            <div style={{ fontSize: 11, color: 'var(--hint)' }}>Sent to {item.channel} {item.ago}</div>
          </div>
          <div className={styles.approvalTitle}>{item.title}</div>
          <div className={styles.approvalPreview}>{item.preview}</div>

          {item.hasImage && (
            <div style={{ marginBottom: 12, padding: 10, background: 'var(--surf2)', borderRadius: 'var(--r-sm)', border: '0.5px solid var(--border)' }}>
              <div style={{ fontSize: 10, color: 'var(--hint)', marginBottom: 4 }}>Generated image preview</div>
              <div style={{ height: 60, background: 'linear-gradient(135deg,#f0e6d3,#e8d4b8)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#8a7a65' }}>
                Minimalist scene · DALL·E 3
              </div>
            </div>
          )}

          {item.status === 'pending' && (
            <div className={styles.approvalActions}>
              <Btn primary style={{ background: 'var(--green)', borderColor: 'var(--green)' }} onClick={() => approve(item.id)}>✓ Approve</Btn>
              <Btn onClick={() => reject(item.id)}>✗ Reject</Btn>
              <Btn>✏ Edit</Btn>
              <Btn>↻ Regenerate</Btn>
            </div>
          )}

          {item.status === 'approved' && (
            <div style={{ fontSize: 12, color: 'var(--green)' }}>✓ Sent to publishing queue</div>
          )}

          {item.status === 'rejected' && (
            <div className={styles.approvalActions}>
              <Btn>↻ Regenerate</Btn>
              <Btn>✏ Edit & Resubmit</Btn>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
