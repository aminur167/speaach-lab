import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import teamHero from "@/assets/team-hero.jpg";
import { Video, Phone, RotateCcw, ClipboardCheck, ArrowRight, ShieldCheck, Clock, Globe } from "lucide-react";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Online Consultation — Speech Therapy Lab" },
      { name: "description", content: "Secure video and phone consultations, follow-up sessions and online assessments with our senior specialist clinicians." },
      { property: "og:title", content: "Online Consultation — Speech Therapy Lab" },
      { property: "og:description", content: "Book a secure telehealth consultation." },
      { property: "og:image", content: teamHero },
    ],
  }),
  component: ConsultationPage,
});

const features = [
  { icon: Video, title: "Video Consultation", desc: "Face-to-face session with a senior specialist over secure HD video." },
  { icon: Phone, title: "Phone Consultation", desc: "Voice-only consultation for follow-up guidance and quick clinical advice." },
  { icon: RotateCcw, title: "Follow-up Consultation", desc: "Continuity of care with your existing specialist between clinic visits." },
  { icon: ClipboardCheck, title: "Online Assessment", desc: "Structured pre-assessment questionnaire and screening with a clinician." },
];

const perks = [
  { icon: ShieldCheck, title: "Secure & Private", desc: "HIPAA-aligned encrypted telehealth." },
  { icon: Clock, title: "Same-week Availability", desc: "Most families are seen within 3–5 working days." },
  { icon: Globe, title: "Available Nationwide", desc: "From any district in Bangladesh, and internationally." },
];

function ConsultationPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
          <img fetchPriority="high" decoding="async" src={teamHero} alt="Online consultation" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-background" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-14">
            <nav className="text-xs text-white/80 mb-6 font-mono uppercase tracking-[0.2em]">
              <Link to="/" className="hover:text-white">Home</Link> <span className="mx-2">/</span> Consultation
            </nav>
            <h1 className="font-display text-white text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-4xl">
              Expert care, wherever you are.
            </h1>
            <p className="text-white/90 text-lg mt-5 max-w-2xl leading-relaxed">
              Book a secure video or phone consultation with our senior specialists — from the comfort of home.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-8 bg-card rounded-3xl ring-1 ring-border hover:shadow-lift transition group">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl mt-5">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-muted/40 py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {perks.map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className="h-11 w-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg">{p.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">Ready to book your online session?</h2>
          <p className="text-muted-foreground text-lg mt-5 max-w-2xl mx-auto">
            Complete the appointment form and our clinical coordinator will confirm your telehealth session within one working day.
          </p>
          <Link to="/appointment"
            className="mt-10 inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium uppercase tracking-[0.15em] text-sm hover:opacity-90">
            Book Online Session <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
