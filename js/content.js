/**
 * SHUBHANGI ANURAGI // SHUBHSIVERSE
 * Central Content Configuration File
 * 
 * Edit this file anytime to update projects, essays, thesis notes, poems, or contact info!
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Shubhangi Anuragi",
    creativeBrand: "Shubhsiverse",
    tagline: "I work with words, human systems, and stories that move.",
    currentRole: "Content Strategist at Besttt.co",
    location: "Mumbai, India",
    email: "sanuragi10904@gmail.com",
    phone: "+91 9630 2235 04",
    substack: "https://substack.com/@shubhsiverse",
    linkedin: "https://www.linkedin.com/in/shubhangi-anuragi-9ba0801b6/",
    instagramPersonal: "https://www.instagram.com/shubhangianuragii",
    instagramShubhsiverse: "https://www.instagram.com/shubhsiverse",
    instagramNirvana: "https://www.instagram.com/nirvana.mindcare",
    statusBadge: "Content Strategist @ Besttt.co (Mumbai) · Exploring Work & Organisational Psychology",
    heroManifesto: `Science helps me understand the world and humans better—just as psychology does. 
I apply strategic thinking and communication to build high-performing brands and content ecosystems. 
And I write because I have an innate need to capture human truth.`,
    stats: [
      { label: "Writing Challenges", value: "50 + 75 Days", sub: "Consecutive daily essays on LinkedIn" },
      { label: "HP Dreams Unlocked", value: "Season 1 Winner", sub: "Content Creation · Mentored by Sahiba Bali" },
      { label: "Current Agency", value: "Besttt.co", sub: "Content Strategist (Mumbai)" },
      { label: "Athletic Leadership", value: "Captain & Runner", sub: "Univ. Women's Basketball · Half-Marathons" }
    ]
  },

  pillars: [
    {
      number: "01",
      title: "Content Strategy & Systems",
      description: "Translating business goals and market dynamics into high-converting narratives, SEO structures, and multi-channel creative direction for modern brands."
    },
    {
      number: "02",
      title: "Work & Organisational Psychology",
      description: "Rooted in empirical life sciences and psychological rigor. Focused on human behavior, team dynamics, and institutional systems for upcoming Master's research."
    },
    {
      number: "03",
      title: "Prolific Writing & Newsletters",
      description: "Creator of 'The Human Factor', author of 50-day and 75-day LinkedIn writing challenges ('Raising Stakes'), and long-form Substack explorations."
    },
    {
      number: "04",
      title: "Shubhsiverse & The Spoken Word",
      description: "Writing and poetry platform. Author of the forthcoming book 'First Aid for the Forever Ache' (in publishing) and 2x IFP performing arts finalist."
    }
  ],

  workExperience: [
    {
      id: "besttt",
      role: "Content Strategist",
      company: "Besttt.co",
      location: "Mumbai",
      period: "Sept 2026 – Present",
      category: "Agency Strategy",
      featured: true,
      summary: "Leading digital content strategy, campaign ideation, and social storytelling at a fast-paced creative social media agency in Mumbai.",
      details: [
        "Developing high-retention content frameworks and creative treatments for high-growth modern brands.",
        "Translating client business objectives into scalable social content, conversion-driven hooks, and editorial schedules.",
        "Overseeing cross-functional production across copy, video ideation, and performance distribution."
      ],
      tags: ["Content Strategy", "Social Media", "Creative Direction", "Campaign Ideation"]
    },
    {
      id: "pinnacle",
      role: "Content Strategist & SEO Intern",
      company: "Pinnacle Growth Consulting",
      location: "Noida",
      period: "June 2026 – August 2026",
      category: "D2C & Growth",
      featured: true,
      summary: "Accelerated modern D2C brands across marketplaces and executed end-to-end launch communications for TourBro.",
      details: [
        "Spearheaded web copy, SEO blog architecture, and launch communication for TourBro (travel & spiritual wellness platform, now live).",
        "Managed Pinnacle's brand footprint: agency webpage, weekly thought-leadership newsletter, and founder's LinkedIn ghostwriting.",
        "Orchestrated founder's office communications, community engagement strategies, and Instagram content ideation.",
        "Engineered content systems connecting organic search visibility with customer acquisition funnels."
      ],
      tags: ["SEO Architecture", "TourBro Launch", "Founder's Office", "D2C Scaling", "Newsletter"]
    },
    {
      id: "nirvana",
      role: "Social Media Strategist & Creative Producer",
      company: "Nirvana Mindcare",
      location: "Remote / Ahmedabad",
      period: "May 2025 – Jan 2026",
      category: "Mental Health & Psychology",
      featured: true,
      summary: "Directed end-to-end digital content strategy for psychiatric care led by Dr. Vaidehee Choudharee (MBBS, MD Psychiatry, NIMHANS-certified).",
      details: [
        "Scripted, directed, acted in, and edited 50+ educational and destigmatizing mental health Reels, carousels, and stories.",
        "Built a clinically grounded narrative framework that made complex neuropsychiatric topics approachable for everyday audiences.",
        "Managed the entire content pipeline, community engagement, and patient inquiry workflows.",
        "Achieved rapid organic growth by grounding creative reels in empathetic psychiatric accuracy."
      ],
      tags: ["Dr. Vaidehee Choudharee", "Mental Health", "Reels Production", "Creative Direction", "Community Growth"],
      reelLinks: [
        { title: "Psychiatric Insight Reel 01", url: "https://www.instagram.com/reel/DPbFA80DVPJ/" },
        { title: "Mental Wellness Reel 02", url: "https://www.instagram.com/reel/DPJW43TiPlr/" },
        { title: "Mindcare Conversation 03", url: "https://www.instagram.com/reel/DKBu1lHN91V/" }
      ]
    },
    {
      id: "stempedia",
      role: "Content Writer Intern → Part-Time",
      company: "STEMpedia",
      location: "Ahmedabad",
      period: "June 2024 – July 2025",
      category: "EdTech & Publishing",
      featured: true,
      summary: "Crafted product-centric blogs, high-converting Kickstarter campaigns, and co-authored an educational children's activity book.",
      details: [
        "Wrote comprehensive SEO-optimized technical and educational blogs explaining AI, robotics, and STEM kits for young learners.",
        "Contributed to global Kickstarter crowdfunding campaigns, case studies, and customer email newsletters.",
        "Co-authored a hands-on children's STEM activity book, structuring pedagogical exercises into engaging narratives.",
        "Handled CMS backend publishing, metadata optimization, and content performance tracking."
      ],
      tags: ["EdTech", "Kickstarter", "Activity Book Co-Author", "SEO Writing", "Technical Storytelling"]
    },
    {
      id: "hp-dreams",
      role: "Season 1 Winner (Content Creation Category)",
      company: "HP Dreams Unlocked",
      location: "National",
      period: "October 2025 – February 2026",
      category: "Recognition & Accolades",
      featured: true,
      summary: "Selected among thousands of creators nationwide as the Season 1 Winner in Content Creation; awarded HP OmniBook & mentorship with Sahiba Bali.",
      details: [
        "Competed across rigorous national creative rounds evaluating storytelling craft, original narrative voice, and digital production.",
        "Placed in Top 40 to win the HP OmniBook AI laptop, and won the championship on October 11, 2025.",
        "Underwent an intensive 1-on-1 creative mentorship with renowned creator and actor Sahiba Bali in February 2026."
      ],
      tags: ["HP OmniBook", "National Winner", "Sahiba Bali Mentorship", "Creative Storytelling"]
    },
    {
      id: "ifp",
      role: "Social Media Host & 2x Finalist",
      company: "India Film Project (IFP)",
      location: "Mumbai",
      period: "2024 – 2025",
      category: "Performing Arts & Media",
      featured: false,
      summary: "Two-consecutive-year finalist in the 50-Hour Performing Arts Challenge (S14 & S15) and on-ground social media host in 2025.",
      details: [
        "Created, rehearsed, and produced original spoken word and performance pieces under intense 50-hour festival time limits.",
        "Selected as on-camera social media host for IFP 2025, interviewing top national creators, filmmakers, and storytellers.",
        "Navigated high-stakes live media coverage with spontaneity and editorial poise."
      ],
      tags: ["IFP S14 & S15", "50-Hour Challenge", "On-Camera Host", "Spoken Word"]
    },
    {
      id: "champion-stuff",
      role: "Creative Producer (Freelance)",
      company: "Champion Stuff",
      location: "Remote",
      period: "May 2025 – July 2025",
      category: "Media & Sports",
      featured: false,
      summary: "Supported pre-production, athlete outreach, and shoot coordination for sports media show.",
      details: [
        "Managed episode promotion workflows, athlete communication, and audience engagement.",
        "Engineered social buzz and short-form snippets to amplify show visibility."
      ],
      tags: ["Sports Media", "Athlete Outreach", "Pre-Production"]
    }
  ],

  research: {
    title: "Behavioural Indicators of Stress and Physiological Arousal Among Children Exposed to Cumulative Adversity",
    degree: "Bachelor of Science in Biological Life Sciences (Minor in Psychology)",
    institution: "Ahmedabad University (School of Arts and Sciences)",
    completionDate: "April 2026",
    advisors: [
      { name: "Dr. Rachna Mishra", dept: "Department of Psychology" },
      { name: "Dr. Souvik Sen Gupta", dept: "Department of Life Sciences" }
    ],
    fieldworkPartners: ["Saath NGO", "Police Pathshala"],
    sampleSize: "49 children aged 6–16 (34 females, 15 males)",
    coreHypothesis: "Do teacher-reported externalising behaviors align with objective physiological stress arousal in resource-constrained environments?",
    keyFindings: [
      {
        stat: "r = -0.285",
        pVal: "p = 0.047 (Statistically Significant)",
        label: "Inverse Pulse Rate Correlation",
        narrative: "Externalising behavior was a statistically significant negative predictor of resting pulse rate (β = -0.355, R² = 0.081), revealing that children displaying fewer overt disruptive behaviors often carried higher physiological arousal."
      },
      {
        stat: "Dissociation",
        pVal: "Psychophysiological Disconnect",
        label: "The 'Learned Restraint' Phenomenon",
        narrative: "Apparent calm compliance in disadvantaged environments—children sitting still with arms extended, rarely flinching—often masked autonomic hyperarousal rather than genuine emotional calm."
      },
      {
        stat: "CCRI Index",
        pVal: "Cumulative Contextual Risk",
        label: "Multi-layered Adversity",
        narrative: "Assessed 6 binary indicators: parental absence, economic hardship, housing instability, caregiver illness, educational disruption, and unsafe environments. Showed the necessity of multi-dimensional evaluation beyond behavioral observation alone."
      }
    ],
    clinicalExposure: [
      {
        role: "Clinical Observership",
        mentor: "Dr. Vishwamohan Thakur",
        institution: "Doc Thakur Clinic & Zydus Hospital",
        description: "Bridged theoretical neuroscience and developmental biology with clinical psychiatric patient evaluations and patient-care dynamics."
      },
      {
        role: "Convention Volunteer",
        institution: "National Academy of Psychology (NAOP)",
        description: "Engaged in academic discourse with leading Indian and international psychological researchers."
      }
    ],
    academicTrajectory: {
      nextStep: "Master's Degree in Work & Organisational Psychology",
      philosophy: `Life Sciences gave me an unshakeable empirical foundation—teaching me to respect biological mechanisms, measurement error, and systematic observation. 
Now, I direct that rigor toward understanding workplace dynamics, human motivation, and organizational systems.`
    }
  },

  newslettersAndEssays: {
    newsletters: [
      {
        id: "the-human-factor",
        title: "The Human Factor",
        platform: "LinkedIn Weekly Newsletter",
        badge: "Active Series",
        url: "https://www.linkedin.com/newsletters/the-human-factor-7487140140415467520/",
        description: "My dedicated weekly publication decoding work, organizational psychology, human decision-making, and institutional culture. The intellectual foundation for my upcoming master's path."
      },
      {
        id: "raising-stakes-75",
        title: "Raising Stakes 2.0 (75-Day Challenge)",
        platform: "LinkedIn Marathon Edition",
        badge: "Completed",
        url: "https://www.linkedin.com/newsletters/raising-stakes-2-0-75-day-7420521098716499968/",
        description: "Seventy-five consecutive days of uncompromising thought pieces on behavioral psychology, cognitive friction, creative discipline, and personal transitions."
      },
      {
        id: "raising-stakes-50",
        title: "Raising Stakes (50-Day Challenge)",
        platform: "LinkedIn Original Edition",
        badge: "Completed",
        url: "https://www.linkedin.com/newsletters/raising-stakes-50-day-writing-7343689452516474880/",
        description: "The original 50-day writing marathon that established my public long-form voice, exploring emotional architecture and adult identity."
      },
      {
        id: "substack-shubhsiverse",
        title: "Shubhsiverse on Substack",
        platform: "Substack Essays",
        badge: "Ongoing",
        url: "https://substack.com/@shubhsiverse",
        description: "Long-form reflections, essays on culture and psychology, poetic prose, and deep-dive notes on the creative life."
      }
    ],

    featuredArticles: [
      {
        title: "Aloneness is not Loneliness | Day 45",
        series: "Raising Stakes 50-Day Challenge",
        link: "https://www.linkedin.com/pulse/aloneness-loneliness-day-45-shubhangi-anuragi-rjsuf/?trackingId=saxsEaahT%2FCKfou2L7yFdQ%3D%3D",
        readTime: "4 min read",
        excerpt: "Solitude as a cognitive sanctuary versus loneliness as an emotional deficit. An exploration into why modern culture confuses physical silence with emotional void."
      },
      {
        title: "What Being an Adult Gets You | Day 44",
        series: "Raising Stakes 50-Day Challenge",
        link: "https://www.linkedin.com/pulse/what-being-adult-gets-you-day-44-shubhangi-anuragi-iig3f/?trackingId=LEvUhT3NSPGP9AV6R5i4rw%3D%3D",
        readTime: "5 min read",
        excerpt: "The gradual realization that adulthood is not a destination of complete answers, but the quiet courage to bear the consequences of your own choices."
      },
      {
        title: "You Need to Have Fun One Moment & Be Obsessed the Other | Day 40",
        series: "Raising Stakes 50-Day Challenge",
        link: "https://www.linkedin.com/pulse/you-need-have-fun-one-moment-obsessed-other-day-40-shubhangi-anuragi-mdgxf/?trackingId=xXBwhbKZSs2o5onlRDdH4g%3D%3D",
        readTime: "4 min read",
        excerpt: "On balancing the joyful lightness of creative play with the fierce, non-negotiable obsession required to build enduring work."
      },
      {
        title: "Why Do My Eyes Widen With Recognition When It's 'New to Me'? | Day 35",
        series: "Raising Stakes 50-Day Challenge",
        link: "https://www.linkedin.com/pulse/why-do-my-eyes-widen-recognition-when-its-new-me-day-35-anuragi-moy6f/?trackingId=H03XqX75Q%2FONge4X%2BTAtUA%3D%3D",
        readTime: "4 min read",
        excerpt: "The neurocognitive thrill of discovering an idea that feels deeply familiar—as if your mind was already waiting for the language to hold it."
      },
      {
        title: "How to Write Content That Ranks and Converts",
        series: "Editorial & Strategy Guide",
        link: "#",
        readTime: "6 min read",
        excerpt: "Why ranking and conversion represent two distinct reader states, and how to engineer content architecture that satisfies algorithmic criteria while persuading real human minds."
      }
    ]
  },

  shubhsiverse: {
    title: "Shubhsiverse",
    subtitle: "The Creative Universe & Poetry Room",
    book: {
      title: "First Aid for the Forever Ache",
      status: "Underway for Publishing",
      format: "Poetry & Reflective Prose Manuscript",
      synopsis: `A collection of poems and reflective pieces exploring identity, longing, emotional repair, and the quiet resilience of ordinary survival. 
Rooted in raw vulnerability and psychological clarity, it gives language to the unspoken ache that accompanies growing up, letting go, and learning to stay.`
    },
    performanceHighlights: [
      {
        event: "Abhivyakti City Arts Project (Season 7)",
        category: "Performing Arts Category",
        year: "2025",
        description: "Performed original spoken word piece exploring the emotional geography of home, memory, and personal boundaries."
      },
      {
        event: "India Film Project (IFP S14 & S15)",
        category: "50-Hour Performing Arts Challenge Finalist",
        year: "2024 & 2025",
        description: "Conceived and staged 50-hour poetry performance under national scrutiny, advancing to the finalists showcase."
      }
    ],
    samplePoems: [
      {
        id: "poem-1",
        title: "First Aid for the Forever Ache",
        date: "From the Upcoming Collection",
        stanzas: [
          "You do not heal by demanding the bruise explain itself.",
          "You heal by softening your grip on the glass,",
          "by admitting that the water had nowhere else to go.",
          "",
          "There is a quiet room inside the ribcage",
          "where we store what could not survive outside—",
          "the unsent letters, the early trains, the names",
          "we only whisper when the door is locked from within.",
          "",
          "This is not a cure.",
          "This is gauze for the wound that refused to close,",
          "a bandage made of words, holding you together",
          "until the dawn remembers how to find your window."
        ]
      },
      {
        id: "poem-2",
        title: "Motion Is Meditation",
        date: "Notes from the Asphalt",
        stanzas: [
          "Mile fourteen is where the chatter dies.",
          "The doubts that negotiated all morning",
          "run out of breath around the bend.",
          "",
          "Your feet strike the ground in four-four time,",
          "a biological metronome answering nothing,",
          "asking for nothing except the next stride.",
          "",
          "Here, in the cadence of burning lungs,",
          "you remember: the body is not a vehicle for your mind.",
          "It is the cathedral where your grit comes to pray."
        ]
      },
      {
        id: "poem-3",
        title: "Recognition",
        date: "Reflections on Belonging",
        stanzas: [
          "Why did it feel like remembering,",
          "the first time you spoke truth to me?",
          "",
          "As if my bones were already shaped",
          "for the syntax you carried across the room,",
          "as if the ache had always been fluent",
          "in the language you had not yet spoken."
        ]
      }
    ]
  },

  aboutMe: {
    quote: "I have a researcher’s curiosity with an artist’s mind. This choice is reflected in my academic trajectory, the work I have put out into the world, and the way I lead my life.",
    bioParagraphs: [
      "I began in the biological sciences at Ahmedabad University, driven by a desire to understand the world through an empirical lens. Science taught me to respect biological mechanisms, question easy assumptions, and look closely at the data. That foundation was intentional: it gives me a rigorous groundwork as I transition forward into Work & Organisational Psychology.",
      "In the commercial world, I work as a Content Strategist at Besttt.co in Mumbai, having previously built content systems, SEO architecture, and launch messaging at Pinnacle Growth Consulting (Noida), Nirvana Mindcare, and STEMpedia. I enjoy understanding audiences, designing strategic narratives, and turning business objectives into compelling communication.",
      "Alongside strategy and science, writing is my intrinsic tendency. I run 'The Human Factor' on LinkedIn, authored back-to-back 50-day and 75-day writing marathons, and am currently preparing my debut poetry collection, 'First Aid for the Forever Ache', for publishing.",
      "When I am not working on content systems or reading psychology papers, you will find me training for half-marathons, leading the university women's basketball team on the court, or performing spoken word at festivals like IFP and Abhivyakti."
    ],
    athleticsAndLeadership: [
      { role: "Team Captain", organization: "Ahmedabad University Women's Basketball Team", note: "Guiding court strategy, stamina training, and team morale." },
      { role: "Distance Runner", organization: "Half-Marathoner", note: "Disciplined endurance running: 'Motion is meditation'." },
      { role: "Volunteer Educator", organization: "Teach For India (50+ hours)", note: "Teaching support and classroom engagement for underserved students." },
      { role: "Student Editor & Games Captain", organization: "Scindia Kanya Vidyalaya", note: "Graduated with 95.8% aggregate; led student editorial board and athletics." }
    ]
  },

  services: [
    {
      title: "Content Strategy & Brand Systems",
      description: "Audience positioning, conversion-focused editorial calendars, brand voice architecture, and social media systems for modern agencies and startups."
    },
    {
      title: "SEO Architecture & Long-Form Writing",
      description: "In-depth thought leadership pieces, product-centric blogs, and structured content designed to both rank on search engines and convert intelligent human readers."
    },
    {
      title: "Creative Direction & Short-Form Video",
      description: "End-to-end Reels and video ideation, scripting, on-camera delivery, and production workflows (tested across 50+ mental health and lifestyle assets)."
    },
    {
      title: "Ghostwriting & Thought Leadership",
      description: "Working directly with founders and executives to articulate their ideas, craft viral LinkedIn essays, and build authority newsletters."
    }
  ]
};
