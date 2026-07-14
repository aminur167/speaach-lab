import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { doctorsList, getDoctor, type Person } from "@/data/team";
import { GraduationCap, Award, Clock, MapPin, Languages, Star, Stethoscope, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/doctors/$slug")({
  loader: ({ params }) => {
    const doctor = getDoctor(params.slug);
    if (!doctor) throw notFound();
    return { doctor };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Doctor — Speech Therapy Lab" }, { name: "robots", content: "noindex" }] };
    const d = loaderData.doctor;
    return {
      meta: [
        { title: `${d.name}, ${d.title} — Speech Therapy Lab` },
        { name: "description", content: `${d.name} — ${d.title}. ${d.specializations.join(", ")}. ${d.experience} years experience across ${d.branches.slice(0, 2).join(" & ")}.` },
        { property: "og:title", content: `${d.name} — ${d.title}` },
        { property: "og:description", content: d.bio.slice(0, 155) },
        { property: "og:image", content: d.photo },
        { property: "og:type", content: "profile" },
      ],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org", "@type": "Physician",
          name: d.name, jobTitle: d.title, image: d.photo,
          medicalSpecialty: d.specializations,
          knowsLanguage: d.languages,
        }),
      }],
    };
  },
  notFoundComponent: DoctorNotFound,
  errorComponent: DoctorError,
  component: DoctorDetail,
});

function DoctorNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="font-display text-4xl mb-4">Doctor not found</h1>
        <Link to="/doctors" className="text-primary underline">Browse all doctors</Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function DoctorError({ reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="font-display text-3xl mb-4">Something went wrong</h1>
        <button onClick={() => { reset(); router.invalidate(); }}
          className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full">
          Try again
        </button>
      </div>
    </div>
  );
}

function DoctorDetail() {
  const { doctor: d } = Route.useLoaderData() as { doctor: Person };
  const related = doctorsList.filter((x) => x.slug !== d.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-muted/60 to-background pt-28 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <nav className="text-xs text-muted-foreground mb-8 font-mono uppercase tracking-[0.2em]">
              <Link to="/">Home</Link> <span className="mx-2">/</span>
              <Link to="/doctors">Doctors</Link> <span className="mx-2">/</span>
              <span className="text-foreground">{d.name}</span>
            </nav>
            <div className="grid lg:grid-cols-[420px_1fr] gap-12 items-start">
              <div className="rounded-3xl overflow-hidden ring-1 ring-border shadow-lift">
                <img fetchPriority="high" decoding="async" src={d.photo} alt={d.name} width={900} height={1100}
                  className="w-full aspect-[4/5] object-cover" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Physician</span>
                <h1 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight mt-3">{d.name}</h1>
                <p className="text-xl text-primary font-medium mt-3">{d.title}</p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-6 max-w-2xl">{d.bio}</p>

                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <Stat icon={GraduationCap} label="Qualifications" value={d.qualifications.join(" · ")} />
                  <Stat icon={Award} label="Experience" value={`${d.experience}+ years`} />
                  <Stat icon={Languages} label="Languages" value={d.languages.join(", ")} />
                  <Stat icon={MapPin} label="Branches" value={d.branches.join(", ")} />
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  <Link to="/appointment"
                    className="px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-sm font-medium uppercase tracking-[0.15em] inline-flex items-center gap-2 hover:opacity-90">
                    Book Appointment <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="tel:+8801700000000"
                    className="px-8 py-3.5 border border-border rounded-full text-sm font-medium uppercase tracking-[0.15em] hover:bg-muted">
                    Call Clinic
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <Section title="Specializations & Treatment Areas">
          <div className="grid md:grid-cols-3 gap-4">
            {d.specializations.map((s) => (
              <div key={s} className="p-6 bg-card rounded-2xl ring-1 ring-border">
                <Stethoscope className="h-6 w-6 text-accent mb-3" />
                <p className="font-medium">{s}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Education & Certifications */}
        <Section title="Education & Certifications" muted>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Education</h3>
              <ul className="space-y-3">
                {d.qualifications.map((q) => (
                  <li key={q} className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Certifications</h3>
              <ul className="space-y-3">
                {d.certifications.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-accent mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Awards */}
        {d.awards.length > 0 && (
          <Section title="Awards & Recognition">
            <ul className="grid md:grid-cols-2 gap-4">
              {d.awards.map((a) => (
                <li key={a} className="p-5 bg-card rounded-2xl ring-1 ring-border flex items-start gap-3">
                  <Award className="h-5 w-5 text-accent mt-0.5" />
                  <span className="font-medium">{a}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Working Hours */}
        <Section title="Working Hours" muted>
          <div className="bg-card rounded-2xl ring-1 ring-border p-6 max-w-2xl">
            {d.hours.map((h) => (
              <div key={h.day} className="flex justify-between py-3 border-b border-border last:border-0">
                <span className="flex items-center gap-2 font-medium"><Clock className="h-4 w-4 text-accent" /> {h.day}</span>
                <span className="text-muted-foreground">{h.time}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Gallery */}
        <Section title="Clinic Gallery">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {d.gallery.map((g, i) => (
              <img key={i} src={g} alt="Clinical environment" width={600} height={600} loading="lazy"
                className="w-full aspect-square object-cover rounded-2xl hover:scale-105 transition-transform duration-500" />
            ))}
          </div>
        </Section>

        {/* Reviews */}
        <Section title="Patient Reviews" muted>
          <div className="grid md:grid-cols-3 gap-6">
            {d.reviews.map((r) => (
              <div key={r.name} className="bg-card p-6 rounded-2xl ring-1 ring-border">
                <div className="flex gap-1 text-accent mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-muted-foreground leading-relaxed">"{r.text}"</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="font-medium">{r.name}</p>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-[0.15em]">Parent · {r.branch}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Related */}
        <Section title="Related Specialists">
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} to="/doctors/$slug" params={{ slug: r.slug }}
                className="group bg-card rounded-2xl overflow-hidden ring-1 ring-border hover:shadow-lift transition">
                <img src={r.photo} alt={r.name} width={900} height={1100} loading="lazy"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-5">
                  <h4 className="font-display text-lg">{r.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{r.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Section({ title, muted, children }: { title: string; muted?: boolean; children: React.ReactNode }) {
  return (
    <section className={muted ? "bg-muted/40 py-20" : "py-20"}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-10">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="p-4 bg-card rounded-2xl ring-1 ring-border">
      <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
        <Icon className="h-4 w-4 text-accent" /> {label}
      </div>
      <p className="mt-2 font-medium">{value}</p>
    </div>
  );
}
