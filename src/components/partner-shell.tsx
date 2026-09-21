"use client";
import {BarChart3,BriefcaseBusiness,Building2,ChevronDown,FileCheck2,Gauge,Handshake,Menu,MessageSquare,Search,Settings,ShieldCheck,Users,WalletCards} from "lucide-react";
import {ThemeToggle} from "./theme-toggle";
const nav=[["Command",Gauge],["Workforce",Users],["Jobs",BriefcaseBusiness],["Housing",Building2],["Applications",FileCheck2],["Screening",ShieldCheck],["Placements",Handshake],["Messages",MessageSquare],["Revenue",WalletCards],["Analytics",BarChart3],["Settings",Settings]] as const;
export function PartnerShell({children}:{children:React.ReactNode}){return <div className="shell">
<aside className="sidebar">
 <div className="brand"><div className="brandMark">FP<span>↗</span></div><div><b>FAIRPATH</b><small>PARTNER</small></div></div>
 <button className="orgSwitch"><div className="orgAvatar">FP</div><span><b>FairPath Demo Partner</b><small>Property + Workforce</small></span><ChevronDown size={15}/></button>
 <div className="navLabel">OPERATE</div>
 <nav>{nav.map(([label,Icon],i)=><button className={i===0?"navItem active":"navItem"} key={label}><Icon size={17}/><span>{label}</span>{label==="Applications"&&<em>12</em>}</button>)}</nav>
 <div className="sidebarFoot"><div className="workspaceState"><i/><span><b>PRE-LAUNCH</b> Partner workspace</span></div></div>
</aside>
<main className="main">
 <header className="topbar"><button className="mobileMenu"><Menu/></button><div className="search"><Search size={17}/><input placeholder="Search people, jobs, properties, applications"/></div><div className="topActions"><button className="topLink">Help</button><ThemeToggle/><button className="avatar">SB</button></div></header>
 {children}
</main></div>}