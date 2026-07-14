import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { stories } from "@/data/content";
import { Quote, ArrowRight } from "lucide-react";
import teamHero from "@/assets/team-hero.jpg";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Speech Therapy Lab" },
      { name: "description", content: "Real families, real progress. Read the journeys of children whose lives changed with speech, OT, ABA and CBT programs at Speech Therapy Lab." },
      { name: "keywords", content: "success stories, testimonials, speech therapy, autism, ADHD, cerebral palsy, CBT" },
      { property: "og:title", content: "Success Stories — Speech Therapy Lab" },
      { property: "og:description", content: "Real families, real progress." },
      { property: "og:url", content: "/stories" },
      { property: "og:image", content: teamHero },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/stories" }],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative pt-32 pb-16 bg-gradient-to-b from-muted/60 to-background">
          <div className="max-w-7xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6 font-mono uppercase tracking-[0.2em]">
              <Link to="/">Home</Link> <span className="mx-2">/</span> Success Stories
            </nav>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Success Stories</span>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight mt-4 max-w-3xl">
              Real families. Real progress.
            </h1>
            <p className="text-lg text-muted-foreground mt-5 max-w-2xl">
              Every child's journey is different. These are just a few of the families who have trusted us with theirs.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24 space-y-24">
          {stories.map((s, i) => (
            <article key={s.slug}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="rounded-3xl overflow-hidden ring-1 ring-border shadow-lift">
                <img src={s.image} alt={`${s.child}'s family`} loading="lazy"
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {s.program} · {s.branch}
                </span>
                <h2 className="font-display text-3xl md:text-4xl mt-3 leading-tight">
                  {s.child}'s journey, age {s.age}.
                </h2>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="p-5 rounded-2xl bg-muted/50">
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Before</div>
                    <p className="mt-2 text-sm leading-relaxed">{s.before}</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-accent/10">
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent">After</div>
                    <p className="mt-2 text-sm leading-relaxed">{s.after}</p>
                  </div>
                </div>

                <ol className="relative mt-8 space-y-4 border-l border-border pl-6">
                  {s.timeline.map((t) => (
                    <li key={t.month} className="relative">
                      <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">{t.month}</div>
                      <div className="font-medium">{t.event}</div>
                    </li>
                  ))}
                </ol>

                <blockquote className="mt-8 relative bg-card ring-1 ring-border rounded-2xl p-6 pr-8">
                  <Quote className="absolute top-4 right-4 h-5 w-5 text-accent" />
                  <p className="text-muted-foreground italic leading-relaxed">"{s.quote}"</p>
                  <footer className="mt-4 text-sm font-medium">
                    {s.parent} <span className="text-muted-foreground font-normal">· Parent, {s.branch}</span>
                  </footer>
                </blockquote>
              </div>
            </article>
          ))}

          <div className="text-center pt-6">
            <Link to="/appointment"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium uppercase tracking-[0.15em] hover:opacity-90">
              Start your family's journey <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}