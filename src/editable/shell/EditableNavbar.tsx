'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, UserCircle, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const nav = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Search', href: '/search' },
  ]

  const displayName = session?.name || session?.email || 'Member'

  return (
    <header className="sticky top-0 z-50 bg-white text-[var(--slot4-page-text)] shadow-[0_1px_0_rgba(40,42,49,.08)]">
      <div className="bg-[var(--slot4-accent)] px-4 py-4 text-center text-sm font-black text-white">
        Gets a calmer command center. Read more →
      </div>
      <div className="mx-auto grid min-h-[74px] max-w-[1320px] grid-cols-[auto_1fr_auto] items-center gap-5 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center border border-black/25 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link href="/" className="flex items-center gap-2 text-2xl font-black tracking-[-0.05em]">
         
            <img src="/favicon.png" alt={`${SITE_CONFIG.name} logo`} className="h-15 w-15 rounded-full" />
            <span>{SITE_CONFIG.name}</span>
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-8 text-sm font-medium lg:flex">
          {nav.map((item) => <Link key={item.label} href={item.href} className="transition hover:text-[var(--slot4-accent)]">{item.label}</Link>)}
        </nav>

        <div className="flex items-center justify-end gap-5">
          <Link href="/search" className="hidden transition hover:text-[var(--slot4-accent)] sm:inline-flex" aria-label="Search"><Search className="h-5 w-5" /></Link>
          {session ? (
            <>
              <span className="hidden max-w-[150px] items-center gap-2 truncate text-sm font-black sm:inline-flex">
                <UserCircle className="h-5 w-5 shrink-0" />
                {displayName}
              </span>
              <Link href="/create" className="hidden text-sm font-black sm:block">Create</Link>
              <button type="button" onClick={logout} className="hidden text-sm font-black sm:block">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden text-sm font-black sm:inline-flex">Log in</Link>
              <Link href="/signup" className="rounded-full border-2 border-[var(--slot4-dark-bg)] px-5 py-2.5 text-sm font-black transition hover:bg-[var(--slot4-dark-bg)] hover:text-white">Sign in</Link>
            </>
          )}
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/10 bg-white px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex rounded-full border border-black/15 bg-[#f6f8fb] px-4">
            <Search className="mt-3.5 h-4 w-4 text-black/50" />
            <input name="q" type="search" placeholder="Search updates" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none" />
          </form>
          <div className="grid gap-2">
            {session ? <div className="rounded-2xl bg-[#eef1f4] px-4 py-3 text-sm font-black">Signed in as {displayName}</div> : null}
            {[{ label: 'Home', href: '/' }, ...nav, ...(session ? [{ label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign in', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl bg-[#f6f8fb] px-4 py-3 text-sm font-black">{item.label}</Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-2xl bg-[#f6f8fb] px-4 py-3 text-left text-sm font-black">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
