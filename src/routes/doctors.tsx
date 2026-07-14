import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { doctorsList } from "@/data/team";
import teamHero from "@/assets/team-hero.jpg";
import { GraduationCap, MapPin, Languages, Briefcase, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors & Specialists — Speech Therapy Lab" },
      { name: "description", content: "Meet the board-certified pediatric doctors and specialists at Speech Therapy Lab — Bangladesh's most trusted speech, therapy and child development center." },
      { property: "og:title", content: "Our Doctors & Specialists — Speech Therapy Lab" },
      { property: "og:description", content: "Board-certified pediatric specialists you can trust." },
      { property: "og:image", content: teamHero },
      { rel: "canonical", href: "/doctors" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          name: "Speech Therapy Lab",
          medicalSpecialty: ["Pediatrics", "SpeechPathology", "OccupationalTherapy"],
          employee: doctorsList.map((d) => ({
            "@type": "Physician", name: d.name, jobTitle: d.title,
          })),
        }),
      },
    ],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
          <img fetchPriority="high" decoding="async" src={teamHero} alt="Speech Therapy Lab medical team" width={1600} height={900}
            className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-background" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-16">
            <nav className="text-xs text-white/80 mb-6 font-mono uppercase tracking-[0.2em]">
              <Link to="/" className="hover:text-white">Home</Link> <span className="mx-2">/</span> Doctors
            </nav>
            <h1 className="font-display text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl">
              Meet Our Healthcare Specialists
            </h1>
            <p className="text-white/90 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
              Experienced professionals dedicated to improving every child's communication, learning, and development.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctorsList.map((d) => (
              <article key={d.slug}
                className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-300 hover:-translate-y-1 ring-1 ring-border">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img src={d.photo} alt={d.name} width={900} height={1100} loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                    {d.experience}+ Years
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl leading-tight">{d.name}</h3>
                  <p className="text-primary font-medium mt-1">{d.title}</p>
                  <p className="text-sm text-muted-foreground mt-3">{d.specializations.join(" · ")}</p>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2"><GraduationCap className="h-4 w-4 mt-0.5 text-accent" /> {d.qualifications[0]}</li>
                    <li className="flex items-start gap-2"><Briefcase className="h-4 w-4 mt-0.5 text-accent" /> {d.experience} years experience</li>
                    <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> {d.branches.slice(0, 3).join(", ")}</li>
                    <li className="flex items-start gap-2"><Languages className="h-4 w-4 mt-0.5 text-accent" /> {d.languages.join(", ")}</li>
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link to="/doctors/$slug" params={{ slug: d.slug }}
                      className="flex-1 text-center px-4 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-muted transition">
                      View Profile
                    </Link>
                    <Link to="/appointment"
                      className="flex-1 text-center px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition inline-flex items-center justify-center gap-1">
                      Book <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
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
