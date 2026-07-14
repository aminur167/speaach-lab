import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getService, services, doctors, testimonials, type Service } from "@/data/services";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";
import doc4 from "@/assets/doctor-4.jpg";
import ctaImg from "@/assets/home-cta.jpg";
import {
  ArrowRight, BadgeCheck, CalendarPlus, ChevronRight, ClipboardList,
  Compass, FlaskConical, Globe2, GraduationCap, Heart, Home, MapPin,
  MessageCircle, Microscope, Phone, ShieldCheck, Sparkles, Star, Target,
  TrendingUp, Users, Quote,
} from "lucide-react";

const docImgs = [doc1, doc2, doc3, doc4];

const benefitIcons = [MessageCircle, GraduationCap, Users, Sparkles, Heart, TrendingUp];
const processIcons = [ClipboardList, Target, FlaskConical, Users, TrendingUp, BadgeCheck];
const whyChoose = [
  { icon: BadgeCheck, title: "Certified Therapists", desc: "Licensed specialists with international training." },
  { icon: Globe2, title: "International Standards", desc: "Care benchmarked against global protocols." },
  { icon: FlaskConical, title: "Evidence-Based Therapy", desc: "Only peer-reviewed methodologies." },
  { icon: Microscope, title: "Modern Assessment", desc: "Standardized diagnostic instruments." },
  { icon: Heart, title: "Family Support", desc: "Parents are true partners in every plan." },
  { icon: MapPin, title: "Multiple Branches", desc: "8+ centers across Bangladesh." },
];

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const svc = getService(params.slug);
    if (!svc) throw notFound();
    return { svc };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — Speech Therapy Lab" }, { name: "robots", content: "noindex" }] };
    }
    const { svc } = loaderData;
    return {
      meta: [
        { title: `${svc.name} — Speech Therapy Lab` },
        { name: "description", content: svc.overview },
        { property: "og:title", content: `${svc.name} — Speech Therapy Lab` },
        { property: "og:description", content: svc.overview },
        { property: "og:image", content: svc.image },
        { name: "twitter:image", content: svc.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl font-bold mb-6">Service not found</h1>
        <Link to="/services" className="text-primary underline underline-offset-8">Browse all services</Link>
      </div>
      <SiteFooter />
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { svc } = Route.useLoaderData() as { svc: Service };
  const doctor = doctors[svc.doctorIndex];
  const doctorImg = docImgs[svc.doctorIndex];
  const related = services.filter((x) => x.slug !== svc.slug).slice(0, 3);
  const gallery = svc.gallery.concat(svc.gallery).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: svc.name,
    description: svc.overview,
    medicineSystem: "https://schema.org/WesternConventional",
    provider: { "@type": "MedicalOrganization", name: "Speech Therapy Lab" },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img fetchPriority="high" decoding="async" src={svc.image} alt={svc.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/90" />
          </div>
          <div className="relative mx-auto max-w-6xl px-6 pt-36 pb-24 md:pt-44 md:pb-32 text-center text-primary-foreground">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center justify-center gap-2 text-sm text-primary-foreground/85">
              <Link to="/" className="hover:text-primary-foreground">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/services" className="hover:text-primary-foreground">Services</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-primary-foreground">{svc.name}</span>
            </nav>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Clinical Program
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-up">
              {svc.name}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              {svc.short}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/appointment" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary shadow-lift transition hover:-translate-y-0.5">
                <CalendarPlus className="h-4 w-4" /> Book Appointment
              </Link>
              <a href="tel:+8801700000000" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="overflow-hidden rounded-3xl shadow-card">
              <img loading="lazy" decoding="async" src={svc.image} alt={svc.name} className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Service Overview</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight text-foreground">
                About {svc.name}
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">{svc.overview}</p>
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Compass, label: "What it is", value: "Structured, clinician-led therapy program." },
                  { icon: Users, label: "Who it's for", value: svc.suitableFor[0] },
                  { icon: Star, label: "Why it matters", value: "Long-term functional independence." },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="rounded-2xl border bg-card p-4 shadow-card">
                    <Icon className="h-5 w-5 text-accent" />
                    <div className="mt-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</div>
                    <div className="mt-1 text-sm font-medium text-foreground leading-snug">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONDITIONS WE TREAT */}
        <section className="bg-secondary/50 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Conditions We Treat</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">Who this program serves</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {svc.suitableFor.map((c) => (
                <div key={c} className="card-lift flex items-center gap-3 rounded-2xl bg-card p-5 border shadow-card">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-medium text-foreground">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Key Benefits</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">What families gain</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {svc.benefits.map((b, i) => {
                const Icon = benefitIcons[i % benefitIcons.length];
                return (
                  <div key={b} className="card-lift group rounded-2xl bg-card p-6 border shadow-card">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">{b}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="bg-secondary/50 py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Therapy Process</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">A structured clinical pathway</h2>
            </div>
            <ol className="relative border-l-2 border-primary/20 ml-4 md:ml-8 space-y-8">
              {svc.process.map((p, i) => {
                const Icon = processIcons[i % processIcons.length];
                return (
                  <li key={p.title} className="pl-8 md:pl-12 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                    <span className="absolute -left-[15px] mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-primary/15">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Step {String(i + 1).padStart(2, "0")}</div>
                    <h3 className="mt-1 text-xl md:text-2xl font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{p.description}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">The Difference</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">Why choose Speech Therapy Lab</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {whyChoose.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="card-lift flex items-start gap-4 rounded-2xl bg-card p-6 border shadow-card">
                  <div className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="bg-secondary/50 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Therapy Gallery</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">Inside the program</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((g, i) => (
                <div key={i} className="overflow-hidden rounded-2xl shadow-card group aspect-[4/3]">
                  <img src={g} alt={`${svc.name} moment ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOCTOR */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl shadow-card">
                <img loading="lazy" decoding="async" src={doctorImg} alt={`Portrait of ${doctor.name}`} className="w-full aspect-[4/5] object-cover" />
              </div>
            </div>
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Recommended Specialist</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">{doctor.name}</h2>
              <div className="mt-2 text-sm font-medium text-muted-foreground">{doctor.title} · {doctor.credentials}</div>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {doctor.name} leads the clinical team for {svc.name} and personally reviews each new case at intake and every four weeks throughout the program.
              </p>
              <dl className="mt-6 grid sm:grid-cols-3 gap-4">
                {[
                  { k: "Experience", v: "15+ years" },
                  { k: "Specialization", v: svc.name },
                  { k: "Qualification", v: doctor.credentials },
                ].map((x) => (
                  <div key={x.k} className="rounded-2xl border bg-card p-4 shadow-card">
                    <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{x.k}</dt>
                    <dd className="mt-1 font-semibold text-foreground">{x.v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8">
                <Link to="/appointment" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition hover:-translate-y-0.5">
                  Book with {doctor.name.split(" ")[0]} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SUCCESS STORIES */}
        <section className="bg-secondary/50 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Success Stories</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">Parents on their child's journey</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <blockquote key={t.name} className="card-lift relative rounded-2xl bg-card p-8 border shadow-card">
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-4 text-foreground leading-relaxed">"{t.quote}"</p>
                  <footer className="mt-6 pt-4 border-t border-border/70">
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQ</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">Frequently asked questions</h2>
            </div>
            <div className="space-y-3">
              {svc.faq.map((f, i) => (
                <details key={f.q} className="group rounded-2xl bg-card border shadow-card p-6 open:shadow-lift transition-all" open={i === 0}>
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <span className="text-lg font-semibold text-foreground">{f.q}</span>
                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-open:rotate-45 text-lg">+</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* APPOINTMENT FORM */}
        <section id="appointment" className="bg-secondary/50 py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Book Appointment</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">Begin your {svc.name} journey</h2>
              <p className="mt-3 text-muted-foreground">Our care team will contact you within one working day.</p>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thank you — our care team will be in touch within one working day."); }}
              className="rounded-3xl bg-card border shadow-card p-6 md:p-10 grid gap-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Child Name" name="child" />
                <Field label="Parent Name" name="parent" />
                <Field label="Child Age" name="age" maxLength={20} />
                <Field label="Phone" name="phone" type="tel" />
                <Field label="Email" name="email" type="email" maxLength={255} />
                <div className="grid gap-2">
                  <label htmlFor="branch" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Branch</label>
                  <select id="branch" name="branch" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition">
                    <option>Dhaka — Uttara</option>
                    <option>Dhaka — Dhanmondi</option>
                    <option>Chattogram</option>
                    <option>Sylhet</option>
                    <option>Home Therapy</option>
                  </select>
                </div>
                <Field label="Preferred Date" name="date" type="date" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="problem" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Problem Description</label>
                <textarea id="problem" name="problem" rows={4} maxLength={1000} className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition resize-none" />
              </div>
              <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lift transition hover:-translate-y-0.5">
                Submit Appointment Request <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            {/* Emergency */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <a href="tel:+8801700000000" className="card-lift flex items-center gap-3 rounded-2xl bg-card p-5 border shadow-card">
                <Phone className="h-5 w-5 text-primary" /> <div><div className="text-xs text-muted-foreground">Call Now</div><div className="font-semibold text-foreground">+880 1700 000 000</div></div>
              </a>
              <a href="https://wa.me/8801700000000" className="card-lift flex items-center gap-3 rounded-2xl bg-card p-5 border shadow-card">
                <MessageCircle className="h-5 w-5 text-accent" /> <div><div className="text-xs text-muted-foreground">WhatsApp</div><div className="font-semibold text-foreground">Chat with us</div></div>
              </a>
              <Link to="/contact" className="card-lift flex items-center gap-3 rounded-2xl bg-card p-5 border shadow-card">
                <Home className="h-5 w-5 text-primary" /> <div><div className="text-xs text-muted-foreground">Consultation</div><div className="font-semibold text-foreground">Book a visit</div></div>
              </Link>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Related Services</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Explore related programs</h2>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
                All services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="card-lift group overflow-hidden rounded-3xl bg-card border shadow-card flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={r.image} alt={r.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{r.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.short}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img loading="lazy" decoding="async" src={ctaImg} alt="Happy child with therapist" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-32 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Book your child's therapy session today.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90 leading-relaxed">
              Compassionate, evidence-based and family-centered care — the first step is one conversation away.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/appointment" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary shadow-lift transition hover:-translate-y-0.5">
                Book Appointment <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20">
                <Phone className="h-4 w-4" /> Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", maxLength = 100 }: { label: string; name: string; type?: string; maxLength?: number }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        maxLength={maxLength}
        className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
      />
    </div>
  );
}
