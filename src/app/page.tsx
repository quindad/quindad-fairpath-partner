import {ArrowUpRight,Building2,CalendarDays,CheckCircle2,Clock3,FileText,ShieldCheck,Users} from "lucide-react";
import {PartnerShell} from "@/components/partner-shell";
const metrics=[["Active listings","17","3 need attention",Building2],["Applications","91","12 new this week",FileText],["Tours","12","4 upcoming",CalendarDays],["Leases","6","2 this month",CheckCircle2]] as const;
export default function Home(){return <PartnerShell><div className="page">
 <div className="eyebrow">PROPERTY PARTNER</div>
 <div className="pageHead"><div><h1>Good evening.</h1><p>Here’s what is moving across your FairPath housing pipeline.</p></div><button className="primary">+ Add property</button></div>
 <section className="metrics">{metrics.map(([l,v,s,I])=><article className="metric" key={l}><div className="metricIcon"><I size={19}/></div><span>{l}</span><strong>{v}</strong><small>{s}</small></article>)}</section>
 <div className="grid">
  <section className="card span2"><div className="cardHead"><div><span className="kicker">APPLICATION PIPELINE</span><h2>Move people forward.</h2></div><button className="textButton">View applications <ArrowUpRight size={15}/></button></div>
   <div className="pipeline">{[["New",12],["Screening",9],["Qualified",18],["Tour",7],["Decision",5],["Leased",6]].map(([x,n])=><div key={String(x)}><span>{x}</span><b>{n}</b><i style={{width:String(Math.min(Number(n)*5,100))+"%"}}/></div>)}</div>
  </section>
  <section className="card"><span className="kicker">FAIRPATH PROTECTION</span><div className="featureIcon"><ShieldCheck/></div><h2>Reduce the risk of saying yes.</h2><p>Screening, verification and housing-protection workflows will live together here.</p><button className="secondary">Protection setup</button></section>
  <section className="card"><span className="kicker">OPPORTUNITY EARNINGS</span><div className="money">$200.00</div><p className="muted">Pending earnings tied to verified housing outcomes.</p><div className="progress"><i/></div><div className="between"><small>14 / 20 reviewed</small><small>Lease to unlock</small></div></section>
  <section className="card span2"><div className="cardHead"><div><span className="kicker">TODAY</span><h2>Partner activity</h2></div></div>
   <div className="activity"><div><span className="activityIcon"><Users/></span><p><b>3 new applications</b><small>North Linden 1BR · 18 min ago</small></p></div><div><span className="activityIcon"><Clock3/></span><p><b>Tour awaiting confirmation</b><small>West Side 3BR · 1 hr ago</small></p></div><div><span className="activityIcon"><CheckCircle2/></span><p><b>Application moved to qualified</b><small>Easton 2BR · 3 hrs ago</small></p></div></div>
  </section>
 </div>
 </div></PartnerShell>}
