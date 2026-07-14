import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { services } from "@/data/services";
import { branchesList } from "@/data/team";
import slideSpeech from "@/assets/slide-speech.jpg";
import slideOt from "@/assets/slide-ot.jpg";
import slideAutism from "@/assets/slide-autism.jpg";
import slideConsult from "@/assets/slide-consult.jpg";
import slideAssessment from "@/assets/slide-assessment.jpg";
import slideAba from "@/assets/slide-aba.jpg";
import slideHappy from "@/assets/slide-happy.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import aboutImg from "@/assets/home-about.jpg";
import ctaImg from "@/assets/home-cta.jpg";
import facilityImg from "@/assets/facility.jpg";
import parentsImg from "@/assets/parents.jpg";
import parent1 from "@/assets/parent-1.jpg";
import parent2 from "@/assets/parent-2.jpg";
import parent3 from "@/assets/parent-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Speech Therapy Lab · Bangladesh's Trusted Child Development Center" },
      { name: "description", content: "Premium speech therapy, occupational therapy, autism care, ADHD support and child development services across Bangladesh. Certified therapists. International standards. 17,000+ families served." },
      { property: "og:title", content: "Helping Every Child Find Their Voice — Speech Therapy Lab" },
      { property: "og:description", content: "Bangladesh's most trusted Speech Therapy & Child Development Center. Certified therapists. Nationwide branches." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const trustItems = [
  { t: "Certified Therapists", d: "Internationally trained clinical team" },
  { t: "Personalized Therapy", d: "Every child, an individual plan" },
  { t: "Modern Assessment", d: "Standardized diagnostic tools" },
  { t: "Child-Friendly Environment", d: "Warm, sensory-regulated spaces" },
  { t: "Nationwide Centers", d: "Trusted branches across Bangladesh" },
];

const whyChoose = [
  { t: "Experienced Therapists", d: "Senior clinicians with decades of pediatric experience." },
  { t: "Evidence-Based Therapy", d: "International protocols, measurable outcomes." },
  { t: "Customized Treatment Plans", d: "Every plan is built around your child." },
  { t: "Modern Assessment Tools", d: "Gold-standard standardized instruments." },
  { t: "Parent Training", d: "Structured coaching so progress compounds at home." },
  { t: "Home Therapy", d: "Certified therapists visit families across the city." },
  { t: "Multiple Branches", d: "Convenient access from Dhaka to Sylhet." },
  { t: "Affordable Care", d: "Transparent pricing and insurance support." },
];

const processSteps: [string, string, string][] = [
  ["01", "Book Appointment", "Reserve a slot online or by phone in minutes."],
  ["02", "Assessment", "Comprehensive diagnostic evaluation by a senior specialist."],
  ["03", "Therapy Planning", "A personalized clinical roadmap for your child."],
  ["04", "Regular Therapy", "Evidence-based sessions in premium therapy rooms."],
  ["05", "Parent Guidance", "Structured coaching so progress continues at home."],
  ["06", "Progress Monitoring", "Fortnightly outcome tracking and plan refinement."],
];

const testimonials = [
  { img: parent1, name: "Nusrat A.", loc: "Dhanmondi, Dhaka", quote: "For the first time in two years, my son called me 'Ma'. I cannot describe what that moment felt like for our family.", child: "Speech clarity after 6 months" },
  { img: parent2, name: "Rashed K.", loc: "Agrabad, Chittagong", quote: "The team treats my daughter like a person first and a patient second. Every session, we see her confidence grow.", child: "ADHD focus & school readiness" },
  { img: parent3, name: "Farzana H.", loc: "Uttara, Dhaka", quote: "Warm, professional, deeply human. Exactly what a family walking this journey needs.", child: "Autism care & social skills" },
];

const branches = branchesList.slice(0, 3);

const articles = [
  { t: "Early Signs of Speech Delay in Children Under 3", c: "Speech Development", img: gallery3 },
  { t: "Understanding Autism: A Parent's First Guide", c: "Autism", img: aboutImg },
  { t: "ADHD in Bangladeshi Classrooms: What Works", c: "ADHD", img: gallery4 },
];

type Slide = {
  img: string;
  badge: string;
  title: string;
  highlight: string;
  desc: string;
  cta1: { label: string; to: "/appointment" | "/services" | "/specialists" | "/contact" | "/research" };
  cta2: { label: string; to: "/appointment" | "/services" | "/specialists" | "/contact" | "/research" };
};

const heroSlides: Slide[] = [
  {
    img: slideSpeech, badge: "Speech Therapy",
    title: "Helping Every Child",
    highlight: "Find Their Voice",
    desc: "Evidence-based speech, language and communication therapy delivered by certified pediatric clinicians in warm, world-class therapy rooms.",
    cta1: { label: "Book Appointment", to: "/appointment" },
    cta2: { label: "Explore Services", to: "/services" },
  },
  {
    img: slideAssessment, badge: "Early Assessment",
    title: "Early Assessment",
    highlight: "Changes Lives",
    desc: "Gold-standard developmental evaluations catch delays early — giving your child the head start they deserve on their journey.",
    cta1: { label: "Book Assessment", to: "/appointment" },
    cta2: { label: "Meet Specialists", to: "/specialists" },
  },
  {
    img: slideAutism, badge: "Autism & ADHD Care",
    title: "Professional Autism",
    highlight: "& ADHD Care",
    desc: "Integrated, family-centred therapy programmes for children on the spectrum and those with attention differences — with measurable outcomes.",
    cta1: { label: "View Programs", to: "/services" },
    cta2: { label: "Contact Us", to: "/contact" },
  },
  {
    img: slideOt, badge: "Occupational Therapy",
    title: "Therapy That Builds",
    highlight: "Confidence",
    desc: "Play-based occupational and sensory therapy that helps children master fine motor skills, self-regulation and everyday independence.",
    cta1: { label: "Book Session", to: "/appointment" },
    cta2: { label: "Learn More", to: "/services" },
  },
  {
    img: slideConsult, badge: "Family-Centred Care",
    title: "A Complete Child",
    highlight: "Development Center",
    desc: "Speech, OT, ABA, physio, psychology and pediatric medicine — every clinician your child needs under one trusted roof.",
    cta1: { label: "Explore Services", to: "/services" },
    cta2: { label: "Book Appointment", to: "/appointment" },
  },
  {
    img: slideAba, badge: "ABA Therapy",
    title: "Trusted By Thousands",
    highlight: "Of Families",
    desc: "17,000+ Bangladeshi families have trusted our clinical team with their child's development — measurable progress, one session at a time.",
    cta1: { label: "Meet Our Team", to: "/specialists" },
    cta2: { label: "Contact Us", to: "/contact" },
  },
  {
    img: slideHappy, badge: "Every Child Matters",
    title: "Every Child Deserves",
    highlight: "A Better Future",
    desc: "From first words to full confidence — we walk this journey with your family, celebrating every milestone along the way.",
    cta1: { label: "Book Consultation", to: "/appointment" },
    cta2: { label: "Read Success Stories", to: "/research" },
  },
];

function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const touchStart = useRef<number | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % heroSlides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length), []);

  // autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [paused, next, index]);

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // GSAP text animation on slide change
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-anim]", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        clearProps: "all",
      });
    }, el);
    return () => ctx.revert();
  }, [index]);

  const onTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (dx > 60) prev();
    else if (dx < -60) next();
    touchStart.current = null;
  };

  const s = heroSlides[index];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Speech Therapy Lab highlights"
      className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-primary text-primary-foreground"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          aria-hidden={i !== index}
        >
          <img
            src={slide.img}
            alt={slide.title}
            width={1920}
            height={1280}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            className={`absolute inset-0 h-full w-full object-cover will-change-transform ${i === index ? "hero-kenburns" : ""}`}
          />
        </div>
      ))}

      {/* Premium dark-blue gradient overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-[hsl(215_60%_10%/0.75)] via-[hsl(215_55%_14%/0.55)] to-[hsl(215_65%_8%/0.85)]" />
      <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,transparent_35%,hsl(215_60%_8%/0.55)_100%)]" />

      {/* Content */}
      <div ref={contentRef} className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-[720px] mx-auto">
          <span data-hero-anim className="inline-flex items-center gap-2 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-accent mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            {s.badge}
          </span>
          <h1 data-hero-anim className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white text-balance drop-shadow-lg">
            {s.title} <span className="italic text-accent">{s.highlight}</span>
          </h1>
          <p data-hero-anim className="mt-6 text-base md:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
            {s.desc}
          </p>
          <div data-hero-anim className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to={s.cta1.to}
              className="px-8 py-4 bg-accent text-accent-foreground rounded-full text-sm font-semibold tracking-wide shadow-2xl hover:shadow-[0_20px_40px_-10px_hsl(35_85%_55%/0.5)] hover:-translate-y-0.5 transition-all"
            >
              {s.cta1.label}
            </Link>
            <Link
              to={s.cta2.to}
              className="px-8 py-4 border border-white/50 text-white rounded-full text-sm font-semibold hover:bg-white/15 backdrop-blur-md transition-all"
            >
              {s.cta2.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Prev / Next buttons */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="hidden md:grid place-items-center absolute left-6 top-1/2 -translate-y-1/2 z-40 size-14 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/25 text-white hover:bg-white/25 hover:scale-105 transition-all"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="hidden md:grid place-items-center absolute right-6 top-1/2 -translate-y-1/2 z-40 size-14 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/25 text-white hover:bg-white/25 hover:scale-105 transition-all"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* Pagination */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-10 bg-accent" : "w-4 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="hidden md:flex absolute bottom-8 right-8 z-40 items-center gap-3 text-white/80 font-mono text-xs tracking-[0.2em]">
        <span className="text-white text-lg font-serif">{String(index + 1).padStart(2, "0")}</span>
        <span className="h-px w-10 bg-white/40" />
        <span>{String(heroSlides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}

function Home() {
  const featured = services.slice(0, 6);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSlider />

        {/* TRUST BAR */}
        <section className="border-b border-border bg-cream">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {trustItems.map((it, i) => (
              <div key={it.t} className="flex flex-col items-start gap-2">
                <div className="size-10 rounded-full border border-primary/25 flex items-center justify-center text-primary font-mono text-xs">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-serif text-base leading-tight">{it.t}</div>
                <div className="text-xs text-muted-foreground">{it.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="A therapist working with a Bangladeshi child on fine motor skills"
              width={1408}
              height={1600}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-3xl ring-1 ring-black/5"
            />
            <div className="hidden md:block absolute -bottom-8 -right-8 bg-background rounded-2xl p-6 shadow-xl border border-border max-w-[240px]">
              <div className="font-serif text-4xl mb-1">17k+</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Children & Families Cared For</div>
            </div>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">About Speech Therapy Lab</span>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight mb-8">
              A trusted healthcare home for every child's development journey.
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground mb-2">Our Mission</div>
                <p>To deliver internationally-standard speech, occupational and developmental therapy to every child in Bangladesh — with warmth, dignity and measurable results.</p>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground mb-2">Our Vision</div>
                <p>A Bangladesh where every child, regardless of neurotype or background, has access to premium child-development care close to home.</p>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground mb-2">Why Families Trust Us</div>
                <p>A senior clinical team, evidence-based programs, and a warm, child-first environment engineered to make progress feel effortless.</p>
              </div>
            </div>
            <Link to="/about" className="inline-flex mt-10 px-8 py-4 border border-primary text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all">
              Read More About Us
            </Link>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24 md:py-32 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">Our Services</span>
                <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-[1.1]">
                  Comprehensive care <span className="italic">tailored to every child.</span>
                </h2>
              </div>
              <Link to="/services" className="font-mono text-[10px] uppercase tracking-[0.3em] underline underline-offset-8 hover:text-accent transition-colors">
                View all {services.length} services →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map((s) => (
                <article key={s.slug} className="group bg-background rounded-3xl overflow-hidden border border-border flex flex-col hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.name}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-serif text-2xl mb-3 leading-tight">{s.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">{s.short}</p>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="px-5 py-2.5 border border-primary text-primary rounded-full text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        Read More
                      </Link>
                      <Link
                        to="/appointment"
                        className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-xs font-medium hover:bg-primary/90 transition-all"
                      >
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24 md:py-32 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">Why Choose Speech Therapy Lab</span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-[1.1]">
              The care standard <span className="italic">Bangladeshi families deserve.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {whyChoose.map((it, i) => (
              <div key={it.t} className="bg-background p-8 hover:bg-cream transition-colors">
                <div className="font-mono text-[10px] tracking-[0.2em] text-accent mb-6">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-serif text-xl mb-3 leading-tight">{it.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-20">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">Our Therapy Process</span>
              <h2 className="font-serif text-3xl md:text-5xl italic leading-tight">
                A structured, gentle journey — from first call to lasting independence.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8">
              {processSteps.map(([n, t, d], i) => (
                <div key={n} className="relative">
                  <div className={`h-px w-full mb-6 ${i === 0 ? "bg-accent" : "bg-primary-foreground/20"}`} />
                  <div className="font-mono text-[10px] tracking-[0.2em] text-accent mb-4">STEP {n}</div>
                  <h4 className="font-serif text-xl mb-3 leading-tight">{t}</h4>
                  <p className="text-xs text-primary-foreground/70 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUCCESS STORIES */}
        <section className="py-24 md:py-32 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">Success Stories</span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-[1.1]">
              What Bangladeshi families <span className="italic">quietly say.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-cream rounded-3xl p-8 border border-border flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.img} alt={t.name} width={80} height={80} loading="lazy" className="size-16 rounded-full object-cover ring-2 ring-background" />
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">{t.loc}</div>
                  </div>
                </div>
                <div className="flex gap-1 text-accent mb-4 text-sm">★★★★★</div>
                <blockquote className="font-serif text-lg leading-snug italic flex-1">"{t.quote}"</blockquote>
                <div className="mt-6 pt-6 border-t border-border font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  Progress: {t.child}
                </div>
              </figure>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-24 md:py-32 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-16">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">Inside The Lab</span>
              <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-[1.1]">A glimpse into our therapy rooms and families.</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <img src={gallery1} alt="Modern therapy assessment room" width={1200} height={1500} loading="lazy" className="w-full object-cover rounded-2xl aspect-[4/5] md:row-span-2 md:h-full" />
              <img src={gallery2} alt="Sensory integration gym" width={1200} height={900} loading="lazy" className="w-full object-cover rounded-2xl aspect-[4/3]" />
              <img src={gallery3} alt="Speech therapy session with flashcards" width={1200} height={900} loading="lazy" className="w-full object-cover rounded-2xl aspect-[4/3]" />
              <img src={gallery4} alt="Parents observing a therapy session" width={1200} height={1500} loading="lazy" className="w-full object-cover rounded-2xl aspect-[4/5] md:row-span-2 md:h-full" />
              <img src={facilityImg} alt="Premium clinic interior" width={1200} height={900} loading="lazy" className="w-full object-cover rounded-2xl aspect-[4/3]" />
              <img src={parentsImg} alt="Parent training session" width={1200} height={900} loading="lazy" className="w-full object-cover rounded-2xl aspect-[4/3]" />
            </div>
          </div>
        </section>

        {/* BRANCHES */}
        <section className="py-24 md:py-32 max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">Our Branches</span>
              <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-[1.1]">Trusted centers <span className="italic">across Bangladesh.</span></h2>
            </div>
            <Link to="/branches" className="font-mono text-[10px] uppercase tracking-[0.3em] underline underline-offset-8 hover:text-accent transition-colors">
              All locations →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {branches.map((b) => (
              <Link
                key={b.slug}
                to="/branches/$slug"
                params={{ slug: b.slug }}
                className="block bg-background rounded-3xl overflow-hidden border border-border group hover:shadow-2xl transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={b.image} alt={b.name} width={1200} height={900} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl mb-4">{b.name}</h3>
                  <div className="text-sm text-muted-foreground leading-relaxed mb-2">{b.address}</div>
                  <div className="font-mono text-xs text-foreground mb-6">{b.phone}</div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(`https://www.google.com/maps/search/?api=1&query=${b.mapQuery}`, "_blank", "noopener,noreferrer");
                    }}
                    className="inline-flex px-5 py-2.5 border border-primary text-primary rounded-full text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Get Directions
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ARTICLES */}
        <section className="py-24 md:py-32 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-between items-end mb-16 gap-8">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">Latest Articles</span>
                <h2 className="font-serif text-3xl md:text-5xl">From our clinical journal.</h2>
              </div>
              <Link to="/research" className="font-mono text-[10px] uppercase tracking-[0.3em] underline underline-offset-8 hover:text-accent transition-colors">
                All articles →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {articles.map((a) => (
                <article key={a.t} className="group">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                    <img src={a.img} alt={a.t} width={1200} height={900} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-3">{a.c}</div>
                  <h3 className="font-serif text-xl leading-snug mb-3 group-hover:text-primary transition-colors">{a.t}</h3>
                  <Link to="/research" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary">Read article →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden">
          <img src={ctaImg} alt="A smiling child with a therapist during a session" width={1920} height={1088} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 py-28 md:py-36 text-center text-primary-foreground">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">Take The First Step</span>
            <h2 className="font-serif text-3xl md:text-6xl leading-[1.1] mb-8">
              Book your child's <span className="italic">assessment today.</span>
            </h2>
            <p className="text-primary-foreground/85 max-w-xl mx-auto mb-12">
              Most families are seen within 5–7 working days by a senior clinician.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/appointment" className="px-10 py-4 bg-accent text-accent-foreground rounded-full text-sm font-medium tracking-wide hover:shadow-2xl hover:-translate-y-0.5 transition-all">
                Book Appointment
              </Link>
              <a href="tel:+8801700000001" className="px-10 py-4 border border-primary-foreground/40 text-primary-foreground rounded-full text-sm font-medium hover:bg-primary-foreground/10 transition-all">
                Call Now · +880 1700-000 001
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
