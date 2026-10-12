export const CONTACT_INFO = {
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsapp: "+91 98765 43210",
  whatsappRaw: "919876543210",
  email: "support@heltcare.in",
  emergencyNote: "For life-threatening cardiac or trauma emergencies, please call 112 or 108 immediately.",
  headquarters: "DLF Cyber City, Gurugram / BKC Mumbai, India",
  coverage: "Pan-India · Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Pune & Kolkata",
  responseTimes: "30–45 Mins Average Arrival"
};

export const SERVICES = [
  {
    id: "doctor-on-call",
    category: "doctor",
    title: "Doctor on Call at Home",
    shortDesc: "Book a certified physician at home across major Indian cities for non-emergency medical consultation, diagnosis, and immediate bedside treatment.",
    fullDesc: "Skip the exhausting traffic and crowded hospital waiting rooms. Our NMC-registered general physicians and internal medicine doctors visit your residence with emergency diagnostics, vitals monitoring kits, and the ability to issue verified digital prescriptions.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    badge: "30 Min Arrival",
    features: [
      "Comprehensive bedside clinical examination",
      "Immediate vitals check (BP, SpO2, Blood Sugar, ECG on demand)",
      "Digital prescription & medication delivery assistance",
      "Official medical certificate & sick leave note"
    ],
    pricing: "From ₹1,499 / visit"
  },
  {
    id: "doctor-at-hotel",
    category: "doctor",
    title: "Doctor at Your Hotel",
    shortDesc: "Private, discreet in-room medical care for business executives, tourists, and hotel guests across India without paperwork hassle.",
    fullDesc: "Whether traveling for international business or vacation in India, sudden illness shouldn't ruin your stay. Our multilingual physicians visit your hotel suite directly, coordinating smoothly with hotel concierge staff.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    badge: "24/7 In-Room Care",
    features: [
      "Direct room visit in all 5-star & boutique hotels",
      "Multilingual physicians fluent in English, Hindi & regional languages",
      "Insurance claim documentation & itemized medical receipts",
      "Travel fitness clearance certificates"
    ],
    pricing: "From ₹1,999 / visit"
  },
  {
    id: "nurse-at-home",
    category: "nursing",
    title: "Registered Nurse at Home",
    shortDesc: "Certified GNM/B.Sc nurses for post-operative care, elderly patient assistance, injections, vitals monitoring, and 24/7 attendant care.",
    fullDesc: "Hospital-level nursing right at home. From surgical wound management, tracheostomy, catheter care, and Ryles tube feeding to round-the-clock intensive nursing, our nurses are background-checked and hospital-trained.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop",
    badge: "Certified Staff",
    features: [
      "Post-operative recovery & post-ICU stepdown care",
      "Intravenous (IV) & intramuscular (IM) medication administration",
      "Urinary catheterization & Ryle's tube care",
      "12-hour / 24-hour dedicated nursing shifts available"
    ],
    pricing: "From ₹999 / shift"
  },
  {
    id: "iv-therapy",
    category: "diagnostics",
    title: "IV Drip Therapy at Home",
    shortDesc: "Doctor-prescribed wellness, hydration, recovery, and immunity booster IV drips administered safely in your room by registered nurses.",
    fullDesc: "Recharge rapidly with medically formulated intravenous therapy. From rapid recovery from food poisoning, viral fatigue, and jet lag to Myers Cocktail immunity drips and hangover recovery, all infusions are doctor-approved.",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=800&auto=format&fit=crop",
    badge: "Doctor Approved",
    features: [
      "100% sterile infusion sets administered by licensed nurses",
      "Electrolyte hydration & Myers Cocktail vitamin blends",
      "Rapid hangover, dehydration & travel fatigue recovery",
      "Pre-infusion vitals check and safety monitoring"
    ],
    pricing: "From ₹2,499 / session"
  },
  {
    id: "lab-blood-test",
    category: "diagnostics",
    title: "Lab / Blood Test at Home",
    shortDesc: "NABL-accredited diagnostic sample collection at your doorstep with painless phlebotomy and same-day digital lab reports.",
    fullDesc: "No more waking up early to fast in diagnostic center queues. Our trained phlebotomists collect blood, urine, and swab samples at your chosen time slot. Tests are processed in leading NABL & CAP accredited laboratories.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop",
    badge: "NABL Accredited",
    features: [
      "Complete Blood Count (CBC), Lipid, Liver & Kidney profiles",
      "Fasting blood glucose, HbA1c & Thyroid panel (T3, T4, TSH)",
      "Painless vacutainer collection by senior phlebotomists",
      "Digital report delivery via WhatsApp & Email within 6–12 hours"
    ],
    pricing: "From ₹499 / profile"
  },
  {
    id: "std-hiv-test",
    category: "diagnostics",
    title: "Confidential STD & Health Screening",
    shortDesc: "100% private, anonymous home sample collection with discreet packaging, certified lab analysis, and confidential digital results.",
    fullDesc: "We prioritize your privacy above all. A professional healthcare technician collects samples in plain, non-branded attire. Results are delivered securely with strict medical confidentiality and optional teleconsultation with a specialist.",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop",
    badge: "100% Confidential",
    features: [
      "Comprehensive 10-panel STD & sexual health screening",
      "Discreet, non-branded technician visit to your home or hotel",
      "Encrypted digital report accessible only via OTP",
      "Post-test confidential consultation with certified physician"
    ],
    pricing: "From ₹2,999 / panel"
  },
  {
    id: "elderly-care",
    category: "specialized",
    title: "Elderly & Geriatric Care at Home",
    shortDesc: "Empathetic, structured care plans for senior citizens including medication management, dementia support, mobility help, and vitals tracking.",
    fullDesc: "Give your elderly parents the dignity and medical supervision they deserve. Our geriatric-trained caregivers and nurses assist with activities of daily living, fall prevention, chronic disease tracking, and companionship.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop",
    badge: "Compassionate Care",
    features: [
      "Dedicated medication compliance & daily vitals logging",
      "Assistance with bathing, grooming, and safe mobility",
      "Specialized Alzheimer's, Parkinson's & dementia support",
      "Regular doctor review visits and family progress updates"
    ],
    pricing: "From ₹18,000 / month"
  },
  {
    id: "wound-dressing",
    category: "nursing",
    title: "Professional Wound Dressing & Stitches",
    shortDesc: "Sterile wound management by certified nurses for diabetic ulcers, post-surgical sutures, bedsores, burns, and vacuum-assisted closure.",
    fullDesc: "Prevent dangerous secondary infections with clinical-grade wound dressing at home. Our nurses employ aseptic non-touch technique (ANTT) using modern hydrocolloid and foam dressings under physician supervision.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    badge: "Sterile Protocol",
    features: [
      "Diabetic foot ulcer management & pressure bedsore dressing",
      "Post-operative stitch/staple removal & wound inspection",
      "Advanced silver-impregnated & alginate dressings",
      "Photographic wound healing tracking report"
    ],
    pricing: "From ₹899 / session"
  },
  {
    id: "physiotherapy",
    category: "specialized",
    title: "Physiotherapy & Rehabilitation",
    shortDesc: "Personalized home physiotherapy for stroke rehabilitation, orthopedic surgery recovery, joint pain, sports injuries, and neurological care.",
    fullDesc: "Regain independence and mobility in the comfort of your living room. Our qualified physiotherapists bring electrotherapy equipment, resistance bands, and customized exercise protocols directly to your home.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    badge: "Certified Physio",
    features: [
      "Post-knee/hip replacement rehabilitation programmes",
      "Neuro-physiotherapy for stroke & spinal cord conditions",
      "Advanced electrotherapy (TENS, IFT, Ultrasound on demand)",
      "Ergonomic assessment & personalized home exercise regimen"
    ],
    pricing: "From ₹1,199 / session"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Fatima Al M.",
    location: "Vasant Vihar, New Delhi",
    service: "Doctor at Home",
    rating: 5,
    time: "Booked at 11:30 PM",
    text: "Heltcare sent a doctor to our home within 40 minutes. Professional, thorough, and extraordinarily kind — exactly what we needed when my 4-year-old had a sudden 103°F fever in the middle of the night.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "James R.",
    location: "Bandra West, Mumbai (Hotel St. Regis)",
    service: "Hotel Doctor Visit",
    rating: 5,
    time: "Booked via WhatsApp",
    text: "As an overseas business traveler in Mumbai, I was relieved to get an English-speaking doctor in my hotel room without insurance or paperwork hassle. He brought medications and had me back on my feet in 24 hours.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "Indiranagar, Bengaluru",
    service: "Elderly Care & Nursing",
    rating: 5,
    time: "Ongoing 6 Months",
    text: "We use Heltcare for my 82-year-old father's daily post-stroke nursing care. The nursing team is compassionate, punctual, and truly understands geriatric care. The peace of mind is priceless.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Rohan Malhotra",
    location: "Jubilee Hills, Hyderabad",
    service: "IV Drip Therapy",
    rating: 5,
    time: "Morning Appointment",
    text: "IV hydration therapy at home after an exhausting red-eye flight was an absolute lifesaver. The nurse arrived with a sterile sealed kit, monitored my vitals, and made the whole infusion painless.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Ananya Deshmukh",
    location: "Koregaon Park, Pune",
    service: "Lab Test & Blood Work",
    rating: 5,
    time: "7:00 AM Fasting",
    text: "The phlebotomist arrived right on time at 7 AM. Sample collection was quick and completely painless. Got verified NABL digital reports on WhatsApp by 2 PM. Incredible service!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Dr. Vikram Sengupta",
    location: "Alipore, Kolkata",
    service: "Post-Op Wound Dressing",
    rating: 5,
    time: "Alternate Day Visits",
    text: "Being a surgeon myself, I was very particular about sterility protocols for my mother's post-op dressing. Heltcare's nurse followed textbook aseptic non-touch technique. Highly recommended.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
  }
];

export const CARE_SETTINGS = [
  {
    id: "home",
    setting: "Home Care",
    title: "Doctor at Your Home",
    desc: "Feeling unwell but unable to battle city traffic and hospital queues? Our certified doctors come directly to your home with complete diagnostic equipment.",
    perks: [
      "Comfort of your own bedroom or living space",
      "Zero exposure to hospital-acquired viral infections",
      "Personalized, unhurried 30–45 min consultations",
      "Immediate bedside vitals and medication delivery"
    ],
    action: "Book a Home Visit",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "hotel",
    setting: "Hotel & Travel",
    title: "Doctor at Your Hotel",
    desc: "Private, in-room medical care for business travellers, tourists, and international guests across India's premier hospitality destinations.",
    perks: [
      "Direct room visits coordinated smoothly with hotel concierge",
      "Bilingual & English-fluent licensed medical practitioners",
      "Official travel insurance documentation & digital receipts",
      "Urgent assistance for food intolerance, fever, or jet lag"
    ],
    action: "Request Hotel Doctor",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "office",
    setting: "Corporate Wellness",
    title: "Doctor at Your Office",
    desc: "On-site physician visits, workplace health assessments, and corporate medical desks to keep your workforce healthy and productive.",
    perks: [
      "On-site doctor visits for acute employee illnesses",
      "Annual corporate health checkups and blood screenings",
      "Ergonomic posture evaluations and stress wellness talks",
      "Priority employee healthcare coverage & retainer plans"
    ],
    action: "Arrange Corporate Visit",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  }
];

export const WHY_EXIST = {
  eyebrow: "Why We Exist",
  title: "Removing Barriers to Timely Medical Care in India",
  lead: "Urban living across Indian metros is fast-paced. Patients and busy families regularly face friction that makes traditional clinic visits an exhausting ordeal:",
  barriers: [
    {
      title: "Gridlocked Traffic & Travel Pain",
      desc: "Spending 2+ hours navigating Indian city traffic while running a high fever or dealing with severe pain is exhausting and risky."
    },
    {
      title: "Crowded OPDs & Long Waiting Lines",
      desc: "Hospital outpatient rooms often entail a 1 to 3 hour wait in waiting lobbies exposed to airborne flu and contagious illnesses."
    },
    {
      title: "Post-Surgical & Elderly Immobility",
      desc: "Transporting elderly parents, bedridden patients, or post-operative loved ones in cars is painful and medically complicated."
    },
    {
      title: "Urgent Concerns During Travel & Work",
      desc: "Tourists and corporate travelers often do not know which clinic is trustworthy or how to navigate unfamiliar local facilities."
    }
  ],
  solution: "Heltcare was founded to bridge this gap by bringing hospital-standard medical care directly to the patient's doorstep. We eliminate the stress of travel without compromising clinical rigor."
};

export const APPROACH_PILLARS = [
  {
    num: "01",
    title: "Rapid Dispatch & Punctuality",
    desc: "Average 30–45 minute arrival across major metro zones with real-time GPS tracking and coordinator updates."
  },
  {
    num: "02",
    title: "Accurate Bedside Assessment",
    desc: "Physicians carry calibrated diagnostic gear for ECG, glucose, vitals, otoscope examinations, and rapid swab testing."
  },
  {
    num: "03",
    title: "Evidence-Based Protocols",
    desc: "All clinical treatments adhere to strict national medical guidelines, emphasizing rational prescribing without unnecessary medications."
  },
  {
    num: "04",
    title: "Transparent & Empathetic Communication",
    desc: "Clear explanations of diagnosis, care pathways, and transparent pricing with zero surprise charges."
  },
  {
    num: "05",
    title: "Continuity of Care",
    desc: "Follow-up digital consultations within 24–48 hours to evaluate recovery and adjust treatment plans."
  }
];

export const MEDICAL_TEAM_INFO = {
  eyebrow: "Our Medical Team",
  title: "Our Strength Lies in Our People",
  description: "Heltcare is powered by verified clinicians dedicated to making bedside healthcare dignified, precise, and reassuring.",
  stats: [
    { value: "100%", label: "NMC / State Board Verified" },
    { value: "8+ Yrs", label: "Average Clinical Experience" },
    { value: "30 Mins", label: "Average Dispatch Speed" },
    { value: "25,000+", label: "Successful Home Visits" }
  ],
  roles: [
    {
      title: "NMC-Registered Physicians",
      desc: "MBBS & MD qualified physicians with backgrounds in emergency medicine, internal medicine, and family practice."
    },
    {
      title: "Registered Critical Care Nurses",
      desc: "Hospital-trained GNM & B.Sc nurses with certifications in IV cannulation, BLS/ACLS, and sterile wound management."
    },
    {
      title: "Senior Phlebotomists",
      desc: "NABL-certified laboratory technicians specializing in gentle, micro-needle venous blood collection."
    },
    {
      title: "24/7 Medical Coordinators",
      desc: "Triage coordinators who assess symptom urgency and dispatch the appropriate medical team immediately."
    }
  ]
};

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Contact Us in Seconds",
    desc: "Call our 24/7 hotline (+91 98765 43210), tap WhatsApp, or submit your location and symptoms through our quick online portal."
  },
  {
    step: "02",
    title: "We Dispatch Your Clinician",
    desc: "Our triage coordinator assigns the nearest certified doctor or nurse. You receive doctor credentials and live arrival estimation."
  },
  {
    step: "03",
    title: "Receive Treatment on the Spot",
    desc: "Your doctor arrives with a complete medical kit to examine, diagnose, initiate treatment, collect samples, and issue verified digital prescriptions."
  }
];

export const COMMITMENTS = [
  {
    title: "Licensed Professionals Only",
    desc: "Every doctor and nurse on our roster holds a verified registration with the National Medical Commission (NMC) or State Nursing Councils."
  },
  {
    title: "Transparent Communication",
    desc: "Clear itemized pricing before treatment begins. No hidden equipment fees, weekend surcharges, or surprise billing."
  },
  {
    title: "Timely Emergency Response",
    desc: "Swift coordination and structured care pathways designed to reach your doorstep within 30 to 45 minutes across metro zones."
  },
  {
    title: "Absolute Patient Privacy",
    desc: "Strict adherence to patient confidentiality and medical ethics. All digital health records and lab results are securely encrypted."
  },
  {
    title: "Clinical Rigor & Sterility",
    desc: "Hospital-grade sterile kits, single-use consumables, and standardized clinical SOPs for every injection, dressing, and infusion."
  }
];

export const COVERAGE_AREAS = [
  {
    city: "Delhi NCR",
    subregions: ["South Delhi", "Vasant Vihar", "Connaught Place", "Gurugram (Cyber City / Golf Course Rd)", "Noida & Greater Noida", "Faridabad"],
    eta: "30–40 Mins"
  },
  {
    city: "Mumbai MMR",
    subregions: ["South Mumbai (Colaba / Marine Lines)", "Bandra West", "Juhu & Andheri", "Powai", "Lower Parel", "Navi Mumbai & Thane"],
    eta: "35–45 Mins"
  },
  {
    city: "Bengaluru",
    subregions: ["Indiranagar", "Koramangala", "Whitefield", "HSR Layout", "MG Road & Lavelle Rd", "Electronic City", "Hebbal"],
    eta: "30–40 Mins"
  },
  {
    city: "Hyderabad",
    subregions: ["Banjara Hills", "Jubilee Hills", "Hitec City", "Gachibowli", "Madhapur", "Secunderabad"],
    eta: "30–45 Mins"
  },
  {
    city: "Chennai",
    subregions: ["Adyar", "Anna Nagar", "T. Nagar", "OMR (IT Corridor)", "Nungambakkam", "Besant Nagar"],
    eta: "35–45 Mins"
  },
  {
    city: "Pune",
    subregions: ["Koregaon Park", "Kalyani Nagar", "Baner & Aundh", "Viman Nagar", "Hinjewadi IT Park", "Kothrud"],
    eta: "30–40 Mins"
  },
  {
    city: "Kolkata",
    subregions: ["Park Street", "Alipore & Ballygunge", "Salt Lake (Sector V)", "New Town", "Southern Avenue"],
    eta: "35–45 Mins"
  }
];

export const FAQ_ITEMS = [
  {
    question: "What should I prepare before the doctor arrives at my home?",
    answer: "Please keep any previous medical records, past prescriptions, current medications, and a brief timeline of symptoms readily accessible. Ensure good lighting and a comfortable seating or lying space for the examination. If requesting a blood test, please confirm whether fasting is required."
  },
  {
    question: "Can the doctor prescribe medication during a home visit in India?",
    answer: "Yes. Our doctors are fully registered with the National Medical Commission (NMC) and will evaluate your clinical condition before issuing an official digital prescription that is recognized at any registered pharmacy across India. We can also assist in arranging urgent home delivery of prescribed medications."
  },
  {
    question: "Can a doctor visit me at my hotel room in India?",
    answer: "Absolutely. We provide discreet, private in-room doctor visits to hotels, serviced apartments, and guest houses across all major Indian cities. Our clinicians carry valid hospital identification and coordinate smoothly with hotel reception or concierge."
  },
  {
    question: "Can the doctor issue a medical fitness certificate or sick leave note?",
    answer: "Yes. Following a thorough clinical assessment, our licensed doctors can issue an official medical certificate, sick note for employers/universities, or a fit-to-fly certificate based on authentic medical findings."
  },
  {
    question: "What happens if my medical condition requires hospital emergency admission?",
    answer: "If our visiting physician determines that your condition requires emergency stabilization, advanced radiology (CT/MRI), or hospital admission, they will immediately initiate bedside stabilizing measures and coordinate priority transfer to the nearest accredited hospital ICU/Emergency department."
  },
  {
    question: "Are blood tests processed in accredited laboratories?",
    answer: "Yes, 100% of diagnostic samples collected at your doorstep are processed in NABL (National Accreditation Board for Testing and Calibration Laboratories) and CAP-accredited diagnostic centers, ensuring gold-standard diagnostic precision."
  },
  {
    question: "How fast can a doctor reach my doorstep?",
    answer: "Our average arrival time is 30 to 45 minutes across primary metropolitan zones. As soon as you confirm via phone or WhatsApp, our closest available doctor is dispatched with live GPS tracking."
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Who Needs Nursing Care at Home in India? A Complete Family Guide",
    date: "October 2026",
    category: "Home Nursing",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop",
    excerpt: "From post-operative surgical wound monitoring and stepdown ICU care to chronic stroke rehabilitation, learn when home nursing is the safest and most dignified choice for your family members.",
    content: "Recovering from surgery or managing chronic ailments in a crowded hospital environment introduces unwanted emotional strain and risks of hospital-acquired infections (HAIs). With skilled home nursing in India, registered nurses provide ICU-standard monitoring, IV drug administration, tracheostomy suctioning, and catheter changes right in the patient's familiar surroundings. Families experience peace of mind while patients heal up to 30% faster in home environments."
  },
  {
    id: 2,
    title: "How to Book an IV Drip at Home in India: Step-by-Step Patient Guide",
    date: "October 2026",
    category: "IV Wellness",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=600&auto=format&fit=crop",
    excerpt: "Everything you need to know about getting safe, doctor-prescribed hydration, Myers Cocktail vitamins, and electrolyte therapy delivered in your home or hotel suite.",
    content: "Intravenous (IV) therapy delivers 100% bioavailable fluids, amino acids, and essential vitamins directly into the bloodstream, bypassing the digestive tract. At Heltcare, all IV therapy procedures are medically reviewed by an NMC physician before administration. A licensed nurse measures your baseline blood pressure and oxygen saturation before setting up an aseptic infusion system. Whether recovering from acute food poisoning or dehydration after long travel, relief is achieved within 45 minutes."
  },
  {
    id: 3,
    title: "What Is IV Drip Therapy? The Complete Guide to Benefits, Uses & Safety",
    date: "October 2026",
    category: "Clinical Insights",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=600&auto=format&fit=crop",
    excerpt: "An in-depth medical look into nutrient intravenous delivery, indications, contraindications, and why clinical oversight is vital.",
    content: "While intravenous therapy has gained widespread popularity for athletic performance and executive wellness, clinical safety must never be compromised. Formulations like glutathione, high-dose Vitamin C, and balanced electrolytes should only be compounded and administered following clinical screening for renal function and cardiac history. Discover how Heltcare maintains hospital-level safety standards across all home infusions in India."
  }
];
