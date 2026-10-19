export const links = {
  scholar: 'https://scholar.google.com/citations?user=Eh3urZ8AAAAJ&hl=en',
  linkedin: 'https://www.linkedin.com/in/meherazchayan/',
  email: 'https://mail.google.com/mail/?view=cm&fs=1&to=meheraz.chayan@gmail.com',
  doi: 'https://doi.org/10.1145/3704522.3704534'
};

export const nav = ['About', 'Education', 'Research Experience', 'Technical Experience', 'Management & Supervision', 'Leadership & Engagement', 'Skills', 'Publications', 'Research Projects', 'Technical Projects', 'Achievements', 'Certifications', 'References'];

export const interests = ['Human-Computer Interaction (HCI) and CSCW','Human-Centered and Trustworthy AI','Human–AI Interaction','Mixed-Methods User Research','Security, Privacy and Digital Trust','AI-Assisted Decision Support'];

export const courses = [
  ['CSE422','Artificial Intelligence','A','4.00'], ['CSE427','Machine Learning','A','4.00'],
  ['CSE472','Human-Computer Interaction','A','4.00'], ['CSE340','Computer Architecture','A','4.00'],
  ['CSE470','Software Engineering','A−','3.70'], ['CSE400','Thesis','A','4.00'],
  ['CSE490D','Introduction to Football Data and Analytics','A−','3.70']
];

export const experiences = [
  { type:'Research experience', role:'Undergraduate Research Assistant', org:'BRAC University, Dhaka, Bangladesh', date:'Aug 2025–Sep 2026', supervisor:'Dr. Farida Chowdhury', mode:'On Site', mark:'BRAC University', logo:'/logos/brac.png', points:['Supported AI and HCI research through data analysis, experimental work, and literature synthesis across human-centered computing studies.','Contributed to mixed-methods research through surveys, interviews, usability studies, and clear technical and academic writing.','Investigated trustworthy AI, multimodal verification, digital trust, bounded AI-agent behaviour, privacy, and user decision-making.'] },
  { type:'Research experience', role:'Research Associate & Developer', org:'University of Central Florida, USA', date:'Jan–Jul 2026', supervisor:'Dr. Mohammad Newaz Sharif', mark:'UCF', points:['Designed and developed RES Q, a machine learning system for mental health monitoring and crisis response created for emergency professionals and crisis affected communities.','Contributed across the complete research cycle, including user needs investigation, prototype design, iterative evaluation, technical implementation, and research documentation within a multidisciplinary international team.','Helped translate research findings into a competition ready system whose human centered design and practical relevance earned a Top 8 finalist position at the Johns Hopkins Healthcare Design Competition 2026.'] },
  { type:'Research experience', role:'Undergraduate Researcher', org:'University of Canberra, Australia', date:'Sep 2024–May 2025', supervisor:'Dr. Md. Mizanur Rahman', mark:'UC', logo:'/logos/canberra.png', points:['Developed and systematically evaluated machine learning approaches for detecting cyberattacks across smart home and Internet of Things environments.','Prepared and analysed security datasets, compared model performance, and interpreted influential features to make detection outcomes more explainable and technically defensible.','Converted experimental results into clear research reporting, connecting model accuracy with the practical security requirements of connected systems.'] },
  { type:'Technical experience', role:'Avionics & Control Systems R&D Engineer', org:'Amateur Experimental Rocketry Dhaka (AERD)', date:'Oct 2023–Aug 2024', mark:'AERD', points:['Developed SkyRecon, a networking drone and mobile relay platform designed to restore communication when conventional infrastructure is unavailable, damaged, or unreliable.','Engineered essential networking capabilities, including mesh routing, link quality monitoring, delayed message delivery, relay coordination, and movement safety controls for resilient field operation.','Developed and maintained electronic valve actuation and flow control systems while contributing to flight control algorithms and integrated testing across electronics and software.'] },
  { type:'Technical experience', role:'Machine Learning Intern', org:'Interactive Cares, Dhaka', date:'Jan–Mar 2025', mark:'IC', points:['Built structured machine learning workflows for real world datasets, covering data cleaning, feature preparation, supervised model training, validation, and comparative evaluation.','Analysed model performance and documented results clearly, demonstrating disciplined experimentation and the ability to turn raw data into reproducible technical findings.'] },
  { type:'Technical experience', role:'Web Development Intern', org:'Interactive Cares, Dhaka', date:'Feb–Apr 2023', mark:'IC', points:['Developed responsive web interfaces with reusable components using HTML, CSS, JavaScript, and React, with close attention to usability, visual consistency, and maintainable implementation.','Contributed to frontend delivery and full stack development workflows, strengthening practical experience in translating requirements into functional features for users.'] }
];

export const leadership = [
  {
    role: 'Director',
    org: 'BRAC University Research for Development Club',
    mark: 'BRAC University',
    logo: '/logos/bured-blue.png',
    points: [
      'Motivated students to participate in research and helped build an active, collaborative research culture across the university community.',
      "Led the launch of Reflection, Volume 1, BRAC University's first in-house publication, coordinating the initiative from student engagement through publication."
    ]
  },
  {
    role: 'Founder & Vice President',
    org: 'BRAC University Book Club',
    mark: 'BRAC University',
    logo: '/logos/bracu-book-club-linkedin.jpg',
    points: [
      'Co-founded the club to bring students from different disciplines together through reading, discussion, and the exchange of ideas.',
      'Helped shape an inclusive intellectual community where members could explore perspectives beyond their academic fields and learn from one another.'
    ]
  }
];

export const managementExperience = [
  {
    role: 'Project Advisor & HCI Researcher',
    org: 'Ghush',
    date: 'August 2026 – Present',
    mark: 'Ghush',
    logo: '/logos/ghush-icon.svg',
    points: [
      'Directed the planning and delivery of a privacy-conscious bribery reporting platform, translating research goals and user-safety requirements into a structured product roadmap.',
      'Supervised the design and development workflow for anonymous reporting, AI-assisted content filtering, human review, and responsible handling of sensitive public-interest reports.'
    ]
  },
  {
    role: 'Project Manager & Campaign Coordinator',
    org: 'Social Square',
    date: 'October 2025 – March 2026',
    mark: 'Social Square',
    logo: '/logos/social-square-favicon.png',
    points: [
      'Led product coordination for a collaborative campaign platform, organizing priorities and guiding the team from concept development through implementation and presentation.',
      'Supervised work across partner discovery, campaign coordination, and communication workflows, contributing to the project earning third place in the 2026 National Undergraduate Startup Challenge.'
    ]
  }
];

export const skillGroups: [string,string[]][] = [
  ['Research & User Studies',['Study design','Surveys and interviews','Usability testing','Qualitative analysis','Statistical analysis','Dataset preparation','Academic writing']],
  ['Machine Learning & Data Analysis',['Python','SQL','Pandas','NumPy','Scikit learn','PyTorch','TensorFlow','Machine learning','Natural language processing','Model evaluation','Explainable AI']],
  ['Human Computer Interaction & Responsible AI',['Human centered design','Human AI interaction','Responsible AI','Digital trust','Multimodal verification','AI agent safety','Decision support systems']],
  ['Cybersecurity & Privacy',['Network security','IoT security','Data privacy','Cryptography','Threat analysis','Secure systems','Wireshark','Linux']],
  ['Software & AI Development',['Java','JavaScript','React','MERN and FARM stacks','REST APIs','Git','System architecture','Retrieval augmented generation','AI agent workflows']]
];

export const publications = [
  { status:'Published', title:'Explainable Deep Learning for Cyber Attack Detection in Electric Vehicle Charging Stations', citation:'Md Mizanur Rahman, Md Meheraz Hossain Chayan, Khaleda Mehrin, Afrin Sultana, and Mosaab M. Hamed. (2024). In Proceedings of the 11th International Conference on Networking, Systems, and Security (NSysS ’24), pp. 1–7. ACM.', venue:'ACM · NSysS ’24', year:'2024', link:links.doi, linkLabel:'Open DOI', summary:'This peer-reviewed work develops explainable deep-learning approaches for cyberattack detection in electric-vehicle charging stations.' },
  { status:'Accepted', title:'Data for Protection, Data as Risk: Governing Humanitarian Information in Bangladesh’s Rohingya Response', venue:'2027 ANZ and Pacific Conference', year:'2027', summary:'Examines how humanitarian data can support protection and assistance while also creating privacy and security risks for people affected by the Rohingya response in Bangladesh. The study considers data governance, access, sharing, and responsible handling in humanitarian settings.' },
  { status:'Accepted', title:'Incremental Cancer-Class Expansion from HAM10000 to MILK10k with External Validation on DDI/DermaBench', venue:'Computers in Biology and Medicine · Elsevier', year:'2026', summary:'Studies continual expansion of skin-lesion classification models from HAM10000 to MILK10k, with external validation on independent datasets. The work examines model performance, retention of previously learned classes, and generalization across datasets.' },
  { status:'Submitted', title:'An AI That Knows Its Limits: Designing Bounded Agents for University Students', venue:'Submitted to ACM CHI 2027', year:'2027', summary:'Examines how university students perceive institutionally integrated AI agents and what limits they expect on an agent’s actions. The study draws on a survey of 209 participants and 30 interviews across three private universities, informing a prototype with task-scoped access, user approvals, explanations, and audit controls.' },
  { status:'Submitted', title:'From Claims to Evidence: Designing and Evaluating a Multimodal News Verification System', venue:'Submitted to ACM CHI 2027', year:'2027', summary:'Describes NewsProof, a multimodal news verification system that allows users to examine claims from URLs, text, images, and audio with linked evidence. The research considers usability and how users inspect supporting sources rather than relying on a simple verification label.' },
  { status:'Submitted', title:'Reporting Without Fear: Designing for Trust and Safety in Digital Bribery Reporting', venue:'Submitted to ACM CHI 2027', year:'2027', summary:'Explores trust and safety in a platform for reporting bribery, including anonymous submission, AI-assisted content filtering, human review, and mechanisms for handling sensitive reports. The study is grounded in the design and deployment of Ghush and subsequent user feedback.' },
  { status:'Submitted', title:'ReliableVAEP: Bootstrap Uncertainty and Probabilistic Player Rankings for Football Action Valuation', venue:'Submitted to MIT Sloan Sports Analytics Conference 2027', year:'2027', summary:'Investigates the stability of football player rankings derived from action-value models. The study uses bootstrap resampling, rank intervals, and probabilistic pairwise comparisons to describe uncertainty that single rankings may obscure.' },
  { status:'Manuscripts in Preparation', title:'Agentic AI for Cyberattack Detection in IoT Devices', venue:'Computers & Security · Elsevier', year:'', summary:'Investigates the use of agentic AI for identifying cyberattacks in IoT environments and supporting security decisions. The proposed research considers how automated reasoning could be combined with detection models and evaluated in practical IoT security scenarios.' },
  { status:'Manuscripts in Preparation', title:'Dataset on User-Reported Bribery Cases in Bangladesh for Machine Learning/Deep Learning Studies', venue:'Scientific Data · Nature Portfolio', year:'', summary:'Describes a dataset of user-reported bribery cases in Bangladesh and its possible use for machine-learning and deep-learning research. The study considers data organization, privacy-aware processing, and the development of classification or analysis tasks.' },
  { status:'Manuscripts in Preparation', title:'A Standard for Consistently Collected Data on Real and Fake News Claims', venue:'Scientific Data · Nature Portfolio', year:'', summary:'Proposes a consistent way to collect, document, and label genuine and false news claims for research. The work considers claim metadata, evidence records, annotation practices, and how standardized data could support comparable verification studies.' }
];

export const researchProjects = [
  {title:'My University Portal', area:'HCI · Bounded Agents · University Students', description:'A university services portal that explores how bounded AI assistance can support course scheduling, administrative approvals, deadline tracking, and routine student tasks while keeping consequential decisions visible and under user control.', detail:'Grounded in a 209-person survey and 30 interviews examining agent limits, privacy safeguards, transparency, and user approval.', links:[['View GitHub','https://github.com/MeherazChayan/My-University-Portal']]},
  {title:'RES-Q', area:'Human-Centered AI · Mental Health · Crisis Response', description:'A mental health monitoring and crisis response platform that applies machine learning to help emergency professionals identify concerning patterns, organize essential information, and coordinate timely support for individuals and communities affected by crisis.', detail:'Developed through user research, iterative prototyping, and multidisciplinary evaluation; the related project became a Johns Hopkins Top 8 finalist.', links:[['Open Prototype','https://resq-care-connect.lovable.app/']]},
  {title:'NewsProof', area:'Multimodal AI · Misinformation · Usability', description:'A multimodal news verification system that accepts URLs, written claims, images, and audio, then presents relevant evidence in a structured interface so users can inspect sources and make more informed credibility judgments.', detail:'Evaluated from a human-centered perspective, focusing on verification outcomes, evidence access, usability, and informed user decisions.', links:[['View GitHub','https://github.com/MeherazChayan/NewsProof']]},
  {title:'ReliableVAEP', area:'Football Analytics · Ranking Uncertainty · Player Evaluation', description:'A football analytics research system that investigates the stability of player rankings derived from action value models, moving beyond a single fixed performance score to show how confidently players can be compared.', detail:'Applies bootstrap resampling, rank intervals, and probabilistic pairwise comparisons to quantify uncertainty and produce more responsible, evidence based player evaluations.', links:[['View GitHub','https://github.com/MeherazChayan/ReliableVAEP']]},
  {title:'Ghush', area:'Reporting Systems · Trust and Safety · Privacy', description:'A privacy conscious bribery reporting platform that supports anonymous disclosure, responsible content review, and structured feedback while reducing the personal and social risks people may face when reporting sensitive incidents.', detail:'Designed to investigate reporter trust, safe disclosure, privacy protection, and responsible handling of sensitive public-interest reports.', links:[['Visit Website','https://www.ghush.site/']]},
  {title:'CancerIL', area:'Continual Learning · Skin-Lesion Classification', description:'A continual learning pipeline for expanding skin lesion classification from HAM10000 to MILK10k while preserving previously learned knowledge and testing whether performance remains reliable across independent clinical image datasets.', detail:'Examines class retention, cross-dataset generalization, continual-learning baselines, statistical performance, and model interpretability.', links:[['View GitHub','https://github.com/MeherazChayan/CancerIL']]},
  {title:'HomeGuard XAI', area:'Explainable AI · IoT Cybersecurity', description:'An explainable security system for detecting cyberattacks in smart home and Internet of Things environments, combining comparative machine learning evaluation with interpretable evidence that helps clarify why a network event is considered suspicious.', detail:'Combines dataset analysis, comparative classifier evaluation, and interpretable explanations of model predictions and security decisions.', links:[['Read Paper',links.doi]]}
];

export const technicalProjects = [
  ['HealthLinkedAI','An intelligent healthcare platform that combines disease detection models with organized patient records, doctor workflows, and clinical communication tools to support more accessible and coordinated care.','Open Prototype','https://preview--med-tech-bridge.lovable.app/'],
  ['MediVerify','A medical record integrity system that identifies potentially manipulated information, highlights suspicious changes, and communicates the associated risks clearly so healthcare stakeholders can assess the reliability of sensitive records.','Open Prototype','https://spark-create-any.lovable.app/'],
  ['Social Square','A collaborative campaign platform that enables brands to discover suitable partners, coordinate shared promotional activities, and manage campaign communication through one structured workflow designed for efficient business collaboration.','Visit Website','https://socialsquare.co/'],
  ['SkyRecon','A resilient communication platform using networking drones and mobile relay nodes to maintain connectivity during infrastructure disruption through link monitoring, adaptive routing, delayed message delivery, coordinated relays, and movement safety controls.','View GitHub','https://github.com/MeherazChayan/SkyRecon'],
  ['MedBot Assist','An assistive mobility robot designed to support people with disabilities by combining accessible user controls, guided movement, and practical robotic assistance within a system focused on independence and everyday usability.','View GitHub','https://github.com/MeherazChayan/MedBot-Assist'],
  ['Care Cloud','A healthcare management system built with the MERN stack that brings patient information, doctor activities, appointments, and medical records into one platform for clearer organization and more efficient service delivery.','View GitHub','https://github.com/MeherazChayan/Care-Cloud'],
  ['Mini F1','An interactive racing game built with OpenGL that combines responsive vehicle control, race mechanics, collision behavior, and three dimensional rendering to demonstrate practical computer graphics and real time interaction.','View GitHub','https://github.com/MeherazChayan/Mini_Formula_1'],
  ['BlockAware','A blockchain based digital currency solution accompanied by a public education initiative that explains the underlying technology, intended use, and practical implications through an accessible demonstration and awareness campaign.','Watch Demonstration','https://www.youtube.com/watch?v=dpdJVXWRAOI']
];

export const achievements = [
  ['Top 8 Finalist','Johns Hopkins Healthcare Design Competition','RES-Q','2026','Johns Hopkins Center for Bioengineering Innovation & Design (CBID)','/logos/achievement-jhu.png'],
  ['3rd Place','National Undergraduate Startup Challenge','Social Square','2026','Eastern Bank PLC','/logos/achievement-ebl.png'],
  ['3rd Place','National Blockchain Hackathon and Video Awareness Contest','BlockAware','2026','Bangladesh Securities and Exchange Commission (BSEC)','/logos/achievement-bsec.png'],
  ['National Champion','Tech & Robotics Competition, International Science and Invention Fair','MediVerify','2025','Indonesian Young Scientist Association (IYSA); qualified for the global round in Indonesia','/logos/achievement-iysa.png'],
  ['Winner','UIHP National Innovation Challenge','HealthLinkedAI','2025','University Innovation Hub Program under the ICT Division and Bangladesh Hi-Tech Park Authority, with World Bank financing','/logos/achievement-uihp.png'],
  ['Champion','National Research Essay Competition on World Environment Day','—','2023','Dhaka School of Economics under the University of Dhaka','/logos/achievement-dsce.jpg']
];

export const certifications = ['Google Data Analytics Professional Certificate · Google','Foundations of Project Management · Google','AI Product Manager Professional Certificate · Microsoft','Machine Learning Specialization · DeepLearning.AI','Cisco Certified Network Associate (CCNA) · Cisco','Introduction to Cybersecurity · Cisco'];
export const references = [
  ['Dr. Farida Chowdhury','Professor','BRAC University','farida.chowdhury@bracu.ac.bd','Undergraduate Thesis Supervisor · Worked under her as an Undergraduate Research Assistant'],
  ['Dr. Muhammad Iqbal Hossain','Associate Professor','BRAC University','iqbal.hossain@bracu.ac.bd','Undergraduate Thesis Co-supervisor'],
  ['Dr. Md. Mizanur Rahman','Assistant Professor','Torrens University Australia','mdmizanur.rahman@torrens.edu.au','Worked under his supervision as a Student Researcher'],
  ['Dr. Mohammad Newaz Sharif','Assistant Professor','University of Central Florida','mohammadnewaz.sharif@ucf.edu','Worked under his supervision as a Research Associate and Developer']
];
