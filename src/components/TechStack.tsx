type SkillLogo = {
  name: string
  src: string
  alt: string
  gradient: string
}

const SKILL_LOGOS: SkillLogo[] = [
  {
    name: 'React',
    src: 'https://svgl.app/library/react_dark.svg',
    alt: 'React',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #075985 100%)',
  },
  {
    name: 'TypeScript',
    src: 'https://svgl.app/library/typescript.svg',
    alt: 'TypeScript',
    gradient: 'linear-gradient(135deg, #3178c6 0%, #2563eb 50%, #1d4ed8 100%)',
  },
  {
    name: 'JavaScript',
    src: 'https://svgl.app/library/javascript.svg',
    alt: 'JavaScript',
    gradient: 'linear-gradient(135deg, #facc15 0%, #eab308 50%, #ca8a04 100%)',
  },
  {
    name: 'Python',
    src: 'https://svgl.app/library/python.svg',
    alt: 'Python',
    gradient: 'linear-gradient(135deg, #3776ab 0%, #ffd43b 50%, #f59e0b 100%)',
  },
  {
    name: 'Node.js',
    src: 'https://svgl.app/library/nodejs.svg',
    alt: 'Node.js',
    gradient: 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)',
  },
  {
    name: 'FastAPI',
    src: 'https://svgl.app/library/fastapi.svg',
    alt: 'FastAPI',
    gradient: 'linear-gradient(135deg, #059669 0%, #0d9488 50%, #0f766e 100%)',
  },
  {
    name: 'Supabase',
    src: 'https://svgl.app/library/supabase.svg',
    alt: 'Supabase',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
  },
  {
    name: 'PostgreSQL',
    src: 'https://svgl.app/library/postgresql.svg',
    alt: 'PostgreSQL',
    gradient: 'linear-gradient(135deg, #336791 0%, #2563eb 50%, #1d4ed8 100%)',
  },
  {
    name: 'Tailwind CSS',
    src: 'https://svgl.app/library/tailwindcss.svg',
    alt: 'Tailwind CSS',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
  },
  {
    name: 'Docker',
    src: 'https://svgl.app/library/docker.svg',
    alt: 'Docker',
    gradient: 'linear-gradient(135deg, #2496ed 0%, #1d63ed 50%, #1e40af 100%)',
  },
  {
    name: 'Git',
    src: 'https://svgl.app/library/git.svg',
    alt: 'Git',
    gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%)',
  },
  {
    name: 'GitHub',
    src: 'https://svgl.app/library/github_dark.svg',
    alt: 'GitHub',
    gradient: 'linear-gradient(135deg, #475569 0%, #334155 50%, #1e293b 100%)',
  },
  {
    name: 'HTML5',
    src: 'https://svgl.app/library/html5.svg',
    alt: 'HTML5',
    gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%)',
  },
  {
    name: 'CSS3',
    src: 'https://svgl.app/library/css.svg',
    alt: 'CSS3',
    gradient: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)',
  },
  {
    name: 'Figma',
    src: 'https://svgl.app/library/figma.svg',
    alt: 'Figma',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%)',
  },
  {
    name: 'Postman',
    src: 'https://svgl.app/library/postman.svg',
    alt: 'Postman',
    gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%)',
  },
  {
    name: 'VS Code',
    src: 'https://svgl.app/library/vscode.svg',
    alt: 'VS Code',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #075985 100%)',
  },
]

export default function TechStack() {
  return (
    <div className="w-full my-4 select-none">
      <div className="w-full overflow-hidden marquee-mask py-2">
        <div className="marquee-track flex gap-3.5 md:gap-5 py-2">
          {[...SKILL_LOGOS, ...SKILL_LOGOS].map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="group relative h-18 w-32 md:h-22 md:w-38 shrink-0 flex flex-col items-center justify-center rounded-full bg-white/95 border border-slate-200/60 shadow-sm hover:border-slate-300 active:scale-95 transition-all overflow-hidden cursor-pointer touch-manipulation"
            >
              <div
                className="absolute inset-0 scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-active:scale-100 group-active:opacity-100 transition-all duration-300 pointer-events-none rounded-full"
                style={{ background: logo.gradient }}
              />
              <img
                src={logo.src}
                alt={logo.alt}
                className="relative z-10 h-6 md:h-7.5 w-auto max-w-[55px] md:max-w-[65px] object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert group-active:brightness-0 group-active:invert select-none"
                loading="lazy"
              />
              <span className="relative z-10 text-[9px] md:text-[10.5px] font-semibold tracking-wide text-slate-700 mt-1 transition-colors group-hover:text-white group-active:text-white select-none">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
