import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Speech Therapy Lab" },
      { name: "description", content: "How Speech Therapy Lab collects, uses and safeguards personal and clinical information." },
      { property: "og:title", content: "Privacy Policy — Speech Therapy Lab" },
      { property: "og:description", content: "Our commitments on data privacy." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  { title: "1. Introduction", body: "Speech Therapy Lab respects your privacy and is committed to protecting the personal and clinical information you share with us. This policy explains what we collect, why, and how we keep it safe." },
  { title: "2. Information we collect", body: "We collect contact details you submit through our website (name, phone, email), appointment details, and — where applicable — clinical information required to deliver care. We also collect standard technical data (IP address, browser type) to keep the website secure." },
  { title: "3. How we use information", body: "We use your information to schedule and deliver clinical care, respond to enquiries, send appointment confirmations and reminders, improve our services, and meet regulatory obligations." },
  { title: "4. Legal basis", body: "We process personal data on the basis of your consent, our legitimate interest in operating our clinical services, and — for clinical data — the vital-interest and public-health bases where applicable." },
  { title: "5. Sharing your information", body: "We never sell your data. We share information only with the clinicians involved in your care, our authorized processors under strict data-processing agreements, and regulatory authorities when legally required." },
  { title: "6. Data retention", body: "We retain clinical records for the minimum period required by professional and regulatory standards. Contact-form and website data is retained for the shortest period necessary." },
  { title: "7. Your rights", body: "You have the right to access, correct, delete and receive a copy of your personal data. You may withdraw consent at any time by contacting our privacy office." },
  { title: "8. Security", body: "Our systems use encryption in transit, strict access controls, audit logging and regular security review. Clinical records are managed in accordance with international healthcare data standards." },
  { title: "9. Children's data", body: "As a pediatric organisation, we collect information about children only with parent or legal guardian consent, and only where necessary to deliver care." },
  { title: "10. Contact", body: "For any privacy questions, contact our privacy office at privacy@speechtherapylab.com." },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-6 py-32">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6 font-mono uppercase tracking-[0.2em]">
          <Link to="/">Home</Link> <span className="mx-2">/</span> Privacy
        </nav>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Legal</span>
        <h1 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight mt-4">Privacy Policy</h1>
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