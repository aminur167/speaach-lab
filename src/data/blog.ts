import speechImg from "@/assets/service-speech.jpg";
import otImg from "@/assets/service-ot.jpg";
import sensoryImg from "@/assets/service-sensory.jpg";
import physioImg from "@/assets/service-physio.jpg";
import parentsImg from "@/assets/parents.jpg";
import heroImg from "@/assets/hero-therapy.jpg";
import homeAbout from "@/assets/home-about.jpg";
import homeCta from "@/assets/home-cta.jpg";
import teamHero from "@/assets/team-hero.jpg";
import therapist1 from "@/assets/therapist-1.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  authorRole: string;
  publishedAt: string;
  readMinutes: number;
  cover: string;
  body: string[];
};

export const blogCategories = [
  "Speech Delay", "Autism", "ADHD", "Parenting",
  "Learning", "Therapy", "Assessment", "Mental Health",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-late-talkers",
    title: "Understanding Late Talkers: When to Seek a Speech Assessment",
    excerpt: "Most children say their first word around their first birthday. Here's what the science says about when a delay is worth investigating.",
    category: "Speech Delay",
    tags: ["late talker", "early intervention", "milestones"],
    author: "Dr. Marcus Thorne",
    authorRole: "Head of Speech Science",
    publishedAt: "2026-06-04",
    readMinutes: 6,
    cover: speechImg,
    body: [
      "By 18 months, most children use around 20 words. By 24 months, most string two-word combinations. When either milestone is delayed by more than a few months, a structured screening is the right next step — not a wait-and-see approach.",
      "The single strongest predictor of long-term outcomes for late-talking toddlers is early intervention. A short, structured speech-language evaluation can rule in or out common causes, identify hearing concerns, and produce a written plan you can start at home the same week.",
      "Parents often ask whether bilingual exposure causes delay. The evidence is clear: bilingual toddlers reach the same total-vocabulary milestones as monolingual peers. If your bilingual child has fewer than 50 combined words at 24 months, it warrants an assessment — the bilingualism is not the cause.",
      "A specialist evaluation typically takes 60–90 minutes and covers receptive language (comprehension), expressive language, oral motor function, hearing screening, and social communication. You leave with a written report and a set of home strategies to begin immediately.",
      "Early intervention works. In our practice, more than 80% of children who begin structured speech therapy before age three transition into mainstream school without ongoing speech support. The window matters — the earlier the start, the shorter the road.",
    ],
  },
  {
    slug: "early-signs-of-autism",
    title: "Early Signs of Autism in Toddlers: A Parent's Guide",
    excerpt: "A practical, evidence-based guide to the earliest signs of autism — and what to do if you see them in your own child.",
    category: "Autism",
    tags: ["autism", "early signs", "diagnosis"],
    author: "Dr. Julian Park",
    authorRole: "Clinical Behavioral Analyst",
    publishedAt: "2026-05-22",
    readMinutes: 8,
    cover: sensoryImg,
    body: [
      "Autism can often be reliably identified before a child's second birthday. The earliest signs are subtle and easy to miss — they show up in the quality of social interaction, not the presence of a single behavior.",
      "Around 9–12 months, watch for reduced eye contact during play, a limited response to their own name, and a lack of shared smiles. Between 12–18 months, watch for absent or delayed pointing, limited joint attention (checking your face during interesting moments), and a preference for solitary play.",
      "A formal diagnostic evaluation for autism spectrum profiles combines observation (ADOS-2), parent interview (ADI-R) and developmental assessment. Our multidisciplinary team includes a developmental pediatrician, speech pathologist, occupational therapist and clinical psychologist.",
      "A dignity-first approach matters. The goal of any intervention is not to make an autistic child less autistic — it is to support functional communication, sensory regulation, emotional literacy and daily independence, on the child's own timeline and terms.",
    ],
  },
  {
    slug: "adhd-vs-normal-toddler-behavior",
    title: "ADHD or Normal Toddler Behavior? A Clinician's View",
    excerpt: "Almost every three-year-old is impulsive. So how do specialists tell the difference between typical development and ADHD?",
    category: "ADHD",
    tags: ["ADHD", "attention", "executive function"],
    author: "Dr. Farhana Ahmed",
    authorRole: "Senior Developmental Pediatrician",
    publishedAt: "2026-05-11",
    readMinutes: 5,
    cover: otImg,
    body: [
      "Toddlers and preschoolers are supposed to be impulsive. Their prefrontal cortex is still being built, and short attention spans are developmentally normal. So how do we identify ADHD without over-diagnosing?",
      "Clinicians look for three things: impairment (does the behavior interfere with daily life?), pervasiveness (does it show up at home, at school, with grandparents?) and duration (has it lasted six months or more?). A single busy afternoon is not ADHD.",
      "The Vanderbilt and Conners rating scales are the standard first-line screening tools, completed by parents and teachers independently. A formal diagnosis requires a specialist interview and often, cognitive and executive function testing.",
      "Not every child with ADHD needs medication. First-line management for young children is behavioral therapy and parent training — medication is added only when function does not improve. Our team supports families through every step, together.",
    ],
  },
  {
    slug: "sensory-integration-explained",
    title: "Sensory Integration Therapy: What Really Happens in the Gym",
    excerpt: "Behind the swings and crash mats is a rigorous science. Here's what actually happens inside a sensory integration session.",
    category: "Therapy",
    tags: ["sensory", "OT", "regulation"],
    author: "Sarah Jenkins",
    authorRole: "Director of Sensory Labs",
    publishedAt: "2026-04-30",
    readMinutes: 7,
    cover: sensoryImg,
    body: [
      "A sensory integration gym looks like a playground. In reality, every swing, tunnel and crash mat is calibrated to deliver specific vestibular, proprioceptive and tactile inputs to a child's nervous system.",
      "Certified SI therapists design each session around the child's individual sensory profile. The goal is to help the nervous system learn to organize incoming information, so the child can respond calmly and appropriately to the world.",
      "Sensory integration is not a substitute for speech therapy, ABA or academic support. It is a foundational intervention that makes every other therapy work better, by improving regulation and readiness to learn.",
      "Progress is measured, not guessed. We use standardized tools like the Sensory Profile 2 and functional goals defined with the family, and review them every four weeks.",
    ],
  },
  {
    slug: "supporting-siblings",
    title: "Supporting Siblings of Children in Therapy",
    excerpt: "Brothers and sisters of children in therapy carry a quiet emotional load. Here's how families can support them.",
    category: "Parenting",
    tags: ["siblings", "family", "wellbeing"],
    author: "Dr. Imran Hossain",
    authorRole: "Consultant Child Psychiatrist",
    publishedAt: "2026-04-18",
    readMinutes: 5,
    cover: parentsImg,
    body: [
      "When one child is in intensive therapy, siblings often become the family's quiet responsibility carriers. They notice everything, they ask less, and they can develop anxiety that goes unspoken.",
      "Three practical strategies help. First, protect one-on-one time each week — even fifteen minutes. Second, use age-appropriate honesty about what is happening; children imagine worse when they don't know. Third, connect siblings with peer groups so they meet other children in similar families.",
      "Watch for signs that a sibling may need their own support: withdrawal, school refusal, changes in sleep, or a pattern of being 'too good.' Our clinical psychology team offers short-term sibling support sessions on request.",
    ],
  },
  {
    slug: "helping-your-child-learn-to-read",
    title: "The Science of Reading: Helping Your Child Learn to Read",
    excerpt: "There are decades of settled science on how children learn to read. Here's the short version, and how to use it at home.",
    category: "Learning",
    tags: ["reading", "literacy", "school"],
    author: "Nadia Rahman",
    authorRole: "Senior Speech-Language Therapist",
    publishedAt: "2026-04-02",
    readMinutes: 6,
    cover: homeAbout,
    body: [
      "Children learn to read through explicit, systematic instruction in phonemic awareness, phonics, fluency, vocabulary and comprehension — the 'five pillars' identified by the National Reading Panel.",
      "At home, three things move the needle. Read aloud daily, from birth. Play sound games — rhyming, first-sound matching, blending. Point out letters and their sounds in the environment. Screen time is not a substitute for any of these.",
      "If your child is in Grade 1 and still cannot reliably match letters to sounds, ask for a structured reading assessment. Dyslexia and other reading differences are highly responsive to specialist intervention when addressed early.",
    ],
  },
  {
    slug: "what-to-expect-first-assessment",
    title: "What to Expect at Your Child's First Developmental Assessment",
    excerpt: "A step-by-step walkthrough of a first-visit assessment — what happens, what to bring, and what you'll leave with.",
    category: "Assessment",
    tags: ["assessment", "first visit", "diagnosis"],
    author: "Dr. Elena Vance",
    authorRole: "Chief Pediatric Neurologist",
    publishedAt: "2026-03-25",
    readMinutes: 5,
    cover: teamHero,
    body: [
      "A first developmental assessment typically takes 90 minutes and involves observation, play-based tasks, and a structured parent interview. You do not need to prepare your child — natural behavior is what we want to see.",
      "Bring three things: your child's growth records or vaccination book, any previous school or therapy reports, and a written list of your specific concerns and questions. A snack and a favorite comfort toy help.",
      "You will leave the same day with a verbal summary from the assessing clinician and, within seven working days, a written multidisciplinary report and a set of clear next steps. There are no surprise fees and no upsells.",
    ],
  },
  {
    slug: "parenting-a-child-with-anxiety",
    title: "Parenting a Child With Anxiety: What Actually Helps",
    excerpt: "Reassurance often backfires. Here's what modern cognitive-behavioral therapy tells us actually helps anxious children.",
    category: "Mental Health",
    tags: ["anxiety", "CBT", "parenting"],
    author: "Dr. Imran Hossain",
    authorRole: "Consultant Child Psychiatrist",
    publishedAt: "2026-03-10",
    readMinutes: 6,
    cover: physioImg,
    body: [
      "The instinct to reassure an anxious child is a good one, but repeated reassurance often maintains the anxiety cycle. Modern CBT flips the script: we validate the feeling, then support the child to face the feared situation in small, graded steps.",
      "The SPACE program (Supportive Parenting for Anxious Childhood Emotions) has strong evidence that changing parent responses — without any change from the child — reduces childhood anxiety. It works because it interrupts the accommodations families make to keep anxiety manageable.",
      "If your child's anxiety is limiting daily life — school, sleep, social activities — a structured CBT program can help within 8–12 sessions. Our clinical psychology team offers both individual and parent-led programs.",
    ],
  },
  {
    slug: "occupational-therapy-at-home",
    title: "Ten Occupational Therapy Ideas You Can Do at Home Tonight",
    excerpt: "Practical, therapist-approved activities that build fine motor, sensory and self-care skills, using things you already have.",
    category: "Therapy",
    tags: ["OT", "home program", "activities"],
    author: "Tanvir Alam",
    authorRole: "Senior Occupational Therapist",
    publishedAt: "2026-02-24",
    readMinutes: 4,
    cover: therapist1,
    body: [
      "Great home OT ideas share three qualities: they are short, they are repeatable daily, and they use everyday objects. Long, elaborate setups fail — simple ones stick.",
      "Try clothespins on a bowl edge for pincer grip, tearing tissue paper for hand strength, threading pasta for bilateral coordination, and playing 'freeze' games to build regulation and impulse control.",
      "Involve the whole family. Skills generalize faster when practiced socially. Fifteen minutes, most days, beats an hour once a week — every time.",
    ],
  },
  {
    slug: "screen-time-child-development",
    title: "Screen Time and Child Development: What the Evidence Actually Says",
    excerpt: "Cutting through the noise on screen time — a clinician-led summary of what the research does and does not say.",
    category: "Parenting",
    tags: ["screen time", "development", "parenting"],
    author: "Dr. Farhana Ahmed",
    authorRole: "Senior Developmental Pediatrician",
    publishedAt: "2026-02-10",
    readMinutes: 6,
    cover: homeCta,
    body: [
      "The evidence on screen time is more nuanced than headlines suggest. What matters most is not the total minutes, but what the screen replaces — sleep, interactive play, outdoor time, and face-to-face conversation.",
      "For children under 18 months, avoid screen use other than video calls. From 18–24 months, high-quality co-viewed programming only. From 2–5 years, aim for under one hour of high-quality content per day, co-viewed when possible.",
      "Passive video content is associated with delayed language when it replaces adult conversation. Interactive video calls with grandparents, by contrast, support language development. The medium matters less than the interaction it displaces or enables.",
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}