'use client'

import { useMemo, useState } from 'react'
import {
  Activity, AlertTriangle, ArrowDownToLine, ArrowUpFromLine, BarChart3,
  Bell, Boxes, CalendarDays, ChevronDown, CircleHelp, ClipboardCheck,
  Clock3, FileText, Fuel, Gauge, LayoutDashboard, Menu, PackageCheck,
  Search, Settings, ShieldCheck, Truck, Users, Warehouse, X, Zap,
} from 'lucide-react'

const nav = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Stock Card', icon: Boxes },
  { label: 'Procurement', icon: ClipboardCheck },
  { label: 'Inbound', icon: ArrowDownToLine },
  { label: 'Outbound', icon: ArrowUpFromLine },
  { label: 'Retail / Kasir', icon: PackageCheck },
  { label: 'Barge Loading', icon: Warehouse },
  { label: 'Cartrack / Fleet', icon: Truck },
  { label: 'CCTV Evidence', icon: ShieldCheck },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'Reports', icon: FileText },
  { label: 'Admin', icon: Settings },
]

const stacks = [
  { name: 'MAM-01', site: 'Mamuju', stock: '1,280.4', tm: 36.2, level: 78, state: 'Healthy' },
  { name: 'MAM-02', site: 'Mamuju', stock: '940.8', tm: 38.7, level: 61, state: 'Watch' },
  { name: 'MAR-01', site: 'Marunda', stock: '2,104.2', tm: 34.9, level: 88, state: 'Healthy' },
  { name: 'TB-03', site: 'Teluk Bayur', stock: '1,672.0', tm: 41.1, level: 47, state: 'Critical' },
]

const alerts = [
  { title: 'TM di atas ambang batas', detail: 'TB-03 · 41.1% moisture content', time: '12 min ago', tone: 'critical' },
  { title: 'ETA barge berubah', detail: 'BG-2407 · +5 jam dari jadwal', time: '38 min ago', tone: 'warning' },
  { title: 'DO belum discan', detail: 'PO-2024-089 · 3 truk menunggu', time: '1 hr ago', tone: 'info' },
]

function Badge({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: string }) {
  return <span className={`badge badge-${tone}`}>{children}</span>
}

function Metric({ label, value, unit, trend, icon: Icon, tone = 'green', note }: any) {
  return <div className="metric-card">
    <div className="metric-top"><span className="metric-label">{label}</span><span className={`metric-icon metric-${tone}`}><Icon size={16} /></span></div>
    <div className="metric-value">{value}<small>{unit}</small></div>
    <div className="metric-foot"><span className={trend?.startsWith('+') ? 'trend-up' : 'trend-down'}>{trend}</span><span>{note}</span></div>
  </div>
}

export default function GgcDashboard() {
  const [active, setActive] = useState('Dashboard')
  const [site, setSite] = useState('All Sites')
  const [sidebar, setSidebar] = useState(false)
  const [range, setRange] = useState('Today')
  const filteredStacks = useMemo(() => site === 'All Sites' ? stacks : stacks.filter((s) => s.site === site), [site])

  return <div className="ggc-app">
    <aside className={`sidebar ${sidebar ? 'sidebar-open' : ''}`}>
      <div className="brand"><div className="brand-mark">G</div><div><strong>GGC</strong><span>STOCKFILE</span></div><button className="mobile-close" onClick={() => setSidebar(false)} aria-label="Close menu"><X size={18} /></button></div>
      <div className="workspace"><span className="eyebrow">WORKSPACE</span><div className="workspace-row"><div className="avatar">AR</div><div><strong>Aditya Ramadhan</strong><span>Super Admin</span></div><ChevronDown size={15} /></div></div>
      <nav className="nav-list">{nav.map((item) => { const Icon = item.icon; return <button key={item.label} className={`nav-item ${active === item.label ? 'active' : ''}`} onClick={() => { setActive(item.label); setSidebar(false) }}><Icon size={17} /><span>{item.label}</span>{item.label === 'Admin' && <span className="nav-dot" />}</button> })}</nav>
      <div className="sidebar-bottom"><div className="offline"><span className="online-dot" /><span>Offline-ready</span><small>Synced 2m ago</small></div><button className="help"><CircleHelp size={16} /> Help center</button></div>
    </aside>
    {sidebar && <button className="sidebar-scrim" onClick={() => setSidebar(false)} aria-label="Close sidebar" />}
    <main className="main-area">
      <header className="topbar"><button className="menu-button" onClick={() => setSidebar(true)} aria-label="Open menu"><Menu size={20} /></button><div className="breadcrumb"><span>GGC Stockfile</span><b>/</b><strong>{active}</strong></div><div className="top-actions"><div className="site-select"><Warehouse size={16} /><select value={site} onChange={(e) => setSite(e.target.value)} aria-label="Select site"><option>All Sites</option><option>Mamuju</option><option>Marunda</option><option>Teluk Bayur</option></select><ChevronDown size={14} /></div><button className="icon-button" aria-label="Notifications"><Bell size={18} /><i /></button><div className="user-chip"><div className="avatar avatar-sm">AR</div><span>Aditya</span><ChevronDown size={14} /></div></div></header>
      <div className="page-wrap">
        <div className="page-heading"><div><div className="eyebrow">MONDAY, 18 NOVEMBER 2024 · 09:42 WIB</div><h1>{active === 'Dashboard' ? 'Operational Dashboard' : active}</h1><p>{active === 'Dashboard' ? 'A clear view of today’s stockpile operations.' : `Monitor and manage ${active.toLowerCase()} across your active sites.`}</p></div><div className="heading-actions"><button className="button button-ghost"><CalendarDays size={16} /> <select value={range} onChange={(e) => setRange(e.target.value)} aria-label="Date range"><option>Today</option><option>This week</option><option>This month</option></select></button><button className="button button-primary"><Zap size={16} /> Quick action</button></div></div>
        {active !== 'Dashboard' ? <SectionPlaceholder active={active} site={site} /> : <>
          <div className="metric-grid"><Metric label="Available stock" value="5,997.4" unit=" MT" trend="+4.8%" note="vs. yesterday" icon={Boxes} /><Metric label="Inbound today" value="186.2" unit=" MT" trend="+12.3%" note="24 receipts" icon={ArrowDownToLine} tone="blue" /><Metric label="Outbound today" value="92.6" unit=" MT" trend="-3.1%" note="8 shipments" icon={ArrowUpFromLine} tone="amber" /><Metric label="Avg. moisture" value="37.8" unit="%" trend="+0.6%" note="target ≤ 40%" icon={Gauge} tone="navy" /></div>
          <div className="content-grid"><section className="panel panel-wide"><div className="panel-header"><div><h2>Stock by site</h2><p>Live stockpile inventory · metric tons</p></div><button className="text-button" onClick={() => setActive('Stock Card')}>View stock card <ArrowUpFromLine size={14} /></button></div><div className="stock-list">{filteredStacks.map((stack) => <div className="stock-row" key={stack.name}><div className="stock-name"><div className="stack-icon"><Boxes size={17} /></div><div><strong>{stack.name}</strong><span>{stack.site}</span></div></div><div className="stock-bar"><div className="bar-track"><div className={`bar-fill ${stack.state === 'Critical' ? 'fill-critical' : stack.state === 'Watch' ? 'fill-warning' : ''}`} style={{ width: `${stack.level}%` }} /></div><small>{stack.level}% capacity</small></div><div className="stock-number"><strong>{stack.stock}</strong><span>MT</span></div><div className="stock-tm"><strong>{stack.tm}%</strong><span>TM</span></div><Badge tone={stack.state === 'Healthy' ? 'success' : stack.state === 'Watch' ? 'warning' : 'critical'}>{stack.state}</Badge></div>)}</div><div className="panel-footer"><span>Showing {filteredStacks.length} stockpiles</span><button className="icon-button"><Search size={15} /></button></div></section>
          <section className="panel"><div className="panel-header"><div><h2>Alerts & escalations</h2><p>Needs attention today</p></div><span className="alert-count">3</span></div><div className="alerts-list">{alerts.map((alert) => <div className="alert-row" key={alert.title}><div className={`alert-icon alert-${alert.tone}`}><AlertTriangle size={16} /></div><div><strong>{alert.title}</strong><span>{alert.detail}</span><small>{alert.time}</small></div></div>)}</div><button className="full-button" onClick={() => setActive('Reports')}>Open alert center <ArrowUpFromLine size={14} /></button></section>
          </div>
          <div className="content-grid lower-grid"><section className="panel"><div className="panel-header"><div><h2>Inbound volume</h2><p>Last 7 days · metric tons</p></div><Badge tone="success">On target</Badge></div><div className="chart"><div className="chart-y"><span>300</span><span>200</span><span>100</span><span>0</span></div><div className="chart-area"><div className="grid-lines"><i /><i /><i /><i /></div><div className="bars">{[46, 62, 54, 78, 68, 88, 72].map((h, i) => <div className="bar-column" key={i}><div className="chart-bar" style={{ height: `${h}%` }} /><span>{['Tue','Wed','Thu','Fri','Sat','Sun','Mon'][i]}</span></div>)}</div></div></div></section><section className="panel"><div className="panel-header"><div><h2>Upcoming barges</h2><p>Next 72 hours</p></div><button className="text-button" onClick={() => setActive('Barge Loading')}>View all</button></div><div className="barge-list"><div className="barge-item"><div className="barge-date"><strong>20</strong><span>NOV</span></div><div><strong>MV Ocean Sejahtera</strong><span>BG-2407 · Marunda Jetty</span></div><div className="eta"><Clock3 size={14} /> 14:30</div></div><div className="barge-item"><div className="barge-date"><strong>21</strong><span>NOV</span></div><div><strong>TB. Nusantara Jaya</strong><span>BG-2408 · Teluk Bayur</span></div><div className="eta"><Clock3 size={14} /> 09:00</div></div></div></section></div>
        </>}
      </div><footer className="footer"><span>GGC Stockfile v0.8.2</span><span><Activity size={13} /> All systems operational</span></footer>
    </main>
    <div className="mobile-nav">{nav.slice(0, 4).map((item) => { const Icon = item.icon; return <button key={item.label} className={active === item.label ? 'active' : ''} onClick={() => setActive(item.label)}><Icon size={18} /><span>{item.label.split(' ')[0]}</span></button> })}</div>
  </div>
}

function SectionPlaceholder({ active, site }: { active: string; site: string }) {
  const titles: Record<string, string> = { 'Stock Card': 'Perpetual inventory and stack lifecycle', Procurement: 'Purchase requests, purchase orders, and delivery orders', Inbound: 'Truck receipt and weighing workflow', Outbound: 'Multi-channel stock release and transfers', 'Retail / Kasir': 'Retail counter and shift reconciliation', 'Barge Loading': 'Manifest planning and dead freight control', 'Cartrack / Fleet': 'Live fleet positions and ETA monitoring', 'CCTV Evidence': 'Stockpile evidence and audit trail', Analytics: 'Operational performance analysis', Reports: 'Daily and weekly operational reports', Admin: 'Users, roles, sites, and alert rules' }
  return <div className="placeholder-grid"><section className="panel hero-panel"><div className="placeholder-icon"><Boxes size={25} /></div><Badge tone="info">Prototype view</Badge><h2>{titles[active] ?? active}</h2><p>This workflow is ready for UI review. Use the site selector to preview how the workspace changes across Mamuju, Marunda, and Teluk Bayur.</p><div className="placeholder-actions"><button className="button button-primary"><Zap size={16} /> Start workflow</button><button className="button button-ghost"><FileText size={16} /> View documentation</button></div></section><section className="panel"><div className="panel-header"><div><h2>Site snapshot</h2><p>{site} · synced 2m ago</p></div><Badge tone="success">Live</Badge></div><div className="snapshot-list"><div><span>Available stock</span><strong>5,997.4 MT</strong></div><div><span>Pending actions</span><strong>12</strong></div><div><span>Open alerts</span><strong className="critical-text">3</strong></div><div><span>Last audit</span><strong>Today, 08:14</strong></div></div></section></div>
}
