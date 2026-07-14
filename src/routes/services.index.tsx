import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { services } from "@/data/services";
import { ArrowRight, CalendarPlus, ChevronRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-therapy.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Therapy & Healthcare Services — Speech Therapy Lab" },
      { name: "description", content: "Comprehensive evidence-based therapy services for children — speech, occupational, sensory, ABA, physiotherapy, autism, ADHD and 20+ specialized programs." },
      { property: "og:title", content: "Our Therapy & Healthcare Services" },
      { property: "og:description", content: "Comprehensive evidence-based therapy solutions to help every child reach their highest potential." },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImg} alt="Therapists working with children" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/85" />
          </div>
          <div className="relative mx-auto max-w-6xl px-6 pt-36 pb-24 md:pt-44 md:pb-32 text-center text-primary-foreground">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-sm text-primary-foreground/80">
              <Link to="/" className="hover:text-primary-foreground">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-primary-foreground">Services</span>
            </nav>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Clinical Programs
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-up">
              Our Therapy & Healthcare Services
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Comprehensive evidence-based therapy solutions designed to help every child achieve their highest potential.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.slug} className="card-lift group overflow-hidden rounded-3xl bg-card border shadow-card flex flex-col">
                <Link to="/services/$slug" params={{ slug: s.slug }} className="block overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-foreground leading-snug">
                    <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-primary transition-colors">
                      {s.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-border/70">
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                    >
                      Read more <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/appointment"
                      className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-accent-foreground shadow-card hover:-translate-y-0.5 transition"
                    >
                      <CalendarPlus className="h-3.5 w-3.5" /> Book
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