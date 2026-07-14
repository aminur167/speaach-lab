import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { branchesList } from "@/data/team";
import logoUrl from "@/assets/therapy-lab-logo.png";
import { contact, telHref, whatsappHref } from "@/config/contact";
import {
  Phone, Mail, Clock, Facebook, Youtube, MessageCircle, Menu, X, ChevronDown,
  Mic, Volume2, Activity, Brain, Sparkles, Puzzle, Users, HeartPulse,
  Hand, Waves, Target, Dumbbell, MessagesSquare, Speech, Music,
  Home as HomeIcon, Building2, GraduationCap, Baby, ToyBrick, Video, Ambulance,
  MapPin, ArrowRight,
} from "lucide-react";

// ---------- Data ----------
const serviceGroups: {
  title: string;
  items: { name: string; slug: string; desc: string; icon: React.ElementType }[];
}[] = [
  {
    title: "Clinical Programs",
    items: [
      { name: "Therapy Lab", slug: "therapy-lab", desc: "Perfect Therapeutic Medicine", icon: Mic },
      { name: "Screening & Assessment", slug: "screening-assessment-campaign", desc: "Clarity Before Therapy", icon: Puzzle },
    ],
  },
  {
    title: "Care Homes",
    items: [
      { name: "Apon Ghor", slug: "apon-ghor", desc: "Safe residential home", icon: Building2 },
      { name: "Anandomoye", slug: "anandomoye", desc: "Full-day therapeutic day care", icon: HomeIcon },
      { name: "Anando Lab", slug: "anando-lab", desc: "1:1 IEP program", icon: HeartPulse },
    ],
  },
  {
    title: "Specialised Services",
    items: [
      { name: "Development Care Academy", slug: "development-care-academy", desc: "Professional training", icon: GraduationCap },
      { name: "Professional Home Therapy Care", slug: "professional-home-therapy-care", desc: "Expert care at home", icon: Users },
      { name: "Toy Lab", slug: "toy-lab", desc: "Therapeutic play resources", icon: ToyBrick },
    ],
  },
];

const mediaItems = [
  { label: "Gallery", to: "/research" as const },
  { label: "Video Gallery", to: "/research" as const },
  { label: "Success Stories", to: "/research" as const },
  { label: "Events", to: "/research" as const },
  { label: "Training Programs", to: "/research" as const },
];

const branchNav = branchesList.map((b) => ({
  slug: b.slug,
  city: b.city,
  cityBn: b.cityBn,
  phone: b.phone,
  image: b.image,
}));

// ---------- Component ----------
export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "services" | "media" | "branches">(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => { setMobileOpen(false); setOpenMenu(null); }, [pathname]);

  const transparent = false;

  return (
    <>
      <div className="sticky top-0 z-50">
      {/* ============ TOP INFO BAR ============ */}
      <div className={`hidden md:block overflow-hidden text-[11px] font-medium tracking-wide bg-primary text-primary-foreground transition-[max-height,opacity] duration-500 ease-in-out ${scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"}`}>
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a href={telHref} className="inline-flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="size-3.5" aria-hidden />
              <span className="font-mono tracking-widest">{contact.phoneDisplay}</span>
            </a>
            <a href="mailto:info@therapylabonline.com" className="hidden lg:inline-flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="size-3.5" aria-hidden />
              <span>info@therapylabonline.com</span>
            </a>
            <a href="tel:999" className="inline-flex items-center gap-2 text-accent">
              <Ambulance className="size-3.5" aria-hidden />
              <span className="uppercase tracking-[0.2em]">Emergency</span>
            </a>
          </div>
          <div className="flex items-center gap-5">
            <div className="hidden lg:inline-flex items-center gap-2 opacity-90">
              <Clock className="size-3.5" aria-hidden />
              <span>Sat–Thu · 9:00 AM – 8:00 PM</span>
            </div>
            <div className="flex items-center gap-3 border-l border-primary-foreground/20 pl-5">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-accent transition-colors"><Facebook className="size-4" /></a>
              <a href="https://youtube.com" aria-label="YouTube" className="hover:text-accent transition-colors"><Youtube className="size-4" /></a>
              <a href={whatsappHref} aria-label="WhatsApp" className="hover:text-accent transition-colors"><MessageCircle className="size-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* ============ MAIN NAVBAR ============ */}
      <header
        className={`transition-all duration-300 ${transparent ? "bg-transparent" : "bg-background/95 backdrop-blur-md shadow-[0_2px_20px_-8px_rgba(0,0,0,0.12)] border-b border-border"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-2 sm:gap-6">
          {/* Logo */}
          <Link to="/" className="shrink-0 inline-flex items-center gap-3 leading-none group">
            <img
              src={logoUrl}
              alt="Speech Therapy Lab — Perfect Therapeutic Medicine"
              width={48}
              height={48}
              className="h-11 w-11 md:h-12 md:w-12 object-contain rounded-full ring-1 ring-border shadow-sm group-hover:scale-105 transition-transform"
            />
            <span className={`hidden sm:flex flex-col ${transparent ? "text-primary-foreground" : "text-primary"}`}>
              <span className="font-serif text-lg md:text-xl font-bold tracking-tight">
                Speech Therapy<span className="text-accent"> Lab</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground mt-0.5">
                Perfect Therapeutic Medicine
              </span>
            </span>
          </Link>

          {/* Mobile centered brand name */}
          <Link to="/" className={`sm:hidden flex-1 min-w-0 flex flex-col items-center text-center leading-none ${transparent ? "text-primary-foreground" : "text-primary"}`}>
            <span className="font-serif text-base font-bold tracking-tight whitespace-nowrap">
              Speech Therapy<span className="text-accent"> Lab</span>
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5 whitespace-nowrap">
              Perfect Therapeutic Medicine
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className={`hidden lg:flex items-center gap-1 text-[12px] font-medium uppercase tracking-[0.1em] ${transparent ? "text-primary-foreground" : "text-foreground"}`}>
            <NavItem to="/" transparent={transparent}>Home</NavItem>
            <NavItem to="/about" transparent={transparent}>About</NavItem>

            {/* Services mega */}
            <MegaTrigger
              label="Services"
              transparent={transparent}
              open={openMenu === "services"}
              onOpen={() => setOpenMenu("services")}
              onClose={() => setOpenMenu(null)}
              align="center"
            >
              <ServicesMega onNavigate={() => setOpenMenu(null)} />
            </MegaTrigger>

            <NavItem to="/research" transparent={transparent}>Gallery</NavItem>

            {/* Media dropdown */}
            <MegaTrigger
              label="Media"
              transparent={transparent}
              open={openMenu === "media"}
              onOpen={() => setOpenMenu("media")}
              onClose={() => setOpenMenu(null)}
              width="w-64"
            >
              <ul className="p-3">
                {mediaItems.map((m) => (
                  <li key={m.label}>
                    <Link to={m.to} onClick={() => setOpenMenu(null)} className="block px-4 py-3 rounded-lg text-sm normal-case tracking-normal text-foreground hover:bg-cream hover:text-primary transition-colors">
                      {m.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </MegaTrigger>

            {/* Branches dropdown */}
            <MegaTrigger
              label="Branches"
              transparent={transparent}
              open={openMenu === "branches"}
              onOpen={() => setOpenMenu("branches")}
              onClose={() => setOpenMenu(null)}
              width="w-[min(680px,92vw)]"
            >
              <div className="p-3">
                <div className="px-3 pt-2 pb-3 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary">সারাদেশে {branchNav.length}টি শাখা</p>
                    <p className="text-sm text-muted-foreground normal-case tracking-normal">Choose your nearest branch — click for full details</p>
                  </div>
                  <Link to="/branches" onClick={() => setOpenMenu(null)} className="hidden md:inline-flex items-center gap-1 text-xs font-medium normal-case tracking-normal text-primary hover:text-accent">
                    View all <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <ul className="grid grid-cols-2 gap-1 max-h-[70vh] overflow-y-auto">
                  {branchNav.map((b) => (
                    <li key={b.slug}>
                      <Link
                        to="/branches/$slug"
                        params={{ slug: b.slug }}
                        onClick={() => setOpenMenu(null)}
                        className="group flex items-center gap-3 px-2.5 py-2 rounded-lg normal-case tracking-normal text-foreground hover:bg-cream transition-colors"
                      >
                        <img src={b.image} alt="" width={56} height={56} loading="lazy"
                          className="size-11 rounded-lg object-cover shrink-0 ring-1 ring-border" />
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-medium truncate group-hover:text-primary">{b.city}</div>
                          {b.cityBn && <div className="text-[11px] text-muted-foreground truncate">{b.cityBn}</div>}
                          <div className="text-[10px] font-mono text-muted-foreground mt-0.5 inline-flex items-center gap-1"><Phone className="h-2.5 w-2.5" />{b.phone}</div>
                        </div>
                        <MapPin className="h-4 w-4 text-accent shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to="/branches" onClick={() => setOpenMenu(null)} className="mt-2 flex md:hidden items-center justify-center gap-1 py-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium normal-case tracking-normal">
                  View all branches <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </MegaTrigger>

            <NavItem to="/contact" transparent={transparent}>Contact</NavItem>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <Link
              to="/appointment"
              className="hidden sm:inline-flex items-center h-10 px-5 bg-accent text-accent-foreground text-[11px] font-semibold uppercase tracking-[0.15em] rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Book Appointment
            </Link>
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className={`lg:hidden inline-flex size-11 items-center justify-center rounded-full transition-colors ${transparent ? "text-primary-foreground hover:bg-primary-foreground/15" : "text-foreground hover:bg-cream"}`}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>
      </div>

      {/* ============ MOBILE MENU ============ */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* ============ STICKY MOBILE ACTIONS ============ */}
      {!mobileOpen && (
        <div
          className="fixed right-3 sm:right-5 z-40 flex flex-col gap-2.5 sm:gap-3"
          style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)" }}
        >
          <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
            className="group relative size-12 sm:size-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 ring-1 ring-black/5 flex items-center justify-center hover:scale-110 transition-transform">
            <MessageCircle className="size-5 sm:size-6 relative" />
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-foreground text-background text-xs font-medium px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
              WhatsApp
            </span>
          </a>
          <a href={telHref} aria-label="Call now"
            className="group relative size-12 sm:size-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 ring-1 ring-black/5 flex items-center justify-center hover:scale-110 transition-transform">
            <Phone className="size-4 sm:size-5" />
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-foreground text-background text-xs font-medium px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
              Call now
            </span>
          </a>
        </div>
      )}
    </>
  );
}

// ---------- Helpers ----------
function NavItem({ to, params, transparent, children }: { to: any; params?: any; transparent: boolean; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      params={params}
      activeOptions={{ exact: to === "/" }}
      className={`relative px-3 py-2 transition-colors group ${transparent ? "hover:text-accent" : "hover:text-primary"}`}
      activeProps={{ className: transparent ? "text-accent" : "text-primary" }}
    >
      {children}
      <span className={`absolute left-3 right-3 -bottom-0.5 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${transparent ? "bg-accent" : "bg-primary"}`} />
    </Link>
  );
}

function MegaTrigger({
  label, transparent, open, onOpen, onClose, children, width, align = "right",
}: {
  label: string; transparent: boolean; open: boolean;
  onOpen: () => void; onClose: () => void;
  children: React.ReactNode; width?: string; align?: "left" | "right" | "center";
}) {
  const alignClass =
    align === "center"
      ? "left-1/2 -translate-x-1/2"
      : align === "left"
      ? "left-0"
      : "right-0";
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        onClick={() => (open ? onClose() : onOpen())}
        aria-expanded={open}
        className={`relative px-3 py-2 inline-flex items-center gap-1.5 transition-colors group ${transparent ? "hover:text-accent" : "hover:text-primary"} ${open ? (transparent ? "text-accent" : "text-primary") : ""}`}
      >
        {label}
        <ChevronDown className={`size-3 transition-transform ${open ? "rotate-180" : ""}`} />
        <span className={`absolute left-3 right-6 -bottom-0.5 h-px origin-left transition-transform duration-300 ${open ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} ${transparent ? "bg-accent" : "bg-primary"}`} />
      </button>
      {open && (
        <div className={`absolute ${alignClass} top-full pt-4 ${width ?? ""}`}>
          <div className="bg-background border border-border rounded-2xl shadow-2xl overflow-hidden animate-fade-up [animation-duration:0.25s]">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

function ServicesMega({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="w-[min(92vw,880px)]">
      <div className="grid grid-cols-3 gap-x-8 p-6">
        {serviceGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase border-b border-border pb-2 mb-3 normal-case-none">
              {group.title}
            </h3>
            <ul className="flex flex-col gap-0.5">
              {group.items.map(({ name, slug, desc, icon: Icon }) => {
                const featured = slug === "anando-lab";
                return (
                  <li key={slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug }}
                      onClick={onNavigate}
                      className={`group flex items-start gap-3 p-2 rounded-lg normal-case tracking-normal transition-colors ${
                        featured
                          ? "bg-primary/5 border border-primary/15"
                          : "hover:bg-muted/60"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex-shrink-0 w-8 h-8 rounded flex items-center justify-center transition-all ${
                          featured
                            ? "bg-primary text-primary-foreground"
                            : "bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                        }`}
                      >
                        <Icon className="size-4" />
                      </span>
                      <span className="min-w-0">
                        <span
                          className={`block text-[13px] font-semibold leading-tight ${
                            featured ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {name}
                        </span>
                        <span className="block text-[11px] text-muted-foreground leading-snug mt-0.5">
                          {desc}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-muted/40 px-6 py-4 flex items-center justify-between gap-4 border-t border-border">
        <div className="flex items-center gap-3 min-w-0">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" aria-hidden />
          <p className="text-[13px] text-muted-foreground normal-case tracking-normal truncate">
            Not sure where to start?{" "}
            <span className="font-medium text-foreground">Book a free 15-minute consultation.</span>
          </p>
        </div>
        <Link
          to="/appointment"
          onClick={onNavigate}
          className="shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground text-[11px] font-bold py-2.5 px-5 rounded-full tracking-[0.15em] uppercase transition-all shadow-lg shadow-primary/20"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

// ---------- Mobile menu ----------
function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <div
      className={`lg:hidden fixed inset-0 z-40 bg-background transition-all duration-500 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      aria-hidden={!open}
    >
      <div className={`h-full overflow-y-auto pt-24 pb-32 px-6 transition-transform duration-500 ${open ? "translate-y-0" : "-translate-y-4"}`}>
        <nav className="max-w-2xl mx-auto flex flex-col">
          <MobileLink to="/" onClose={onClose}>Home</MobileLink>
          <MobileLink to="/about" onClose={onClose}>About</MobileLink>

          <MobileAccordion label="Services" open={expanded === "s"} onToggle={() => setExpanded(expanded === "s" ? null : "s")}>
            <ServicesMobileAccordion onClose={onClose} />
          </MobileAccordion>

          <MobileLink to="/research" onClose={onClose}>Gallery</MobileLink>

          <MobileAccordion label="Media" open={expanded === "m"} onToggle={() => setExpanded(expanded === "m" ? null : "m")}>
            <ul className="space-y-1">
              {mediaItems.map((m) => (
                <li key={m.label}><Link to={m.to} onClick={onClose} className="block py-2 text-base text-foreground hover:text-primary">{m.label}</Link></li>
              ))}
            </ul>
          </MobileAccordion>

          <MobileAccordion label="Branches" open={expanded === "b"} onToggle={() => setExpanded(expanded === "b" ? null : "b")}>
            <ul className="space-y-1">
              {branchNav.map((b) => (
                <li key={b.slug}>
                  <Link to="/branches/$slug" params={{ slug: b.slug }} onClick={onClose}
                    className="flex items-center gap-3 py-2 text-base text-foreground hover:text-primary">
                    <img src={b.image} alt="" width={40} height={40} loading="lazy" className="size-10 rounded-md object-cover ring-1 ring-border shrink-0" />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate">{b.city}</span>
                      {b.cityBn && <span className="block text-xs text-muted-foreground truncate">{b.cityBn}</span>}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link to="/branches" onClick={onClose} className="flex items-center justify-center gap-1 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  View all branches <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </MobileAccordion>

          <MobileLink to="/contact" onClose={onClose}>Contact</MobileLink>

          <Link to="/appointment" onClick={onClose} className="mt-8 inline-flex items-center justify-center h-14 rounded-full bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-[0.15em] shadow-lg hover:shadow-xl transition-all">
            Book Appointment
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
            className="mt-3 inline-flex items-center justify-center gap-2 h-14 rounded-full bg-[#25D366] text-white text-sm font-semibold uppercase tracking-[0.15em] shadow-lg hover:shadow-xl transition-all"
          >
            <MessageCircle className="size-5" /> WhatsApp Message
          </a>

          <div className="mt-10 pt-8 border-t border-border space-y-3 text-sm text-muted-foreground">
            <a href={telHref} className="flex items-center gap-3"><Phone className="size-4 text-primary" /> {contact.phoneDisplay}</a>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-3"><MessageCircle className="size-4 text-primary" /> WhatsApp {contact.phoneDisplay}</a>
            <a href="mailto:info@therapylabonline.com" className="flex items-center gap-3"><Mail className="size-4 text-primary" /> info@therapylabonline.com</a>
            <div className="flex items-center gap-3"><Clock className="size-4 text-primary" /> Sat–Thu · 9:00 AM – 8:00 PM</div>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://facebook.com" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook className="size-5" /></a>
              <a href="https://youtube.com" aria-label="YouTube" className="text-muted-foreground hover:text-primary"><Youtube className="size-5" /></a>
              <a href={whatsappHref} aria-label="WhatsApp" className="text-muted-foreground hover:text-primary"><MessageCircle className="size-5" /></a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

function MobileLink({ to, params, onClose, children }: { to: any; params?: any; onClose: () => void; children: React.ReactNode }) {
  return (
    <Link to={to} params={params} onClick={onClose} className="font-serif text-3xl py-4 border-b border-border text-foreground hover:text-primary transition-colors">
      {children}
    </Link>
  );
}

function MobileAccordion({ label, open, onToggle, children }: { label: string; open: boolean; onToggle: () => void; children: React.ReactNode }) {
  return (
    <div className="border-b border-border">
      <button onClick={onToggle} aria-expanded={open} className="w-full flex items-center justify-between py-4 font-serif text-3xl text-foreground hover:text-primary transition-colors">
        {label}
        <ChevronDown className={`size-6 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

function ServicesMobileAccordion({ onClose }: { onClose: () => void }) {
  const [openGroup, setOpenGroup] = useState<string | null>(serviceGroups[0]?.title ?? null);
  return (
    <div className="rounded-xl border border-border overflow-hidden divide-y divide-border bg-card">
      {serviceGroups.map((g) => {
        const isOpen = openGroup === g.title;
        return (
          <div key={g.title}>
            <button
              type="button"
              onClick={() => setOpenGroup(isOpen ? null : g.title)}
              aria-expanded={isOpen}
              className="w-full grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-3 py-3 text-left"
            >
              <span className="min-w-0 font-mono text-[10px] uppercase tracking-[0.2em] text-accent truncate">
                {g.title}
              </span>
              <ChevronDown className={`size-4 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <ul className="px-2 pb-2 space-y-0.5">
                  {g.items.map(({ name, slug, desc, icon: Icon }) => (
                    <li key={slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug }}
                        onClick={onClose}
                        className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 px-2 py-2 rounded-lg hover:bg-muted/60 transition-colors"
                      >
                        <span className="size-8 shrink-0 rounded-md bg-primary/5 text-primary flex items-center justify-center">
                          <Icon className="size-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-foreground truncate">{name}</span>
                          <span className="block text-[11px] text-muted-foreground truncate">{desc}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
