import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import speechImg from "@/assets/service-speech.jpg";
import otImg from "@/assets/service-ot.jpg";
import sensoryImg from "@/assets/service-sensory.jpg";
import physioImg from "@/assets/service-physio.jpg";
import parents from "@/assets/parents.jpg";
import parent1 from "@/assets/parent-1.jpg";
import parent2 from "@/assets/parent-2.jpg";
import parent3 from "@/assets/parent-3.jpg";
import heroImg from "@/assets/hero-therapy.jpg";
import facility from "@/assets/facility.jpg";
import homeAbout from "@/assets/home-about.jpg";
import homeCta from "@/assets/home-cta.jpg";
import teamHero from "@/assets/team-hero.jpg";
import therapist1 from "@/assets/therapist-1.jpg";
import therapist2 from "@/assets/therapist-2.jpg";
import therapist3 from "@/assets/therapist-3.jpg";
import therapist4 from "@/assets/therapist-4.jpg";
import branchDhaka from "@/assets/branch-dhaka.jpg";
import branchCtg from "@/assets/branch-ctg.jpg";
import branchSylhet from "@/assets/branch-sylhet.jpg";

export type GalleryItem = { src: string; alt: string; category: string; ratio: "portrait" | "landscape" | "square" };

export const galleryCategories = [
  "All", "Speech Therapy", "Occupational Therapy", "Autism", "ABA",
  "Assessment", "Training", "Day Care", "Events", "Therapy Rooms",
  "Waiting Area", "Parents", "Children",
] as const;

export const galleryItems: GalleryItem[] = [
  { src: speechImg, alt: "Speech therapy session in progress", category: "Speech Therapy", ratio: "landscape" },
  { src: therapist1, alt: "Speech therapist with toddler", category: "Speech Therapy", ratio: "portrait" },
  { src: otImg, alt: "Occupational therapy fine motor session", category: "Occupational Therapy", ratio: "landscape" },
  { src: therapist2, alt: "Occupational therapist and child at work", category: "Occupational Therapy", ratio: "portrait" },
  { src: sensoryImg, alt: "Sensory integration gym", category: "Autism", ratio: "landscape" },
  { src: therapist3, alt: "Therapist supporting child on sensory swing", category: "Autism", ratio: "portrait" },
  { src: gallery1, alt: "ABA therapy session", category: "ABA", ratio: "landscape" },
  { src: gallery2, alt: "Clinical assessment room", category: "Assessment", ratio: "landscape" },
  { src: gallery3, alt: "Training academy classroom", category: "Training", ratio: "landscape" },
  { src: gallery4, alt: "Day care therapy suite", category: "Day Care", ratio: "landscape" },
  { src: teamHero, alt: "Speech Therapy Lab team", category: "Events", ratio: "landscape" },
  { src: facility, alt: "Modern therapy facility", category: "Therapy Rooms", ratio: "landscape" },
  { src: branchDhaka, alt: "Dhaka branch reception", category: "Waiting Area", ratio: "landscape" },
  { src: branchCtg, alt: "Chattogram branch reception", category: "Waiting Area", ratio: "landscape" },
  { src: branchSylhet, alt: "Sylhet branch", category: "Therapy Rooms", ratio: "landscape" },
  { src: parents, alt: "Parents in consultation", category: "Parents", ratio: "landscape" },
  { src: parent1, alt: "Parent testimonial portrait", category: "Parents", ratio: "square" },
  { src: parent2, alt: "Parent testimonial portrait", category: "Parents", ratio: "square" },
  { src: parent3, alt: "Parent testimonial portrait", category: "Parents", ratio: "square" },
  { src: physioImg, alt: "Pediatric physiotherapy session", category: "Therapy Rooms", ratio: "landscape" },
  { src: therapist4, alt: "Physiotherapist with child", category: "Children", ratio: "portrait" },
  { src: heroImg, alt: "Therapy hero image", category: "Children", ratio: "landscape" },
  { src: homeAbout, alt: "Family visiting the clinic", category: "Children", ratio: "landscape" },
  { src: homeCta, alt: "Consultation session with a specialist", category: "Assessment", ratio: "landscape" },
];

export type VideoItem = {
  id: string; title: string; category: string; duration: string;
  thumbnail: string; description: string; youtubeId: string;
};

export const videoCategories = [
  "All", "Success Stories", "Parent Guides", "Therapy Explained",
  "Facility Tour", "Live Sessions",
] as const;

export const videoItems: VideoItem[] = [
  { id: "v1", title: "Meet the Speech Therapy Lab team", category: "Facility Tour", duration: "2:14", thumbnail: teamHero, description: "A short introduction to our clinicians and facilities across Bangladesh.", youtubeId: "jNQXAC9IVRw" },
  { id: "v2", title: "How speech therapy helped Rayan speak", category: "Success Stories", duration: "3:42", thumbnail: therapist1, description: "Rayan's family shares his journey from late-talker to confident communicator.", youtubeId: "dQw4w9WgXcQ" },
  { id: "v3", title: "Inside an occupational therapy session", category: "Therapy Explained", duration: "4:05", thumbnail: therapist2, description: "What actually happens in a pediatric OT session.", youtubeId: "9bZkp7q19f0" },
  { id: "v4", title: "Sensory integration gym walkthrough", category: "Facility Tour", duration: "3:18", thumbnail: sensoryImg, description: "A tour of our purpose-built sensory integration gym.", youtubeId: "kJQP7kiw5Fk" },
  { id: "v5", title: "Handling toddler tantrums: a clinician's guide", category: "Parent Guides", duration: "5:22", thumbnail: parents, description: "Practical, evidence-based strategies from our clinical psychology team.", youtubeId: "hT_nvWreIhg" },
  { id: "v6", title: "ABA therapy explained in five minutes", category: "Therapy Explained", duration: "5:00", thumbnail: gallery1, description: "A short, plain-language explanation of applied behavior analysis.", youtubeId: "L_jWHffIx5E" },
  { id: "v7", title: "Nusrat's autism journey", category: "Success Stories", duration: "4:41", thumbnail: parent2, description: "A family shares the story of their daughter's progress over two years.", youtubeId: "fJ9rUzIMcZQ" },
  { id: "v8", title: "Live: parent Q&A on speech delay", category: "Live Sessions", duration: "24:10", thumbnail: therapist3, description: "Our senior SLP answers the most common parent questions on speech delay.", youtubeId: "LDU_Txk06tM" },
];

export type Story = {
  slug: string; child: string; age: string; branch: string; program: string;
  parent: string; before: string; after: string; quote: string; image: string;
  timeline: { month: string; event: string }[];
};

export const stories: Story[] = [
  {
    slug: "rayan-speech-journey",
    child: "Rayan", age: "3 years", branch: "Dhaka", program: "Speech & Language Therapy",
    parent: "Fahmida R.",
    before: "At 30 months Rayan had fewer than 10 words and would cry when he could not be understood.",
    after: "Nine months later he speaks in full sentences and started preschool without any speech support.",
    quote: "Within six months our son said his first sentence. The care and expertise here changed our family's life.",
    image: parent1,
    timeline: [
      { month: "Month 0", event: "Assessment and 12-week plan agreed" },
      { month: "Month 2", event: "First spontaneous three-word phrase" },
      { month: "Month 5", event: "Preschool trial began" },
      { month: "Month 9", event: "Discharged to home program" },
    ],
  },
  {
    slug: "aarav-autism-progress",
    child: "Aarav", age: "5 years", branch: "Chattogram", program: "Integrated Autism Program",
    parent: "Anwar H.",
    before: "Aarav was non-speaking, avoided eye contact, and had daily sensory-driven meltdowns.",
    after: "He now uses a hybrid of AAC and short spoken phrases, and started mainstream KG with support.",
    quote: "The therapists treat every child with such warmth. Our son actually looks forward to his sessions.",
    image: parent2,
    timeline: [
      { month: "Month 0", event: "Multidisciplinary autism assessment" },
      { month: "Month 3", event: "AAC device introduced" },
      { month: "Month 8", event: "First functional spoken requests" },
      { month: "Month 14", event: "Mainstream school placement" },
    ],
  },
  {
    slug: "meherun-adhd-support",
    child: "Meherun", age: "8 years", branch: "Sylhet", program: "ADHD Program",
    parent: "Nusrat J.",
    before: "Meherun's teachers reported she could not stay seated and struggled to finish work.",
    after: "With executive function coaching and parent training, she is now completing homework independently.",
    quote: "Assessment was thorough, the plan was clear, and the progress reviews are honest and detailed.",
    image: parent3,
    timeline: [
      { month: "Month 0", event: "ADHD screening and parent-teacher scales" },
      { month: "Month 2", event: "Executive function coaching started" },
      { month: "Month 6", event: "First term with no behavior report" },
    ],
  },
  {
    slug: "arif-cerebral-palsy",
    child: "Arif", age: "6 years", branch: "Rangpur", program: "Physiotherapy",
    parent: "Shirin M.",
    before: "Arif needed support to stand and could not walk more than a few steps unaided.",
    after: "He walks independently for short distances and joins his brother in the playground.",
    quote: "Our physiotherapist celebrates every small win with us. It has meant everything.",
    image: therapist4,
    timeline: [
      { month: "Month 0", event: "Neuromotor assessment" },
      { month: "Month 4", event: "Assisted standing achieved" },
      { month: "Month 10", event: "First 10 unaided steps" },
      { month: "Month 18", event: "Independent short-distance walking" },
    ],
  },
  {
    slug: "reya-anxiety-cbt",
    child: "Reya", age: "10 years", branch: "Uttara", program: "CBT for Anxiety",
    parent: "Tania K.",
    before: "Reya refused to attend school and had panic episodes most mornings.",
    after: "Ten CBT sessions and family coaching later, she attends school full-time and sleeps through the night.",
    quote: "We felt heard from the first session. Reya calls her therapist her worry coach now.",
    image: parent1,
    timeline: [
      { month: "Month 0", event: "Anxiety assessment and formulation" },
      { month: "Month 1", event: "Graded school return plan" },
      { month: "Month 3", event: "Full school attendance" },
    ],
  },
  {
    slug: "iman-ot-fine-motor",
    child: "Iman", age: "4 years", branch: "Mirpur", program: "Occupational Therapy",
    parent: "Rakhi P.",
    before: "Iman struggled with buttons, could not hold a crayon, and refused mealtimes.",
    after: "She dresses herself, draws detailed pictures and enjoys family meals with new textures.",
    quote: "Our OT made everything feel like play. Iman does not even realise she is doing therapy.",
    image: parent2,
    timeline: [
      { month: "Month 0", event: "Fine motor and feeding assessment" },
      { month: "Month 3", event: "Independent dressing achieved" },
      { month: "Month 6", event: "Discharged to home program" },
    ],
  },
];

export const faqGroups: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "Appointments & Assessment",
    items: [
      { q: "How do I book an appointment?", a: "Use the Book Appointment page for a 7-step online booking, or call our clinical coordinators on +880 1700-000000. Most families are seen within 5 to 7 working days." },
      { q: "What happens at the first assessment?", a: "The first visit is a 60 to 90 minute multidisciplinary assessment. You leave the same day with a verbal summary and receive a full written report within seven working days." },
      { q: "Do I need a referral?", a: "No. Families can self-refer for any of our services. If you have existing school or medical reports, please bring them along." },
      { q: "How long does a typical program run?", a: "Programs run in 12-week clinical blocks with progress reviewed every four weeks. Duration is always individualized." },
    ],
  },
  {
    title: "Services & Programs",
    items: [
      { q: "What age groups do you support?", a: "Our specialists work with children from infancy through adolescence, and selected adult rehabilitation cases where clinically indicated." },
      { q: "Do you offer home therapy?", a: "Yes. Our Home Therapy Care service delivers clinical-grade sessions in your home, with the same rigor as in-clinic care." },
      { q: "Can I combine multiple therapies?", a: "Yes. Our team designs integrated plans that combine speech, OT, ABA, physiotherapy and clinical psychology as needed." },
      { q: "Do you offer online consultations?", a: "Yes. Secure video and phone consultations are available with our senior clinicians. See the Online Consultation page." },
    ],
  },
  {
    title: "Fees & Payment",
    items: [
      { q: "How much does an assessment cost?", a: "Our clinical coordinator shares full pricing when your appointment is confirmed. We publish transparent self-pay pricing with no surprise fees." },
      { q: "Do you accept insurance?", a: "We work with all major private insurers in Bangladesh and offer corporate wellness plans." },
      { q: "Is there financial assistance available?", a: "Yes. We reserve a portion of our program capacity each month for subsidized places. Ask our coordinator for details." },
    ],
  },
  {
    title: "Parents & Families",
    items: [
      { q: "Can parents attend therapy sessions?", a: "Absolutely. We actively encourage parent participation and structured observation as part of our family-centered model." },
      { q: "Do you have a parent training program?", a: "Yes. Our Parent Training Program translates clinical strategies into everyday family life through structured coaching." },
      { q: "What if we live far from a branch?", a: "We offer online consultation, home therapy in select cities, and short residential programs for families traveling from further afield." },
    ],
  },
];

export const openings = [
  { title: "Senior Speech-Language Pathologist", branch: "Dhaka", type: "Full-time", experience: "5+ years", summary: "Lead pediatric caseloads, supervise junior clinicians and support the SLP academy program." },
  { title: "Pediatric Occupational Therapist", branch: "Chattogram", type: "Full-time", experience: "3+ years", summary: "Deliver sensory integration and fine motor programs in our purpose-built OT suites." },
  { title: "ABA Therapist (RBT / BCBA)", branch: "Dhaka", type: "Full-time", experience: "2+ years", summary: "Deliver naturalistic ABA under BCBA supervision, with a dignity-first approach." },
  { title: "Clinical Psychologist", branch: "Sylhet", type: "Full-time", experience: "3+ years", summary: "Deliver CBT programs for children, adolescents and families." },
  { title: "Front-of-House Coordinator", branch: "Uttara", type: "Full-time", experience: "1+ year", summary: "Welcome families, manage scheduling and support our clinical team." },
  { title: "Physiotherapist (Pediatrics)", branch: "Khulna", type: "Full-time", experience: "2+ years", summary: "Support gross motor and neurorehab caseloads across the branch." },
  { title: "Clinical Coordinator (Intake)", branch: "Dhaka", type: "Full-time", experience: "2+ years", summary: "Own the intake pipeline from enquiry to first assessment." },
  { title: "Marketing & Content Lead", branch: "Dhaka", type: "Hybrid", experience: "4+ years", summary: "Lead brand, content and outreach across our multi-branch network." },
];

export const benefits = [
  { title: "Continuous Professional Development", desc: "A CPD budget and paid study leave for every clinician, every year." },
  { title: "International Mentorship", desc: "Rotations with our international faculty and quarterly clinical supervision." },
  { title: "Family-friendly Culture", desc: "Flexible schedules, parental leave and predictable working hours." },
  { title: "Wellbeing Support", desc: "In-house clinical psychology support for every team member." },
  { title: "Modern Facilities", desc: "Purpose-built sensory gyms, therapy suites and family consultation rooms." },
  { title: "Career Progression", desc: "Structured clinical career ladder with senior, lead and consultant tracks." },
];