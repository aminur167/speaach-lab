import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { faqGroups } from "@/data/content";
import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Speech Therapy Lab" },
      { name: "description", content: "Answers to the most common questions parents ask us — about appointments, services, fees, and family support." },
      { name: "keywords", content: "speech therapy FAQ, therapy fees, assessment, autism" },
      { property: "og:title", content: "FAQ — Speech Therapy Lab" },
      { property: "og:description", content: "Answers to the most common parent questions." },
      { property: "og:url", content: "/faq" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqGroups.flatMap((g) => g.items).map((i) => ({
          "@type": "Question", name: i.q,
          acceptedAnswer: { "@type": "Answer", text: i.a },
        })),
      }),
    }],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative pt-32 pb-16 bg-gradient-to-b from-muted/60 to-background">
          <div className="max-w-4xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6 font-mono uppercase tracking-[0.2em]">
              <Link to="/">Home</Link> <span className="mx-2">/</span> FAQ
            </nav>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Frequently Asked Questions</span>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight mt-4">
              Everything you might want to know.
            </h1>
            <p className="text-lg text-muted-foreground mt-5">
              Can't find your question? Our clinical coordinators are one call away.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-24 space-y-14">
          {faqGroups.map((g) => (
            <div key={g.title}>
              <h2 className="font-display text-2xl mb-6">{g.title}</h2>
              <div className="divide-y divide-border rounded-2xl bg-card ring-1 ring-border overflow-hidden">
                {g.items.map((item, i) => (
                  <FAQItem key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}

          <div className="mt-8 rounded-3xl bg-primary text-primary-foreground p-10 text-center">
            <MessageCircle className="mx-auto h-8 w-8 mb-4 opacity-90" />
            <h2 className="font-display text-3xl">Still have questions?</h2>
            <p className="mt-3 opacity-90">Our clinical coordinators typically reply within one working day.</p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="px-6 py-3 rounded-full bg-white text-primary font-medium text-sm hover:opacity-90">Contact us</Link>
              <Link to="/appointment" className="px-6 py-3 rounded-full border border-white/40 text-white font-medium text-sm hover:bg-white/10">Book appointment</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen(!open)}
      className="w-full text-left p-6 flex gap-4 items-start hover:bg-muted/40 transition">
      <div className="flex-1">
        <div className="font-display text-lg leading-snug">{q}</div>
        <div className={`overflow-hidden transition-all ${open ? "max-h-64 mt-3" : "max-h-0"}`}>
          <p className="text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
      <ChevronDown className={`h-5 w-5 mt-1 text-muted-foreground shrink-0 transition ${open ? "rotate-180 text-primary" : ""}`} />
    </button>
  );
}