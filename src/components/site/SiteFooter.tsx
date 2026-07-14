import { Link } from "@tanstack/react-router";
import logoUrl from "@/assets/therapy-lab-logo.png";
import { contact, telHref, whatsappHref } from "@/config/contact";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  Facebook, Youtube, Linkedin, MessageCircle, Phone, Mail, MapPin, Clock,
  Ambulance, ArrowRight, Send, Heart, ShieldCheck, Award,
} from "lucide-react";
import footerCta from "@/assets/footer-cta.jpg";

const quickLinks = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Doctors", to: "/specialists" as const },
  { label: "Branches", to: "/branches" as const },
  { label: "Gallery", to: "/research" as const },
  { label: "Contact", to: "/contact" as const },
];

const footerServices: { label: string; slug: string }[] = [
  { label: "Therapy Lab", slug: "therapy-lab" },
  { label: "Apon Ghor", slug: "apon-ghor" },
  { label: "Anandomoye", slug: "anandomoye" },
  { label: "Anando Lab", slug: "anando-lab" },
  { label: "Development Care Academy", slug: "development-care-academy" },
  { label: "Professional Home Therapy Care", slug: "professional-home-therapy-care" },
  { label: "Toy Lab", slug: "toy-lab" },
  { label: "Screening & Assessment", slug: "screening-assessment-campaign" },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "WhatsApp", href: whatsappHref, icon: MessageCircle },
];

export function SiteFooter() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-footer-reveal]", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: undefined,
      });
    }, el);
    return () => ctx.revert();
  }, []);

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => { setEmail(""); setSubscribed(false); }, 3500);
  };

  return (
    <footer ref={rootRef} className="relative">
      {/* ============ TOP CTA ============ */}
      <section className="relative overflow-hidden">
        <img
          src={footerCta}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1088}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215_60%_10%/0.92)] via-[hsl(215_55%_14%/0.85)] to-[hsl(215_65%_8%/0.95)]" />
        <div className="absolute -top-32 -right-32 size-[500px] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 size-[500px] rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 text-center text-white">
          <span data-footer-reveal className="inline-flex items-center gap-2 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-accent mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20">
            <Heart className="size-3.5" /> Start Your Child's Journey
          </span>
          <h2 data-footer-reveal className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight max-w-4xl mx-auto text-balance">
            Let's Help Your Child Reach Their <span className="italic text-accent">Full Potential.</span>
          </h2>
          <p data-footer-reveal className="mt-6 text-base md:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
            Book an appointment today and let our experienced therapists support your child's communication, learning and development journey — with warmth, dignity and measurable results.
          </p>
          <div data-footer-reveal className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/appointment"
              className="group px-8 py-4 bg-accent text-accent-foreground rounded-full text-sm font-semibold tracking-wide shadow-2xl hover:shadow-[0_20px_40px_-10px_hsl(35_85%_55%/0.5)] hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
            >
              Book Appointment
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-white/50 text-white rounded-full text-sm font-semibold hover:bg-white/15 backdrop-blur-md transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ============ MAIN FOOTER ============ */}
      <div className="relative bg-[hsl(215_65%_10%)] text-white overflow-hidden">
        {/* soft ambient orbs */}
        <div className="absolute -top-40 left-1/4 size-[500px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 right-1/4 size-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

        {/* trust bar */}
        <div className="relative border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 grid sm:grid-cols-3 gap-4 text-center sm:text-left">
            {[
              { icon: Award, t: "JCI Standards", d: "International clinical protocols" },
              { icon: ShieldCheck, t: "Licensed Clinicians", d: "Certified pediatric team" },
              { icon: Ambulance, t: "24/7 Emergency", d: "Always here for your family" },
            ].map((it) => (
              <div key={it.t} data-footer-reveal className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="grid place-items-center size-10 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/15 text-accent shrink-0">
                  <it.icon className="size-4" />
                </div>
                <div>
                  <div className="font-serif text-sm leading-tight">{it.t}</div>
                  <div className="text-[11px] text-white/60">{it.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10 grid gap-12 md:gap-8 md:grid-cols-2 lg:grid-cols-12">
          {/* Col 1 — Brand */}
          <div data-footer-reveal className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 leading-none">
              <img
                src={logoUrl}
                alt="Therapy Lab logo"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-contain bg-white/95 p-1 ring-1 ring-white/20 shadow-lg"
              />
              <span className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight">
                  Therapy<span className="text-accent"> Lab</span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/60 mt-1">
                  Perfect Therapeutic Medicine
                </span>
              </span>
            </Link>
            <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-sm">
              Bangladesh's most trusted Speech Therapy & Child Development Center — internationally-trained clinicians delivering evidence-based, family-centred care with warmth and dignity.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group grid place-items-center size-10 rounded-full bg-white/8 backdrop-blur-md ring-1 ring-white/15 hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5 hover:scale-105 transition-all"
                >
                  <s.icon className="size-4 text-white/80 group-hover:text-accent-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div data-footer-reveal className="lg:col-span-2">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="group inline-flex items-center gap-1.5 text-white/75 hover:text-white transition-colors">
                    <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-3" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div data-footer-reveal className="lg:col-span-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-5">Our Services</h3>
            <ul className="space-y-3 text-sm">
              {footerServices.map((s) => (
                <li key={s.slug}>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="group inline-flex items-center gap-1.5 text-white/75 hover:text-white transition-colors">
                    <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-3" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div data-footer-reveal className="lg:col-span-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-5">Contact & Newsletter</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Phone className="size-4 mt-0.5 text-accent shrink-0" />
                <a href={telHref} className="hover:text-white">{contact.phoneDisplay}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="size-4 mt-0.5 text-accent shrink-0" />
                <a href="mailto:info@therapylabonline.com" className="hover:text-white break-all">info@therapylabonline.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="size-4 mt-0.5 text-accent shrink-0" />
                <span>House 12, Road 3, Section 10, Mirpur, Dhaka 1216</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="size-4 mt-0.5 text-accent shrink-0" />
                <span>Sat–Thu · 9:00 AM – 8:00 PM</span>
              </li>
              <li className="flex items-start gap-3">
                <Ambulance className="size-4 mt-0.5 text-accent shrink-0" />
                <a href="tel:999" className="hover:text-white">Emergency: 999</a>
              </li>
            </ul>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Speech+Therapy+Lab+Mirpur+10+Dhaka"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/15 hover:bg-white/20 transition-all"
            >
              <MapPin className="size-3.5" /> View on Google Maps
            </a>

            <form onSubmit={onSubscribe} className="mt-6">
              <label className="block text-[11px] text-white/60 mb-2">Subscribe to our newsletter</label>
              <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/15 focus-within:ring-accent transition-all p-1 pl-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="flex-1 bg-transparent border-0 outline-none text-sm text-white placeholder:text-white/40 py-2"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="grid place-items-center size-9 rounded-full bg-accent text-accent-foreground hover:scale-105 hover:shadow-lg transition-all"
                >
                  <Send className="size-4" />
                </button>
              </div>
              {subscribed && (
                <p className="mt-2 text-xs text-accent">Thank you — we'll be in touch soon.</p>
              )}
            </form>
          </div>
        </div>

        {/* Luxury divider */}
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* Bottom bar */}
        <div className="relative max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/60">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center md:justify-start">
            <span>© {new Date().getFullYear()} Speech Therapy Lab. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
          </div>
          <div className="inline-flex items-center gap-1.5">
            Developed with <Heart className="size-3 fill-accent text-accent" /> in Bangladesh
          </div>
        </div>
      </div>
    </footer>
  );
}