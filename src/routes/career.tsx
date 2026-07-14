import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { openings, benefits } from "@/data/content";
import { useMemo, useState } from "react";
import { Briefcase, MapPin, Clock, ArrowRight, Upload, Check } from "lucide-react";
import teamHero from "@/assets/team-hero.jpg";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers — Speech Therapy Lab" },
      { name: "description", content: "Join a growing, purpose-driven pediatric therapy network in Bangladesh. Current openings for clinicians, therapists and support staff." },
      { name: "keywords", content: "careers, jobs, speech therapist, occupational therapist, clinical psychologist, Bangladesh" },
      { property: "og:title", content: "Careers — Speech Therapy Lab" },
      { property: "og:description", content: "Build your career with a purpose-driven pediatric team." },
      { property: "og:url", content: "/career" },
      { property: "og:image", content: teamHero },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/career" }],
  }),
  component: CareerPage,
});

function CareerPage() {
  const [branchFilter, setBranchFilter] = useState<string>("All");
  const [submitted, setSubmitted] = useState(false);

  const branches = useMemo(
    () => ["All", ...Array.from(new Set(openings.map((o) => o.branch)))],
    [],
  );
  const filtered = branchFilter === "All" ? openings : openings.filter((o) => o.branch === branchFilter);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
          <img fetchPriority="high" decoding="async" src={teamHero} alt="Our team" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-background" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-14">
            <nav aria-label="Breadcrumb" className="text-xs text-white/80 mb-6 font-mono uppercase tracking-[0.2em]">
              <Link to="/" className="hover:text-white">Home</Link> <span className="mx-2">/</span> Careers
            </nav>
            <h1 className="font-display text-white text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl">
              Do the most meaningful work of your career.
            </h1>
            <p className="text-white/90 text-lg mt-5 max-w-2xl leading-relaxed">
              Build your career with a purpose-driven, multi-disciplinary pediatric therapy network.
            </p>
          </div>
        </section>

        {/* Openings */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Openings</span>
              <h2 className="font-display text-3xl md:text-4xl mt-2">Current opportunities</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {branches.map((b) => (
                <button key={b} onClick={() => setBranchFilter(b)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    branchFilter === b ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/70"
                  }`}>{b}</button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((o) => (
              <article key={o.title + o.branch}
                className="p-6 bg-card rounded-2xl ring-1 ring-border hover:shadow-lift transition group">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl leading-tight">{o.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-3 text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {o.branch}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {o.type}</span>
                      <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {o.experience}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{o.summary}</p>
                <a href="#apply"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary font-medium">
                  Apply <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Benefits & Culture */}
        <section className="bg-muted/40 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Life at Speech Therapy Lab</span>
            <h2 className="font-display text-3xl md:text-4xl mt-2 mb-10">Benefits & culture</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="p-6 bg-card rounded-2xl ring-1 ring-border">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                    <Check className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg mt-4">{b.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application form */}
        <section id="apply" className="max-w-4xl mx-auto px-6 py-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Apply now</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-8">Send us your application</h2>

          {submitted ? (
            <div className="p-10 bg-card ring-1 ring-border rounded-3xl text-center">
              <div className="mx-auto h-14 w-14 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                <Check className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl mt-5">Application received</h3>
              <p className="text-muted-foreground mt-3">Our people team will review your details and reply within one working week.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="bg-card ring-1 ring-border rounded-3xl p-8 md:p-10 grid gap-5 sm:grid-cols-2">
              <Input label="Full name" name="name" required />
              <Input label="Email" name="email" type="email" required />
              <Input label="Phone" name="phone" required />
              <label className="grid gap-2 min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Position</span>
                <select name="position" required
                  className="w-full min-w-0 px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary">
                  <option value="">Select a role</option>
                  {openings.map((o) => (
                    <option key={o.title + o.branch}>{o.title} — {o.branch}</option>
                  ))}
                  <option>Other / open application</option>
                </select>
              </label>
              <Input label="Years of experience" name="experience" />
              <Input label="LinkedIn or portfolio URL" name="url" type="url" />
              <label className="sm:col-span-2 grid gap-2 min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Upload CV (PDF)</span>
                <div className="relative">
                  <input name="cv" type="file" accept=".pdf,.doc,.docx"
                    className="w-full min-w-0 px-4 py-3 rounded-xl border border-dashed border-border bg-background file:mr-4 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:bg-primary file:text-primary-foreground file:text-sm" />
                  <Upload className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </label>
              <label className="sm:col-span-2 grid gap-2 min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Tell us why you want to join</span>
                <textarea name="note" rows={5} maxLength={1500}
                  className="w-full min-w-0 px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary resize-none" />
              </label>
              <div className="sm:col-span-2">
                <button type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium uppercase tracking-[0.15em] hover:opacity-90">
                  Submit application <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Input({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 min-w-0">
      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">{label}{required ? " *" : ""}</span>
      <input name={name} type={type} required={required} maxLength={200}
        className="w-full min-w-0 px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary" />
    </label>
  );
}
