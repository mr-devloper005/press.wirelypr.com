'use client'

import { FileText, Mail, Megaphone, RadioTower } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'

const desks = [
  { icon: Megaphone, title: 'Release planning', body: 'Share launch details, timing, target audiences, and the public result you want to create.' },
  { icon: RadioTower, title: 'Distribution support', body: 'Coordinate media reach, resource pages, syndication ideas, and follow-up visibility.' },
  { icon: FileText, title: 'Content updates', body: 'Send corrections, new details, supporting links, and publication questions.' },
  { icon: Mail, title: 'General support', body: 'Get help with account access, publishing flow, or site-related requests.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white text-[var(--slot4-page-text)]">
        <section className={dc.shell.section}>
          <div className="rounded-[1.35rem] bg-[#eef1f4] px-6 py-16 sm:px-12 lg:px-16 lg:py-20">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[1.05] tracking-[-0.055em] sm:text-7xl">{pagesContent.contact.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--slot4-muted-text)]">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className={`${dc.shell.section} py-16 lg:py-20`}>
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <aside className="grid gap-4">
              {desks.map((desk, index) => (
                <div key={desk.title} className="rounded-[1.15rem] border border-[#d7dde5] bg-white p-6 shadow-[0_12px_38px_rgba(40,42,49,.05)]">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d7e7ff] text-[var(--slot4-accent)]"><desk.icon className="h-5 w-5" /></span>
                    <span className="text-xs font-black text-[var(--slot4-soft-muted-text)]">0{index + 1}</span>
                  </div>
                  <h2 className="mt-6 text-2xl font-black tracking-[-0.035em]">{desk.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{desk.body}</p>
                </div>
              ))}
            </aside>
            <div className="rounded-[1.25rem] border border-[#d7dde5] bg-white p-6 shadow-[0_18px_54px_rgba(40,42,49,.08)] sm:p-10 lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Send a message</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.045em]">{pagesContent.contact.formTitle}</h2>
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
