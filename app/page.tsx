import Image from "next/image";
import { PortfolioShell } from "./components/portfolio-ui";

const skills = [
  {
    category: "Languages",
    items: ["C++", "C", "Python", "Rust", "Java", "JavaScript", "TypeScript",  "HTML", "CSS", "LabVIEW", "MIPS Assembly", "SQL"]
  },
  {
    category: "Frameworks",
    items: ["Next.js", "React", "React Native", "TailWindCSS", "ROS2"],
  },
  {
    category: "Tools",
    items: ["Linux", "Git", "Codex", "Shell", "GitHub", "GitLab", "Docker", "VSCode", "Neovim", "Supabase", "PostgreSQL"],
  },
];

const education = [
  {
    period: "2025 - Present",
    institution: "University of Illinois Urbana-Champaign",
    degree: "B.S. in Computer Science",
    relevantCoursework:
      "Introduction to Computer Science I, Introduction to Computer Science II (Honors), Discrete Structures, Data Structures, Computer Architecture, Software Design Lab, System Programming, Database Systems, Open Source Software for Education",
    gpa: "3.94",
  },
  {
    period: "2021 - 2025",
    institution: "Bradley-Bourbonnais Community High School",
    gpa: "4.00",
  },
];

const projects = [
  {
    title: "Linux Themed Portfolio",
    year: "September 2026",
    summary:
      "Created a linux terminal themed portfolio to display my education, experiences, projects, and more",
    stack: ["React", "Next.JS", "TypeScript", "TailwindCSS"],
    href: "https://shanrong.dev"
  },
  {
    title: "HackIllinois 2026 – HackAstra",
    year: "February 2026",
    summary:
      "Built an AI-powered daily inspection tool with a three-person team for HackIllinois' Caterpillar track. Developed React and Flask features that use Gemini to provide real-time feedback on audio, video, and images. Added inspection history and combined same-day inspections into a single report.",
    stack: ["React", "Python", "Flask", "Gemini API", "Supermemory"],
    href: "https://github.com/Udog-ILLINOIS/BucketFly",
  },
  {
    title: "Raytracer in Rust",
    year: "October 2025 – January 2026",
    summary:
      "Developed a ray tracer in Rust with a three-person team. Implemented STL mesh processing and Moller-Trumbore ray-triangle intersection, and achieved roughly a 10x speedup through parallel processing and denoising. Created custom scenes to evaluate rendering quality and composition.",
    stack: ["Rust"],
    href: "https://github.com/pranavpopuri/raytracing-in-rust",
  },
  {
    title: "IlliniBites",
    year: "September 2025 – December 2025",
    summary:
      "Implemented topic-based filtering and sorting for IlliniBites, a team-built React Native mobile app. These tools let users narrow down content by topic and organize results to find what interests them.",
    stack: ["TypeScript", "React Native", "Expressjs", "HTML/CSS"],
  },
  {
    title: "Paradox",
    year: "July 2025 – August 2025",
    summary:
      "Built a Next.js and React web app to manage player and clan data for a Paradox game clan. Replaced manual Google Sheets tracking with a Supabase database and created responsive visualizations of player and clan metrics.",
    stack: ["JavaScript", "React", "Next.js", "HTML/CSS", "TailwindCSS", "Supabase"],
    href: "https://github.com/ShanrongW/paradox",
  },
];

const extracurriculars = [
  {
    title: "SIGPwny",
    date: "September 2026 - Present",
    role: "Embedded Team Member",
    impact:
      "Learning embedded systems, embedded cybersecurity, and cybersecurity and competing in CSAW ESC 2026 by working with the team and on the IoT part of the qualifications paper"
  },
  {
    title: "Open Source Software CS Course",
    date: "August 2026 - Present",
    role: "Contributor / Student",
    impact: 
      "Developing code to contribute to open source PrairieLearn through the course using software engineering concepts and implementing pl-kmap element, Karnough Map, with a partner using Python, Mustache, and HTML/CSS/JS"
  },
  {
    title: "SIGrobotics - F1Tenth",
    date: "September 2025 – May 2026",
    role: "Simulation / Programmer",
    impact:
      "Developed autonomous driving features for a simulated F1TENTH racecar using C++ and ROS 2. Worked on PID control and path planning across multiple track layouts, coordinating with teammates to prepare for competition",
  },
  {
    title: "SIGmobile",
    date: "October 2025 – May 2026",
    role: "Backend Developer",
    impact:
      "Built backend features for a mobile app that helps students find computer science courses aligned with their interests. Collected and processed data from the UIUC Course API, then tagged courses by interest to support personalized recommendations.",
  },
  {
    title: "FIRST Robotics Competition",
    date: "August 2021 – May 2025",
    role: "Software Lead, Technician, Programmer, Electrical",
    impact:
      "As software lead, taught teammates Java and LabVIEW through hands-on demonstrations and coding support. Programmed, wired, and tested competition robots, tuned controls, and troubleshot electrical and software failures during competition. Helped migrate legacy software and hardware tools to newer platforms.",
  },
];

const contactOptions = [
  { label: "Email", value: "sw101@illinois.edu", href: "mailto:sw101@illinois.edu" },
  { label: "Phone", value: "+1 (312) 619-7636", href: "sms:+13126197636" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shanrong-wu",
    href: "https://www.linkedin.com/in/shanrong-wu",
  },
  {
    label: "GitHub",
    value: "github.com/ShanrongW",
    href: "https://github.com/ShanrongW",
  },
];

function SectionHeading({ number, title, command }: { number: string; title: string; command: string }) {
  return <div className="section-heading"><div><span className="section-number">{number} /</span><h2>{title}</h2></div><p>{command}</p></div>;
}

function TerminalBar({ title }: { title: string }) {
  return <div className="terminal-bar"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>{title}</span><span aria-hidden="true">−</span></div>;
}

export default function HomePage() {
  return (
    <PortfolioShell>
      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> HELLO, WORLD. I’M</p>
          <h1>Shanrong{" "}<span>Wu<span className="hero-cursor" aria-hidden="true">_</span></span></h1>
          <p className="hero-role">Computer science student.<br />Aspiring software engineer.</p>
          <p className="hero-description">Studying at the University of Illinois Urbana-Champaign.</p>
          <div className="hero-actions">
            <a className="button" href="/resume.pdf" target="_blank" rel="noreferrer" data-command="running ./resume -firstname shanrong -lastname wu"><span aria-hidden="true">./</span> resume <span aria-hidden="true">↗</span><span className="sr-only"> (PDF, opens in a new tab)</span></a>
            <a className="button button-primary" href="#contact" data-command="cd ~/contact"><span aria-hidden="true">./</span> Let's Connect! <span aria-hidden="true">↗</span></a>
          </div>
          <ul className="hero-tags" aria-label="Interests"><li>System Programming</li><li>Embedded Systems</li><li>Software Engineering</li></ul>
        </div>
        <div className="terminal-window profile-window">
          <TerminalBar title="shanrong@portfolio: ~" />
          <div className="profile-content">
            <p className="prompt"><span>~ $</span> whoami</p>
            <Image width={520} height={520} className="portrait" src="/me.jpg" alt="Portrait of Shanrong Wu" priority sizes="(max-width: 760px) 85vw, 350px" />
            <div className="profile-details"><p><span>name</span> Shanrong Wu</p><p><span>school</span> UIUC</p><p><span>major</span> Computer Science</p></div>
            <p className="profile-output"><span aria-hidden="true">↳</span> Systems · Embedded · Robotics</p>
          </div>
        </div>
        <div className="hero-bottom"><span>~/shanrong/portfolio</span><a href="#education" data-command="cd ~/education">scroll to explore <span aria-hidden="true">↓</span></a></div>
      </section>

      <section id="education" className="section">
        <SectionHeading number="01" title="Education" command="cat education.txt" />
        <div className="education-list">
          {education.map((item) => <article className="education-card" key={item.institution}><p className="date">{item.period}</p><div><h3>{item.institution}</h3>{item.degree && <p className="degree">{item.degree}</p>}{item.relevantCoursework && <p className="coursework"><span>Relevant coursework</span>{item.relevantCoursework}</p>}</div><p className="gpa"><span>GPA</span>{item.gpa}</p></article>)}
        </div>
      </section>

      <section id="skills" className="section">
        <SectionHeading number="02" title="Skills" command="ls ~/skills" />
        <div className="skills-grid">{skills.map((skill, index) => <article className="terminal-window skill-card" key={skill.category}><TerminalBar title={skill.category.toLowerCase()} /><div className="skill-content"><span className="file-index">0{index + 1}</span><h3>{skill.category}</h3><ul className="skill-tags" aria-label={`${skill.category} skills`}>{skill.items.map(item => <li key={item}>{item}</li>)}</ul></div></article>)}</div>
      </section>

      <section id="resume" className="section resume-section">
        <div><p className="eyebrow">THE SHORT VERSION</p><h2>My experience, in one pdf.</h2><p>Education, projects, and the work behind them.</p></div>
        <a className="button button-primary" href="/resume.pdf" target="_blank" rel="noreferrer" data-command="running ./resume -firstname shanrong -lastname wu">./resume <span aria-hidden="true">↗</span><span className="sr-only"> (PDF, opens in a new tab)</span></a>
      </section>

      <section id="projects" className="section">
        <SectionHeading number="03" title="Projects" command="ls ~/projects" />
        <div className="projects-grid">{projects.map((project, index) => <article className="terminal-window project-card" key={project.title}><TerminalBar title={`project_${String(index + 1).padStart(2, "0")}`} /><div className="project-content"><div className="project-meta"><span className="folder-icon" aria-hidden="true">~/</span><p className="date">{project.year}</p></div><h3>{project.title}</h3><p className="project-summary">{project.summary}</p><ul className="project-stack" aria-label="Technologies">{project.stack.map(item => <li key={item}>{item}</li>)}</ul>{project.href ? <a className="project-link" href={project.href} target="_blank" rel="noreferrer" data-command={`xdg-open ${project.href}`}>View repository <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a> : <p className="project-note">Team project · React Native application</p>}</div></article>)}</div>
      </section>

      <section id="extracurricular" className="section">
        <SectionHeading number="04" title="Extracurriculars" command="cat activities.log" />
        <div className="activities-list">{extracurriculars.map((activity, index) => <article className="activity-card" key={activity.title}><span className="activity-index" aria-hidden="true">0{index + 1}</span><div><div className="activity-heading"><h3>{activity.title}</h3><p className="date">{activity.date}</p></div><p className="activity-role">{activity.role}</p><p className="activity-description">{activity.impact}</p></div></article>)}</div>
      </section>

      <section id="contact" className="section contact-section">
        <SectionHeading number="05" title="Let’s connect." command="./say-hello" />
        <p className="contact-intro">Have a project in mind, a question, or just want to say hello?</p>
        <div className="contact-grid">{contactOptions.map(option => { const external = option.href.startsWith("http"); return <a key={option.label} className="contact-card" href={option.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} data-command={`${option.label === "Email" ? "mail" : option.label === "Phone" ? "sms" : "open"} ${option.href}`}><span className="contact-label">{option.label}<span aria-hidden="true">↗</span></span><span className="contact-value">{option.value}</span>{external && <span className="sr-only"> (opens in a new tab)</span>}</a>; })}</div>
      </section>
    </PortfolioShell>
  );
}
