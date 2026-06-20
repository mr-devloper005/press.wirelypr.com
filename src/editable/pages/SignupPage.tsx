import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, RadioTower } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white text-[var(--slot4-page-text)]">
        <section className={`${dc.shell.section} py-12 lg:py-16`}>
          <div className="grid overflow-hidden rounded-[1.35rem] border border-[#d7dde5] bg-white shadow-[0_24px_70px_rgba(40,42,49,.08)] lg:grid-cols-[.95fr_1.05fr]">
            <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Create account</p>
              <h1 className="mt-3 text-4xl font-black tracking-[-0.045em]">{pagesContent.auth.signup.formTitle}</h1>
              <EditableLocalSignupForm />
              <p className="mt-6 border-t border-[#d7dde5] pt-5 text-sm text-[var(--slot4-muted-text)]">
                Already have an account? <Link href="/login" className="inline-flex items-center gap-1 font-black text-[var(--slot4-accent)] hover:underline">{pagesContent.auth.signup.loginCta} <ArrowRight className="h-4 w-4" /></Link>
              </p>
            </div>
            <div className="flex flex-col justify-center bg-[#eef1f4] p-8 sm:p-12 lg:p-16">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">{pagesContent.auth.signup.badge}</p>
              <h2 className="mt-5 max-w-xl text-5xl font-black leading-[1.04] tracking-[-0.055em] sm:text-7xl">{pagesContent.auth.signup.title}</h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-[var(--slot4-muted-text)]">{pagesContent.auth.signup.description}</p>
              <div className="mt-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-[var(--slot4-accent)] shadow-sm"><RadioTower className="h-10 w-10" /></div>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
