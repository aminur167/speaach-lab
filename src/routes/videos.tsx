import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { videoItems, videoCategories } from "@/data/content";
import { useMemo, useState } from "react";
import { Play, Search, X, Clock } from "lucide-react";
import teamHero from "@/assets/team-hero.jpg";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Video Gallery — Speech Therapy Lab" },
      { name: "description", content: "Watch success stories, therapy explainers, facility tours and parent guides from our clinical team." },
      { name: "keywords", content: "speech therapy videos, autism, ABA, parent guides" },
      { property: "og:title", content: "Video Gallery — Speech Therapy Lab" },
      { property: "og:description", content: "Watch stories and guides from our clinical team." },
      { property: "og:url", content: "/videos" },
      { property: "og:image", content: teamHero },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/videos" }],
  }),
  component: VideosPage,
});

function VideosPage() {
  const [filter, setFilter] = useState<(typeof videoCategories)[number]>("All");
  const [q, setQ] = useState("");
  const [active, setActive] = useState<null | (typeof videoItems)[number]>(null);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return videoItems.filter((v) => {
      const catOk = filter === "All" || v.category === filter;
      const qOk = !term || v.title.toLowerCase().includes(term) || v.description.toLowerCase().includes(term);
      return catOk && qOk;
    });
  }, [filter, q]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative pt-32 pb-16 bg-gradient-to-b from-muted/60 to-background">
          <div className="max-w-7xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6 font-mono uppercase tracking-[0.2em]">
              <Link to="/">Home</Link> <span className="mx-2">/</span> Videos
            </nav>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Video Gallery</span>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight mt-4 max-w-3xl">
              Watch our work, in motion.
            </h1>
            <p className="text-lg text-muted-foreground mt-5 max-w-2xl">
              Success stories, therapy explainers, facility tours and clinician-led parent guides.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              {videoCategories.map((c) => (
                <button key={c} onClick={() => setFilter(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    filter === c ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/70"
                  }`}>{c}</button>
              ))}
            </div>
            <label className="relative w-full md:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} maxLength={100}
                placeholder="Search videos"
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-muted border border-transparent focus:bg-background focus:border-primary focus:outline-none text-sm" />
            </label>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((v) => (
              <button key={v.id} onClick={() => setActive(v)}
                className="group text-left bg-card rounded-3xl overflow-hidden ring-1 ring-border hover:shadow-lift transition-all hover:-translate-y-1">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img src={v.thumbnail} alt={v.title} loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition">
                    <span className="h-14 w-14 rounded-full bg-white/90 flex items-center justify-center shadow-lift group-hover:scale-110 transition">
                      <Play className="h-5 w-5 fill-primary text-primary ml-0.5" />
                    </span>
                  </div>
                  <span className="absolute bottom-3 right-3 bg-black/70 text-white text-[11px] font-mono px-2 py-1 rounded flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {v.duration}
                  </span>
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-mono uppercase tracking-[0.15em] px-2.5 py-1 rounded-full">
                    {v.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg leading-tight">{v.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{v.description}</p>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center py-16 text-muted-foreground">No videos match your search.</p>
          )}
        </section>

        {active && (
          <div role="dialog" aria-modal="true" onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
            <button onClick={() => setActive(null)} aria-label="Close"
              className="absolute top-6 right-6 h-11 w-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20">
              <X className="h-5 w-5" />
            </button>
            <div onClick={(e) => e.stopPropagation()} className="w-full max-w-4xl">
              <div className="aspect-video">
              <iframe
                title={active.title}
                src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl bg-black"
              />
              </div>
              <div className="mt-4 flex items-center justify-between text-white/80 text-sm">
                <span className="truncate pr-4">{active.title}</span>
                <a href={`https://www.youtube.com/watch?v=${active.youtubeId}`} target="_blank" rel="noreferrer"
                  className="underline hover:text-white shrink-0">Open on YouTube</a>
              </div>
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}