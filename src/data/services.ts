import speechImg from "@/assets/service-speech.jpg";
import otImg from "@/assets/service-ot.jpg";
import sensoryImg from "@/assets/service-sensory.jpg";
import physioImg from "@/assets/service-physio.jpg";
import heroImg from "@/assets/hero-therapy.jpg";
import parentsImg from "@/assets/parents.jpg";
import facilityImg from "@/assets/facility.jpg";

export type Service = {
  slug: string;
  name: string;
  short: string;
  overview: string;
  benefits: string[];
  process: { title: string; description: string }[];
  suitableFor: string[];
  faq: { q: string; a: string }[];
  image: string;
  gallery: string[];
  doctorIndex: number; // 0-3
};

const commonProcess = [
  { title: "Clinical Assessment", description: "Comprehensive standardized evaluation by a senior specialist to establish a diagnostic baseline." },
  { title: "Personalized Plan", description: "A structured therapy roadmap built around your child's neurotype, goals, and family context." },
  { title: "Active Therapy", description: "Evidence-based sessions delivered in premium, sensory-regulated clinical environments." },
  { title: "Progress Review", description: "Fortnightly outcome tracking, parent debriefs, and plan recalibration with the clinical team." },
  { title: "Functional Independence", description: "Graduation into everyday life with continued monitoring and parent-training support." },
];

const commonFaq = [
  { q: "How long does a typical program run?", a: "Most programs run in 12-week clinical blocks, with progress reviewed every four weeks. Duration is always individualized." },
  { q: "Are parents involved in the therapy?", a: "Yes. Every clinical plan includes structured parent-coaching so progress compounds outside the clinic." },
  { q: "What is the recommended age range?", a: "Our specialists work with children from infancy through adolescence, and select adult rehabilitation cases where clinically indicated." },
  { q: "How many sessions will my child need?", a: "Session frequency is determined at the assessment stage — typically 2–5 sessions per week for the first 12-week block, then reviewed." },
  { q: "Can parents attend therapy sessions?", a: "Absolutely. We actively encourage parent participation and structured observation as part of our family-centered model." },
  { q: "Do you accept insurance?", a: "We work with all major private insurers and offer transparent self-pay pricing with corporate wellness plans." },
];

const gallery = [speechImg, otImg, sensoryImg, physioImg, parentsImg, facilityImg, heroImg];

const s = (
  slug: string,
  name: string,
  short: string,
  overview: string,
  benefits: string[],
  suitableFor: string[],
  image: string,
  doctorIndex = 0,
): Service => ({
  slug, name, short, overview, benefits, suitableFor,
  process: commonProcess, faq: commonFaq, image,
  gallery: gallery.slice(0, 4), doctorIndex,
});

export const services: Service[] = [
  s("therapy-lab", "Therapy Lab",
    "Perfect Therapeutic Medicine — full therapy & rehabilitation clinic.",
    "Our flagship multi-disciplinary therapy and rehabilitation clinic. Speech-Language Therapy, Occupational Therapy, Physiotherapy, ABA, CBT, Oral Placement Therapy, Sensory Integration and Music Intervention Therapy — delivered by senior clinicians for children and adults, including stroke rehab, stammering, autism support and dementia care.",
    ["Speech, Language & Communication","OT, PT & Sensory Integration","ABA / CBT / OPT / MIT","Adult neurological rehab","Family-centred care model"],
    ["Children aged 6 months – 15 years","Adults with stroke or dementia","Autism, ADHD, Down syndrome","Stammering and voice disorders","Post-injury rehabilitation"],
    speechImg, 1),
  s("apon-ghor", "Apon Ghor",
    "Ghorer cheye anonday o nirapod — a safe, joyful home away from home.",
    "Apon Ghor is our specialised residential accommodation and school for children who need structured, round-the-clock care in a warm, homelike environment — designed to feel more comfortable and safer than home itself.",
    ["24/7 clinical supervision","Structured daily routines","Special needs residential school","Warm, family-style environment","Integrated therapy on-site"],
    ["Out-of-town families","Children needing residential support","Complex care profiles","Post-hospitalisation transitions","Adolescent programs"],
    facilityImg, 3),
  s("anandomoye", "Anandomoye",
    "Ghore theke apon, niribili o nishchinto — full-day therapeutic day care.",
    "Anandomoye is our joyful, secure day care program for special children — a structured full-day environment blending therapy, early education and peer play, running from 8:00 AM to 5:00 PM.",
    ["Structured 8AM–5PM program","Therapy + early education","Peer socialisation","Nutritionally balanced meals","Daily parent updates"],
    ["Preschool-age children","Autism spectrum profiles","Working-parent families","Developmental delays","Pre-school readiness"],
    facilityImg, 2),
  s("anando-lab", "Anando Lab",
    "Matrisnehe yothartho seva — 1:1 Individualized Educational Program (IEP).",
    "Anando Lab pairs each child with a dedicated specialist for a fully individualised 1:1 IEP — mother-like attention combined with clinical rigour, custom-built around your child's learning profile.",
    ["1:1 dedicated specialist","Custom IEP for every child","Individualised learning goals","Continuous progress tracking","Parent-therapist partnership"],
    ["Children needing intensive 1:1","IEP-based learners","Autism spectrum profiles","Learning disabilities","School inclusion goals"],
    parentsImg, 3),
  s("development-care-academy", "Development Care Academy",
    "Professional Training for Purposeful Care — CPD-accredited academy.",
    "The Development Care Academy trains therapists, special educators and care professionals through short, certificate and diploma-level courses, delivered by our senior clinical faculty.",
    ["Professional certification","Faculty-led instruction","Short & long courses","Practicum in live clinics","Career-ready credentials"],
    ["Practicing therapists","Special educators","New graduates","Care professionals","Institutional partners"],
    facilityImg, 1),
  s("professional-home-therapy-care", "Professional Home Therapy Care",
    "Expert Care in Your Comfort Zone — clinical-grade therapy at home.",
    "For families who prefer care to come to them, our senior clinicians deliver the full scope of Therapy Lab programs inside your home — with the same clinical rigour as in-clinic sessions.",
    ["Care in familiar surroundings","Family-integrated goals","Zero commute for the child","Environment-based coaching","Faster skill generalisation"],
    ["Medically fragile children","Post-surgical recovery","Behavioural profiles","Elderly rehabilitation","Remote geographies"],
    parentsImg, 0),
  s("toy-lab", "Toy Lab",
    "Therapeutic Toys for Meaningful Play — curated resources for home programs.",
    "Toy Lab is a dedicated therapeutic resource hub of clinician-curated toys, materials and play equipment — matched to your child's clinical plan and available to purchase or borrow for home practice.",
    ["Therapist-curated selection","Skill-targeted play items","Home program continuity","Age & goal matched","Family training included"],
    ["Active clients","Home program families","Special educators","Parent-education programs","Gift & setup packages"],
    facilityImg, 2),
  s("screening-assessment-campaign", "Screening & Assessment Campaign",
    "Clarity Before Therapy. Early Screening, Brighter Future. — 50% off nationwide.",
    "Our nationwide Screening & Assessment Campaign delivers structured, evidence-based clinical and developmental assessments at 50% off — because early screening leads to the right direction of care. Every child is capable; they just need the right guidance.",
    ["Clarity Before Therapy","Early Screening, Brighter Future","Know Early, Grow Better","Right Assessment, Right Direction","50% discount currently running"],
    ["Concerned parents","First-time developmental worries","Milestone concerns","Pre-therapy planning","School referral cases"],
    parentsImg, 0),
];

// Testimonials shared across service pages.
export const testimonials = [
  { quote: "Within six months our son said his first sentence. The care and expertise here changed our family's life.", name: "Fahmida R.", role: "Parent, Dhaka" },
  { quote: "The therapists treat every child with such warmth. Our daughter actually looks forward to her sessions.", name: "Anwar H.", role: "Parent, Chattogram" },
  { quote: "Assessment was thorough, the plan was clear, and the progress reviews are honest and detailed.", name: "Nusrat J.", role: "Parent, Sylhet" },
];

// Icon-friendly benefit tokens used by service detail pages.

export const doctors = [
  { name: "Dr. Elena Vance", title: "Chief Pediatric Neurologist", credentials: "MD, PhD" },
  { name: "Dr. Marcus Thorne", title: "Head of Speech Science", credentials: "PhD, CCC-SLP" },
  { name: "Sarah Jenkins", title: "Director of Sensory Labs", credentials: "MSc OT, SI-Cert" },
  { name: "Dr. Julian Park", title: "Clinical Behavioral Analyst", credentials: "PsyD, BCBA-D" },
];

export function getService(slug: string) {
  return services.find((x) => x.slug === slug);
}