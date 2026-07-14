import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { branchesList } from "@/data/team";
import branchHero from "@/assets/branch-dhaka.jpg";
import { MapPin, Phone, Clock, ArrowRight, Navigation, Calendar } from "lucide-react";

export const Route = createFileRoute("/branches/")({
  head: () => ({
    meta: [
      { title: "Our Branches — Speech Therapy Lab" },
      { name: "description", content: "Speech Therapy Lab branches across Dhaka, Chattogram, Sylhet, Rangpur, Khulna, Rajshahi, Barisal, Mymensingh and Thakurgaon — every child, every district." },
      { property: "og:title", content: "Branches Across Bangladesh — Speech Therapy Lab" },
      { property: "og:description", content: "Find your nearest Speech Therapy Lab branch." },
      { property: "og:image", content: branchHero },
    ],
  }),
  component: BranchesPage,
});

function BranchesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
          <img fetchPriority="high" decoding="async" src={branchHero} alt="Our branches" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-background" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-14">
            <nav className="text-xs text-white/80 mb-6 font-mono uppercase tracking-[0.2em]">
              <Link to="/" className="hover:text-white">Home</Link> <span className="mx-2">/</span> Branches
            </nav>
            <h1 className="font-display text-white text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-4xl">
              Care that reaches every district.
            </h1>
            <p className="text-white/90 text-lg mt-5 max-w-2xl leading-relaxed">
              {branchesList.length} premium branches across Bangladesh — one clinical standard, everywhere.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">সারাদেশে আছে আমাদের {branchesList.length}টি শাখা</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">Nationwide network of world-class child therapy centres</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">Click any branch to explore its full details — address, contact numbers, working hours, doctors, therapists, facilities and interactive map location.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branchesList.map((b) => (
              <Link
                key={b.slug} to="/branches/$slug" params={{ slug: b.slug }}
                className="group block bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-300 hover:-translate-y-1 ring-1 ring-border">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={b.image} alt={b.name} width={1400} height={900} loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                    {b.city}
                  </div>
                  {b.established && (
                    <div className="absolute top-4 right-4 bg-white/95 text-foreground text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-full inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> Est. {b.established}
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    {b.cityBn && <p className="text-white/95 font-medium text-lg leading-tight">{b.cityBn}</p>}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl leading-tight">{b.name}</h3>
                  {b.tagline && <p className="text-sm text-muted-foreground mt-2 italic">{b.tagline}</p>}
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> {b.address}</li>
                    <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent" /> {b.phone}{b.phone2 ? `, ${b.phone2}` : ""}</li>
                    <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 text-accent" /> {b.hours[0].time}</li>
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {b.therapies.slice(0, 4).map((t) => (
                      <span key={t} className="text-[10px] font-mono uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-muted">{t}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <span className="flex-1 text-center px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium inline-flex items-center justify-center gap-1 group-hover:opacity-90">
                      View Details <ArrowRight className="h-4 w-4" />
                    </span>
                    <button type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(`https://www.google.com/maps/search/?api=1&query=${b.mapQuery}`, "_blank", "noopener,noreferrer");
                      }}
                      className="px-4 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-muted inline-flex items-center gap-1">
                      <Navigation className="h-4 w-4" /> Directions
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
