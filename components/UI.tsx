import styles from './UI.module.css'

export function MetricCard({ label, value, delta, deltaColor }: {
  label: string, value: string | number, delta?: string, deltaColor?: string
}) {
  return (
    <div className={styles.metricCard}>
      <div className={styles.metricLabel}>{label}</div>
      <div className={styles.metricVal}>{value}</div>
      {delta && <div className={styles.metricDelta} style={{ color: deltaColor || 'var(--green)' }}>{delta}</div>}
    </div>
  )
}

export function StatusPill({ status }: { status: string }) {
  const map: Record<string, string> = {
    published: styles.statusPublished,
    approved: styles.statusApproved,
    pending: styles.statusPending,
    rejected: styles.statusRejected,
    draft: styles.statusDraft,
  }
  return <span className={`${styles.statusPill} ${map[status] || styles.statusDraft}`}>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
}

export function PlatformTag({ platform }: { platform: string }) {
  const map: Record<string, string> = {
    LinkedIn: styles.tagLi,
    Instagram: styles.tagIg,
    Facebook: styles.tagFb,
  }
  return <span className={`${styles.platformTag} ${map[platform] || ''}`}>{platform}</span>
}

export function ProgressBar({ value, color }: { value: number, color?: string }) {
  return (
    <div className={styles.progressBar}>
      <div className={styles.progressFill} style={{ width: `${value}%`, background: color || 'var(--ink)' }} />
    </div>
  )
}

export function SectionTitle({ children, action }: { children: React.ReactNode, action?: React.ReactNode }) {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.sectionTitle}>{children}</div>
      {action}
    </div>
  )
}

export function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`${styles.card} ${className || ''}`}>{children}</div>
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <div className={styles.cardTitle}>{children}</div>
}

export function Btn({ children, primary, onClick, style }: {
  children: React.ReactNode, primary?: boolean, onClick?: () => void, style?: React.CSSProperties
}) {
  return (
    <button className={`${styles.btn} ${primary ? styles.btnPrimary : ''}`} onClick={onClick} style={style}>
      {children}
    </button>
  )
}

export function Toggle({ on, onChange }: { on: boolean, onChange: () => void }) {
  return (
    <div className={`${styles.toggle} ${on ? styles.toggleOn : ''}`} onClick={onChange} />
  )
}
