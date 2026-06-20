import Link from 'next/link'
import { ArrowRight, ChevronDown, Globe2, Layers, Lightbulb, Megaphone, Newspaper, RadioTower, Search, ShieldCheck, Sparkles, TrendingUp, Users, Zap } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditablePostImage, postHref, RailPostCard } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

const brands = ['KraftHeinz', 'sumup', 'INTUIT mailchimp', 'docusign', 'ATLASSIAN', 'aws', 'Notion', 'Rapha', 'Microsoft', 'DANONE']

export function EditableHomeHero({ primaryTask: _primaryTask, primaryRoute: _primaryRoute, posts: _posts }: HomeSectionProps) {
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} py-10`}>
        <div className="relative overflow-hidden rounded-[1.35rem] bg-[var(--slot4-green)] px-6 py-16 sm:px-12 lg:min-h-[520px] lg:px-16 lg:py-20">
          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_.8fr]">
            <div>
              <h1 className="max-w-3xl text-5xl font-black leading-[1.03] tracking-[-0.055em] text-[var(--slot4-page-text)] sm:text-6xl lg:text-[4.65rem]">
                Sorry, content chaos - your time&apos;s up
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--slot4-page-text)]">
                Plan, publish, and distribute media updates with a calmer workspace for announcements, coverage, and public visibility.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className={dc.button.primary}>Explore platform</Link>
                <Link href="/search" className={dc.button.secondary}>Search updates</Link>
              </div>
            </div>
            <div className="relative mx-auto h-[270px] w-full max-w-[360px] sm:h-[330px] lg:h-[360px]">
              <div className="hero-float absolute inset-7 overflow-hidden rounded-[1rem] bg-[#aef1ca] shadow-[0_24px_70px_rgba(49,100,224,.18)]">
                <div className="flex h-full w-full items-end justify-center bg-[radial-gradient(circle_at_50%_25%,#d7e7ff_0_28%,transparent_29%),linear-gradient(145deg,#b7f4d4,#d5f6e9)]">
                  <div className="mb-8 h-40 w-40 rounded-full bg-white shadow-[0_20px_60px_rgba(40,42,49,.16)]" />
                  <div className="absolute bottom-0 h-36 w-48 rounded-t-[5rem] bg-white" />
                  <div className="absolute bottom-16 h-24 w-24 rounded-full bg-[#f7d547]" />
                  <div className="absolute bottom-10 h-20 w-32 rounded-[1.4rem] bg-[var(--slot4-dark-bg)]" />
                  <div className="absolute bottom-14 h-3 w-16 rounded-full bg-[var(--slot4-accent)]" />
                </div>
              </div>
              {[['left-0 top-24 h-9 w-9', '#9fb4e5'], ['right-4 top-10 h-8 w-8', '#809be0'], ['right-14 bottom-20 h-12 w-12', '#7f96df'], ['left-12 top-8 h-5 w-5', '#a7bbea']].map(([klass, color], index) => (
                <span key={index} className={`sparkle-drift absolute ${klass}`} style={{ animationDelay: `${index * .45}s` }}>
                  <svg viewBox="0 0 24 24" className="h-full w-full" fill={color}><path d="M12 0l3.2 8.8L24 12l-8.8 3.2L12 24l-3.2-8.8L0 12l8.8-3.2L12 0z" /></svg>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableDistributionCommand({ primaryTask: _primaryTask, primaryRoute: _primaryRoute, posts: _posts, timeSections: _timeSections }: HomeSectionProps) {
  const lanes = [
    ['01', 'Prepare', 'Shape a release with headline, summary, category, visuals, and publication context.'],
    ['02', 'Distribute', 'Send every update into a public discovery path built for readers, outlets, and searchers.'],
    ['03', 'Amplify', 'Keep visibility moving with resource blocks, calls to action, and follow-up destinations.'],
    ['04', 'Measure', 'Organize coverage signals, engagement points, and reputation-friendly public pages.'],
  ]
  const channels = ['Newswire', 'Brand updates', 'Product launches', 'Local media', 'Industry blogs', 'Investor notes', 'Events', 'Reputation desk']

  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} border-t border-[#c7d0dc] py-20 lg:py-24`}>
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Distribution command center</p>
            <h2 className="mt-5 max-w-3xl text-5xl font-black leading-[1.06] tracking-[-0.055em] sm:text-6xl">
              Move every announcement from draft to discovery.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[var(--slot4-muted-text)]">
            A focused homepage section for media teams, founders, agencies, and brands that need press releases to look credible, travel clearly, and keep readers moving toward the right next step.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <div className="overflow-hidden rounded-[1.35rem] bg-[var(--slot4-dark-bg)] text-white">
            <div className="grid gap-px bg-white/15 md:grid-cols-2">
              {lanes.map(([step, title, text], index) => (
                <div key={step} className="group min-h-[220px] bg-[var(--slot4-dark-bg)] p-7 transition hover:bg-[#323743]">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-[#f7d547]">{step}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-[var(--slot4-accent)]">
                      {[Newspaper, RadioTower, Megaphone, TrendingUp].map((Icon, iconIndex) => iconIndex === index ? <Icon key={iconIndex} className="h-5 w-5" /> : null)}
                    </span>
                  </div>
                  <h3 className="mt-12 text-3xl font-black tracking-[-0.04em]">{title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/68">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[1.35rem] bg-[#eef1f4] p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d7e7ff] text-[var(--slot4-accent)]"><Globe2 className="h-6 w-6" /></span>
                <h3 className="text-2xl font-black tracking-[-0.035em]">Audience routes</h3>
              </div>
              <div className="mt-7 grid grid-cols-2 gap-3">
                {['Journalists', 'Customers', 'Partners', 'Analysts', 'Communities', 'Searchers'].map((item) => (
                  <span key={item} className="rounded-full bg-white px-4 py-3 text-center text-sm font-black text-[var(--slot4-page-text)] shadow-sm">{item}</span>
                ))}
              </div>
            </div>
            <div className="rounded-[1.35rem] bg-[var(--slot4-green)] p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-700"><ShieldCheck className="h-6 w-6" /></span>
                <h3 className="text-2xl font-black tracking-[-0.035em]">Reputation-ready pages</h3>
              </div>
              <p className="mt-5 text-base leading-8 text-[var(--slot4-muted-text)]">Clean public layouts help each release feel intentional, readable, and easy to share long after launch day.</p>
              <Link href="/search" className={`${dc.button.primary} mt-7`}>Open distribution hub</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-[1.25rem] border border-[#d7dde5] bg-white py-5 shadow-[0_14px_44px_rgba(40,42,49,.06)]">
          <div className="auto-slider flex w-max gap-3 px-5">
            {[...channels, ...channels].map((channel, index) => (
              <span key={`${channel}-${index}`} className="inline-flex items-center gap-2 rounded-full bg-[#f6f8fb] px-5 py-3 text-sm font-black text-[var(--slot4-page-text)]">
                <span className="h-2 w-2 rounded-full bg-[var(--slot4-accent)]" />
                {channel}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 10)
  const loop = [...railPosts, ...railPosts]
  if (!railPosts.length) return null
  return (
    <section className="bg-white">
      <div className={dc.shell.section}>
        <div className="rounded-[1.25rem] bg-[var(--slot4-accent)] p-6 text-white sm:p-8 lg:p-9">
          <div className="grid items-center gap-7 lg:grid-cols-[170px_1fr_auto]">
            <div className="overflow-hidden rounded-xl bg-sky-200">
              <img src={getEditablePostImage(railPosts[0])} alt="" className="aspect-[3/2] w-full object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-[-0.035em]">A new chapter for media distribution: scale your visibility with cleaner publishing</h2>
              <p className="mt-2 max-w-3xl text-base leading-7 text-white/90">Create one public hub for announcements, resources, and story updates without adding friction to the existing content flow.</p>
            </div>
            <Link href={primaryRoute} className="justify-self-start rounded-full border-2 border-white px-7 py-3 text-sm font-black transition hover:bg-white hover:text-[var(--slot4-accent)] lg:justify-self-end">Learn more</Link>
          </div>
        </div>

        <div className="py-24 text-center">
          <h2 className="mx-auto max-w-4xl text-4xl font-black leading-[1.08] tracking-[-0.05em] sm:text-6xl">Bring order to your content, and impact to your campaigns</h2>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              [Zap, 'Modular content, max impact', 'Move announcements faster across channels, brands, regions, and media-ready destinations.'],
              [Sparkles, 'AI that stays on-brand', 'Turn summaries, releases, and updates into clear public-facing story blocks.'],
              [Users, 'Personalization made simple', 'Help every reader find relevant updates with categories, search, and related content.'],
            ].map(([Icon, title, text]) => {
              const FeatureIcon = Icon as typeof Zap
              return (
                <div key={String(title)} className="mx-auto max-w-sm">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1rem] border-2 border-[var(--slot4-dark-bg)]"><FeatureIcon className="h-8 w-8" /></div>
                  <h3 className="mt-8 text-2xl font-black tracking-[-0.035em]">{String(title)}</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--slot4-muted-text)]">{String(text)}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid gap-10 py-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['4.6B', 'delivery requests supported across seasonal peaks'],
            ['50%', 'cost reduction through efficiency gains'],
            ['10x', 'campaign speed with smarter workflows'],
            ['99.99%', 'uptime-minded publishing experience'],
          ].map(([stat, copy]) => (
            <div key={stat}>
              <p className="text-6xl font-black tracking-[-0.05em] sm:text-7xl">{stat}</p>
              <p className="mx-auto mt-4 max-w-[230px] text-base font-bold leading-7 text-[var(--slot4-muted-text)]">{copy}</p>
            </div>
          ))}
        </div>

        <div className="my-20 border-y border-[#c7d0dc] py-14 text-center">
          <p className="text-4xl font-black italic tracking-[-0.04em]">KFC</p>
          <blockquote className="mx-auto mt-8 max-w-4xl text-2xl font-black leading-9 tracking-[-0.025em] text-[var(--slot4-page-text)]">
            &quot;A focused content hub makes it easier to coordinate timely updates, reach the right audiences, and keep every public touchpoint aligned.&quot;
          </blockquote>
          <p className="mt-10 font-black">Ashley Travis</p>
          <p className="text-[var(--slot4-muted-text)]">Digital experience lead</p>
          <div className="mt-8 flex justify-center gap-2"><span className="h-1 w-16 bg-[var(--slot4-dark-bg)]" /><span className="h-1 w-16 bg-[#bfc5cd]" /><span className="h-1 w-16 bg-[#bfc5cd]" /></div>
        </div>

        <div className="overflow-hidden py-4">
          <div className="auto-slider flex w-max gap-6">
            {loop.map((post, index) => <RailPostCard key={`${post.id || post.slug}-${index}`} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index % railPosts.length} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const feature = posts[0]
  const cards = posts.slice(1, 4)
  if (!feature) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} border-y border-[#c7d0dc] py-20`}>
        <div className="grid items-center gap-12 lg:grid-cols-[.92fr_1fr]">
          <div>
            <h2 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-[-0.05em] sm:text-6xl">Customers move faster and scale easily with {SITE_CONFIG.name}</h2>
            <p className="mt-12 text-xl text-[var(--slot4-muted-text)]">{getEditableCategoryLike(feature)}</p>
            <h3 className="mt-10 max-w-xl text-3xl font-black leading-tight tracking-[-0.04em]">{feature.title}</h3>
            <div className="mt-8 flex gap-3">
              <Link href={postHref(primaryTask, feature, primaryRoute)} className={dc.button.primary}>View case study</Link>
              <Link href={primaryRoute} className={dc.button.secondary}>Browse all</Link>
            </div>
            <div className="mt-28 flex gap-16">
              <div><p className="text-6xl font-black tracking-[-0.05em]">25%</p><p className="mt-3 font-bold text-[var(--slot4-muted-text)]">increase in conversions</p></div>
              <div><p className="text-6xl font-black tracking-[-0.05em]">7x</p><p className="mt-3 font-bold text-[var(--slot4-muted-text)]">increase in CTR</p></div>
            </div>
          </div>
          <Link href={postHref(primaryTask, feature, primaryRoute)} className="group overflow-hidden rounded-[1.2rem]">
            <img src={getEditablePostImage(feature)} alt="" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
          </Link>
        </div>
        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {cards.map((post, index) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className={`group overflow-hidden rounded-[1.1rem] ${index === 1 ? 'bg-[#668093]' : 'bg-[#2d3678]'} text-white transition hover:-translate-y-1`}>
              <div className="aspect-[16/10] overflow-hidden bg-black/10"><img src={getEditablePostImage(post)} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div>
              <div className="min-h-[220px] p-8">
                <h3 className="text-2xl font-black leading-tight tracking-[-0.035em]">{post.title}</h3>
                <span className="mt-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--slot4-dark-bg)]"><ArrowRight className="h-5 w-5" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = collected.length ? collected : posts
  const lead = source[0]
  const briefs = source.slice(1, 4)
  if (!lead) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} py-24`}>
        <div className="grid gap-12 lg:grid-cols-[1fr_.84fr] lg:items-center">
          <div>
            <h2 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-[-0.05em] sm:text-6xl">One dynamic content platform, infinite possibilities.</h2>
            <div className="mt-20 grid gap-5 sm:grid-cols-5">
              {[
                [Layers, 'Manage content'],
                [Users, 'Personalize for users'],
                [Sparkles, 'Create smarter content'],
                [Zap, 'Design experiences'],
                [Lightbulb, 'Take action with insights'],
              ].map(([Icon, label], index) => {
                const TabIcon = Icon as typeof Layers
                return <div key={String(label)} className={`border-b-4 pb-5 ${index === 0 ? 'border-[var(--slot4-dark-bg)]' : 'border-[#e8edf3]'}`}><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d7e7ff] text-[var(--slot4-accent)]"><TabIcon className="h-4 w-4" /></div><p className="mt-8 font-black text-[var(--slot4-muted-text)]">{String(label)}</p></div>
              })}
            </div>
            <div className="mt-16 max-w-md">
              <h3 className="text-2xl font-black tracking-[-0.035em]">All your content, under control</h3>
              <p className="mt-5 text-base leading-8 text-[var(--slot4-muted-text)]">Create and manage media updates in one place, then let visitors move through announcements, resources, and related stories without friction.</p>
              <Link href={primaryRoute} className={`${dc.button.secondary} mt-10`}>Explore platform</Link>
            </div>
          </div>
          <Link href={postHref(primaryTask, lead, primaryRoute)} className="group overflow-hidden rounded-[1.2rem] bg-[#eef1f4] p-10">
            <img src={getEditablePostImage(lead)} alt="" className="aspect-[4/3] w-full rounded-xl object-cover transition duration-700 group-hover:scale-[1.03]" />
          </Link>
        </div>

        <div className="mt-24 rounded-[1.4rem] bg-[#eef1f4] p-8 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1rem] bg-[#d7e7ff] text-[var(--slot4-accent)]"><Layers className="h-10 w-10" /></div>
            <div>
              <h3 className="text-2xl font-black tracking-[-0.035em]">Integrate and extend with ease</h3>
              <p className="mt-2 max-w-2xl text-base leading-7 text-[var(--slot4-muted-text)]">Connect updates, releases, category pages, and search into a public experience that feels organized.</p>
            </div>
          </div>
          <Link href="/search" className={`${dc.button.secondary} mt-6 sm:mt-0`}>Explore resources</Link>
        </div>

        <div className="mt-24 border-t border-[#c7d0dc] pt-24">
          <h2 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-[-0.05em] sm:text-6xl">With every team aligned, your impact shines</h2>
          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {[
              ['Growth Marketing', 'Move fast with cleaner publishing and optimization.'],
              ['Product', 'Deliver consistent public updates with ease.'],
              ['Developers', 'Keep routes and data stable while the UI evolves.'],
            ].map(([title, text], index) => (
              <div key={title} className={`border-b-4 pb-6 ${index === 0 ? 'border-[var(--slot4-dark-bg)]' : 'border-[#e8edf3]'}`}>
                <div className="h-12 w-12 rounded-full border-4 border-[var(--slot4-accent)] bg-[#d7e7ff]" />
                <h3 className="mt-8 text-xl font-black">{title}</h3>
                <p className="mt-1 text-sm text-[var(--slot4-muted-text)]">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_.82fr]">
            <div>
              {['No-code personalization', 'Optimize campaigns on the fly', 'Centralized content management', 'Faster workflows'].map((item) => (
                <div key={item} className="flex items-center justify-between border-t border-[#c7d0dc] py-8 text-2xl font-black tracking-[-0.035em]">
                  <span>{item}</span><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef1f4]"><ChevronDown className="h-5 w-5" /></span>
                </div>
              ))}
            </div>
            <div className="rounded-[1.2rem] bg-[#eef1f4] p-10">
              <img src={getEditablePostImage(briefs[0] || lead)} alt="" className="aspect-[4/3] w-full rounded-xl object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-[#c7d0dc] pt-24">
          <h2 className="max-w-4xl text-5xl font-black leading-[1.08] tracking-[-0.05em] sm:text-6xl">{SITE_CONFIG.name} resources to power your digital experiences</h2>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <Link href={postHref(primaryTask, lead, primaryRoute)} className="group">
              <img src={getEditablePostImage(lead)} alt="" className="aspect-[16/9] w-full rounded-xl object-cover transition duration-700 group-hover:scale-[1.02]" />
              <p className="mt-8 text-sm font-black text-[var(--slot4-accent)]">Insights</p>
              <h3 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] text-[var(--slot4-accent)]">{lead.title}</h3>
            </Link>
            <div className="grid">
              {briefs.map((post) => (
                <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="grid gap-6 border-t border-[#c7d0dc] py-8 sm:grid-cols-[1fr_190px]">
                  <div>
                    <p className="text-sm font-black text-[var(--slot4-muted-text)]">{getEditableCategoryLike(post)}</p>
                    <h3 className="mt-2 text-2xl font-black leading-tight tracking-[-0.035em]">{post.title}</h3>
                  </div>
                  <img src={getEditablePostImage(post)} alt="" className="aspect-[16/10] w-full rounded-xl object-cover" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <form action="/search" className="mt-20 flex flex-col gap-4 rounded-[1.2rem] border border-[#c7d0dc] bg-white p-5 shadow-[0_14px_44px_rgba(40,42,49,.08)] sm:flex-row">
          <label className="flex min-w-0 flex-1 items-center gap-3 rounded-full bg-[#f6f8fb] px-5">
            <Search className="h-5 w-5 text-[var(--slot4-muted-text)]" />
            <input name="q" placeholder={`Search ${taskLabel(primaryTask).toLowerCase()}, topics, and categories`} className="min-w-0 flex-1 bg-transparent py-4 text-sm outline-none" />
          </label>
          <button className={dc.button.primary}>Search</button>
        </form>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} border-t border-[#c7d0dc] py-24 text-center`}>
        <h2 className="text-3xl font-black tracking-[-0.035em]">Leading brands vibe with {SITE_CONFIG.name}</h2>
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-x-12 gap-y-8 text-xl font-black text-[var(--slot4-page-text)] sm:grid-cols-5">
          {brands.map((brand) => <span key={brand}>{brand}</span>)}
        </div>
      </div>
    </section>
  )
}

function getEditableCategoryLike(post?: SitePost | null) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  return (typeof content.category === 'string' && content.category) || post?.tags?.[0] || 'Ruggable'
}
