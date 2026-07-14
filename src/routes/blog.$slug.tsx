import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { blogPosts, getPost, type BlogPost } from "@/data/blog";
import { Clock, ArrowRight, Tag } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Article — Speech Therapy Lab" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.post;
    return {
      meta: [
        { title: `${p.title} — Speech Therapy Lab` },
        { name: "description", content: p.excerpt },
        { name: "keywords", content: p.tags.join(", ") },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { property: "og:image", content: p.cover },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org", "@type": "Article",
          headline: p.title, image: [p.cover],
          datePublished: p.publishedAt,
          author: { "@type": "Person", name: p.author, jobTitle: p.authorRole },
          publisher: { "@type": "Organization", name: "Speech Therapy Lab" },
          articleSection: p.category,
          keywords: p.tags.join(", "),
        }),
      }],
    };
  },
  notFoundComponent: PostNotFound,
  errorComponent: PostError,
  component: PostDetail,
});

function PostNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="font-display text-4xl mb-4">Article not found</h1>
        <Link to="/blog" className="text-primary underline">Back to blog</Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function PostError({ reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="font-display text-3xl mb-4">Something went wrong</h1>
        <button onClick={() => { reset(); router.invalidate(); }}
          className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full">Try again</button>
      </div>
    </div>
  );
}

function PostDetail() {
  const { post } = Route.useLoaderData() as { post: BlogPost };
  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const fallback = related.length ? related : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <article>
          <header className="max-w-3xl mx-auto px-6 pt-28 pb-10">
            <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6 font-mono uppercase tracking-[0.2em]">
              <Link to="/">Home</Link> <span className="mx-2">/</span>
              <Link to="/blog">Blog</Link> <span className="mx-2">/</span>
              <span className="text-foreground">{post.category}</span>
            </nav>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">{post.category}</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mt-4">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mt-6 leading-relaxed">{post.excerpt}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
              <div>
                <span className="font-medium">{post.author}</span>
                <span className="text-muted-foreground"> · {post.authorRole}</span>
              </div>
              <span className="text-muted-foreground">·</span>
              <time className="text-muted-foreground" dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
              </time>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readMinutes} min read</span>
            </div>
          </header>

          <div className="max-w-5xl mx-auto px-6">
            <img fetchPriority="high" decoding="async" src={post.cover} alt={post.title}
              className="w-full aspect-[16/9] object-cover rounded-3xl ring-1 ring-border" />
          </div>

          <div className="max-w-3xl mx-auto px-6 py-16 space-y-6 text-lg leading-relaxed text-foreground/90">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <div className="pt-8 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-[0.15em] px-3 py-1.5 rounded-full bg-muted">
                  <Tag className="h-3 w-3" /> {t}
                </span>
              ))}
            </div>
          </div>
        </article>

        <section className="bg-muted/40 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-3xl mb-10">Related articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {fallback.map((p) => (
                <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }}
                  className="group bg-card rounded-2xl overflow-hidden ring-1 ring-border hover:shadow-lift transition">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img src={p.cover} alt={p.title} loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-accent">{p.category}</div>
                    <h3 className="font-display text-lg leading-tight mt-2 group-hover:text-primary transition">{p.title}</h3>
                    <div className="mt-3 inline-flex items-center gap-1 text-sm text-primary font-medium">
                      Read <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
