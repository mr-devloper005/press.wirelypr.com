'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const { session, logout } = useEditableLocalAuthSession()
  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Search', href: '/search' },
    { label: 'Login', href: '/login' },
  ]

  if (session) {
    return (
      <footer className="bg-white px-4 py-10 text-center">
        <button type="button" onClick={logout} className="rounded-full border-2 border-[var(--slot4-dark-bg)] px-8 py-3 text-sm font-black text-[var(--slot4-dark-bg)] transition hover:bg-[var(--slot4-dark-bg)] hover:text-white">
          Logout
        </button>
      </footer>
    )
  }

  return (
    <footer className="bg-white text-[var(--slot4-page-text)]">
      <section className="mx-auto max-w-[1320px] px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <div className="rounded-[1.5rem] bg-[#eef1f4] px-6 py-14 text-center sm:px-10 lg:py-20">
          <span className="contentful-logo-mark mx-auto" aria-hidden="true" />
          <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.045em] sm:text-6xl">
            Your announcement should travel well, not wait. Let&apos;s talk.
          </h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 text-left md:grid-cols-2">
            {[
              ['Plan a release', 'Shape a cleaner distribution path for launches, updates, and public announcements.'],
              ['Work with a partner', 'Coordinate content, visibility, and follow-up through a polished public experience.'],
            ].map(([title, description]) => (
              <Link key={title} href="/contact" className="group rounded-[1.2rem] bg-white p-8 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(40,42,49,.10)]">
                <h3 className="text-2xl font-black tracking-[-0.035em]">{title}</h3>
                <p className="mt-3 max-w-md text-base leading-7 text-[var(--slot4-muted-text)]">{description}</p>
                <span className="mt-8 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--slot4-dark-bg)] text-white transition group-hover:bg-[var(--slot4-accent)]"><ArrowRight className="h-5 w-5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-6 px-4 pb-16 sm:px-6 md:flex-row lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-2xl font-black tracking-[-0.05em]">
          <span className="contentful-logo-mark" aria-hidden="true" />
          <span>{SITE_CONFIG.name}</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-black text-[var(--slot4-muted-text)] transition hover:text-[var(--slot4-accent)]">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
