import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { galleryItems, galleryCategories } from "@/data/content";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import teamHero from "@/assets/team-hero.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Speech Therapy Lab" },
      { name: "description", content: "A visual tour of our therapy rooms, sensory gyms, waiting areas and clinical team across every Speech Therapy Lab branch." },
      { name: "keywords", content: "speech therapy gallery, occupational therapy, sensory integration, ABA, Bangladesh healthcare" },
      { property: "og:title", content: "Gallery — Speech Therapy Lab" },
      { property: "og:description", content: "See inside our clinics." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: teamHero },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("All");
  const [open, setOpen] = useState<null | (typeof galleryItems)[number]>(null);
  const items = useMemo(
    () => (filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter)),
    [filter],
  );

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative pt-32 pb-16 bg-gradient-to-b from-muted/60 to-background">
          <div className="max-w-7xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6 font-mono uppercase tracking-[0.2em]">
              <Link to="/">Home</Link> <span className="mx-2">/</span> Gallery
            </nav>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Gallery</span>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight mt-4 max-w-3xl">
              Inside our clinics.
            </h1>
            <p className="text-lg text-muted-foreground mt-5 max-w-2xl">
              A behind-the-scenes look at the therapy rooms, sensory gyms and families who make Speech Therapy Lab.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-wrap gap-2 mb-10">
            {galleryCategories.map((c) => (
              <button key={c} onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === c ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/70"
                }`}>{c}</button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:_balance]">
            {items.map((g, i) => (
              <button key={`${g.src}-${i}`} onClick={() => setOpen(g)}
                className="mb-4 block w-full overflow-hidden rounded-2xl bg-muted group relative">
                <img src={g.src} alt={g.alt} loading="lazy"
                  className={`w-full ${g.ratio === "portrait" ? "aspect-[4/5]" : g.ratio === "square" ? "aspect-square" : "aspect-[4/3]"} object-cover group-hover:scale-105 transition-transform duration-500`} />
                <div className="absolute inset-x-0 bottom-0 p-3 text-left text-white text-xs font-mono uppercase tracking-[0.15em] bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition">
                  {g.category}
                </div>
              </button>
            ))}
          </div>

          {items.length === 0 && (
            <p className="text-center py-16 text-muted-foreground">No images in this category yet.</p>
          )}
        </section>

        {open && (
          <div role="dialog" aria-modal="true" onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
            <button onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute top-6 right-6 h-11 w-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20">
              <X className="h-5 w-5" />
            </button>
            <img src={open.src} alt={open.alt} className="max-h-[85vh] max-w-[92vw] object-contain rounded-xl" />
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}