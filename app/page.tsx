import Link from "next/link";
import Image from "next/image";
import {
  ClockIcon,
  GearIcon,
  PortfolioShell,
  SectionHeading,
} from "./components/portfolio-ui";

const skills = [
  {
    category: "Languages",
    items: ["C++", "Java", "Python", "Rust", "JavaScript", "TypeScript",  "HTML", "CSS", "LabVIEW", "MIPS Assembly"]
  },
  {
    category: "Frameworks",
    items: ["Next.js", "React", "React Native", "ROS2"],
  },
  {
    category: "Tools",
    items: ["Linux", "Git", "GitHub", "GitLab", "Docker", "VSCode", "Supabase", "WSL2"],
  },
];

const education = [
  {
    period: "2025 - Present",
    institution: "University of Illinois Urbana-Champaign",
    degree: "B.S. in Computer Science",
    relevantCoursework:
      "Introduction to Computer Science I, Introduction to Computer Science II (Honors), Discrete Structures, Data Structures, Computer Architecture, Software Design Lab",
    gpa: "3.88",
  },
  {
    period: "2021 - 2025",
    institution: "Bradley-Bourbonnais Community High School",
    gpa: "4.00",
  },
];

const projects = [
  {
    title: "HackIllinois 2026 – HackAstra",
    year: "Feb 2026",
    summary:
      "Built an AI-powered inspection tool with a team of 3 for Caterpillar Track that automated daily inspections using audio, video, and images. Developed full-stack features in React and Flask, integrated Gemini for real-time feedback, added inspection history tracking, and improved reporting by converging same day inspections into unified reports.",
    stack: ["React", "Python", "Flask", "Gemini API", "Supermemory"],
    href: "https://github.com/Udog-ILLINOIS/BucketFly",
  },
  {
    title: "Raytracer in Rust",
    year: "Oct 2025 – Jan 2026",
    summary:
      "Developed a Rust ray tracer with a 3-person team, implementing STL mesh processing and Moller-Trumbore triangle intersection for accurate rendering. Optimized performance by about 10x with parallelism, multithreading, and denoising, and built custom scenes to test rendering quality and composition.",
    stack: ["Rust"],
    href: "https://github.com/pranavpopuri/raytracing-in-rust",
  },
  {
    title: "IlliniBites",
    year: "Sep 2025 – Dec 2025",
    summary:
      "Helped create IlliniBites, a mobile application built with a team using React Native, focused on improving user experience through intuitive navigation and content discovery. Contributed by implementing filtering and sorting features that help users browse and find content based on specific topics.",
    stack: ["TypeScript", "React Native", "Expressjs", "HTML/CSS"],
  },
  {
    title: "Paradox",
    year: "Jul 2025 – Aug 2025",
    summary:
      "Built an interactive web application for a Paradox game clan using Next.js, React, and JavaScript to manage and track user and clan data attributes. Improved logging efficiency by replacing manual Google Sheets workflows with a Supabase database and built responsive data visualizations for clan and user metrics.",
    stack: ["JavaScript", "React", "Next.js", "HTML/CSS", "TailwindCSS", "Supabase"],
    href: "https://github.com/ShanrongW/paradox",
  },
];

const extracurriculars = [
  {
    title: "SIGrobotics - F1Tenth",
    date: "Sep 2025 – Present",
    role: "Simulation / Programmer",
    impact:
      "Contributed to autonomous driving functionality for the F1TENTH racecar in simulation using C++, ROS 2, PID control, and path planning algorithms across multiple track layouts. Collaborated in weekly team meetings to track progress and refine project goals ahead of competition.",
  },
  {
    title: "SIGmobile",
    date: "Oct 2025 – Feb 2026",
    role: "Backend Developer",
    impact:
      "Contributed to the backend of a CS Course Recommender mobile app designed to help students discover relevant computer science courses. Collected and processed course data by scraping the UIUC Course API and assigning interest-based tags to courses, helping improve the app’s ability to generate more personalized recommendations.",
  },
  {
    title: "FIRST Robotics Competition",
    date: "Aug. 2021 – May 2025",
    role: "Software Lead, Technician, Programmer, Electrical",
    impact:
      "Trained team members in Java and LabVIEW through hands-on demonstrations and coding support. Played a key role in robot development by contributing to programming, wiring, testing, and control tuning, while resolving electrical and software issues to reduce failures during competition. Also supported system upgrades by transitioning legacy software and hardware tools to more current platforms and standards.",
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

export default function HomePage() {
  return (
    <PortfolioShell>
      <section id="home" className="panel hero reveal delay-1">
        <div className="hero-copy">
          <h1 className="hero-title">Shanrong Wu</h1>
          <div className="hero-clockline" aria-hidden="true">
            <ClockIcon className="hero-clock" />
            <GearIcon className="hero-clock-gear" />
          </div>
          <p className="hero-text">
            Hi! I am <strong>Shanrong Wu</strong>.
          </p>
          <p className="hero-text">
            Computer Science student at the <strong>University of Illinois Urbana-Champaign</strong>.
          </p>
          <p className="hero-text">
            Aspiring Software Engineer wanting to specialize in systems, robotics, and AI/ML.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/#projects" prefetch={false}>
              <span className="button-label">Explore Experience</span>
              <span className="button-gear" aria-hidden="true">
                <GearIcon className="button-gear-icon" />
              </span>
            </Link>
            <Link className="button" href="/#contact" prefetch={false}>
              <span className="button-label">Reach Out</span>
              <span className="button-gear" aria-hidden="true">
                <GearIcon className="button-gear-icon" />
              </span>
            </Link>
          </div>
          <ul className="hero-tags" aria-label="Core strengths">
            <li>Robotics</li>
            <li>Systems</li>
            <li>App Development</li>
          </ul>
        </div>
        <Image
          width={100}
          height={100}
          className="about-image"
          src="/me.jpg"
          alt="my image"
          loading="lazy"
        />
      </section>

      <section id="education" className="section reveal delay-3">
        <SectionHeading title="Education" />
        <div className="timeline mt-5">
          {education.map((item) => (
            <article className="timeline-item" key={item.institution}>
              <p className="timeline-years">{item.period}</p>
              <h3>{item.institution}</h3>
              <p className="timeline-degree">{item.degree}</p>
              <p className="timeline-detail">
                {item.relevantCoursework ? <span className="timeline-label">Relevant Coursework:</span> : <span></span>} {item.relevantCoursework}
              </p>
              <p className="timeline-detail">
                <span className="timeline-label">GPA:</span> {item.gpa}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section reveal delay-2">
        <SectionHeading title="Skills" />
        <div className="skills-rows mt-5">
          {skills.map((skill) => (
            <article className="skill-row" key={skill.category}>
              <h3 className="skill-heading">{skill.category}</h3>
              <ul className="skill-tags" aria-label={`${skill.category} skills`}>
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>


      <section id="resume" className="panel resume-panel section reveal delay-4">
        <SectionHeading title="Resume" />
        <div className="resume-actions mt-5">
          <a
            className="button button-primary"
            href="/resumes/robotics-resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <span className="button-label">View Robotics Resume</span>
            <span className="button-gear" aria-hidden="true">
              <GearIcon className="button-gear-icon" />
            </span>
          </a>
          <a
            className="button"
            href="/resumes/software-engineering-resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <span className="button-label">View Software Engineering Resume</span>
            <span className="button-gear" aria-hidden="true">
              <GearIcon className="button-gear-icon" />
            </span>
          </a>
        </div>
      </section>

      <section id="projects" className="section reveal delay-5">
        <SectionHeading title="Projects" />
        <div className="card-grid mt-5">
          {projects.map((project) => (
            <article className="steam-card" key={project.title}>
              <p className="chip">{project.year}</p>
              <h3>{project.title}</h3>
              <p className="stack-line">{project.stack.join(" | ")}</p>
              <p className="pt-2">{project.summary}</p>
              {project.href ? (
                <a className="inline-link" href={project.href} target="_blank" rel="noreferrer">
                  View Project
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section id="extracurricular" className="section reveal delay-6">
        <SectionHeading title="Extracurriculars" />
        <div className="extras-grid mt-5">
          {extracurriculars.map((activity) => (
            <article className="extra-card" key={activity.title}>
              <h3>{activity.title}</h3>
              <p className="extra-date">{activity.date}</p>
              <p className="extra-role">{activity.role}</p>
              <p>{activity.impact}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section reveal">
        <SectionHeading title="Contact" />
        <div className="contact-wrap mt-5">
          {contactOptions.map((option) => {
            const opensNewTab = option.href.startsWith("http");

            return (
              <a
                key={option.label}
                className="contact-card contact-method-card"
                href={option.href}
                target={opensNewTab ? "_blank" : undefined}
                rel={opensNewTab ? "noreferrer" : undefined}
              >
                <p className="contact-method-label">{option.label}</p>
                <p className="contact-method-value">{option.value}</p>
              </a>
            );
          })}
        </div>
      </section>
    </PortfolioShell>
  );
}
