import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Speech Therapy Lab" },
      { name: "description", content: "The terms that govern your use of the Speech Therapy Lab website and clinical services." },
      { property: "og:title", content: "Terms & Conditions — Speech Therapy Lab" },
      { property: "og:description", content: "The terms governing our services." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections = [
  { title: "1. Acceptance of terms", body: "By using speechtherapylab.com or engaging our clinical services, you agree to these terms." },
  { title: "2. Clinical services", body: "Our clinical services are delivered by credentialed professionals and always subject to a formal assessment and consent process. Nothing on this website constitutes medical advice." },
  { title: "3. Website content", body: "Content on this website is provided for general information and family education. It does not replace individualised clinical advice from a qualified specialist." },
  { title: "4. Appointments", body: "Requesting an appointment does not confirm one. Every appointment is confirmed by a member of our clinical coordination team. Cancellation and rescheduling policies are shared at the time of booking." },
  { title: "5. Fees", body: "Fees are transparent, shared before confirmation, and payable in line with the terms provided at booking." },
  { title: "6. Intellectual property", body: "All content, brand marks, imagery and clinical materials on this website belong to Speech Therapy Lab or its licensors. Do not reproduce without written permission." },
  { title: "7. Third-party links", body: "We may link to third-party websites for information. We are not responsible for their content or practices." },
  { title: "8. Limitation of liability", body: "To the fullest extent permitted by law, Speech Therapy Lab is not liable for indirect or consequential loss arising from your use of the website. Clinical service liability is governed separately by the service agreement." },
  { title: "9. Changes", body: "We may update these terms from time to time. Continued use of the website after changes constitutes acceptance." },
  { title: "10. Governing law", body: "These terms are governed by the laws of Bangladesh, subject to the exclusive jurisdiction of its courts." },
];

function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-6 py-32">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6 font-mono uppercase tracking-[0.2em]">
          <Link to="/">Home</Link> <span className="mx-2">/</span> Terms
        </nav>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Legal</span>
        <h1 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight mt-4">Terms & Conditions</h1>
        <p className="text-sm text-muted-foreground mt-4">Last updated: 14 July 2026</p>
        <div className="mt-12 space-y-10 text-foreground/90 leading-relaxed">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="font-display text-xl mb-3">{s.title}</h2>
              <p>{s.body}</p>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}