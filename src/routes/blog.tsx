import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { blogPosts, blogCategories } from "@/data/blog";
import { useMemo, useState } from "react";
import { Search, ArrowRight, Clock } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Insights — Speech Therapy Lab" },
      { name: "description", content: "Clinician-written articles on speech delay, autism, ADHD, parenting, learning, therapy, assessment and child mental health." },
      { name: "keywords", content: "speech delay, autism, ADHD, parenting, therapy, assessment, mental health" },
      { property: "og:title", content: "Blog & Insights — Speech Therapy Lab" },
      { property: "og:description", content: "Evidence-based articles by our clinical team." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { property: "og:image", content: blogPosts[0].cover },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [cat, setCat] = useState<"All" | (typeof blogCategories)[number]>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return blogPosts.filter((p) => {
      const catOk = cat === "All" || p.category === cat;
      const qOk = !term || p.title.toLowerCase().includes(term) || p.excerpt.toLowerCase().includes(term);
      return catOk && qOk;
    });
  }, [cat, q]);

  const featured = filtered[0];
  const rest = filtered.slice(1);
  const popular = [...blogPosts].slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative pt-32 pb-16 bg-gradient-to-b from-muted/60 to-background">
          <div className="max-w-7xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6 font-mono uppercase tracking-[0.2em]">
              <Link to="/">Home</Link> <span className="mx-2">/</span> Blog
            </nav>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Insights</span>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight mt-4 max-w-3xl">
              Clinician-written guidance for every family.
            </h1>
            <p className="text-lg text-muted-foreground mt-5 max-w-2xl">
              Practical, evidence-based articles from our speech, OT, ABA, physiotherapy and psychology teams.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-[1fr_320px] gap-12">
          <div>
            {/* Filter bar */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                <FilterChip active={cat === "All"} onClick={() => setCat("All")}>All</FilterChip>
                {blogCategories.map((c) => (
                  <FilterChip key={c} active={cat === c} onClick={() => setCat(c)}>{c}</FilterChip>
                ))}
              </div>
            </div>

            {/* Featured */}
            {featured && (
              <Link to="/blog/$slug" params={{ slug: featured.slug }}
                className="block group bg-card rounded-3xl overflow-hidden ring-1 ring-border hover:shadow-lift transition mb-12">
                <div className="grid md:grid-cols-2">
                  <div className="aspect-[4/3] md:aspect-auto overflow-hidden bg-muted">
                    <img src={featured.cover} alt={featured.title} loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                      <span className="text-accent">{featured.category}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {featured.readMinutes} min</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl leading-tight mt-4 group-hover:text-primary transition">
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground mt-4 leading-relaxed">{featured.excerpt}</p>
                    <div className="mt-6 text-sm">
                      <span className="font-medium">{featured.author}</span>
                      <span className="text-muted-foreground"> · {featured.authorRole}</span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {rest.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center py-16 text-muted-foreground">No articles match your search.</p>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-28 h-fit">
            <label className="relative block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} maxLength={100}
                placeholder="Search articles"
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-muted border border-transparent focus:bg-background focus:border-primary focus:outline-none text-sm" />
            </label>

            <div className="bg-card ring-1 ring-border rounded-3xl p-6">
              <h3 className="font-display text-lg mb-4">Popular reads</h3>
              <ul className="space-y-4">
                {popular.map((p) => (
                  <li key={p.slug}>
                    <Link to="/blog/$slug" params={{ slug: p.slug }}
                      className="group flex gap-3 items-start">
                      <img src={p.cover} alt="" loading="lazy"
                        className="h-14 w-14 rounded-lg object-cover shrink-0" />
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-accent">{p.category}</div>
                        <div className="text-sm font-medium leading-snug mt-1 group-hover:text-primary transition line-clamp-2">
                          {p.title}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card ring-1 ring-border rounded-3xl p-6">
              <h3 className="font-display text-lg mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {blogCategories.map((c) => (
                  <button key={c} onClick={() => setCat(c)}
                    className="text-xs px-3 py-1.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition">
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition ${
        active ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/70"
      }`}>{children}</button>
  );
}

function PostCard({ post }: { post: typeof blogPosts[number] }) {
  return (
    <Link to="/blog/$slug" params={{ slug: post.slug }}
      className="group bg-card rounded-3xl overflow-hidden ring-1 ring-border hover:shadow-lift transition-all hover:-translate-y-1">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img src={post.cover} alt={post.title} loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-accent">{post.category}</span>
          <span>·</span>
          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readMinutes} min</span>
        </div>
        <h3 className="font-display text-xl leading-tight mt-3 group-hover:text-primary transition">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-3 line-clamp-3 leading-relaxed">{post.excerpt}</p>
        <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary font-medium">
          Read article <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}