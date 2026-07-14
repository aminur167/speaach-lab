import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";
import doc4 from "@/assets/doctor-4.jpg";
import th1 from "@/assets/therapist-1.jpg";
import th2 from "@/assets/therapist-2.jpg";
import th3 from "@/assets/therapist-3.jpg";
import th4 from "@/assets/therapist-4.jpg";
import branchDhaka from "@/assets/branch-dhaka.jpg";
import branchCtg from "@/assets/branch-ctg.jpg";
import branchSylhet from "@/assets/branch-sylhet.jpg";
import branchGeneric from "@/assets/branch-generic.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export type Person = {
  slug: string;
  name: string;
  title: string;
  category: "Doctor" | "Speech Therapist" | "Occupational Therapist" | "ABA Therapist" | "Physiotherapist" | "Sensory Integration Therapist" | "Behavior Therapist";
  specializations: string[];
  qualifications: string[];
  certifications: string[];
  experience: number;
  languages: string[];
  branches: string[];
  bio: string;
  awards: string[];
  hours: { day: string; time: string }[];
  reviews: { name: string; rating: number; text: string; branch: string }[];
  photo: string;
  gallery: string[];
};

const defaultHours = [
  { day: "Saturday – Thursday", time: "10:00 AM – 8:00 PM" },
  { day: "Friday", time: "3:00 PM – 8:00 PM" },
];

const defaultReviews = [
  { name: "Fahmida R.", rating: 5, text: "The most caring and precise clinician we've met. Our son made real progress within weeks.", branch: "Dhaka" },
  { name: "Anwar H.", rating: 5, text: "Explained every step clearly and treated our daughter with such warmth.", branch: "Chattogram" },
  { name: "Nusrat J.", rating: 5, text: "Honest assessments, clear plan, and remarkable results.", branch: "Sylhet" },
];

const galleryPool = [gallery1, gallery2, gallery3, gallery4];

function p(
  slug: string, name: string, title: string, category: Person["category"],
  specializations: string[], qualifications: string[], certifications: string[],
  experience: number, languages: string[], branches: string[], bio: string,
  awards: string[], photo: string,
): Person {
  return {
    slug, name, title, category, specializations, qualifications, certifications,
    experience, languages, branches, bio, awards,
    hours: defaultHours, reviews: defaultReviews, photo, gallery: galleryPool,
  };
}

export const doctorsList: Person[] = [
  p("dr-elena-vance", "Dr. Elena Vance", "Chief Pediatric Neurologist", "Doctor",
    ["Pediatric Neurology", "Developmental Disorders", "Epilepsy Care"],
    ["MBBS, DU", "MD (Pediatrics)", "PhD Pediatric Neurology, Johns Hopkins"],
    ["Board-Certified Pediatric Neurologist", "Fellow, American Academy of Pediatrics"],
    18, ["English", "Bengali", "Hindi"],
    ["Dhaka", "Uttara", "Chattogram"],
    "Dr. Elena Vance leads our developmental neurology program. She has spent nearly two decades caring for children with complex neurodevelopmental profiles, combining international clinical rigor with a warm, family-first bedside manner.",
    ["Best Pediatric Neurologist Award 2023", "Excellence in Clinical Care 2021"],
    doc1),
  p("dr-marcus-thorne", "Dr. Marcus Thorne", "Head of Speech Science", "Doctor",
    ["Speech-Language Pathology", "Motor Speech Disorders", "Fluency"],
    ["MS, CCC-SLP", "PhD Speech-Language Sciences, Northwestern"],
    ["ASHA Certified", "Board-Certified Fluency Specialist"],
    16, ["English", "Bengali"],
    ["Dhaka", "Mirpur", "Sylhet"],
    "Dr. Marcus Thorne oversees our speech science division. He is internationally published on pediatric fluency and motor speech disorders, and personally mentors every senior SLP on our team.",
    ["Fellow, American Speech-Language-Hearing Association"],
    doc2),
  p("dr-sarah-jenkins", "Sarah Jenkins", "Director of Sensory Labs", "Doctor",
    ["Sensory Integration", "Pediatric Occupational Therapy", "Feeding Therapy"],
    ["MSc Occupational Therapy", "SI-Certified (USC/WPS)"],
    ["Certified Sensory Integration Practitioner", "SOS Feeding Approach"],
    14, ["English", "Bengali"],
    ["Dhaka", "Rangpur", "Khulna"],
    "Sarah Jenkins directs our purpose-built sensory gyms across Bangladesh. Her work has redefined pediatric sensory care in the region.",
    ["Sensory Integration Innovation Award 2022"],
    doc3),
  p("dr-julian-park", "Dr. Julian Park", "Clinical Behavioral Analyst", "Doctor",
    ["Applied Behavior Analysis", "Autism Spectrum", "Behavior Support"],
    ["PsyD Clinical Psychology", "BCBA-D"],
    ["Board-Certified Behavior Analyst — Doctoral", "QABA Certified"],
    12, ["English", "Bengali", "Korean"],
    ["Dhaka", "Uttara", "Rajshahi"],
    "Dr. Julian Park brings a dignity-first, naturalistic approach to ABA. He leads our autism spectrum program with a focus on functional communication and family goals.",
    ["International BCBA Excellence Award 2020"],
    doc4),
  p("dr-farhana-ahmed", "Dr. Farhana Ahmed", "Senior Developmental Pediatrician", "Doctor",
    ["Developmental Pediatrics", "Autism Diagnostics", "ADHD"],
    ["MBBS", "FCPS (Pediatrics)", "Fellowship, Developmental Pediatrics"],
    ["Bangladesh College of Physicians & Surgeons"],
    15, ["Bengali", "English"],
    ["Dhaka", "Mymensingh", "Barisal"],
    "Dr. Farhana Ahmed leads developmental assessments across our northern branches, with a gentle approach that puts every family at ease.",
    ["National Pediatrics Excellence Award 2019"],
    doc1),
  p("dr-imran-hossain", "Dr. Imran Hossain", "Consultant Child Psychiatrist", "Doctor",
    ["Child Psychiatry", "Anxiety & Mood", "OCD"],
    ["MBBS", "MD (Psychiatry)", "Fellowship, Child & Adolescent Psychiatry"],
    ["Royal College of Psychiatrists (Intl. Affiliate)"],
    13, ["Bengali", "English", "Urdu"],
    ["Dhaka", "Sylhet", "Thakurgaon"],
    "Dr. Imran Hossain supports our clinical psychology and CBT programs, and consults on complex behavioral and mood presentations.",
    ["Excellence in Child Mental Health 2022"],
    doc2),
];

export const therapistsList: Person[] = [
  p("nadia-rahman", "Nadia Rahman", "Senior Speech-Language Therapist", "Speech Therapist",
    ["Late Talkers", "Articulation", "Stammering"],
    ["MSc Speech-Language Pathology"], ["ASHA Aligned", "Lidcombe Certified"],
    9, ["Bengali", "English"], ["Dhaka", "Mirpur", "Uttara"],
    "Nadia specializes in preschool speech delay and fluency shaping for school-age children.",
    [], th1),
  p("tanvir-alam", "Tanvir Alam", "Senior Occupational Therapist", "Occupational Therapist",
    ["Fine Motor", "Handwriting", "Feeding"],
    ["BSc Occupational Therapy", "MSc (Ongoing)"], ["SOS Feeding", "Handwriting Without Tears"],
    8, ["Bengali", "English"], ["Dhaka", "Sylhet", "Chattogram"],
    "Tanvir builds fine motor, self-care and school-readiness plans for children ages 3–12.",
    [], th2),
  p("shirin-akter", "Shirin Akter", "Sensory Integration Therapist", "Sensory Integration Therapist",
    ["Sensory Modulation", "Autism", "Regulation"],
    ["MSc OT", "SI Certification"], ["USC/WPS SI Certified"],
    10, ["Bengali", "English"], ["Dhaka", "Rangpur", "Rajshahi"],
    "Shirin leads sensory integration programs in our fully equipped SI gyms.",
    [], th3),
  p("rezaul-karim", "Rezaul Karim", "Pediatric Physiotherapist", "Physiotherapist",
    ["Gross Motor", "Gait Training", "Cerebral Palsy"],
    ["BSc Physiotherapy", "MPT (Pediatrics)"], ["NDT Trained", "Bobath Introductory"],
    11, ["Bengali", "English"], ["Dhaka", "Khulna", "Barisal"],
    "Rezaul supports children with motor delays and neurological presentations through evidence-based physiotherapy.",
    [], th4),
  p("mahfuza-islam", "Mahfuza Islam", "ABA Therapist (RBT)", "ABA Therapist",
    ["Behavior Support", "Communication", "Daily Skills"],
    ["BA Psychology", "RBT Certified"], ["RBT (BACB)"],
    6, ["Bengali", "English"], ["Dhaka", "Uttara"],
    "Mahfuza delivers ABA sessions under BCBA supervision with a warm, naturalistic style.",
    [], th1),
  p("kamrul-hasan", "Kamrul Hasan", "Behavior Therapist", "Behavior Therapist",
    ["Emotional Regulation", "School Readiness"],
    ["MA Applied Psychology"], ["Positive Behavior Support"],
    7, ["Bengali", "English"], ["Dhaka", "Mymensingh", "Thakurgaon"],
    "Kamrul supports children and families with structured behavior plans and school-readiness coaching.",
    [], th2),
  p("sadia-chowdhury", "Sadia Chowdhury", "Speech Therapist", "Speech Therapist",
    ["Voice Therapy", "Hearing Impairment"],
    ["BSc SLP"], ["Auditory-Verbal Trained"],
    5, ["Bengali", "English"], ["Chattogram", "Sylhet"],
    "Sadia focuses on auditory-verbal therapy for children with hearing impairment.",
    [], th3),
  p("arif-mahmud", "Arif Mahmud", "Occupational Therapist", "Occupational Therapist",
    ["Sensory Processing", "Coordination"],
    ["BSc OT"], ["Ayres SI Introductory"],
    6, ["Bengali", "English"], ["Rangpur", "Rajshahi", "Khulna"],
    "Arif supports sensory and coordination goals for school-age children.",
    [], th4),
];

export type Branch = {
  slug: string;
  city: string;
  name: string;
  nameBn?: string;
  cityBn?: string;
  tagline?: string;
  description?: string;
  established?: string;
  address: string;
  addressBn?: string;
  phone: string;
  phone2?: string;
  email: string;
  hours: { day: string; time: string }[];
  therapies: string[];
  specialists: string[];
  mapQuery: string;
  image: string;
  gallery: string[];
};

function b(input: {
  slug: string; city: string; cityBn?: string; name: string; nameBn?: string;
  tagline?: string; description?: string; established?: string;
  address: string; addressBn?: string; phone: string; phone2?: string;
  therapies: string[]; specialists: string[]; image: string;
}): Branch {
  return {
    slug: input.slug, city: input.city, cityBn: input.cityBn,
    name: input.name, nameBn: input.nameBn,
    tagline: input.tagline, description: input.description, established: input.established,
    address: input.address, addressBn: input.addressBn,
    phone: input.phone, phone2: input.phone2,
    email: `${input.slug}@speechtherapylab.com`,
    hours: defaultHours,
    therapies: input.therapies, specialists: input.specialists,
    mapQuery: encodeURIComponent(`${input.name}, ${input.address}`),
    image: input.image, gallery: galleryPool,
  };
}

const allTherapies = [
  "Speech Therapy", "Occupational Therapy", "Sensory Integration",
  "ABA Therapy", "Physiotherapy", "CBT", "Autism Program",
];
const allSpecialists = [
  "Developmental Pediatrician", "Child Neurologist", "Child Psychiatrist",
  "Clinical Psychologist", "Speech Pathologist", "Occupational Therapist",
];

export const branchesList: Branch[] = [
  b({
    slug: "dhaka-mirpur", city: "Dhaka — Mirpur 10", cityBn: "ঢাকা — মিরপুর ১০",
    name: "Speech Therapy Lab — Dhaka, Mirpur 10",
    nameBn: "স্পিচ থেরাপি ল্যাব — ঢাকা, মিরপুর ১০",
    tagline: "Our flagship head office & largest clinic.",
    description: "Our flagship centre in Mirpur 10 houses full-scale speech, occupational, ABA, physiotherapy and sensory integration suites, along with our developmental paediatric assessment unit. Purpose-built for children with a warm, family-first environment.",
    established: "2016",
    address: "House 12, Road 3, Section 10, Mirpur, Dhaka 1216",
    addressBn: "বাসা ১২, রোড ৩, সেকশন ১০, মিরপুর, ঢাকা ১২১৬",
    phone: "+880 1978-989003", phone2: "+880 1760-030200",
    therapies: allTherapies, specialists: allSpecialists, image: branchDhaka,
  }),
  b({
    slug: "dhaka-uttara", city: "Dhaka — Uttara Sector 12", cityBn: "ঢাকা — উত্তরা সেক্টর ১২",
    name: "Speech Therapy Lab — Dhaka, Uttara Sector 12",
    nameBn: "স্পিচ থেরাপি ল্যাব — ঢাকা, উত্তরা সেক্টর ১২",
    tagline: "Serving North Dhaka families with premium child therapy.",
    description: "Our Uttara branch offers a calm, modern therapy environment for children across North Dhaka — with dedicated sensory rooms, speech suites, OT gym and paediatric consultation rooms.",
    established: "2018",
    address: "House 22, Road 4, Sector 12, Uttara, Dhaka 1230",
    addressBn: "বাসা ২২, রোড ৪, সেক্টর ১২, উত্তরা, ঢাকা ১২৩০",
    phone: "+880 1303-030080",
    therapies: allTherapies, specialists: allSpecialists, image: branchGeneric,
  }),
  b({
    slug: "dhaka-bashundhara", city: "Dhaka — Bashundhara R/A", cityBn: "ঢাকা — বসুন্ধরা আ/এ",
    name: "Speech Therapy Lab — Dhaka, Bashundhara R/A",
    nameBn: "স্পিচ থেরাপি ল্যাব — ঢাকা, বসুন্ধরা আবাসিক এলাকা",
    tagline: "Premium child development care in Bashundhara.",
    description: "Bashundhara branch delivers our full paediatric therapy programme in a modern residential setting — ideal for families in Baridhara, Bashundhara and Notun Bazar.",
    established: "2020",
    address: "Block C, Bashundhara R/A, Dhaka 1229",
    addressBn: "ব্লক সি, বসুন্ধরা আবাসিক এলাকা, ঢাকা ১২২৯",
    phone: "+880 1978-030200",
    therapies: allTherapies, specialists: allSpecialists, image: branchGeneric,
  }),
  b({
    slug: "sylhet", city: "Sylhet", cityBn: "সিলেট",
    name: "Speech Therapy Lab — Sylhet",
    nameBn: "স্পিচ থেরাপি ল্যাব — সিলেট",
    tagline: "Regional centre of excellence for Sylhet division.",
    description: "Our Sylhet branch offers speech, occupational, sensory and behavioural therapy for children across the Sylhet division, with visiting developmental paediatricians and child psychiatrists.",
    established: "2019",
    address: "Mirabazar Point, Sylhet 3100",
    addressBn: "মিরাবাজার পয়েন্ট, সিলেট ৩১০০",
    phone: "+880 1942-856789", phone2: "+880 1780-068050",
    therapies: allTherapies.slice(0, 6), specialists: allSpecialists.slice(0, 5), image: branchSylhet,
  }),
  b({
    slug: "rangpur", city: "Rangpur Sadar", cityBn: "রংপুর সদর",
    name: "Speech Therapy Lab — Rangpur Sadar",
    nameBn: "স্পিচ থেরাপি ল্যাব — রংপুর সদর",
    tagline: "Trusted child therapy centre for North Bangladesh.",
    description: "Serving families across Rangpur, Nilphamari and surrounding districts with structured speech, occupational and behavioural therapy programmes.",
    established: "2020",
    address: "Medical More, Rangpur Sadar, Rangpur 5400",
    addressBn: "মেডিকেল মোড়, রংপুর সদর, রংপুর ৫৪০০",
    phone: "+880 1393-589755",
    therapies: allTherapies.slice(0, 5), specialists: allSpecialists.slice(0, 4), image: branchGeneric,
  }),
  b({
    slug: "thakurgaon", city: "Thakurgaon Sadar", cityBn: "ঠাকুরগাঁও সদর",
    name: "Speech Therapy Lab — Thakurgaon Sadar",
    nameBn: "স্পিচ থেরাপি ল্যাব — ঠাকুরগাঁও সদর",
    tagline: "Bringing premium child therapy to Thakurgaon.",
    description: "Full-scale paediatric therapy branch serving families across Thakurgaon and neighbouring upazilas — speech, OT, sensory and behaviour support delivered by trained clinicians.",
    established: "2021",
    address: "Hospital Road, Thakurgaon Sadar, Thakurgaon 5100",
    addressBn: "হাসপাতাল রোড, ঠাকুরগাঁও সদর, ঠাকুরগাঁও ৫১০০",
    phone: "+880 1757-208082",
    therapies: allTherapies.slice(0, 5), specialists: allSpecialists.slice(0, 4), image: branchGeneric,
  }),
  b({
    slug: "panchagarh", city: "Panchagarh Sadar", cityBn: "পঞ্চগড় সদর",
    name: "Speech Therapy Lab — Panchagarh Sadar",
    nameBn: "স্পিচ থেরাপি ল্যাব — পঞ্চগড় সদর",
    tagline: "The northernmost premium child therapy centre in Bangladesh.",
    description: "Our Panchagarh branch ensures that families in the far north of the country have access to international-standard paediatric therapy without needing to travel to Dhaka.",
    established: "2022",
    address: "Central Road, Panchagarh Sadar, Panchagarh 5000",
    addressBn: "কেন্দ্রীয় রোড, পঞ্চগড় সদর, পঞ্চগড় ৫০০০",
    phone: "+880 1251-684793",
    therapies: allTherapies.slice(0, 4), specialists: allSpecialists.slice(0, 3), image: branchGeneric,
  }),
  b({
    slug: "parbatipur", city: "Parbatipur", cityBn: "পার্বতীপুর",
    name: "Speech Therapy Lab — Parbatipur",
    nameBn: "স্পিচ থেরাপি ল্যাব — পার্বতীপুর, শহীদ মিনার মার্কেটের সামনে",
    tagline: "Neighbourhood therapy centre for Dinajpur region.",
    description: "Our Parbatipur branch, located in front of Shaheed Minar Market, brings structured speech and occupational therapy closer to families in the Dinajpur region.",
    established: "2022",
    address: "In front of Shaheed Minar Market, Parbatipur, Dinajpur 5250",
    addressBn: "শহীদ মিনার মার্কেটের সামনে, পার্বতীপুর, দিনাজপুর ৫২৫০",
    phone: "+880 1965-000101",
    therapies: allTherapies.slice(0, 4), specialists: allSpecialists.slice(0, 3), image: branchGeneric,
  }),
  b({
    slug: "khulna", city: "Khulna", cityBn: "খুলনা",
    name: "Speech Therapy Lab — Khulna",
    nameBn: "স্পিচ থেরাপি ল্যাব — খুলনা",
    tagline: "South-west Bangladesh's trusted child therapy centre.",
    description: "Our Khulna branch serves families across the south-western districts with a full paediatric therapy programme in a modern, welcoming clinical environment.",
    established: "2020",
    address: "Sonadanga R/A, Khulna 9100",
    addressBn: "সোনাডাঙ্গা আ/এ, খুলনা ৯১০০",
    phone: "+880 1608-348519", phone2: "+880 1978-987328",
    therapies: allTherapies.slice(0, 5), specialists: allSpecialists.slice(0, 4), image: branchGeneric,
  }),
  b({
    slug: "mymensingh", city: "Mymensingh", cityBn: "ময়মনসিংহ",
    name: "Speech Therapy Lab — Mymensingh",
    nameBn: "স্পিচ থেরাপি ল্যাব — ময়মনসিংহ",
    tagline: "Trusted child development centre for greater Mymensingh.",
    description: "The Mymensingh branch supports families with speech, occupational and behavioural therapy for children of all ages, with regular visiting consultants from Dhaka.",
    established: "2021",
    address: "Ganginarpar, Mymensingh 2200",
    addressBn: "গাঙ্গিনারপার, ময়মনসিংহ ২২০০",
    phone: "+880 1703-002772",
    therapies: allTherapies.slice(0, 5), specialists: allSpecialists.slice(0, 4), image: branchGeneric,
  }),
  b({
    slug: "barisal", city: "Barisal", cityBn: "বরিশাল",
    name: "Speech Therapy Lab — Barisal",
    nameBn: "স্পিচ থেরাপি ল্যাব — বরিশাল",
    tagline: "Premium child therapy for the southern division.",
    description: "Our Barisal branch brings evidence-based paediatric therapy to families across the southern division, in a calm, purpose-built child-friendly clinical space.",
    established: "2022",
    address: "C&B Road, Barisal 8200",
    addressBn: "সি অ্যান্ড বি রোড, বরিশাল ৮২০০",
    phone: "+880 1706-006282",
    therapies: allTherapies.slice(0, 5), specialists: allSpecialists.slice(0, 4), image: branchGeneric,
  }),
];

export function getDoctor(slug: string) {
  return doctorsList.find((d) => d.slug === slug);
}
export function getTherapist(slug: string) {
  return therapistsList.find((d) => d.slug === slug);
}
export function getBranch(slug: string) {
  return branchesList.find((d) => d.slug === slug);
}

export const branchNames = branchesList.map((b) => b.name);
export const branchCities = branchesList.map((b) => b.city);