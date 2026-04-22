import styles from './Sidebar.module.css'

const navItems = [
  { section: 'Core', items: [
    { id: 'dashboard', icon: '◈', label: 'Dashboard' },
    { id: 'upload', icon: '↑', label: 'Upload Excel' },
    { id: 'queue', icon: '≡', label: 'Content Queue', badge: '10', badgeType: 'amber' },
  ]},
  { section: 'Generation', items: [
    { id: 'llm', icon: '⚙', label: 'LLM Engine' },
    { id: 'generating', icon: '◐', label: 'Generating', badge: '3', badgeType: 'blue' },
  ]},
  { section: 'Workflow', items: [
    { id: 'approval', icon: '✓', label: 'Approvals', badge: '3', badgeType: 'red' },
    { id: 'publishing', icon: '↗', label: 'Publishing' },
  ]},
  { section: 'System', items: [
    { id: 'settings', icon: '◎', label: 'Settings' },
    { id: 'analytics', icon: '▦', label: 'Analytics' },
    { id: 'opslog', icon: '▤', label: 'Ops Log' },
  ]},
]

interface SidebarProps {
  active: string
  onChange: (id: string) => void
}

export default function Sidebar({ active, onChange }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoTitle}>ContentFlow</div>
        <div className={styles.logoSub}>Automation Platform</div>
      </div>

      <nav className={styles.nav}>
        {navItems.map(section => (
          <div key={section.section}>
            <div className={styles.navSection}>{section.section}</div>
            {section.items.map(item => (
              <button
                key={item.id}
                className={`${styles.navItem} ${active === item.id ? styles.active : ''}`}
                onClick={() => onChange(item.id)}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                <span className={styles.navLabel}>{item.label}</span>
                {item.badge && (
                  <span className={`${styles.badge} ${styles['badge_' + item.badgeType]}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        ))}
      </nav>

      <div className={styles.footer}>
        <div className={styles.footerUser}>
          <div className={styles.avatar}>AD</div>
          <div>
            <div className={styles.userName}>Admin</div>
            <div className={styles.userRole}>Manager role</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
