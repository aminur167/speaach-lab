import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { services } from "@/data/services";
import { branchesList, doctorsList, therapistsList } from "@/data/team";
import { useMemo, useState } from "react";
import { Check, ArrowRight, ArrowLeft, Calendar, User, MapPin, Stethoscope, Clock as ClockIcon, PartyPopper } from "lucide-react";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — Speech Therapy Lab" },
      { name: "description", content: "Book a premium pediatric therapy appointment in 7 easy steps — choose your service, branch, doctor, date and time." },
      { property: "og:title", content: "Book an Appointment — Speech Therapy Lab" },
      { property: "og:description", content: "Premium multi-step appointment booking." },
    ],
  }),
  component: AppointmentWizard,
});

const steps = [
  { key: "service", label: "Service", icon: Stethoscope },
  { key: "branch", label: "Branch", icon: MapPin },
  { key: "specialist", label: "Specialist", icon: User },
  { key: "date", label: "Date", icon: Calendar },
  { key: "time", label: "Time", icon: ClockIcon },
  { key: "details", label: "Details", icon: User },
  { key: "confirm", label: "Confirm", icon: Check },
] as const;

const timeSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

type Form = {
  service: string; branch: string; specialist: string; date: string; time: string;
  patientName: string; parentName: string; age: string; gender: string;
  phone: string; email: string; problem: string;
};

const empty: Form = {
  service: "", branch: "", specialist: "", date: "", time: "",
  patientName: "", parentName: "", age: "", gender: "",
  phone: "", email: "", problem: "",
};

function AppointmentWizard() {
  const [step, setStep] = useState(0);
  const [f, setF] = useState<Form>(empty);
  const [submitted, setSubmitted] = useState(false);

  const specialists = useMemo(() => {
    const branch = branchesList.find((b) => b.slug === f.branch);
    const city = branch?.city;
    const all = [...doctorsList, ...therapistsList];
    return city ? all.filter((p) => p.branches.includes(city)) : all;
  }, [f.branch]);

  const canNext = () => {
    if (step === 0) return !!f.service;
    if (step === 1) return !!f.branch;
    if (step === 2) return !!f.specialist;
    if (step === 3) return !!f.date;
    if (step === 4) return !!f.time;
    if (step === 5) return f.patientName && f.parentName && f.phone && f.age && f.gender;
    return true;
  };

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const submit = () => setSubmitted(true);

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Online Appointment</span>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight mt-4">Book your visit in 7 easy steps.</h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Our coordinators confirm every appointment within one working day.
          </p>
        </div>

        {/* Stepper */}
        <ol className="hidden md:flex items-center justify-between mb-14">
          {steps.map((s, i) => (
            <li key={s.key} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div className={`h-11 w-11 rounded-full flex items-center justify-center border-2 transition ${
                  i < step ? "bg-primary border-primary text-primary-foreground" :
                  i === step ? "border-primary text-primary bg-background" :
                  "border-border text-muted-foreground bg-background"
                }`}>
                  {i < step ? <Check className="h-5 w-5" /> : <s.icon className="h-5 w-5" />}
                </div>
                <span className={`mt-2 text-[10px] font-mono uppercase tracking-[0.15em] ${i <= step ? "text-foreground" : "text-muted-foreground"}`}>{s.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-3 -mt-6 ${i < step ? "bg-primary" : "bg-border"}`} />
              )}
            </li>
          ))}
        </ol>
        <div className="md:hidden mb-8 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Step {step + 1} of {steps.length}
          </span>
          <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
          </div>
          <p className="mt-3 font-display text-2xl">{steps[step].label}</p>
        </div>

        {submitted ? (
          <div className="bg-card rounded-3xl ring-1 ring-border p-10 md:p-16 text-center shadow-card">
            <div className="mx-auto h-16 w-16 rounded-full bg-accent/10 text-accent flex items-center justify-center">
              <PartyPopper className="h-8 w-8" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl mt-6">Appointment Requested</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Thank you, {f.parentName || "parent"}. Our clinical coordinator will call you at {f.phone} within one working day to confirm your visit.
            </p>
            <div className="mt-8 max-w-md mx-auto text-left bg-muted/40 rounded-2xl p-6 space-y-2 text-sm">
              <Row label="Service" value={services.find((s) => s.slug === f.service)?.name} />
              <Row label="Branch" value={branchesList.find((b) => b.slug === f.branch)?.name} />
              <Row label="Specialist" value={specialists.find((s) => s.slug === f.specialist)?.name} />
              <Row label="Date" value={f.date} />
              <Row label="Time" value={f.time} />
            </div>
            <Link to="/" className="mt-10 inline-block text-primary underline">Back to home</Link>
          </div>
        ) : (
          <div className="bg-card rounded-3xl ring-1 ring-border p-8 md:p-12 shadow-card">
            {/* Step content */}
            {step === 0 && (
              <Grid title="Choose a service">
                {services.slice(0, 12).map((s) => (
                  <SelectCard key={s.slug} active={f.service === s.slug} onClick={() => setF({ ...f, service: s.slug })}
                    title={s.name} desc={s.short} />
                ))}
              </Grid>
            )}
            {step === 1 && (
              <Grid title="Choose a branch">
                {branchesList.map((b) => (
                  <SelectCard key={b.slug} active={f.branch === b.slug} onClick={() => setF({ ...f, branch: b.slug, specialist: "" })}
                    title={b.name} desc={b.address} />
                ))}
              </Grid>
            )}
            {step === 2 && (
              <Grid title="Choose your specialist">
                {specialists.length === 0 ? (
                  <p className="col-span-full text-muted-foreground">No specialists available for this branch. Please go back and choose another branch.</p>
                ) : specialists.map((p) => (
                  <button key={p.slug} onClick={() => setF({ ...f, specialist: p.slug })}
                    className={`text-left p-5 rounded-2xl border transition flex gap-4 items-center ${
                      f.specialist === p.slug ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
                    }`}>
                    <img loading="lazy" decoding="async" src={p.photo} alt={p.name} className="h-16 w-16 rounded-full object-cover ring-1 ring-border" />
                    <div>
                      <p className="font-display text-lg">{p.name}</p>
                      <p className="text-sm text-muted-foreground">{p.title}</p>
                    </div>
                  </button>
                ))}
              </Grid>
            )}
            {step === 3 && (
              <div>
                <h2 className="font-display text-2xl mb-6">Select preferred date</h2>
                <input type="date" min={today} value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })}
                  className="w-full max-w-md text-lg px-6 py-4 rounded-2xl border border-border bg-background focus:outline-none focus:border-primary" />
              </div>
            )}
            {step === 4 && (
              <div>
                <h2 className="font-display text-2xl mb-6">Select time slot</h2>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {timeSlots.map((t) => (
                    <button key={t} onClick={() => setF({ ...f, time: t })}
                      className={`py-3 rounded-full border text-sm font-medium transition ${
                        f.time === t ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary/40"
                      }`}>{t}</button>
                  ))}
                </div>
              </div>
            )}
            {step === 5 && (
              <div>
                <h2 className="font-display text-2xl mb-6">Patient information</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Patient name" value={f.patientName} onChange={(v) => setF({ ...f, patientName: v })} />
                  <Field label="Parent / guardian name" value={f.parentName} onChange={(v) => setF({ ...f, parentName: v })} />
                  <Field label="Age" value={f.age} onChange={(v) => setF({ ...f, age: v })} />
                  <label className="grid gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Gender</span>
                    <select value={f.gender} onChange={(e) => setF({ ...f, gender: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary">
                      <option value="">Select</option>
                      <option>Male</option><option>Female</option><option>Other</option>
                    </select>
                  </label>
                  <Field label="Phone" value={f.phone} onChange={(v) => setF({ ...f, phone: v })} />
                  <Field label="Email" value={f.email} onChange={(v) => setF({ ...f, email: v })} type="email" />
                </div>
                <label className="grid gap-2 mt-5">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Briefly describe the concern</span>
                  <textarea rows={4} maxLength={1000} value={f.problem} onChange={(e) => setF({ ...f, problem: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary resize-none" />
                </label>
              </div>
            )}
            {step === 6 && (
              <div>
                <h2 className="font-display text-2xl mb-6">Review & confirm</h2>
                <div className="bg-muted/40 rounded-2xl p-6 space-y-2">
                  <Row label="Service" value={services.find((s) => s.slug === f.service)?.name} />
                  <Row label="Branch" value={branchesList.find((b) => b.slug === f.branch)?.name} />
                  <Row label="Specialist" value={specialists.find((s) => s.slug === f.specialist)?.name} />
                  <Row label="Date" value={f.date} />
                  <Row label="Time" value={f.time} />
                  <Row label="Patient" value={`${f.patientName} (${f.age})`} />
                  <Row label="Parent" value={f.parentName} />
                  <Row label="Phone" value={f.phone} />
                </div>
              </div>
            )}

            {/* Nav */}
            <div className="mt-10 flex justify-between items-center">
              <button onClick={prev} disabled={step === 0}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium disabled:opacity-40 hover:bg-muted">
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              {step === steps.length - 1 ? (
                <button onClick={submit}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium uppercase tracking-[0.15em] hover:opacity-90">
                  Confirm Appointment <Check className="h-4 w-4" />
                </button>
              ) : (
                <button onClick={next} disabled={!canNext()}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium uppercase tracking-[0.15em] disabled:opacity-40 hover:opacity-90">
                  Continue <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

function Grid({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl mb-6">{title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{children}</div>
    </div>
  );
}

function SelectCard({ active, onClick, title, desc }: { active: boolean; onClick: () => void; title: string; desc: string }) {
  return (
    <button onClick={onClick}
      className={`text-left p-5 rounded-2xl border transition ${
        active ? "border-primary bg-primary/5 shadow-card" : "border-border hover:border-primary/40"
      }`}>
      <p className="font-display text-lg leading-tight">{title}</p>
      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{desc}</p>
    </button>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="grid gap-2">
      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} maxLength={200}
        className="px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary" />
    </label>
  );
}

function Row({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex justify-between gap-4 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-right">{value || "—"}</span>
    </div>
  );
}
