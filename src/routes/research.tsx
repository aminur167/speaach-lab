import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import parentsImg from "@/assets/parents.jpg";
import facilityImg from "@/assets/facility.jpg";
import heroImg from "@/assets/hero-therapy.jpg";

const articles = [
  { t: "Early Signs of Speech Delay in Children Under 3", c: "Clinical Note", d: "Dr. Marcus Thorne", img: heroImg },
  { t: "The Neuroscience of Sensory Integration Therapy", c: "Research", d: "Sarah Jenkins, MSc", img: facilityImg },
  { t: "Rethinking ABA: A Dignity-First Framework", c: "Practice", d: "Dr. Julian Park", img: parentsImg },
  { t: "Parent Coaching as a Clinical Amplifier", c: "Family", d: "Dr. Elena Vance", img: parentsImg },
  { t: "Outcome Measurement in Pediatric Rehabilitation", c: "Research", d: "Dr. Elena Vance", img: facilityImg },
  { t: "Designing Sensory-Regulated Clinical Spaces", c: "Facility", d: "Sarah Jenkins, MSc", img: facilityImg },
];

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Insight — Speech Therapy Lab" },
      { name: "description", content: "Clinical notes, research updates, and practice writing from the Speech Therapy Lab team." },
      { property: "og:title", content: "Research & Insight — Speech Therapy Lab" },
      { property: "og:description", content: "From the Lab journal." },
      { property: "og:image", content: facilityImg },
    ],
  }),
  component: Research,
});

function Research() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="max-w-7xl mx-auto px-6 py-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-6 block">Research & Insight</span>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl mb-16">
          From the Lab journal.
        </h1>
        <div className="grid md:grid-cols-3 gap-10">
          {articles.map((a) => (
            <article key={a.t}>
              <img src={a.img} alt="" width={800} height={600} loading="lazy" className="w-full aspect-[4/3] object-cover rounded-2xl mb-5" />
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">{a.c}</div>
              <h3 className="font-serif text-xl leading-snug">{a.t}</h3>
              <div className="text-xs text-muted-foreground mt-2">By {a.d}</div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}