import Link from 'next/link'
import { ArrowRight, Globe2, Layers, RadioTower, ShieldCheck } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'

export default function AboutPage() {
  const values = [
    { icon: RadioTower, title: 'Distribution-first', description: 'Announcements are shaped for visibility, clarity, and repeat discovery across public audiences.' },
    { icon: Layers, title: 'Organized content', description: 'Categories, search, and related resources keep every release connected to the broader story.' },
    { icon: ShieldCheck, title: 'Reputation aware', description: 'Clean public pages help brands maintain a consistent, trustworthy media presence.' },
  ]

  return (
    <EditableSiteShell>
      <main className="bg-white text-[var(--slot4-page-text)]">
        <section className={dc.shell.section}>
          <div className="grid gap-12 rounded-[1.35rem] bg-[var(--slot4-green)] px-6 py-16 sm:px-12 lg:grid-cols-[1.05fr_.75fr] lg:px-16 lg:py-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.04] tracking-[-0.055em] sm:text-7xl">
                Media distribution built for cleaner public momentum.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8">{pagesContent.about.description}</p>
              <Link href="/search" className={`${dc.button.primary} mt-9`}>Explore distribution <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="rounded-[1.25rem] bg-white/70 p-7 shadow-[0_24px_70px_rgba(49,100,224,.12)]">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d7e7ff] text-[var(--slot4-accent)]"><Globe2 className="h-7 w-7" /></span>
              <h2 className="mt-10 text-3xl font-black tracking-[-0.04em]">A public hub for releases, coverage, and updates.</h2>
              <p className="mt-5 text-base leading-8 text-[var(--slot4-muted-text)]">The site keeps information easy to scan, easy to search, and easy to share without changing how content is managed behind the scenes.</p>
            </div>
          </div>
        </section>

        <section className={`${dc.shell.section} py-20`}>
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">About {SITE_CONFIG.name}</p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">A calmer way to publish information that needs to travel.</h2>
            </div>
            <div className="grid gap-6">
              {pagesContent.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-9 text-[var(--slot4-muted-text)]">{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <div key={value.title} className="rounded-[1.2rem] border border-[#d7dde5] bg-white p-7 shadow-[0_14px_44px_rgba(40,42,49,.06)]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d7e7ff] text-[var(--slot4-accent)]"><value.icon className="h-6 w-6" /></span>
                  <span className="text-sm font-black text-[var(--slot4-soft-muted-text)]">0{index + 1}</span>
                </div>
                <h3 className="mt-10 text-2xl font-black tracking-[-0.035em]">{value.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--slot4-muted-text)]">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
