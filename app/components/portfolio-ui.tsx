import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

export function GearIcon({ className }: IconProps) {
  const teeth = Array.from({ length: 12 }, (_, i) => i * 30);
  const rivets = Array.from({ length: 6 }, (_, i) => i * 60);

  return (
    <svg
      viewBox="0 0 100 100"
      className={["gear-icon", className].filter(Boolean).join(" ")}
      aria-hidden="true"
      focusable="false"
    >
      <g>
        {teeth.map((angle) => (
          <rect
            key={angle}
            className="gear-tooth"
            x="46"
            y="2"
            width="8"
            height="17"
            rx="2"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
      </g>
      <circle className="gear-shadow-ring" cx="50" cy="50" r="33" />
      <circle className="gear-body" cx="50" cy="50" r="30.5" />
      <circle className="gear-ring" cx="50" cy="50" r="24" />
      <g>
        <rect className="gear-spoke" x="48" y="24" width="4" height="17" rx="2" />
        <rect
          className="gear-spoke"
          x="48"
          y="24"
          width="4"
          height="17"
          rx="2"
          transform="rotate(120 50 50)"
        />
        <rect
          className="gear-spoke"
          x="48"
          y="24"
          width="4"
          height="17"
          rx="2"
          transform="rotate(240 50 50)"
        />
      </g>
      <g>
        {rivets.map((angle) => (
          <circle
            key={angle}
            className="gear-rivet"
            cx="50"
            cy="20.5"
            r="1.7"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
      </g>
      <circle className="gear-hole" cx="50" cy="50" r="12" />
      <circle className="gear-hub" cx="50" cy="50" r="6" />
      <ellipse className="gear-shine" cx="44" cy="37" rx="11" ry="6" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  const ticks = Array.from({ length: 60 }, (_, i) => i);

  return (
    <svg
      viewBox="0 0 100 100"
      className={["clock-icon", className].filter(Boolean).join(" ")}
      aria-hidden="true"
      focusable="false"
    >
      <circle className="clock-shadow" cx="50" cy="50" r="40" />
      <circle className="clock-rim" cx="50" cy="50" r="38" />
      <circle className="clock-bezel" cx="50" cy="50" r="34" />
      <circle className="clock-face" cx="50" cy="50" r="30" />
      <g>
        {ticks.map((tick) => (
          <line
            key={tick}
            className={tick % 5 === 0 ? "clock-tick major" : "clock-tick"}
            x1="50"
            y1={tick % 5 === 0 ? "16" : "18"}
            x2="50"
            y2={tick % 5 === 0 ? "10" : "13"}
            transform={`rotate(${tick * 6} 50 50)`}
          />
        ))}
      </g>
      <text className="clock-number" x="50" y="22" textAnchor="middle">
        12
      </text>
      <text className="clock-number" x="78" y="54" textAnchor="middle">
        3
      </text>
      <text className="clock-number" x="50" y="83" textAnchor="middle">
        6
      </text>
      <text className="clock-number" x="22" y="54" textAnchor="middle">
        9
      </text>
      <g className="clock-hour-hand">
        <line className="clock-hour" x1="50" y1="50" x2="50" y2="37" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="72s"
          repeatCount="indefinite"
        />
      </g>
      <g className="clock-minute-hand">
        <line className="clock-minute" x1="50" y1="52" x2="50" y2="24" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="12s"
          repeatCount="indefinite"
        />
      </g>
      <g className="clock-second-hand">
        <line className="clock-second" x1="50" y1="54" x2="50" y2="18" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="6s"
          repeatCount="indefinite"
        />
      </g>
      <circle className="clock-pin" cx="50" cy="50" r="4" />
      <path
        className="clock-gloss"
        d="M25 43C28 27 42 16 58 16c4 0 8 1 11 2-5-4-11-6-19-6-17 0-31 12-34 29 3 1 5 2 9 2z"
      />
    </svg>
  );
}

type PortfolioShellProps = {
  children: ReactNode;
};

const navItems: Array<{ key: string; label: string; href: string }> = [
  { key: "education", label: "Education", href: "#education" },
  { key: "skills", label: "Skills", href: "#skills" },
  { key: "resume", label: "Resume", href: "#resume" },
  { key: "projects", label: "Projects", href: "#projects" },
  { key: "extracurricular", label: "Extracurriculars", href: "#extracurricular" },
  { key: "contact", label: "Contact", href: "#contact" },
];

export function PortfolioShell({ children }: PortfolioShellProps) {
  return (
    <main id="page-top" className="steam-page">
      <div className="steam-haze" aria-hidden="true" />

      <header className="steam-nav">
        <a className="brand-block" href="#page-top" aria-label="Back to top">
          <div className="monogram" aria-hidden="true">
            <GearIcon className="header-gear" />
          </div>
          <p className="brand-name">Shanrong Wu</p>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {children}
    </main>
  );
}

type SectionHeadingProps = {
  title: string;
};

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <ClockIcon className="section-clock" />
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
