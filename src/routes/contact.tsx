import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { branchesList } from "@/data/team";
import { useState } from "react";
import {
  Phone, Mail, MapPin, MessageCircle, Facebook, Youtube, Instagram, Linkedin,
  Ambulance, Clock, ArrowRight, Check,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Speech Therapy Lab" },
      { name: "description", content: "Speak to our clinical coordinators. Phone, WhatsApp, email and every branch address for Speech Therapy Lab across Bangladesh." },
      { name: "keywords", content: "contact, phone, whatsapp, email, branches, Speech Therapy Lab" },
      { property: "og:title", content: "Contact — Speech Therapy Lab" },
      { property: "og:description", content: "Reach our clinical coordination team." },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const main = branchesList[0];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative pt-32 pb-16 bg-gradient-to-b from-muted/60 to-background">
          <div className="max-w-7xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6 font-mono uppercase tracking-[0.2em]">
              <Link to="/">Home</Link> <span className="mx-2">/</span> Contact
            </nav>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Contact</span>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight mt-4 max-w-3xl">
              We would love to hear from you.
            </h1>
            <p className="text-lg text-muted-foreground mt-5 max-w-2xl">
              Speak to a clinical coordinator, message us on WhatsApp, or drop into one of our branches.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-4">
          <div className="grid md:grid-cols-4 gap-4">
            <QuickCard icon={Ambulance} title="Emergency" value="+880 1700-000911" tint="destructive" />
            <QuickCard icon={Phone} title="Clinical intake" value="+880 1700-000000" />
            <QuickCard icon={MessageCircle} title="WhatsApp" value="+880 1700-000000" href="https://wa.me/8801700000000" />
            <QuickCard icon={Mail} title="Email" value="care@speechtherapylab.com" href="mailto:care@speechtherapylab.com" />
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10">
          <div className="bg-card ring-1 ring-border rounded-3xl p-8 md:p-10">
            <h2 className="font-display text-2xl mb-2">Send us a message</h2>
            <p className="text-sm text-muted-foreground mb-8">Replies within one working day.</p>
            {sent ? (
              <div className="text-center py-10">
                <div className="mx-auto h-14 w-14 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl mt-5">Message received</h3>
                <p className="text-muted-foreground mt-3">Our team will reply shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" />
                <Field label="Subject" name="subject" />
                <label className="sm:col-span-2 grid gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">How can we help? *</span>
                  <textarea name="message" required rows={5} maxLength={1500}
                    className="px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary resize-none" />
                </label>
                <div className="sm:col-span-2">
                  <button type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium uppercase tracking-[0.15em] hover:opacity-90">
                    Send message <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden ring-1 ring-border aspect-[16/12] bg-muted">
              <iframe
                title={`${main.name} location`}
                src={`https://www.google.com/maps?q=${main.mapQuery}&output=embed`}
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0" />
            </div>
            <div className="bg-card ring-1 ring-border rounded-3xl p-6">
              <h3 className="font-display text-lg">Main campus</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-2 items-start"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> {main.address}</li>
                <li className="flex gap-2 items-start"><Phone className="h-4 w-4 mt-0.5 text-accent" /> {main.phone}</li>
                <li className="flex gap-2 items-start"><Clock className="h-4 w-4 mt-0.5 text-accent" /> {main.hours[0].day}: {main.hours[0].time}</li>
              </ul>
              <div className="mt-5 flex gap-3">
                <SocialIcon href="https://facebook.com" label="Facebook" icon={Facebook} />
                <SocialIcon href="https://youtube.com" label="YouTube" icon={Youtube} />
                <SocialIcon href="https://instagram.com" label="Instagram" icon={Instagram} />
                <SocialIcon href="https://linkedin.com" label="LinkedIn" icon={Linkedin} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/40 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl mb-10">Every branch, every phone number</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {branchesList.map((b) => (
                <Link key={b.slug} to="/branches/$slug" params={{ slug: b.slug }}
                  className="p-5 bg-card ring-1 ring-border rounded-2xl hover:shadow-lift transition group">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent">{b.city}</div>
                  <h3 className="font-display text-lg mt-2 group-hover:text-primary transition">{b.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{b.address}</p>
                  <p className="text-sm text-muted-foreground mt-1">{b.phone}</p>
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

function QuickCard({ icon: Icon, title, value, href, tint }: {
  icon: React.ElementType; title: string; value: string; href?: string; tint?: "destructive";
}) {
  const inner = (
    <div className={`p-5 rounded-2xl ring-1 ring-border h-full transition hover:shadow-lift ${
      tint === "destructive" ? "bg-destructive/10" : "bg-card"
    }`}>
      <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${
        tint === "destructive" ? "bg-destructive/15 text-destructive" : "bg-primary/10 text-primary"
      }`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-4 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">{title}</div>
      <div className="mt-1 font-display text-lg leading-snug break-words">{value}</div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a> : inner;
}

function SocialIcon({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition">
      <Icon className="h-4 w-4" />
    </a>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2">
      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">{label}{required ? " *" : ""}</span>
      <input name={name} type={type} required={required} maxLength={200}
        className="px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary" />
    </label>
  );
}