import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getBranch, doctorsList, therapistsList, type Branch } from "@/data/team";
import { MapPin, Phone, Mail, Clock, ArrowRight, Navigation, Stethoscope, Users, Calendar, Award, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/branches/$slug")({
  loader: ({ params }) => {
    const branch = getBranch(params.slug);
    if (!branch) throw notFound();
    return { branch };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Branch — Speech Therapy Lab" }, { name: "robots", content: "noindex" }] };
    const b = loaderData.branch;
    return {
      meta: [
        { title: `${b.name} — Speech Therapy Lab ${b.city}` },
        { name: "description", content: `${b.name} at ${b.address}. Speech, occupational, ABA and physiotherapy for children in ${b.city}. Call ${b.phone}.` },
        { property: "og:title", content: `${b.name}` },
        { property: "og:description", content: `Premium pediatric therapy in ${b.city}.` },
        { property: "og:image", content: b.image },
      ],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org", "@type": "MedicalClinic",
          name: b.name, telephone: b.phone, image: b.image,
          address: { "@type": "PostalAddress", streetAddress: b.address, addressLocality: b.city, addressCountry: "BD" },
        }),
      }],
    };
  },
  notFoundComponent: BranchNotFound,
  errorComponent: BranchError,
  component: BranchDetail,
});

function BranchNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="font-display text-4xl mb-4">Branch not found</h1>
        <Link to="/branches" className="text-primary underline">Browse all branches</Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function BranchError({ reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="font-display text-3xl mb-4">Something went wrong</h1>
        <button onClick={() => { reset(); router.invalidate(); }} className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full">Try again</button>
      </div>
    </div>
  );
}

function BranchDetail() {
  const { branch: b } = Route.useLoaderData() as { branch: Branch };
  const cityMatch = (list: string[]) =>
    list.some((c) => b.city.toLowerCase().includes(c.toLowerCase()) || c.toLowerCase().includes(b.city.split(" ")[0].toLowerCase()));
  const branchDoctors = doctorsList.filter((d) => cityMatch(d.branches)).slice(0, 3);
  const branchTherapists = therapistsList.filter((t) => cityMatch(t.branches)).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero slider */}
        <BranchHeroSlider branch={b} />

        {/* About */}
        {b.description && (
          <section className="max-w-4xl mx-auto px-6 pt-16">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">About this branch</p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">{b.description}</p>
          </section>
        )}

        {/* Info */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-[1fr_360px] gap-12">
          <div>
            <h2 className="font-display text-3xl mb-6">Branch Information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <InfoCard icon={MapPin} label="Address" value={b.address} sub={b.addressBn} />
              <InfoCard icon={Phone} label="Phone" value={b.phone} sub={b.phone2} href={`tel:${b.phone.replace(/\s+/g, "")}`} />
              <InfoCard icon={Mail} label="Email" value={b.email} />
              <InfoCard icon={Clock} label="Weekdays" value={b.hours[0].time} />
              {b.established && <InfoCard icon={Calendar} label="Established" value={b.established} />}
              <InfoCard icon={Award} label="Accreditation" value="Internationally aligned protocols" />
            </div>

            <h3 className="font-display text-2xl mt-12 mb-4">Facilities</h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-muted-foreground">
              {["Sensory Integration Gym","Speech Therapy Suites","OT Rooms","Physiotherapy Gym","Family Consultation Rooms","Child-friendly Reception"].map((f) => (
                <li key={f} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" /> {f}</li>
              ))}
            </ul>

            <h3 className="font-display text-2xl mt-12 mb-4">Available Therapies</h3>
            <div className="flex flex-wrap gap-2">
              {b.therapies.map((t) => (
                <span key={t} className="px-4 py-2 rounded-full bg-muted text-sm">{t}</span>
              ))}
            </div>

            <h3 className="font-display text-2xl mt-12 mb-4">On-site Specialists</h3>
            <div className="flex flex-wrap gap-2">
              {b.specialists.map((s) => (
                <span key={s} className="px-4 py-2 rounded-full ring-1 ring-border text-sm">{s}</span>
              ))}
            </div>
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:sticky lg:top-28 h-fit bg-card ring-1 ring-border rounded-3xl p-6 shadow-card">
            <h3 className="font-display text-xl">Contact & Hours</h3>
            <div className="mt-4 space-y-3 text-sm">
              <a href={`tel:${b.phone.replace(/\s+/g, "")}`} className="flex items-start gap-2 hover:text-primary">
                <Phone className="h-4 w-4 mt-0.5 text-accent" />
                <span>{b.phone}{b.phone2 && <><br />{b.phone2}</>}</span>
              </a>
              <a href={`mailto:${b.email}`} className="flex items-start gap-2 hover:text-primary">
                <Mail className="h-4 w-4 mt-0.5 text-accent" /> {b.email}
              </a>
            </div>
            <ul className="mt-4 space-y-3">
              {b.hours.map((h) => (
                <li key={h.day} className="flex justify-between text-sm border-b border-border pb-3 last:border-0">
                  <span className="font-medium">{h.day}</span>
                  <span className="text-muted-foreground">{h.time}</span>
                </li>
              ))}
            </ul>
            <Link to="/appointment"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-full font-medium">
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`https://www.google.com/maps/search/?api=1&query=${b.mapQuery}`} target="_blank" rel="noopener noreferrer"
              className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-3 border border-border rounded-full font-medium hover:bg-muted">
              <Navigation className="h-4 w-4" /> Get Directions
            </a>
          </aside>
        </section>

        {/* Doctors */}
        {branchDoctors.length > 0 && (
          <section className="bg-muted/40 py-20">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="font-display text-3xl mb-10 flex items-center gap-3"><Stethoscope className="h-7 w-7 text-primary" /> Doctors at this branch</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {branchDoctors.map((d) => (
                  <Link key={d.slug} to="/doctors/$slug" params={{ slug: d.slug }}
                    className="group bg-card rounded-2xl overflow-hidden ring-1 ring-border hover:shadow-lift transition">
                    <img src={d.photo} alt={d.name} width={900} height={1100} loading="lazy"
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="p-5">
                      <h4 className="font-display text-lg">{d.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{d.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Therapists */}
        {branchTherapists.length > 0 && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="font-display text-3xl mb-10 flex items-center gap-3"><Users className="h-7 w-7 text-accent" /> Therapists at this branch</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {branchTherapists.map((t) => (
                  <div key={t.slug} className="bg-card rounded-2xl overflow-hidden ring-1 ring-border">
                    <img src={t.photo} alt={t.name} width={900} height={1100} loading="lazy"
                      className="w-full aspect-[4/3] object-cover" />
                    <div className="p-5">
                      <h4 className="font-display text-lg">{t.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{t.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Gallery */}
        <section className="bg-muted/40 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-3xl mb-10">Branch Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {b.gallery.map((g, i) => (
                <img key={i} src={g} alt={`${b.name} facility`} loading="lazy" width={600} height={600}
                  className="w-full aspect-square object-cover rounded-2xl hover:scale-105 transition-transform duration-500" />
              ))}
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-3xl mb-6">Find us on the map</h2>
            <div className="rounded-3xl overflow-hidden ring-1 ring-border aspect-[16/8] bg-muted">
              <iframe
                title={`${b.name} location`}
                src={`https://www.google.com/maps?q=${b.mapQuery}&output=embed`}
                width="100%" height="100%" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function InfoCard({ icon: Icon, label, value, sub, href }: { icon: React.ElementType; label: string; value: string; sub?: string; href?: string }) {
  const Wrap: React.ElementType = href ? "a" : "div";
  return (
    <Wrap {...(href ? { href } : {})} className="block p-5 rounded-2xl bg-card ring-1 ring-border hover:ring-primary/50 transition">
      <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
        <Icon className="h-4 w-4 text-accent" /> {label}
      </div>
      <p className="mt-2 font-medium">{value}</p>
      {sub && <p className="mt-1 text-sm text-muted-foreground">{sub}</p>}
    </Wrap>
  );
}

function BranchHeroSlider({ branch: b }: { branch: Branch }) {
  const slides = Array.from(new Set([b.image, ...(b.gallery ?? [])])).filter(Boolean);
  const [idx, setIdx] = useState(0);
  const count = slides.length;

  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % count), 5500);
    return () => clearInterval(id);
  }, [count]);

  const go = (n: number) => setIdx(((n % count) + count) % count);

  return (
    <section className="relative h-[62vh] min-h-[460px] overflow-hidden bg-primary">
      {slides.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={`${b.name} — view ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-14">
        <nav className="text-xs text-white/80 mb-6 font-mono uppercase tracking-[0.2em] text-left self-start">
          <Link to="/">Home</Link> <span className="mx-2">/</span>
          <Link to="/branches">Branches</Link> <span className="mx-2">/</span>
          <span>{b.city}</span>
        </nav>
        <div className="flex flex-col items-center text-center">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <span className="bg-white/15 backdrop-blur text-white text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">{b.city}</span>
          {b.established && (
            <span className="bg-white/15 backdrop-blur text-white text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-full inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> Est. {b.established}
            </span>
          )}
          <span className="bg-accent text-accent-foreground text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-full inline-flex items-center gap-1">
            <ShieldCheck className="h-3 w-3" /> Certified Clinic
          </span>
        </div>
        <h1 className="font-display text-white text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-4xl mx-auto">{b.name}</h1>
        {b.nameBn && <p className="text-white/95 text-xl md:text-2xl mt-3 font-medium">{b.nameBn}</p>}
        {b.tagline && <p className="text-white/85 text-lg mt-4 max-w-3xl mx-auto leading-relaxed">{b.tagline}</p>}

        {count > 1 && (
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => go(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "w-8 bg-white" : "w-3 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
        </div>
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(idx - 1)}
            aria-label="Previous image"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 size-11 md:size-12 rounded-full bg-white/15 backdrop-blur text-white flex items-center justify-center hover:bg-white/25 transition"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(idx + 1)}
            aria-label="Next image"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 size-11 md:size-12 rounded-full bg-white/15 backdrop-blur text-white flex items-center justify-center hover:bg-white/25 transition"
          >
            <ChevronRight className="size-5" />
          </button>
        </>
      )}
    </section>
  );
}