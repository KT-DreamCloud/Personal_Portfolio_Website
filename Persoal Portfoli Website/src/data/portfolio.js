// Single source of truth for every piece of content on the site.
// Edit this file to update the portfolio; the pages read from it.

export const profile = {
  name: 'Karan Todkar',
  brand: 'KT~Dev.com',
  initials: 'KT',
  roles: [
    'Coder',
    'Java Developer',
    'Gen AI Enthusiast',
    'AI Assisted Developer',
    'AI Designer',
  ],
  tagline:
    'I Code / Develop / Program / Build / Create / Debug and Design Software Applications.',
  intro:
    'Welcome to my personal portfolio website. I am a highly skilled coder and developer with a passion for technology and innovation. My goal is to leverage my skills and expertise to build powerful software solutions that make a positive impact on people\u2019s lives.',
  // Drop your PDF at public/Karan_Todkar_CV.pdf to make this button work.
  resumeUrl: '/Karan_Todkar_CV.pdf',
};

export const contact = {
  email: 'karan24todkar@gmail.com',
  phone: '8329673970',
  education: 'MIT - WPU Pune',
  location: 'Pune, Maharashtra',
  languages: 'English, Hindi, Marathi',
};

// Short job highlights shown next to contact details on Home.
export const jobs = [
  {
    title: 'Software Developer',
    company: 'Amdocs | AT&T Cricket Wireless',
    period: 'Aug 2025 – Present',
    location: 'Hybrid • Pune',
    points: [
      'Owned 15+ production microservices for account, order & payment.',
      'Migrated services to Java 17 & MongoDB; cut CI build time by 40%.',
      'Built Azure Service Bus retry flows for reliable integrations.',
    ],
    skills: ['Java', 'Microservices', 'MongoDB', 'Azure', 'GitHub Actions'],
  },
  {
    title: 'Associate Software Engineer',
    company: 'Amdocs | AT&T Cricket Wireless ABO',
    period: 'Jan 2024 – Aug 2025',
    location: 'Hybrid • Pune',
    points: [
      'Delivered 5+ microservices for inventory & retail tax flows.',
      'Built real-time REST APIs for stock transfer & warehouse audits.',
      'Shipped a full inventory platform upgrade in 6 months.',
    ],
    skills: ['Java', 'Spring Boot', 'MongoDB', 'REST APIs', 'Azure'],
  },
];

export const socials = [
  { label: 'GitHub', url: 'https://github.com/Karan24KT', icon: 'github' },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/karan-todkar',
    icon: 'linkedin',
  },
  { label: 'Email', url: `mailto:${contact.email}`, icon: 'mail' },
];

export const stats = [
  { value: '30+', label: 'Projects Completed', emoji: '\u{1F525}' },
  { value: '3+', label: 'Years of Coding Experience', emoji: '\u{1F468}\u200D\u{1F4BB}' },
  { value: '\u26A1', label: 'Quick Learner', emoji: '\u{1F680}' },
  { value: '\u{1F3AF}', label: 'Self Motivated Individual', emoji: '\u{1F4AA}' },
];

export const about = [
  'I am a mature individual who understands the importance of staying up-to-date with the latest industry trends and technologies. As a quick learner, I am always up for new challenges, and I thrive on solving complex problems using my analytical and critical thinking skills which makes me a valuable asset to any software industry.',
  'I am a self-motivated person who takes pride in delivering high-quality work and meeting project deadlines. I am constantly seeking new challenges and opportunities to grow my skills and knowledge in the software field.',
];

export const skillGroups = [
  {
    category: 'Programming Languages',
    emoji: '\u{1F4BB}',
    items: ['Java 8', 'Java 17', 'Java', 'Bash Scripting', 'Python'],
  },
  {
    category: 'Frameworks & Libraries',
    emoji: '\u{1F9F1}',
    items: ['Spring Boot', 'Maven', 'FastAPI'],
  },
  {
    category: 'AI Skills',
    emoji: '\u{1F916}',
    items: [
      'Generative AI',
      'AI-Assisted Development',
      'Prompt Engineering',
      'Workflow Optimization Using AI',
      'AI-Driven Automation',
      'Cursor AI',
      'GitHub Copilot',
      'TabNine AI',
    ],
  },
  {
    category: 'Tools & Platforms',
    emoji: '\u{1F6E0}\uFE0F',
    items: [
      'Bitbucket',
      'Postman',
      'Jira',
      'Git',
      'GitHub',
      'GitHub Actions',
      'CI/CD',
      'Linux',
      'Kibana',
      'Azure DevOps',
      'Microsoft Azure',
      'Azure Service Bus',
      'Azure Key Vaults',
      'Cursor AI',
      'Insomnia',
      'Swagger OpenAPI 3.0',
      'IntelliJ IDEA',
      'VS Code',
      'Confluence',
    ],
  },
  {
    category: 'Databases',
    emoji: '\u{1F5C3}\uFE0F',
    items: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Soft Skills',
    emoji: '\u{1F91D}',
    items: [
      'Communication',
      'Problem Solving',
      'Critical Thinking',
      'Adaptability',
      'Stakeholder Management',
    ],
  },
];

export const timeline = [
  {
    period: 'Aug 2025 – Present',
    title: 'Amdocs | AT&T Cricket Wireless',
    subtitle: 'Software Developer — BAU Microservices',
    points: [
      'Owned 15+ production microservices for account, order & payment.',
      'Migrated services to Java 17 & MongoDB; cut CI build time by 40%.',
      'Built Azure Service Bus retry flows for reliable integrations.',
    ],
  },
  {
    period: 'Jan 2024 – Aug 2025',
    title: 'Amdocs | AT&T Cricket Wireless ABO',
    subtitle: 'Associate Software Engineer',
    points: [
      'Delivered 5+ microservices for inventory & retail tax flows.',
      'Built real-time REST APIs for stock transfer & warehouse audits.',
      'Shipped a full inventory platform upgrade in 6 months.',
    ],
  },
  {
    period: 'March 2022 – June 2022',
    title: 'ELANSOL TECHNOLOGIES',
    subtitle: 'Software Developer Intern',
    points: [
      'Built a software application to automate the Modbus RS485 serial protocol based on input/output COM port connectivity.',
      'Tech stack: C# .NET Framework and Windows Forms GUI.',
    ],
  },
  {
    period: '2019 – 2023',
    title: 'MIT-World Peace University, Pune',
    subtitle: 'BTech in ECE \u2014 9.25 CGPA',
    points: [
      'Data Structures and Algorithms (DSA)',
      'Object Oriented Programming (OOPs)',
      'Cloud Computing',
      'AI and Machine Learning',
    ],
  },
  {
    period: '2019',
    title: 'Army Public School, Kirkee Pune',
    subtitle: 'CBSE Class XII \u2014 83.0%',
    points: [],
  },
  {
    period: '2017',
    title: 'Army Public School, Kirkee Pune',
    subtitle: 'CBSE Class X \u2014 9.20 CGPA',
    points: [],
  },
];

// Leave a link empty ('') and its button is hidden automatically.
export const projects = [
  {
    title: 'Weather-App',
    emoji: '\u26C5',
    tags: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    description:
      'A weather application that reports the weather of any city or country in real time using a Weather API. Displays current temperature, humidity, wind speed and a description of the weather for almost any city on the globe.',
    live: '',
    repo: 'https://github.com/Karan24KT',
    youtube: '',
  },
  {
    title: 'News Tracker',
    emoji: '\u{1F4F0}',
    tags: ['React.js', 'NewsAPI', 'Bootstrap'],
    description:
      'A news website built with React.js and NewsAPI. News can be categorised into Tech, Sports, Science, Business, Health and Entertainment. It displays the latest news with date, time and source.',
    live: '',
    repo: 'https://github.com/Karan24KT',
    youtube: 'https://www.youtube.com/@Karan24KT',
  },
  {
    title: 'Modbus iRelier',
    emoji: '\u{1F50C}',
    tags: ['C# .NET', 'Windows Forms', 'Modbus RS485'],
    description:
      'Internship project: a desktop application that automates the Modbus RS485 serial protocol based on input/output COM port connectivity. Built with C# .NET Framework and a Windows Forms GUI, tested across scenarios and running at ~95% accuracy as a portable .exe.',
    live: '',
    repo: '',
    youtube: 'https://www.youtube.com/@Karan24KT',
  },
  {
    title: 'YogAI',
    emoji: '\u{1F9D8}',
    tags: ['React.js', 'TensorFlow.js', 'Pose Detection'],
    description:
      'A personal yoga trainer website built with React.js. Pose prediction is automated based on the user\u2019s posture and detects whether a selected pose is being performed correctly.',
    note: 'Not mobile responsive \u2014 best viewed on a large screen.',
    live: '',
    repo: 'https://github.com/Karan24KT',
    youtube: '',
  },
  {
    title: 'Rock Paper Scissors Game',
    emoji: '\u270A',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description:
      'A single player game played against the computer, anywhere and anytime. Rock blunts scissors so rock wins, scissors cut paper so scissors win, and paper grabs rock so paper wins.',
    live: '',
    repo: 'https://github.com/Karan24KT',
    youtube: '',
  },
  {
    title: 'Dad Jokes API',
    emoji: '\u{1F602}',
    tags: ['JavaScript', 'Rapid API'],
    description:
      'An application built on the Dad Jokes Rapid API for an unlimited supply of dad jokes. The API provides thousands of hilarious dad jokes purely for entertainment.',
    live: '',
    repo: 'https://github.com/Karan24KT',
    youtube: '',
  },
  {
    title: 'Nostalgia... Music Player',
    emoji: '\u{1F3B5}',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description:
      'A music player built completely with HTML, CSS and JS. Play/pause a song with previous and next navigation \u2014 made to explore the features of vanilla JavaScript.',
    note: 'Not mobile responsive \u2014 use on a large screen only.',
    live: 'https://kt-dev24-music-player.netlify.app/',
    repo: 'https://github.com/Karan24KT/Music_Player',
    youtube: '',
  },
  {
    title: 'Blog Website Template',
    emoji: '\u{1F4DD}',
    tags: ['HTML', 'CSS', 'Responsive'],
    description:
      'A blogging template website that can serve as a starting point for most blogs. Contains a home page, trending tech blogs and a contact page with a responsive design.',
    live: '',
    repo: 'https://github.com/Karan24KT',
    youtube: '',
  },
];

export const certifications = [
  {
    title: '30 Days of JAVA Programming Training at Amdocs via IIHT',
    issuer: 'Amdocs / IIHT',
    description:
      'In-depth Core Java fundamentals and best practices for writing Java code. Covers OOPs, Java 11 features, inheritance, polymorphism, multithreading and JUnit over one month, with 10 assignments, an MCQ assessment and a 3 hour coding test.',
    tags: ['Core Java', 'OOPs', 'JUnit'],
  },
  {
    title: '30 Days of Microsoft SQL Server Training at Amdocs via IIHT',
    issuer: 'Amdocs / IIHT',
    description:
      'Introduction to SQL Server and databases including the installation of SQL Server Express 2017. Running queries to manipulate data, creating relationships with foreign keys and normalization, plus advanced objects such as views, triggers, stored procedures and database scripting.',
    tags: ['SQL Server', 'Databases'],
  },
  {
    title: '30 Days Google Cloud Program 2021',
    issuer: 'Google Developer Student Clubs (AISSMS)',
    description:
      'Cloud engineering tracks covering an introduction to cloud, Compute Engine, Google Storage Buckets, Big Data features, cloud security and various other Google Cloud services.',
    tags: ['GCP', 'Cloud'],
  },
  {
    title: 'Server-Side Development with NodeJS, Express and MongoDB',
    issuer: 'Coursera \u2014 HKUST',
    description:
      'From The Hong Kong University of Science and Technology, by Professor Jogesh K. Muppala. Covers complete back-end development in the MERN stack.',
    tags: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: '3 Months Internship Certificate at Elansol Technologies',
    issuer: 'Elansol Technologies',
    description:
      'Three months as an SDE intern at a start-up. Built a software application to automate the Modbus RS485 serial protocol based on input/output COM port connectivity using C# .NET Framework and Windows Forms GUI.',
    tags: ['C# .NET', 'Internship'],
  },
  {
    title: '15 Days of TCS iON Career Skills Certification',
    issuer: 'TCS iON',
    description:
      'A self-paced online programme equipping learners with essential business soft skills. Eleven independent courses including Corporate Etiquette, Interpersonal Skills, Communication Skills, Cracking Corporate Interviews and Career Guidance.',
    tags: ['Soft Skills'],
  },
  {
    title: 'Masai School Workshop on Front-End Skills (HTML, CSS, JS)',
    issuer: 'Masai School',
    description:
      'A one day workshop building the Cricbuzz webpage from scratch, covering basic to advanced front-end skills with HTML, CSS and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: '30 Days of Programming in C/C++ by myCaptain',
    issuer: 'myCaptain',
    description:
      'Basic to advanced programming in C/C++, covering in-depth knowledge of procedural as well as object oriented programming concepts.',
    tags: ['C', 'C++'],
  },
];
