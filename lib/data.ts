export const queueData = [
  { id:1, date:'Apr 01', title:'5 AI Trends for 2026', type:'Text', platform:'LinkedIn', status:'published' },
  { id:2, date:'Apr 03', title:'Behind the Brand Story', type:'Text+Image', platform:'Instagram', status:'approved' },
  { id:3, date:'Apr 05', title:'Q1 Growth Playbook', type:'Text', platform:'Facebook', status:'pending' },
  { id:4, date:'Apr 07', title:'Team Culture Deep Dive', type:'Text', platform:'LinkedIn', status:'rejected' },
  { id:5, date:'Apr 09', title:'The Future of Remote Work', type:'Text', platform:'LinkedIn', status:'pending' },
  { id:6, date:'Apr 11', title:'5 Morning Habits of CEOs', type:'Text+Image', platform:'Instagram', status:'pending' },
  { id:7, date:'Apr 13', title:'Building a Brand People Love', type:'Text', platform:'Facebook', status:'draft' },
  { id:8, date:'Apr 15', title:'Scaling Without Burning Out', type:'Text', platform:'LinkedIn', status:'draft' },
  { id:9, date:'Apr 17', title:'Data-Driven Marketing 101', type:'Text+Image', platform:'Instagram', status:'draft' },
  { id:10, date:'Apr 19', title:'Why Transparency Wins', type:'Text', platform:'Facebook', status:'draft' },
];

export const opsLogs = [
  { time:'14:32:08', type:'success', msg:'Published "5 AI Trends for 2026" to LinkedIn successfully' },
  { time:'14:28:45', type:'success', msg:'Discord approval received for "Behind the Brand Story" (approved by @manager)' },
  { time:'14:15:22', type:'info', msg:'Image generated for "5 Morning Habits of CEOs" · DALL·E 3 · 1024×1024 · 3.2s' },
  { time:'13:58:10', type:'info', msg:'Content generation started for "The Future of Remote Work" via DeepSeek' },
  { time:'13:45:00', type:'warn', msg:'WhatsApp delivery delayed for "Q1 Growth Playbook" — retrying in 60s' },
  { time:'13:30:17', type:'info', msg:'Approval request sent to Discord channel #content-approvals (5 items)' },
  { time:'12:58:44', type:'error', msg:'LinkedIn API rate limit hit — scheduled retry at 13:00:00' },
  { time:'12:45:00', type:'success', msg:'Excel upload validated — 30 rows parsed, 0 errors, 3 warnings' },
  { time:'11:30:00', type:'info', msg:'Content generation batch started — 8 articles queued' },
  { time:'10:00:00', type:'info', msg:'Platform initialized — April 2026 campaign active' },
];

export const approvalItems = [
  {
    id: 1,
    title: 'The Future of Remote Work Culture',
    platform: 'LinkedIn',
    channel: 'Discord',
    ago: '2h ago',
    preview: 'In an era where physical office boundaries have blurred, the question isn\'t whether remote work works — it\'s how organisations can evolve their culture to thrive in distributed environments. Leaders who invest in intentional rituals, async-first communication, and...',
    hasImage: false,
    status: 'pending',
  },
  {
    id: 2,
    title: '5 Morning Habits of Top CEOs',
    platform: 'Instagram',
    channel: 'WhatsApp',
    ago: '4h ago',
    preview: 'The morning routines of high-performing leaders share surprising similarities. From 5 AM cold plunges to 90-minute deep work blocks before email, these habits aren\'t coincidental — they\'re engineered for peak cognitive performance...',
    hasImage: true,
    status: 'pending',
  },
  {
    id: 3,
    title: 'Q1 Growth Playbook: What Actually Worked',
    platform: 'Facebook',
    channel: 'Discord',
    ago: '6h ago',
    preview: 'After analyzing 200+ growth experiments across our portfolio companies, patterns emerge that challenge conventional wisdom. The tactics that drove the most sustainable growth weren\'t the flashy ones — they were systematic, repeatable processes...',
    hasImage: false,
    status: 'pending',
  },
];

export const weeklyData = [
  { day: 'Mon', posts: 4 },
  { day: 'Tue', posts: 7 },
  { day: 'Wed', posts: 3 },
  { day: 'Thu', posts: 8 },
  { day: 'Fri', posts: 6 },
  { day: 'Sat', posts: 5 },
  { day: 'Sun', posts: 2 },
];
