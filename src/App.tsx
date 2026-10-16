import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Linkedin, X } from 'lucide-react'
import orangeCharacter from '../graphics/Stylized Orange Streetwear Character Cutout.png'
import blueCharacter from '../graphics/Blue Turban Graffiti Streetwear Character.png'
import greenCharacter from '../graphics/Green Turban Streetwear Maverick.png'
import mustardCharacter from '../graphics/Mustard Streetwear Character With Graffiti Details.png'
import pinkCharacter from '../graphics/Pink Graffiti Streetwear Streamer.png'
import simarPhoto from '../graphics/simar-avatar.jpg'

const TechStack = lazy(() => import('./components/TechStack'))

type Item = { label: string; detail?: string; badge?: string; link?: string }
type Section = { title: string; type: 'tags' | 'list' | 'metrics' | 'cards'; items: Item[] }
type PortfolioSlide = { id: string; category: string; giantTitle: string; tagline: string; description: string; ctaText: string; bg: string; panel: string; characterImg: string; accentBadge: string; drawerContent: { headline: string; subheading: string; sections: Section[] } }

const PORTFOLIO_SLIDES: PortfolioSlide[] = [
  { id: 'hero', category: '01 / ABOUT ME', giantTitle: 'SIMAR', tagline: 'SIMAR SABHARWAL — FULL-STACK DEVELOPER', description: 'I build scalable web applications with clean architecture and extreme performance, combining full-stack development with creative design thinking.', ctaText: 'ABOUT ME', bg: '#F4845F', panel: '#F79B7F', characterImg: orangeCharacter, accentBadge: 'FULL-STACK UI ARCHITECT · CREATIVE DESIGNER', drawerContent: { headline: 'About Simar Sabharwal', subheading: 'Architecting seamless digital worlds with thoughtful engineering and creative design.', sections: [{ title: 'Profile', type: 'list', items: [{ label: 'Focus', detail: 'Full-stack development, UI architecture, DevOps, and design' }, { label: 'Approach', detail: 'Scalable web applications, clean architecture, and extreme performance' }, { label: 'Currently', detail: 'Pursuing a Bachelor of Computer Applications (BCA) at BVIMR, Delhi' }] }, { title: 'Areas of Interest', type: 'tags', items: ['Web Development', 'Software Engineering', 'Data Structures', 'Full-Stack Architecture', 'Creative Design'].map(label => ({ label })) }] } },
  { id: 'projects', category: '02 / PROJECTS', giantTitle: 'PROJECTS', tagline: 'SELECTED PROJECTS & SYSTEMS', description: 'A curated showcase of engineering work spanning local AI, offline RAG pipelines, healthcare platforms, and full-stack architectures.', ctaText: 'PROJECTS', bg: '#F4BE59', panel: '#F7D487', characterImg: mustardCharacter, accentBadge: 'LOCAL AI · FULL-STACK · PRIVACY-FIRST', drawerContent: { headline: 'Selected Projects', subheading: 'A collection of engineering projects focused on local AI pipelines, healthcare security, and full-stack development.', sections: [{ title: 'Featured Projects', type: 'cards', items: [{ label: 'Local Codebase Explainer', detail: 'A local-first tool for exploring unfamiliar codebases. Safely scans files, creates isolated per-project vector indexes, and answers questions using Ollama with verifiable source references.', badge: 'PYTHON · OLLAMA', link: 'https://github.com/SimarSabharwal/local-codebase-explainer' }, { label: 'Health Passport', detail: 'Aadhaar-verified digital medical record platform featuring zero raw Aadhaar persistence, self-authoritative consent ledger, and application-layer PHI encryption.', badge: 'UNDER DEVELOPMENT', link: 'https://github.com/SimarSabharwal/healthpassport' }, { label: 'Private Meeting Transcript Assistant', detail: 'Privacy-focused meeting transcription and summarization assistant designed to process confidential discussions locally without leaking sensitive data.', badge: 'LOCAL AI · SPEECH', link: 'https://github.com/SimarSabharwal/private-meeting-transcript-assistant' }, { label: 'Local Document Chat', detail: 'Privacy-first conversational AI interface for interacting with and querying personal documents and PDFs locally using embedded LLMs and vector search.', badge: 'LOCAL RAG · LLM', link: 'https://github.com/SimarSabharwal/local-document-chat' }] }] } },
  { id: 'initiative', category: '03 / INITIATIVE', giantTitle: 'INITIATIVE', tagline: 'LEADERSHIP & INITIATIVE', description: 'Leading student communities and sharing the work of BVIMR’s technical society and startup incubation cell.', ctaText: 'INITIATIVE', bg: '#6BBF7A', panel: '#85CC92', characterImg: greenCharacter, accentBadge: 'LEADERSHIP · COMMUNITY · COMMUNICATION', drawerContent: { headline: 'Leadership & Initiative', subheading: 'Contributing to technical and entrepreneurial communities at BVIMR.', sections: [{ title: 'Community & Leadership', type: 'cards', items: [{ label: 'QuantaLoop — Technical Society of BVIMR', detail: 'Vice President · September 2025 – Present.', badge: 'VICE PRESIDENT' }, { label: 'Nexel Incubation Cell — BVIMR', detail: 'Social Media Head, supporting communication and visibility for the incubation cell.', badge: 'SOCIAL MEDIA HEAD' }] }] } },
  { id: 'skills', category: '04 / SKILLS & TOOLS', giantTitle: 'TECH STACK', tagline: 'TECH STACK & TOOLS I WIELD', description: 'From frontend interfaces and backend APIs to databases, machine learning, local LLM workflows, and video production.', ctaText: 'SKILLS', bg: '#E882B4', panel: '#ED9DC4', characterImg: pinkCharacter, accentBadge: 'FULL-STACK · DEVOPS · LOCAL LLMs', drawerContent: { headline: 'Tech Stack & Tools I Wield', subheading: 'A growing toolkit spanning software engineering, infrastructure, and creative production.', sections: [{ title: 'Skills', type: 'tags', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'React', 'FastAPI', 'Supabase', 'SQL', 'Machine Learning', 'Local LLM Manipulation', 'Video Editing', 'Marketing'].map(label => ({ label })) }, { title: 'Tools', type: 'tags', items: ['Git / GitHub', 'Vercel', 'Netlify', 'VS Code', 'DaVinci Resolve', 'Canva', 'Affinity Designer', 'Figma', 'Supabase', 'Postman'].map(label => ({ label })) }] } },
  { id: 'connect', category: '05 / EDUCATION & CONTACT', giantTitle: 'JOURNEY', tagline: "ACADEMIC JOURNEY & LET'S CONNECT", description: 'Pursuing a BCA at BVIMR while building a strong foundation in software engineering, data structures, and modern web development.', ctaText: "LET'S TALK", bg: '#6EB5FF', panel: '#8DC4FF', characterImg: blueCharacter, accentBadge: 'BHARATI VIDYAPEETH · BVIMR', drawerContent: { headline: 'Education & Let’s Connect', subheading: 'Currently studying at BVIMR and open to bringing new ideas to life.', sections: [{ title: 'Education', type: 'list', items: [{ label: 'Bachelor of Computer Applications (BCA)', detail: 'Bharati Vidyapeeth Institute of Management and Research (BVIMR), Delhi · 2025 – Present', badge: 'IN PROGRESS' }, { label: 'Senior Secondary (12th Grade)', detail: 'K.R. Mangalam World School, Vikaspuri · Completed', badge: 'COMPLETED' }] }, { title: 'Contact', type: 'cards', items: [{ label: 'Email', detail: 's.simarsinghsabharwal@gmail.com', badge: 'EMAIL ME', link: 'mailto:s.simarsinghsabharwal@gmail.com' }, { label: 'LinkedIn', detail: 'linkedin.com/in/simar-sabharwal-', badge: 'CONNECT', link: 'https://www.linkedin.com/in/simar-sabharwal-' }, { label: 'Phone', detail: '+91 92500 75252', badge: 'CALL ME', link: 'tel:+919250075252' }] }] } },
]

const roleFor = (index: number, active: number, count: number) => {
  const offset = (index - active + count) % count
  const roles = count === 5
    ? ['center', 'right', 'back-right', 'back-left', 'left']
    : ['center', 'right', 'back', 'left']
  return roles[offset]
}

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [activeDrawer, setActiveDrawer] = useState(false)
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const slide = PORTFOLIO_SLIDES[activeIndex]

  useEffect(() => { PORTFOLIO_SLIDES.forEach(({ characterImg }) => { const image = new Image(); image.src = characterImg }) }, [])
  const navigate = useCallback((dir: 'next' | 'prev') => {
    if (isAnimating || activeDrawer) return
    setIsAnimating(true)
    setActiveIndex(index => (index + (dir === 'next' ? 1 : PORTFOLIO_SLIDES.length - 1)) % PORTFOLIO_SLIDES.length)
    window.setTimeout(() => setIsAnimating(false), 650)
  }, [isAnimating, activeDrawer])
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveDrawer(false)
      if (activeDrawer) return
      if (event.key === 'ArrowRight') navigate('next')
      if (event.key === 'ArrowLeft') navigate('prev')
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [navigate, activeDrawer])

  return <main className="viewport" style={{ backgroundColor: slide.bg, '--slide-bg': slide.bg, '--slide-panel': slide.panel } as React.CSSProperties} onTouchStart={e => { touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY } }} onTouchEnd={e => { if (!touchStart.current || activeDrawer) return; const deltaX = e.changedTouches[0].clientX - touchStart.current.x; const deltaY = e.changedTouches[0].clientY - touchStart.current.y; if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) navigate(deltaX < 0 ? 'next' : 'prev'); touchStart.current = null }}>
    <div className="grain" aria-hidden="true" />
    <header className="topbar">
      <div className="brand"><span>SIMAR SABHARWAL</span><small>PORTFOLIO 2026</small></div>
      <div className="counter">{String(activeIndex + 1).padStart(2, '0')}<i />{String(PORTFOLIO_SLIDES.length).padStart(2, '0')}</div>
      <div className="category">{slide.category}</div>
    </header>

    <div key={slide.id} className={`ghost-title${slide.giantTitle.length > 8 ? ' ghost-title-long' : ''}`} aria-hidden="true">{slide.giantTitle}</div>
    <div className="carousel" aria-label="Portfolio character carousel">
      {PORTFOLIO_SLIDES.map((item, index) => <div key={item.id} className={`figure figure-${roleFor(index, activeIndex, PORTFOLIO_SLIDES.length)}`} style={{ '--panel': item.panel } as React.CSSProperties} aria-hidden={index !== activeIndex}>
        <div className="figure-halo" /><img src={item.characterImg} alt={index === activeIndex ? 'Simar Sabharwal portfolio visual' : ''} draggable={false} />
      </div>)}
    </div>

    <section className="intro" key={`${slide.id}-intro`}>
      <div className="intro-badge-row">
        {slide.id === 'hero' && (
          <img src={simarPhoto} alt="Simar Sabharwal" className="intro-avatar" />
        )}
        <div className="availability"><span className="availability-dot" />{slide.accentBadge}</div>
      </div>
      <h1>{slide.tagline}</h1>
      <p>{slide.description}</p>
      <div className="arrows"><button aria-label="Previous slide" onClick={() => navigate('prev')} disabled={isAnimating}><ArrowLeft /></button><button aria-label="Next slide" onClick={() => navigate('next')} disabled={isAnimating}><ArrowRight /></button></div>
    </section>

    <button className="cta" onClick={() => setActiveDrawer(true)} aria-label={`Open ${slide.ctaText} details`}><span>{slide.ctaText}</span><ArrowUpRight /></button>
    <div className="footprint" onTouchStart={e => e.stopPropagation()} onTouchEnd={e => e.stopPropagation()}><span className="live"><i /></span><span className="footprint-label">DIGITAL FOOTPRINT</span><a href="https://github.com/SimarSabharwal" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub: SimarSabharwal"><Github size={16} /></a><a href="https://www.linkedin.com/in/simar-sabharwal-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn: Simar Sabharwal"><Linkedin size={16} /></a></div>

    <div className={`drawer-wrap ${activeDrawer ? 'is-open' : ''}`} aria-hidden={!activeDrawer}>
      <button className="scrim" aria-label="Close details" onClick={() => setActiveDrawer(false)} tabIndex={activeDrawer ? 0 : -1} />
      <aside className="drawer" style={{ '--slide-bg': slide.bg, '--slide-panel': slide.panel } as React.CSSProperties} role="dialog" aria-modal="true" aria-labelledby="drawer-title">
        <div className="drawer-top"><span>{slide.category}</span><button onClick={() => setActiveDrawer(false)} aria-label="Close details"><X size={24} /></button></div>
        <div className="drawer-scroll">
          <div className="drawer-header-content">
            {slide.id === 'hero' && (
              <img src={simarPhoto} alt="Simar Sabharwal" className="drawer-avatar" />
            )}
            <div>
              <div className="drawer-kicker">PORTFOLIO / OVERVIEW</div>
              <h2 id="drawer-title">{slide.drawerContent.headline}</h2>
            </div>
          </div>
          <p className="drawer-subheading">{slide.drawerContent.subheading}</p>
          {activeDrawer && slide.id === 'skills' && <Suspense fallback={<div className="tech-stack-loading" aria-live="polite">Preparing the tech stack…</div>}><TechStack /></Suspense>}
          {slide.drawerContent.sections.map(section => <section className="detail-section" key={section.title}><h3>{section.title}</h3>
            {section.type === 'tags' ? <div className="tag-list">{section.items.map(item => <span className="tag" key={item.label}>{item.label}</span>)}</div> : section.type === 'metrics' ? <div className="metrics">{section.items.map(item => <div className="metric" key={item.label}><strong>{item.detail}</strong><span>{item.label}</span></div>)}</div> : <div className={section.type === 'cards' ? 'card-list' : 'list-items'}>{section.items.map(item => { const content = <><div className="item-heading"><strong>{item.label}</strong>{item.badge && <span className="item-badge">{item.badge}</span>}</div>{item.detail && <p>{item.detail}</p>}</>; return item.link ? <a className="detail-card" key={item.label} href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{content}{item.link.startsWith('http') && <ArrowUpRight size={16} />}</a> : <div className="detail-card" key={item.label}>{content}</div> })}</div>}
          </section>)}
        </div>
      </aside>
    </div>
    <span className="edge-index">SLIDE {String(activeIndex + 1).padStart(2, '0')} <i /> {String(PORTFOLIO_SLIDES.length).padStart(2, '0')}</span>
  </main>
}
