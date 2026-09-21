"use client";
import {Building2,BriefcaseBusiness,ChartNoAxesCombined,ChevronDown,CircleDollarSign,FileCheck2,Handshake,Home,Menu,MessageSquare,Search,Settings,ShieldCheck,Users} from "lucide-react";
import {ThemeToggle} from "./theme-toggle";
const nav=[["Overview",Home],["Properties",Building2],["Applications",FileCheck2],["Screening",ShieldCheck],["Tours",Users],["Protection",Handshake],["Opportunity Earnings",CircleDollarSign],["Messages",MessageSquare],["Analytics",ChartNoAxesCombined],["Settings",Settings]] as const;
export function PartnerShell({children}:{children:React.ReactNode}){return <div className="shell">
 <aside className="sidebar">
  <div className="brand"><div className="brandMark">FP<span>→</span></div><div><b>FAIRPATH</b><small>PARTNER</small></div></div>
  <button className="orgSwitch"><div className="orgAvatar">FP</div><span><b>FairPath Demo Partner</b><small>Property Management</small></span><ChevronDown size={16}/></button>
  <nav>{nav.map(([label,Icon],i)=><button className={i===0?"navItem active":"navItem"} key={label}><Icon size={18}/><span>{label}</span>{label==="Applications"&&<em>12</em>}</button>)}</nav>
  <div className="sidebarFoot"><div className="founding"><b>FOUNDING PARTNER</b><span>Pre-launch access</span></div><button className="navItem"><BriefcaseBusiness size={18}/><span>Switch workspace</span></button></div>
 </aside>
 <main className="main">
  <header className="topbar"><button className="mobileMenu"><Menu/></button><div className="search"><Search size={18}/><input placeholder="Search FairPath Partner…"/></div><div className="topActions"><span className="statusDot"/><span>Pre-launch</span><ThemeToggle/><button className="avatar">SB</button></div></header>
  {children}
 </main>
 </div>}
