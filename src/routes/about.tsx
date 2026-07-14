import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useEffect, useRef, useState } from "react";
import {
  Heart, ShieldCheck, Award, Lightbulb, Scale, Users, BabyIcon, TrendingUp,
  BadgeCheck, FlaskConical, ClipboardList, Globe2, Microscope, GraduationCap,
  MapPin, Home, Sparkles, Smile, Wallet, LineChart, Target, Eye, ArrowRight,
  ChevronRight, Phone, Quote, Stethoscope, Languages, MessageSquareHeart,
} from "lucide-react";
import facilityImg from "@/assets/facility.jpg";
import heroImg from "@/assets/hero-therapy.jpg";
import storyImg from "@/assets/home-about.jpg";
import ctaImg from "@/assets/home-cta.jpg";
import fac1 from "@/assets/service-speech.jpg";
import fac2 from "@/assets/service-ot.jpg";
import fac3 from "@/assets/service-sensory.jpg";
import fac4 from "@/assets/service-physio.jpg";
import fac5 from "@/assets/gallery-1.jpg";
import fac6 from "@/assets/gallery-2.jpg";
import fac7 from "@/assets/gallery-3.jpg";
import fac8 from "@/assets/gallery-4.jpg";
import ownerAsset from "@/assets/nurnobi-babu-portrait.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Speech Therapy Lab — Trusted Child Therapy & Rehabilitation" },
      { name: "description", content: "Bangladesh's leading speech therapy, child development and rehabilitation organization. Certified therapists, evidence-based care and family-centered treatment across 8+ branches." },
      { property: "og:title", content: "About Speech Therapy Lab" },
      { property: "og:description", content: "Transforming lives through compassion, expertise and evidence-based therapy." },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(eased * target));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return { value, ref };
}

const values = [
  { icon: Heart, title: "Compassion", desc: "Every child is met with warmth, patience and unconditional care." },
  { icon: ShieldCheck, title: "Trust", desc: "Transparent clinical practice families can rely on for life." },
  { icon: Award, title: "Excellence", desc: "Global standards of therapy delivered by certified specialists." },
  { icon: Lightbulb, title: "Innovation", desc: "Modern assessment tools and evidence-based methodologies." },
  { icon: Scale, title: "Integrity", desc: "Honest recommendations, ethical treatment, fair outcomes." },
  { icon: Users, title: "Family Support", desc: "Parents are true partners in every stage of the journey." },
  { icon: BabyIcon, title: "Child Safety", desc: "Safe, sanitized, child-first environments in every branch." },
  { icon: TrendingUp, title: "Continuous Improvement", desc: "Ongoing research, training and quality audits." },
];

const reasons = [
  { icon: BadgeCheck, title: "Certified Therapists", desc: "Licensed clinicians with international training." },
  { icon: FlaskConical, title: "Evidence-Based Treatment", desc: "Peer-reviewed methodologies only." },
  { icon: ClipboardList, title: "Personalized Therapy Plans", desc: "Every plan built around one child." },
  { icon: Globe2, title: "International Standards", desc: "Care benchmarked against global protocols." },
  { icon: Microscope, title: "Advanced Assessment Tools", desc: "Standardized diagnostic instruments." },
  { icon: GraduationCap, title: "Parent Training Programs", desc: "Empowering families with clinical skills." },
  { icon: MapPin, title: "Multiple Branches", desc: "8+ branches across Bangladesh." },
  { icon: Home, title: "Home Therapy Services", desc: "Certified therapists at your doorstep." },
  { icon: Sparkles, title: "Modern Therapy Rooms", desc: "Purpose-built, sensory-safe spaces." },
  { icon: Smile, title: "Child-Friendly Environment", desc: "Warm, playful, respectful atmosphere." },
  { icon: Wallet, title: "Affordable Packages", desc: "Transparent pricing and flexible plans." },
  { icon: LineChart, title: "Progress Monitoring", desc: "Measurable outcomes at every review." },
];

const timeline = [
  { year: "2008", title: "Foundation", desc: "Speech Therapy Lab is founded with a mission to bring international-standard pediatric therapy to Bangladesh." },
  { year: "2011", title: "First Therapy Center", desc: "Our flagship multi-disciplinary center opens in Dhaka with speech, OT and sensory integration." },
  { year: "2015", title: "National Expansion", desc: "Branches launch across Chattogram, Sylhet and additional regions." },
  { year: "2019", title: "Home Therapy Program", desc: "Certified therapists begin delivering care directly to families' homes." },
  { year: "2023", title: "17,000+ Families Served", desc: "A community of trust built across two decades of consistent care." },
  { year: "2026", title: "Future Vision", desc: "Research collaborations, digital tele-therapy and a national training academy." },
];

const facilities = [
  { img: fac1, title: "Speech Therapy Rooms", desc: "Sound-treated, one-on-one intervention spaces." },
  { img: fac2, title: "Assessment Rooms", desc: "Standardized diagnostic environments." },
  { img: fac3, title: "Sensory Integration Room", desc: "Full sensory-motor equipment suites." },
  { img: fac4, title: "Day Care", desc: "Structured, supervised therapeutic day-care." },
  { img: fac5, title: "Parent Counseling Area", desc: "Private consultation rooms for families." },
  { img: fac6, title: "Toy Lab", desc: "Curated play-based therapy library." },
  { img: fac7, title: "Training Hall", desc: "Continuing education for therapists & parents." },
  { img: fac8, title: "Waiting Lounge", desc: "Calm, family-friendly reception space." },
];

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img fetchPriority="high" decoding="async" src={heroImg} alt="Therapist working with a child" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/85" />
          </div>
          <div className="relative mx-auto max-w-6xl px-6 pt-36 pb-24 md:pt-44 md:pb-32 text-center text-primary-foreground">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-sm text-primary-foreground/80">
              <Link to="/" className="hover:text-primary-foreground">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-primary-foreground">About Us</span>
            </nav>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> About Speech Therapy Lab
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-up">
              About Speech Therapy Lab
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Transforming lives through compassion, expertise, and evidence-based therapy.
            </p>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-card">
                <img loading="lazy" decoding="async" src={storyImg} alt="Therapy session in progress" className="w-full h-[520px] object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-card p-6 shadow-lift border">
                <div className="text-3xl font-bold text-primary">18+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Years of care</div>
              </div>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Story</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight text-foreground">
                A trusted name in child development and rehabilitation.
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                Speech Therapy Lab began nearly two decades ago with one conviction — that every child in Bangladesh deserves access to the same standard of pediatric therapy offered by the world's leading children's hospitals. Today, we are a nationwide organization built on scientific assessment, child-centered protocols and a family-first philosophy.
              </p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
                {["Trusted healthcare organization","Professional therapists","Scientific assessment","Child-centered care","Nationwide services","Family-focused approach"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-foreground">
                    <BadgeCheck className="h-5 w-5 text-accent shrink-0" /> {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition hover:bg-primary/90 hover:-translate-y-0.5">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="bg-secondary/50 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 mb-20 md:mb-28">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Leadership</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">Meet the Founder</h2>
            </div>
            <div className="relative">
              {/* soft decorative frame */}
              <div aria-hidden className="absolute -inset-4 md:-inset-6 rounded-[2rem] bg-gradient-to-br from-primary/10 via-accent/5 to-transparent blur-2xl" />
              <div className="relative grid gap-0 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] items-stretch bg-card rounded-3xl border overflow-hidden shadow-card">
                {/* PORTRAIT COLUMN — full-bleed editorial */}
                <div className="relative bg-primary min-h-[460px] lg:min-h-full overflow-hidden">
                  {/* full-bleed portrait */}
                  <img
                    src={ownerAsset.url}
                    alt="Dr. Nurnobi Babu — Founder & Chief Speech-Language Pathologist"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
                  />
                  {/* gradient wash for legibility */}
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-primary/35" />
                  {/* dot pattern accent */}
                  <div aria-hidden className="absolute inset-0 opacity-[0.10] mix-blend-overlay" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "18px 18px" }} />
                  {/* vertical label */}
                  <div className="absolute left-5 top-6 [writing-mode:vertical-rl] rotate-180 text-[10px] font-mono uppercase tracking-[0.4em] text-primary-foreground/80">
                    Est. 2008 · Founder
                  </div>
                  {/* signature badge */}
                  <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground ring-1 ring-primary-foreground/25">
                    <Stethoscope className="h-3 w-3" /> Chief Clinician
                  </div>
                  {/* name plate at bottom — centered */}
                  <div className="absolute inset-x-0 bottom-5 flex justify-center px-5">
                    <div className="flex flex-col items-center text-center rounded-2xl bg-card/95 backdrop-blur px-5 py-3 shadow-lift border">
                      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent">Founder & Chief Clinician</span>
                      <span className="font-display text-lg font-bold text-foreground leading-tight mt-0.5">Dr. Nurnobi Babu</span>
                    </div>
                  </div>
                </div>

                {/* CONTENT COLUMN */}
                <div className="relative p-8 md:p-12">
                  <Quote aria-hidden className="absolute right-6 top-6 h-14 w-14 text-primary/10" strokeWidth={1} />
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 text-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
                    <BadgeCheck className="h-3.5 w-3.5" /> Founder & Owner
                  </span>
                  <h3 className="mt-5 font-display text-3xl md:text-4xl font-bold text-foreground leading-[1.1]">
                    Dr. Nurnobi Babu
                  </h3>
                  <p className="mt-2 text-sm md:text-base font-medium text-primary">
                    Chief Speech-Language Pathologist
                  </p>

                  {/* Founder's message */}
                  <div className="mt-8 relative rounded-2xl border bg-gradient-to-br from-primary/5 via-secondary/40 to-transparent p-6 md:p-7">
                    <Quote aria-hidden className="absolute -top-4 left-6 h-9 w-9 rounded-full bg-primary text-primary-foreground p-2 shadow-card" strokeWidth={2} />
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent mb-3">A message from the founder</p>
                    <blockquote className="font-display text-base md:text-lg leading-snug text-foreground">
                      "Every child deserves the same standard of care the world's best children's hospitals give — right here, close to home."
                    </blockquote>
                    <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                      When I began this journey nearly two decades ago, families in Bangladesh had to travel abroad for even the most basic pediatric speech and developmental care. I promised myself that would change. Today, our therapists carry that same promise into every session — <span className="text-foreground font-medium">meet the child where they are, walk with the family, measure every step of progress, and never compromise on science or compassion.</span>
                    </p>
                    <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                      Speech Therapy Lab is more than a clinic — it is a movement to give every Bangladeshi child a voice, a chance, and a future they deserve.
                    </p>
                    <div className="mt-5 flex items-center gap-3">
                      <div className="h-px flex-1 bg-border" />
                      <span className="font-display text-lg text-primary italic">— Dr. Nurnobi Babu</span>
                    </div>
                  </div>

                  {/* credentials chips */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      { icon: GraduationCap, t: "SLP, MSc" },
                      { icon: BabyIcon, t: "Pediatric Specialist" },
                      { icon: Languages, t: "Bilingual Therapy" },
                      { icon: MessageSquareHeart, t: "Family-Centered Care" },
                    ].map(({ icon: Icon, t }) => (
                      <span key={t} className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-xs font-medium text-foreground">
                        <Icon className="h-3.5 w-3.5 text-primary" /> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Purpose</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">Mission & Vision</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Target, tag: "Our Mission", text: "Deliver world-class speech therapy, rehabilitation and child development services with compassion and excellence." },
                { icon: Eye, tag: "Our Vision", text: "To become Bangladesh's most trusted child development and rehabilitation healthcare organization." },
              ].map(({ icon: Icon, tag, text }) => (
                <div key={tag} className="card-lift rounded-3xl bg-card p-8 md:p-10 shadow-card border">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{tag}</div>
                  <p className="mt-3 text-xl md:text-2xl font-medium leading-relaxed text-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What we stand for</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">Our Core Values</h2>
              <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">Eight principles that guide every therapy plan, every family conversation and every clinical decision.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="card-lift group rounded-2xl bg-card p-6 border shadow-card">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-secondary/50 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">The Difference</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">Why Families Choose Us</h2>
            </div>
            <div className="grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map(({ icon: Icon, title, desc }) => (
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

        {/* JOURNEY / TIMELINE */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Milestones</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">Our Journey</h2>
            </div>
            <ol className="relative border-l-2 border-primary/20 ml-4 md:ml-8 space-y-10">
              {timeline.map((t, i) => (
                <li key={t.year} className="pl-8 md:pl-12 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                  <span className="absolute -left-[11px] mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary ring-4 ring-primary/15" />
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{t.year}</div>
                  <h3 className="mt-1 text-xl md:text-2xl font-semibold text-foreground">{t.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{t.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* STATISTICS */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground py-20">
          <div className="absolute inset-0 opacity-10">
            <img loading="lazy" decoding="async" src={facilityImg} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold">Impact in Numbers</h2>
              <p className="mt-3 text-primary-foreground/80">Two decades of measurable outcomes.</p>
            </div>
            <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-primary-foreground">
              {[
                { n: 17000, s: "+", l: "Happy Families" },
                { n: 100, s: "+", l: "Professional Therapists" },
                { n: 10, s: "+", l: "Therapy Programs" },
                { n: 8, s: "+", l: "Branches" },
                { n: 95, s: "%", l: "Parent Satisfaction" },
                { n: 24, s: "+", l: "Specialized Services" },
              ].map((c) => (
                <div key={c.l} className="text-center">
                  <StatCounter target={c.n} suffix={c.s} label={c.l} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FACILITIES */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Inside our centers</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">Our Facilities</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {facilities.map((f) => (
                <article key={f.title} className="card-lift group overflow-hidden rounded-2xl bg-card border shadow-card">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img loading="lazy" decoding="async" src={f.img} alt={f.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* OUR PROMISE / CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img loading="lazy" decoding="async" src={ctaImg} alt="Happy child with therapist" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
          </div>
          <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32 text-center text-primary-foreground">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">Our Promise</span>
            <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Every child deserves the opportunity to reach their full potential.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90 leading-relaxed">
              We are committed to providing compassionate, evidence-based and family-centered therapy services that help children communicate, learn and thrive.
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

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { value, ref } = useCountUp(target);
  return (
    <div ref={ref}>
      <div className="font-serif text-4xl md:text-5xl font-bold tabular-nums">
        {value.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-sm text-primary-foreground/85">{label}</div>
    </div>
  );
}
