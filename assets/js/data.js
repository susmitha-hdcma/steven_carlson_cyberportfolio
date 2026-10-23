const tech_skills = {
  "AI & Machine Learning": [
    "Generative AI / LLM Integration", "AI Agent Orchestration", "MCP",
    "AI Governance & Safety", "Predictive Analytics", "Constraint-Based Optimization"
  ],
  "Cybersecurity & Compliance": [
    "NIST CSF", "HIPAA", "HITECH", "PCI DSS", "CIA Triad",
    "IDS", "IPS", "MISP", "Threat Intelligence", "SIEM"
  ],
  "Cloud & Infrastructure": [
    "AWS", "AWS Linux", "EC2", "VPN", "VPC",
    "RHEL", "Encryption", "MongoDB", "MySQL"
  ],
  "Programming & DevOps": [
    "Python", "Perl", "JavaScript", "Node.js", "ExpressJS", "Swift/iOS",
    "CI/CD Pipelines", "nginx", "Apache", "Git", "Wireshark", "macOS"
  ],
  "Compliance & Legal": [
    "Healthcare Law", "Regulatory Compliance", "PHI Protection"
  ]
};




// const tech_skills = [
//   // Cybersecurity
//   "NIST CSF", "HIPAA", "HITECH", "PCI DSS", "CIA Triad",
//   "IDS", "IPS", "MISP", "Threat Intelligence", "SIEM",
// 
//   // Cloud & Infrastructure
//   "AWS", "AWS Linux", "EC2", "VPN", "VPC",
//   "RHEL", "Encryption", "MongoDB", "MySQL",
// 
//   // Programming & Tools
//   "JavaScript", "Perl", "Python", "Node.js", "ExpressJS",
//   "nginx", "Apache", "Git", "Wireshark", "macOS",
// 
//   // Compliance & Legal
//   "Healthcare Law", "Regulatory Compliance", "PHI Protection"
// ];


const misc_skills = [
   "Helicopter Pilot",
   "Published Author",
   "Paramedic",
   "HIPAA Regulations",
   "Healthcare Law"
];

// const certifications_skills = [
//    "CompTIA Security+",
//    "ISC2 Certified in Cybersecurity (CC)",
//    "Google Cybersecurity Professional Certificate",
//    "Johns Hopkins: Healthcare IT & Data Privacy",
//    "University of Pennsylvania: Regulatory Compliance",
//    "Paramedic (FL/VA/UT/NREMT)",
//    "AHA: BLS, ACLS, PALS",
//    "NAEMT: AMLS",
//    "FAA Private Pilot"
// ];

const certifications_skills = {
  "Cybersecurity & Compliance": [
    "ISC2 Certified Information Systems Security Professional (CISSP)",
    "CompTIA Security+",
    "ISC2 Certified in Cybersecurity (CC)",
    "Google Cybersecurity Professional Certificate",
    "University of Pennsylvania: Regulatory Compliance",
    "Johns Hopkins: Healthcare IT & Data Privacy"
  ],
  "EMS Certifications": [
    "Paramedic (FL/VA/UT/NREMT)",
    "AHA: BLS, ACLS, PALS",
    "NAEMT: AMLS"
  ],
  "Aviation": [
    "FAA Private Pilot"
  ]
};


const details = [
//    { label: "Location", value: "Salt Lake City, Utah" },
   { label: "Location", value: "Tampa Bay, Florida" },
   { label: "Remote", value: "Yes" }
];
// Navigation

const navigation = [
   { name: "Resume", href: "./index.html" },
   { name: "Projects", href: "./projects.html" },
   { name: "Blog", href: "./blog.html" },
];

/**
 * Resume Page
 */

// Experience Data

const jobsList = [
{
  industry: ["tech", "management"],
  role: "Founder & Principal Engineer — CADMedic.AI & WaymarkHQ",
  company: "Independent AI Platform Development",
  location: "Tampa Bay, FL",
  period: "2024 - Present",
  type: "Founder",
  description:
    "<ul>\
<li>Designed, built, and shipped two AI-native platforms end-to-end as sole architect and engineer, owning security model, AI integration, CI/CD pipelines, and product roadmap.</li>\
<li><strong>CADMedic.AI</strong> (cadmedic.ai): AI-integrated operations platform for private EMS agencies — CAD dispatch with live unit tracking, ePCR field charting, billing and revenue cycle, fleet management, controlled-substance custody, workforce scheduling, secure facility request portal, and an offline-capable native iOS field app on a single data model.</li>\
<li>Deployed generative AI chart-quality review, narrative-driven revenue capture, predictive availability forecasting, and constraint-based route/unit optimization; HIPAA-aligned architecture with RBAC and auditable records designed in from the first commit.</li>\
<li><strong>WaymarkHQ</strong> (waymarkhq.com): governance control plane for AI coding agents — a trusted boundary between agent intent and privileged action.</li>\
<li>Built native macOS orchestration (isolated git worktrees per agent run, approvals, release checks, built-in recovery) and a policy Broker that keeps credentials outside agent reach, enforces policy before execution, and preserves durable audit evidence — least privilege and separation of duties applied to agentic development.</li>\
</ul>"
},

{
  industry: ["tech", "management"],
  role: "Co-Founder, Executive Board Member & CISO",
  company: "stockNum Systems, Inc. — makers of AutoCorner",
  location: "Luray, VA",
  period: "April 2009 - August 2024",
  type: "Full-time",
  description:
    "<ul>\
<li>Co-founded and served on the executive board of a nationwide SaaS company and its flagship product, AutoCorner, a dealer-management platform for used-car dealerships; held fiduciary responsibility for corporate strategy, technology direction, and enterprise risk.</li>\
<li>Supported exclusive, long-term contracts with multiple Fortune 500 partners in regulated industries, requiring mature governance, risk, and compliance (GRC) practices.</li>\
<li>Acted as CISO-equivalent executive, owning security governance, architecture, incident response, and regulatory compliance across all systems and customer data.</li>\
<li>Directed enterprise infrastructure and cloud security strategy for a platform supporting 3,000+ automotive dealerships nationwide.</li>\
<li>Led cloud modernization initiatives, migrating legacy on-premise RHEL environments to a security-hardened AWS architecture with segmented VPCs and secure VPN connectivity.</li>\
<li>Built and led security operations capabilities, including continuous monitoring, threat detection, incident response, and forensic investigation.</li>\
<li>Established enterprise risk management programs encompassing vendor risk assessments, encryption standards, access controls, audit readiness, and executive security decision-making.</li>\
<li>Sold ownership stake upon departure in 2024.</li>\
<li>Protected millions of PII records across credit applications, BHPH (buy-here-pay-here) payment processing, and card data; ensured PCI DSS compliance by integrating security controls directly into product architecture and operational workflows.</li>\
</ul>"
},

{
  industry: ["tech", "security"],
  role: "Lead Security Engineer & Architect",
  company: "Cyberbully Watch",
  location: "Luray, VA",
  period: "2018 - 2020",
  type: "Full-time",
  description:
    "<ul>\
<li>Founded and architected a cloud-native security platform from initial concept through production deployment.</li>\
<li>Led end-to-end system design and development, establishing core architecture, data pipelines, security controls, and operational workflows.</li>\
<li>Designed high-throughput data ingestion, crawling, and processing pipelines using Python and Perl, optimized for scale, accuracy, and forensic integrity.</li>\
<li>Built computer vision and image-matching workflows capable of large-scale analysis while preserving evidentiary chain-of-custody requirements.</li>\
<li>Implemented cryptographically verifiable logging, tamper-resistant audit trails, and role-based access controls suitable for investigative and legal review.</li>\
<li>Integrated secure VPN-based access controls and segmented network architecture to support law enforcement and sensitive investigative workflows.</li>\
<li>Collaborated with investigators and legal stakeholders to ensure system outputs met evidentiary, privacy, and admissibility standards.</li>\
<li>Sold the business to a larger technology firm; led the transition through acquisition, supporting knowledge transfer and operational handoff post-sale.</li>\
</ul>"
},

{
  industry: ["aviation", "operations"],
  role: "Aviation Operations & Risk Management",
  company: "Independent",
  location: "United States",
  period: "April 2022 - Present",
  type: "Part-time",
  description:
    "<ul>\
<li>Planned and executed complex rotary-wing flight operations across 28 states, covering over 7,000 nautical miles under FAA regulatory oversight.</li>\
<li>Demonstrated disciplined operational risk management, including route planning, weather analysis, fuel management, and contingency preparation.</li>\
<li>Operated within strict federal aviation regulations, maintaining compliance, documentation, and safety standards in dynamic environments.</li>\
<li>Conducted interviews and public-facing communications with military, law enforcement, and business professionals, translating technical and operational topics for broad audiences.</li>\
<li>Applied aviation-grade checklist discipline and safety culture principles transferable to high-reliability organizations and regulated industries.</li>\
</ul>"
},

// {
//   industry: ["ems", "healthcare", "operations"],
//   role: "Advanced Scope Practice Paramedic (Specialty Care Transport)",
//   company: "MedFleet",
//   location: "Hudson, FL",
//   period: "June 2024 - Present",
//   type: "Full-time",
//   description:
//     "<ul>\
// <li>Serve in an advanced practice paramedic role supporting specialty care and interfacility transport of critically ill patients requiring high-acuity interventions.</li>\
// <li>Operate within strict clinical, privacy, and regulatory frameworks, ensuring compliance with HIPAA and organizational protocols during patient care and transport.</li>\
// <li>Utilize electronic patient care records (ePCR), monitoring systems, and secure clinical technologies to maintain real-time continuity of care and data integrity.</li>\
// <li>Coordinate closely with physicians, nurses, and receiving facilities to ensure safe handoff of patients, information, and clinical responsibility.</li>\
// <li>Apply disciplined decision-making under time-critical conditions where operational failures carry immediate patient-safety consequences.</li>\
// <li>Continuously integrate new medical protocols, digital systems, and compliance requirements into daily clinical operations.</li>\
// </ul>"
// },
{
  industry: ["ems", "leadership", "operations"],
  role: "Paramedic / Duty Officer / Command Staff (Second-in-Command)",
  company: "Luray Volunteer Rescue Squad",
  location: "Luray, VA",
  period: "October 2011 - March 2021",
  type: "Volunteer",
  description:
    "<ul>\
<li>Progressed through increasing levels of responsibility from EMT to Paramedic, Duty Officer, and ultimately Command Staff as second-in-command of the agency.</li>\
<li>Provided operational leadership for one of the county’s busiest EMS organizations, overseeing emergency response readiness and personnel deployment.</li>\
<li>Served as Duty Officer and Command Staff, making time-critical operational decisions and providing leadership during complex and high-risk incidents.</li>\
<li>Oversaw equipment readiness, operational logistics, and resource management to ensure continuous emergency response capability.</li>\
<li>Developed and enforced protocols aligned with HIPAA and HITECH requirements for secure handling of patient information.</li>\
<li>Recognized with multiple annual awards for highest EMS call volume, reflecting reliability, leadership under pressure, and sustained commitment.</li>\
</ul>"
},

   // {
   //    industry: ["management"],
   //    role: "Founder",
   //    company: "Ninth Wave Holdings, LLC",
   //    location: "Spring Hill, FL",
   //    period: "November 2005 - December 2008",
   //    type: "Full-time",
   //    description:
   //       "In this role, I specialized in handling complex foreclosure procedures. This included thorough research of properties and their owners, tracking down and negotiating with hard-to-find individuals to strike a deal for purchasing their properties. I then managed the process of repairing these properties, ensuring the work was completed under budget, and successfully resold them on the open market.",
   // },
   // 
   // {
   //    industry: ["misc"],
   //    role: "Computer Sales/Computer Repair/Customer Service/Loss Prevention",
   //    company: "Best Buy",
   //    location: "Clearwater, FL & Citrus Park, FL",
   //    period: "2001 & 2003-2004",
   //    type: "Part-time & Full-time",
   //    description:
   //       "I worked for Best Buy during two separate periods. During my time at Best Buy, I gained extensive experience across multiple roles. I started in computer sales, assisting customers in selecting the right technology solutions for their needs. I then transitioned to computer repairs, providing technical support and troubleshooting various hardware and software issues. As a Customer Service Supervisor, I led a team to deliver exceptional service, resolving customer concerns efficiently and maintaining high satisfaction levels. Additionally, I served as a Loss Prevention Supervisor, where I was responsible for implementing security measures, conducting investigations, and ensuring the safety and security of the store. My diverse roles at Best Buy equipped me with a strong foundation in technology sales, customer service, and loss prevention.",
   // },
   // {
   // industry: ["tech"],
   //    role: "Windows Application Developer",
   //    company: "Winn Technology",
   //    location: "Palm Harbor, FL",
   //    period: "1998-1999",
   //    type: "Part-time",
   //    description:
   //       "As the lead developer, I primarily utilized Borland C++ Builder to design and develop a Windows-based front-end interface for an inbound and outbound telephone call center. This application was engineered to efficiently manage incoming calls by routing them to the correct extension and utilizing caller ID to automatically retrieve and display customer account information on the operator's monitor. Additionally, the system tracked customer sales from both inbound and outbound calls, providing a comprehensive solution that streamlined call center operations and enhanced customer service efficiency.",
   // },
   // {
   // industry: ["tech"],
   //    role: "Quality Assurance Technician",
   //    company: "Intuit",
   //    location: "Palm Harbor, FL (remote)",
   //    period: "1998-1999",
   //    type: "Part-time",
   //    description:
   //       "As a contracted Quality Assurance Technician, I was responsible for testing pre-release versions of Quicken & QuickBooks Pro, meticulously identifying technical glitches and bugs. My role involved conducting comprehensive testing to ensure the software's functionality, performance, and usability met the highest standards. In addition to detecting issues, I provided detailed feedback and suggested improvements to refine and enhance the product. My contributions ensured the product was polished, reliable, and ready for public release.",
   // },
   // {
   // industry: ["misc"],
   //    role: "Customer Service",
   //    company: "CompUSA",
   //    location: "Clearwater, FL",
   //    period: "1998-1999",
   //    type: "Part-time",
   //    description:
   //       "In high school, I worked part-time as a Customer Service representative at CompUSA. My responsibilities included assisting customers with their computer purchases, handling returns, and providing support to ensure a smooth and positive shopping experience. This role allowed me to develop strong customer service skills and gain hands-on experience with various computer products and technologies.",
   // },
   // {
   // industry: ["tech"],
   //    role: "Windows Shareware Developer",
   //    company: "(Self Employed)",
   //    location: "Palm Harbor, FL",
   //    period: "1997-2000",
   //    type: "Part-time",
   //    description:
   //       "As a Windows shareware developer, I created several Windows 95/Windows 98-based applications using Borland C++ Builder, including CodePad, FunPad, Quality Assurance Suite, and High Security. Many of these applications received positive critical acclaim from internationally renowned Ziff Davis Publishing and were adopted for use by academic and corporate networks.",
   // },

  
];

// Education

const educationList = [
   {
     industry: ["degree"],
     degree: "Master of Science in Cybersecurity (M.S.)",
     university: "Liberty University",
     location: "Lynchburg, VA",
     period: "Graduated with Honors", 
     description:
        "M.S. in Cybersecurity covers advanced cybersecurity topics including digital infrastructure protection, threat detection, incident response, and risk management."
  },
    {
     industry: ["degree"],
     degree: "Bachelor of Science in Religion (B.S.)",
     university: "Liberty University",
     location: "Lynchburg, VA",
     period: "Graduated with Honors", // "2022 – May 2025",
     description:
        "Bachelor of Science in Religion, providing a strong foundation in understanding diverse cultural and spiritual perspectives—enhancing my ability to engage effectively with individuals from varied backgrounds."
  },
   {
     industry: ["tech"],
     degree: "Certified Information Systems Security Professional (CISSP)",
     university: "ISC2",
     location: "Tampa",
     period: "November 2025",
     description:
        "Globally recognized credential validating advanced expertise in designing, implementing, and managing enterprise cybersecurity programs."
  },
  {
     industry: ["tech"],
     degree: "Security+ (Sec+)",
     university: "CompTIA",
     location: "Online",
     period: "November 2024",
     description:
        "Validated core cybersecurity knowledge including threat identification, risk mitigation, incident response, and secure network design."
  },
  {
     industry: ["tech"],
     degree: "Certified in Cybersecurity (CC)",
     university: "ISC2",
     location: "Lecanto, FL",
     period: "September 2024",
     description:
        "Demonstrated foundational knowledge in threat detection, access control, risk management, and vulnerability analysis."
  },
  {
     industry: ["tech"],
     degree: "Cybersecurity Professional Certificate",
     university: "Google",
     location: "Online",
     period: "September 2024",
     description:
        "Hands-on training in incident response, network security, and threat management using real-world tools and scenarios."
  },
  {
     industry: ["tech","ems"],
     degree: "Healthcare IT Support",
     university: "John Hopkins University",
     location: "Online",
     period: "September 2024",
     description:
        "Specialized in health IT systems, data security, privacy regulations, and clinical IT operations."
  },
  {
     industry: ["tech","ems"],
     degree: "Regulatory Compliance",
     university: "University of Pennsylvania: Penn Carey Law",
     location: "Online",
     period: "September 2024",
     description:
        "Gained expertise in privacy law, anti-corruption compliance, and development of risk-based compliance frameworks."
  },
  {
     industry: ["tech","ems"],
     degree: "Healthcare Data Security, Privacy, and Compliance",
     university: "Johns Hopkins University",
     location: "Online",
     period: "September 2024",
     description:
        "Focused on HIPAA, PHI protection, risk management, and healthcare data system safeguards."
  },
 // {
 //     industry: ["ems"],
 //     degree: "Advanced Medical Life Support (AMLS)",
 //     university: "Medfleet",
 //     location: "Hudson, FL",
 //     period: "August 2024",
 //     description:
 //        "The Advanced Medical Life Support (AMLS) course provided intensive training that significantly sharpened my skills in assessing and managing complex medical emergencies. With a strong emphasis on critical thinking and systematic patient care, AMLS expanded my expertise in treating a wide range of conditions, including respiratory, cardiovascular, neurological, and metabolic emergencies. This training enhanced my ability to deliver high-quality, evidence-based care in the most demanding situations.",
 //  },
 // {
 //      industry: ["ems"],
 //      degree: "OSHA: 10-Hour General Industry",
 //      university: "IACET Accredited - 360Training",
 //      location: "Online",
 //      period: "August 2024",
 //      description:
 //         "I completed the OSHA: 10-Hour General Industry course, which provided essential workplace safety and health standards training. This course covered a wide range of topics, including hazard identification, personal protective equipment, and emergency response procedures. By understanding OSHA regulations, I gained valuable knowledge in maintaining a safe and compliant work environment, ensuring the well-being of myself and others in various industrial settings.",
 //   },
 // {
 //     industry: ["aviation","ems"],
 //     degree: "Flight Medical Provider/Critical Care Paramedic",
 //     university: "ImpactEMS",
 //     location: "Online",
 //     period: "August 2024 - Current",
 //     description:
 //        "The Flight Medical Provider course is an advanced training program designed to prepare paramedics for the critical care flight paramedic certification (FP-C) exam. I am currently enrolled in this course to enhance my paramedic skills and elevate them to the critical care level required for high-stakes flight medical operations. The course covers a wide range of topics, including advanced airway management, trauma care, and in-flight patient management, all of which are essential for providing top-tier medical care in the challenging air medical transport environment.",
 //  },
 // {
 //     industry: ["aviation"],
 //     degree: "Helicopter Flight School",
 //     university: "Tampa Bay Aviation",
 //     location: "Clearwater, VA",
 //     period: "March 2021 - Sept 2023",
 //     description:
 //        "I completed flight school and earned my Private Pilot certification in Rotorcraft (helicopter). This training involved extensive instruction in helicopter operation, including navigation, flight maneuvers, and emergency procedures. Through both ground school and hands-on flight training, I gained the skills and knowledge required to safely operate a helicopter, mastering the unique challenges of rotorcraft aviation. My certification reflects my commitment to precision and safety in aviation. Much of this education transferred to Liberty University toward my Bachelor of Science.",
 //  },
 //  
 //  {
 //       industry: ["aviation"],
 //       degree: "Helicopter Flight Ground School",
 //       university: "Helicopter Ground School, LLC",
 //       location: "Online/Check Ride-Warsaw, IN",
 //       period: "March 2021 - Sept 2023",
 //       description:
 //          "Helicopter Ground School was an intensive online course that provided essential helicopter ground school training as a prerequisite for my in-person FAA-approved Check Ride. This course covered key topics such as aerodynamics, navigation, meteorology, and FAA regulations, ensuring I was thoroughly prepared for the practical aspects of becoming a certified Private Pilot. The training was instrumental in building the foundational knowledge required to pass the Check Ride and achieve my certification as a Private Pilot in Rotorcraft.",
 //    },
 //  {
 //        industry: ["aviation"],
 //        degree: "DC SFRA Training Course",
 //        university: "FAA Safety Team Aviation Learning",
 //        location: "Online",
 //        period: "March 2022",
 //        description:
 //           "The DC SFRA (Special Flight Rules Area) course, offered by the FAA, was a mandatory training program required to gain authorization to fly in the highly restricted airspace over Washington, DC. This course provided comprehensive instruction on the specific procedures, communication protocols, and regulatory requirements necessary to safely and legally operate within the DC SFRA. Completing this course was essential for ensuring compliance with FAA regulations and for obtaining the necessary clearance to navigate one of the most sensitive airspaces in the United States.",
 //     },
 //  {
 //          industry: ["aviation","ems"],
 //          degree: "ACOS: Aircrew Operations & Survival",
 //          university: "IAMed",
 //          location: "Online",
 //          period: "October 2021",
 //          description:
 //             "The ACOS: Aircrew Operations & Survival course was an intensive 10-hour online EMS training program designed to equip participants with the knowledge and skills required to operate as a member of a helicopter EMS aircrew safely. This course covered critical aspects of aircrew operations, including safety protocols, emergency procedures, and survival strategies in various scenarios. Completing this training was vital in preparing for the unique challenges EMS professionals face operating in airborne environments, ensuring readiness to provide effective medical care under demanding conditions.",
 //       },
    
   // {
   //      industry: ["ems"],
   //      degree: "EMT-B & EMT-P (North Carolina)",
   //      university: "Tri-County Community College",
   //      location: "Murphy, NC",
   //      period: "2002-2003",
   //      description:
   //         "I completed an intensive combined EMT-Basic and EMT-Paramedic course, providing comprehensive emergency medical care training. The program equipped me with essential EMT-Basic skills, including patient assessment, trauma care, and basic life support. The paramedic portion of the course further developed my expertise in advanced life support techniques such as airway management, cardiac monitoring, and drug administration. This rigorous training prepared me to deliver critical pre-hospital care in emergency settings.",
   //   },
   // {
   //      industry: ["misc","tech"],
   //      degree: "High School",
   //      university: "Palm Harbor University High School",
   //      location: "Palm Harbor, FL",
   //      period: "2001",
   //      description:
   //         "During high school, I excelled academically and actively participated in extracurricular activities that honed my technical skills. I was responsible for running the in-school TV production studio, where I managed the setup, recording, and broadcasting of daily announcements and special events. Additionally, I served as the audio technician for the school's theatre productions, ensuring high-quality sound for performances. These experiences provided me with a solid foundation in audiovisual technology and production, fostering my passion for media and communication.",
   //   },
];
