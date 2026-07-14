import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { doctors } from "@/data/services";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";
import doc4 from "@/assets/doctor-4.jpg";

const imgs = [doc1, doc2, doc3, doc4];

export const Route = createFileRoute("/specialists")({
  head: () => ({
    meta: [
      { title: "Specialists — Speech Therapy Lab" },
      { name: "description", content: "Meet the board-certified specialists leading pediatric therapy and rehabilitation at Speech Therapy Lab." },
      { property: "og:title", content: "Specialists — Speech Therapy Lab" },
      { property: "og:description", content: "Board-certified clinicians leading pediatric care." },
      { property: "og:image", content: doc1 },
    ],
  }),
  component: Specialists,
});

function Specialists() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="max-w-7xl mx-auto px-6 py-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-6 block">Medical Board</span>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl mb-16">
          The specialists behind every clinical plan.
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {doctors.map((d, i) => (
            <div key={d.name}>
              <img src={imgs[i]} alt={d.name} width={800} height={1000} loading="lazy" className="w-full aspect-[4/5] object-cover rounded-2xl mb-5 ring-1 ring-black/5" />
              <h3 className="font-serif text-2xl leading-tight">{d.name}</h3>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">
                {d.title} · {d.credentials}
              </div>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}