import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { therapistsList } from "@/data/team";
import teamHero from "@/assets/team-hero.jpg";
import { useState } from "react";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";

const categories = [
  "All", "Speech Therapist", "Occupational Therapist", "ABA Therapist",
  "Physiotherapist", "Sensory Integration Therapist", "Behavior Therapist",
] as const;

export const Route = createFileRoute("/therapists")({
  head: () => ({
    meta: [
      { title: "Our Therapists — Speech Therapy Lab" },
      { name: "description", content: "Meet our senior speech, occupational, ABA, physio, sensory and behavior therapists across every branch in Bangladesh." },
      { property: "og:title", content: "Our Therapists — Speech Therapy Lab" },
      { property: "og:description", content: "Compassionate, credentialed therapists dedicated to every child's progress." },
      { property: "og:image", content: teamHero },
    ],
  }),
  component: TherapistsPage,
});

function TherapistsPage() {
  const [filter, setFilter] = useState<typeof categories[number]>("All");
  const filtered = filter === "All" ? therapistsList : therapistsList.filter((t) => t.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
          <img fetchPriority="high" decoding="async" src={teamHero} alt="Our therapists" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-accent/70 via-primary/40 to-background" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-14">
            <nav className="text-xs text-white/80 mb-6 font-mono uppercase tracking-[0.2em]">
              <Link to="/" className="hover:text-white">Home</Link> <span className="mx-2">/</span> Therapists
            </nav>
            <h1 className="font-display text-white text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-4xl">
              Compassionate therapists your child will love.
            </h1>
            <p className="text-white/90 text-lg mt-5 max-w-2xl leading-relaxed">
              Every therapist is credentialed, trained in international protocols, and supervised by senior clinicians.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <button key={c} onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${filter === c ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/70"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((t) => (
              <article key={t.slug} className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-300 hover:-translate-y-1 ring-1 ring-border">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img src={t.photo} alt={t.name} width={900} height={1100} loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                    {t.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{t.name}</h3>
                  <p className="text-primary font-medium mt-1">{t.title}</p>
                  <p className="text-sm text-muted-foreground mt-3">{t.specializations.join(" · ")}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2"><Briefcase className="h-4 w-4 mt-0.5 text-accent" /> {t.experience}+ years · {t.qualifications[0]}</li>
                    <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> {t.branches.join(", ")}</li>
                  </ul>
                  <Link to="/appointment"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90">
                    Book a Session <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
