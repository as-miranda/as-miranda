import React, { useEffect, useMemo, useState } from "react";
import { HashRouter, Routes, Route, Link, NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  ArrowDownRight, ArrowLeft, ArrowUpRight, BookOpen, BriefcaseBusiness, Check,
  ChevronRight, Clipboard, Command, Copy, ExternalLink, FileText, Filter,
  Github, Grid2X2, Keyboard, Linkedin, Mail, Menu, Moon, MoveUpRight,
  Search, Send, Sun, Terminal, X
} from "lucide-react";
import { projects, posts, skills, experience, education, site, sections } from "./data";

const categories = ["all", "software", "web", "education", "drones", "design", "writing", "research", "creative", "personal"];

function useTheme() {
  const [dark, setDark] = useState(() => localStorage.getItem("as-theme") !== "light");
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("as-theme", dark ? "dark" : "light");
  }, [dark]);
  return [dark, setDark];
}

function Layout({ children, dark, setDark }) {
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  const [command, setCommand] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    const fn = e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault(); setCommand(v => !v);
      }
      if (e.key === "Escape") { setCommand(false); setMenu(false); }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  return <>
    <a className="skip-link" href="#main">Pular para o conteúdo</a>
    <Header dark={dark} setDark={setDark} menu={menu} setMenu={setMenu} openCommand={() => setCommand(true)} />
    <main id="main">{children}</main>
    <Footer />
    {command && <CommandPalette close={() => setCommand(false)} dark={dark} setDark={setDark} />}
  </>;
}

function Header({ dark, setDark, menu, setMenu, openCommand }) {
  const links = [
    ["/", "HOME"], ["/projects", "PROJECTS"], ["/archive", "ARCHIVE"],
    ["/curriculum", "CV"], ["/about", "ABOUT"], ["/contact", "CONTACT"]
  ];
  return <header className="site-header">
    <div className="header-inner">
      <Link to="/" className="brand" aria-label="as-miranda, início">
        <span className="brand-mark">AS</span>
        <span className="brand-name">as-miranda</span>
      </Link>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {links.map(([href, label]) => <NavLink key={href} to={href} end={href === "/"} className={({isActive}) => isActive ? "active" : ""}>{label}</NavLink>)}
      </nav>
      <div className="header-tools">
        <button className="icon-button command-trigger" onClick={openCommand} aria-label="Abrir busca e comandos">
          <Search size={16}/><kbd>⌘K</kbd>
        </button>
        <button className="icon-button" onClick={() => setDark(v => !v)} aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}>
          {dark ? <Sun size={17}/> : <Moon size={17}/>}
        </button>
        <button className="mobile-menu" onClick={() => setMenu(v => !v)} aria-label="Abrir menu">
          {menu ? <X/> : <Menu/>}
        </button>
      </div>
    </div>
    {menu && <nav className="mobile-nav" aria-label="Navegação móvel">
      {links.map(([href, label]) => <NavLink key={href} to={href} end={href === "/"}>{label}</NavLink>)}
      <button onClick={openCommand}><Search size={15}/> SEARCH / COMMANDS</button>
    </nav>}
  </header>;
}

function Footer() {
  return <footer className="footer">
    <div className="footer-grid">
      <div><span className="eyebrow">AS-MIRANDA / SYSTEM</span><p>Um arquivo público de código, projetos, ideias e coisas que ainda estão tomando forma.</p></div>
      <div><span className="eyebrow">ELSEWHERE</span><a href={site.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a></div>
      <div><span className="eyebrow">CONTACT</span><a href={`mailto:${site.email}`}>{site.email}</a><span className="muted">{site.location}</span></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} ANA SOFIA DE MIRANDA</span><span>BUILT AS A LIVING SYSTEM / V2.0</span></div>
  </footer>;
}

function PageIntro({ number, label, title, text }) {
  return <div className="page-intro">
    <div className="section-index"><span>{number}</span><i></i><span>{label}</span></div>
    <h1>{title}</h1>
    {text && <p>{text}</p>}
  </div>;
}

function Home() {
  const featured = projects.filter(p => p.featured);
  return <div className="home">
    <section className="hero">
      <div className="hero-grid"></div>
      <div className="hero-topline"><span>PERSONAL DIGITAL SYSTEM</span><span>BH / BR</span><span className="live"><i/> SYSTEM ONLINE</span></div>
      <div className="hero-name">
        <div className="hero-as">AS-MIRANDA<span className="cursor-block"></span></div>
        <h1><span>ANA SOFIA</span><span>DE MIRANDA</span></h1>
      </div>
      <div className="hero-bottom">
        <p className="manifesto">Eu construo coisas, investigo coisas,<br/><em>escrevo coisas</em> e conecto ideias.</p>
        <div className="hero-index">{sections.map(([n, label, href]) => <Link key={n} to={href}><span>{n}</span>{label}<ArrowUpRight size={13}/></Link>)}</div>
      </div>
      <div className="hero-scroll"><ArrowDownRight size={15}/> EXPLORE THE ARCHIVE</div>
    </section>

    <section className="ticker" aria-label="Áreas"><div>CODE&nbsp;&nbsp; / &nbsp;&nbsp;RESEARCH&nbsp;&nbsp; / &nbsp;&nbsp;WRITING&nbsp;&nbsp; / &nbsp;&nbsp;LEADERSHIP&nbsp;&nbsp; / &nbsp;&nbsp;CREATIVE WORK&nbsp;&nbsp; / &nbsp;&nbsp;CODE&nbsp;&nbsp; / &nbsp;&nbsp;RESEARCH&nbsp;&nbsp; / &nbsp;&nbsp;WRITING&nbsp;&nbsp; / &nbsp;&nbsp;LEADERSHIP&nbsp;&nbsp; / &nbsp;&nbsp;CREATIVE WORK</div></section>

    <section className="section current-section">
      <div className="section-head"><SectionLabel n="01" label="CURRENTLY"/> <Link to="/about">OPEN CONTEXT <ArrowUpRight size={14}/></Link></div>
      <div className="current-grid">
        <div className="currently-copy"><h2>THE WORK IS<br/><span>IN MOTION.</span></h2><p>Um retrato do que está acontecendo agora. Conteúdo real entra aqui conforme o arquivo cresce.</p></div>
        <div className="activity-feed">
          {["DESENVOLVENDO", "ESTUDANDO", "ESCREVENDO", "PARTICIPANDO"].map((x,i) => <div className="activity" key={x}><span className="activity-no">0{i+1}</span><div><span className="activity-label">{x}</span><strong>[ADICIONAR ATIVIDADE ATUAL]</strong></div><span className="activity-status">{i === 0 ? "ACTIVE" : "QUEUED"}</span></div>)}
        </div>
      </div>
    </section>

    <section className="section projects-section">
      <div className="section-head"><SectionLabel n="02" label="SELECTED WORK"/><Link to="/projects">ALL PROJECTS <ArrowUpRight size={14}/></Link></div>
      <div className="project-mosaic">{featured.map((p,i) => <ProjectCard project={p} index={i} key={p.slug}/>)}</div>
    </section>

    <section className="manifesto-section">
      <span className="giant-number">03</span>
      <div><span className="eyebrow">THE POINT IS NOT THE LABEL.</span><h2>Code is one<br/><i>language.</i><br/>Not the whole story.</h2></div>
      <Link className="arrow-link" to="/about">READ ABOUT <ArrowUpRight/></Link>
    </section>
  </div>;
}

function SectionLabel({n,label}) { return <div className="section-label"><span>{n}</span><b>{label}</b></div>; }

function ProjectCard({project,index=0}) {
  return <Link to={`/projects/${project.slug}`} className={`project-card card-${index}`}>
    <div className="project-visual"><span className="visual-code">{String(index+1).padStart(2,"0")}</span><div className="visual-cross"></div><span className="visual-cat">{project.category}</span></div>
    <div className="project-meta"><span>{project.kicker}</span><span>{project.period}</span></div>
    <h3>{project.name}</h3>
    <p>{project.short}</p>
    <div className="project-foot"><span>{project.status}</span><ArrowUpRight size={17}/></div>
  </Link>;
}

function Projects() {
  const [filter,setFilter] = useState("all");
  const shown = projects.filter(p => filter === "all" || p.category === filter);
  return <div className="page-shell">
    <PageIntro number="02" label="PROJECTS" title={<>A WORKING<br/><em>ARCHIVE.</em></>} text="Projetos como objetos completos: contexto, processo, decisões, código, pessoas e o que veio depois."/>
    <section className="section">
      <FilterBar value={filter} setValue={setFilter}/>
      <div className="project-list">{shown.map((p,i)=><ProjectCard key={p.slug} project={p} index={i%4}/>)}</div>
      {shown.length === 0 && <EmptyState text="Nenhum projeto nessa categoria ainda."/>}
    </section>
  </div>;
}

function FilterBar({value,setValue}) {
  return <div className="filter-bar"><span><Filter size={14}/> FILTER</span><div>{categories.map(c=><button key={c} className={value===c?"selected":""} onClick={()=>setValue(c)}>{c.toUpperCase()}</button>)}</div></div>;
}

function ProjectDetail() {
  const {slug} = useParams();
  const project = projects.find(p=>p.slug===slug);
  if(!project) return <NotFound/>;
  return <div className="page-shell detail-shell">
    <Link className="back-link" to="/projects"><ArrowLeft size={15}/> BACK TO PROJECTS</Link>
    <div className="detail-hero"><div><span className="eyebrow">{project.kicker}</span><h1>{project.name}</h1><p>{project.description}</p></div><div className="detail-stamp"><span>STATUS</span><strong>{project.status}</strong><span>PERIOD</span><strong>{project.period}</strong></div></div>
    <div className="detail-grid">
      <aside className="detail-side"><span className="eyebrow">MY ROLE</span><p>{project.role}</p><span className="eyebrow">STACK</span><div className="tag-wrap">{project.stack.map(s=><span className="tag" key={s}>{s}</span>)}</div><span className="eyebrow">LINKS</span><span className="placeholder-link">{project.links.github}</span></aside>
      <article className="case-study">
        <CaseBlock title="01 / PROBLEM" body={project.problem}/><CaseBlock title="02 / SOLUTION" body={project.solution}/><CaseBlock title="03 / PROCESS" body={project.process}/>
        <div className="case-image"><span>IMAGE / MEDIA SLOT</span><small>[ADICIONAR IMAGEM]</small></div>
        <CaseBlock title="04 / RESULTS" body={project.results}/><CaseBlock title="05 / LEARNINGS" body={project.learning}/>
        <div className="next-project"><span>NEXT IN ARCHIVE</span><Link to={`/projects/${projects[(projects.indexOf(project)+1)%projects.length].slug}`}>{projects[(projects.indexOf(project)+1)%projects.length].name} <ArrowUpRight/></Link></div>
      </article>
    </div>
  </div>;
}
function CaseBlock({title,body}) { return <section className="case-block"><span className="eyebrow">{title}</span><p>{body}</p></section>; }

function Archive() {
  const [query,setQuery]=useState(""); const [filter,setFilter]=useState("ALL");
  const cats=["ALL","TECH","PROJECTS","WRITING","CREATIVE","STUDY","OPINION","NOTES"];
  const shown=posts.filter(p=>(filter==="ALL"||p.category===filter)&&(`${p.title} ${p.subtitle} ${p.excerpt} ${p.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase())));
  return <div className="page-shell">
    <PageIntro number="03" label="ARCHIVE / WRITING" title={<>THINGS<br/><em>WRITTEN.</em></>} text="Artigos, notas e fragmentos. Algumas coisas têm gaveta. Outras ainda estão procurando uma."/>
    <section className="section archive-controls"><label><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="SEARCH THE ARCHIVE"/></label><div>{cats.map(c=><button className={filter===c?"selected":""} onClick={()=>setFilter(c)} key={c}>{c}</button>)}</div></section>
    <section className="archive-list">{shown.map((p,i)=><Link className="archive-row" to={`/archive/${p.slug}`} key={p.slug}><span className="archive-no">{String(i+1).padStart(2,"0")}</span><div><span className="eyebrow">{p.category} / {p.date}</span><h2>{p.title}</h2><p>{p.excerpt}</p></div><span className="read-time">{p.read}</span><ArrowUpRight/></Link>)}</section>
    {shown.length===0&&<EmptyState text="Nada encontrado. Tente outra busca ou categoria."/>}
    <section className="fragments"><div><SectionLabel n="03B" label="FRAGMENTS"/><h2>SEM GAVETA,<br/><em>AINDA.</em></h2></div><div className="fragment-stack"><p>“[ADICIONAR FRAGMENTO OU TEXTO EXPERIMENTAL]”</p><span>FRAGMENT / 001</span><p>“[ADICIONAR OUTRO FRAGMENTO]”</p><span>FRAGMENT / 002</span></div></section>
  </div>;
}

function PostDetail() {
  const {slug}=useParams(); const post=posts.find(p=>p.slug===slug); if(!post)return <NotFound/>;
  return <div className="page-shell article-shell"><Link className="back-link" to="/archive"><ArrowLeft size={15}/> BACK TO ARCHIVE</Link><header className="article-head"><span className="eyebrow">{post.category} / {post.date} / {post.read}</span><h1>{post.title}</h1><p>{post.subtitle}</p></header><article className="article-body"><p className="dropcap">{post.excerpt}</p><p>[ADICIONAR CONTEÚDO COMPLETO DO ARTIGO AQUI. Esta estrutura já está preparada para receber texto longo, imagens, citações, código e links relacionados.]</p><div className="terminal"><div><Terminal size={14}/> AS-MIRANDA / NOTE</div><code>$ echo "write something worth keeping"</code><span>[ADICIONAR BLOCO DE CÓDIGO / TERMINAL]</span></div><p>[ADICIONAR MAIS CONTEÚDO]</p></article></div>;
}

function Curriculum() {
  const [mode,setMode]=useState("timeline");
  return <div className="page-shell"><PageIntro number="04" label="CURRICULUM" title={<>A RECORD OF<br/><em>THE WORK.</em></>} text="Um currículo que mostra trajetória, não apenas uma lista de cargos."/>
    <section className="cv-toolbar"><div><button className={mode==="timeline"?"selected":""} onClick={()=>setMode("timeline")}><Grid2X2 size={15}/> TIMELINE</button><button className={mode==="classic"?"selected":""} onClick={()=>setMode("classic")}><FileText size={15}/> CLASSIC</button></div><a className="button-primary" href="/as-miranda/files/CV.pdf" download><FileText size={15}/> DOWNLOAD PDF</a></section>
    {mode==="timeline"?<TimelineCV/>:<ClassicCV/>}
  </div>;
}
function TimelineCV() {
 return <section className="cv-grid"><div><CvSection title="EDUCATION"><Timeline items={education}/></CvSection><CvSection title="EXPERIENCE"><Timeline items={experience}/></CvSection></div><div><CvSection title="TECHNOLOGIES"><SkillCloud items={[...skills.software,...skills.tools]}/></CvSection><CvSection title="LANGUAGES"><SkillCloud items={skills.languages}/></CvSection><CvSection title="LEADERSHIP"><p className="placeholder-copy">[ADICIONAR EXPERIÊNCIAS DE LIDERANÇA]</p></CvSection><CvSection title="CERTIFICATIONS"><p className="placeholder-copy">[ADICIONAR CERTIFICAÇÕES]</p></CvSection></div></section>;
}
function Timeline({items}){return <div className="timeline">{items.map((x,i)=><div className="timeline-item" key={i}><span>{x.period}</span><div><h3>{x.institution}</h3><strong>{x.role}</strong><p>{x.description}</p>{x.technologies&&<div className="tag-wrap">{x.technologies.map(t=><span className="tag" key={t}>{t}</span>)}</div>}</div></div>)}</div>}
function CvSection({title,children}){return <section className="cv-section"><span className="eyebrow">{title}</span>{children}</section>}
function SkillCloud({items}){return <div className="skill-cloud">{items.map(x=><span key={x}>{x}</span>)}</div>}
function ClassicCV(){return <section className="classic-cv"><div className="classic-head"><div><h2>ANA SOFIA<br/>DE MIRANDA</h2><span>AS-MIRANDA</span></div><p>DESENVOLVIMENTO · PROJETOS · ESCRITA · LIDERANÇA</p></div><CvSection title="PROFILE"><p>[ADICIONAR RESUMO PROFISSIONAL]</p></CvSection><CvSection title="EXPERIENCE"><Timeline items={experience}/></CvSection><CvSection title="EDUCATION"><Timeline items={education}/></CvSection><div className="classic-columns"><CvSection title="TECH"><SkillCloud items={skills.software}/></CvSection><CvSection title="LANGUAGES"><SkillCloud items={skills.languages}/></CvSection></div></section>}

function About() {
 return <div className="page-shell"><PageIntro number="05" label="ABOUT" title={<>MORE THAN<br/><em>THE JOB TITLE.</em></>} text="Uma pessoa é um sistema grande demais para caber em uma bio de três linhas."/>
 <section className="about-grid"><div className="about-statement"><span className="eyebrow">WHO</span><h2>ANA SOFIA<br/><em>DE MIRANDA</em></h2><p>Desenvolvimento de software e web, tecnologia, projetos multidisciplinares, escrita, criatividade e liderança.</p></div><div className="about-facts"><AboutBlock title="WHAT I BUILD" body="Sistemas web, ferramentas, experiências digitais e projetos que cruzam tecnologia com outros campos."/><AboutBlock title="WHAT I STUDY" body="[ADICIONAR ÁREAS DE ESTUDO ATUAIS]"/><AboutBlock title="WHAT I WRITE" body="Textos, notas, jornalismo, ficção, fragmentos e registros de processo."/><AboutBlock title="WHAT I CARE ABOUT" body="[ADICIONAR TEMAS, VALORES OU QUESTÕES QUE IMPORTAM]"/><AboutBlock title="CURRENTLY" body="[ADICIONAR O QUE ESTÁ ACONTECENDO AGORA]"/><AboutBlock title="ELSEWHERE" body={<span className="inline-links"><a href={site.github} target="_blank" rel="noreferrer">GitHub</a><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></span>}/></div></section>
 <section className="quote-wall"><span>“</span><p>[ADICIONAR UMA FRASE AUTORAL QUE REPRESENTE O SITE]</p></section></div>;
}
function AboutBlock({title,body}){return <div className="about-block"><span className="eyebrow">{title}</span><p>{body}</p></div>}

function Contact() {
 const [sent,setSent]=useState(false); const [copied,setCopied]=useState(false);
 const copy=async()=>{await navigator.clipboard?.writeText(site.email);setCopied(true);setTimeout(()=>setCopied(false),1800)};
 return <div className="page-shell contact-shell"><PageIntro number="06" label="CONTACT" title={<>OPEN A<br/><em>CHANNEL.</em></>} text="Para projetos, colaboração, conversa ou simplesmente uma mensagem. O formulário abaixo é uma interface pronta para conectar a um serviço de envio."/>
 <div className="contact-grid"><div className="contact-info"><span className="eyebrow">DIRECT</span><a className="contact-email" href={`mailto:${site.email}`}>{site.email}<ArrowUpRight/></a><button className="copy-button" onClick={copy}>{copied?<Check size={15}/>:<Copy size={15}/>} {copied?"COPIED":"COPY EMAIL"}</button><div className="contact-links"><a href={site.github} target="_blank" rel="noreferrer"><Github/> GITHUB <ArrowUpRight/></a><a href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin/> LINKEDIN <ArrowUpRight/></a></div><div className="contact-status"><i/> AVAILABLE FOR [ADICIONAR CONTEXTO]</div></div>
 <div className="contact-form-wrap">{sent?<div className="success"><Check size={30}/><span>TRANSMISSION COMPLETE</span><p>O formulário foi validado localmente. Conecte um serviço de formulário para envio real.</p><button onClick={()=>setSent(false)}>SEND ANOTHER</button></div>:<form onSubmit={e=>{e.preventDefault();setSent(true)}}><Field label="NAME" name="name"/><Field label="EMAIL" name="email" type="email"/><Field label="SUBJECT" name="subject"/><label className="field"><span>MESSAGE</span><textarea name="message" required placeholder="[ADICIONAR MENSAGEM]"/></label><button className="send-button" type="submit"><Send size={16}/> TRANSMIT <ArrowUpRight size={16}/></button></form>}</div></div></div>;
}
function Field({label,name,type="text"}){return <label className="field"><span>{label}</span><input name={name} type={type} required placeholder="[ADICIONAR]"/></label>}

function CommandPalette({close,dark,setDark}) {
 const nav=useNavigate(); const [q,setQ]=useState("");
 const commands=[["GO HOME","/",MoveUpRight],["PROJECTS","/projects",BriefcaseBusiness],["ARCHIVE","/archive",BookOpen],["CURRICULUM","/curriculum",FileText],["ABOUT","/about",Clipboard],["CONTACT","/contact",Mail]];
 const results=commands.filter(([x])=>x.toLowerCase().includes(q.toLowerCase()));
 return <div className="command-overlay" onMouseDown={close}><div className="command-box" onMouseDown={e=>e.stopPropagation()}><div className="command-search"><Search/><input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="SEARCH / COMMAND"/><kbd>ESC</kbd></div><div className="command-results">{results.map(([label,path,Icon])=><button key={path} onClick={()=>{nav(path);close()}}><Icon size={16}/><span>{label}</span><ArrowUpRight size={13}/></button>)}<button onClick={()=>setDark(v=>!v)}>{dark?<Sun/>:<Moon/>}<span>TOGGLE THEME</span><span className="muted">{dark?"LIGHT":"DARK"}</span></button></div><div className="command-footer"><span><Keyboard size={13}/> navigate</span><span><Command size={13}/> K</span></div></div></div>;
}

function EmptyState({text}){return <div className="empty-state"><Terminal size={18}/><p>{text}</p></div>}
function NotFound(){return <div className="page-shell"><PageIntro number="404" label="NOT FOUND" title={<>WRONG<br/><em>FOLDER.</em></>} text="A rota existe na imaginação, mas não neste sistema."/><Link className="button-primary" to="/">RETURN HOME</Link></div>}

function App(){
 const [dark,setDark]=useTheme();
 return <HashRouter><Layout dark={dark} setDark={setDark}><Routes>
  <Route path="/" element={<Home/>}/><Route path="/projects" element={<Projects/>}/><Route path="/projects/:slug" element={<ProjectDetail/>}/>
  <Route path="/archive" element={<Archive/>}/><Route path="/archive/:slug" element={<PostDetail/>}/><Route path="/curriculum" element={<Curriculum/>}/>
  <Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/>
 </Routes></Layout></HashRouter>;
}
export default App;
export { Home, Projects, ProjectDetail, Archive, PostDetail, Curriculum, About, Contact, NotFound };
