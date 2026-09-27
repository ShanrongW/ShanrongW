"use client";

import { useState, type MouseEvent, type ReactNode } from "react";

const navItems = [
  { label: "education", id: "education" },
  { label: "skills", id: "skills" },
  { label: "resume", id: "resume" },
  { label: "projects", id: "projects" },
  { label: "activities", id: "extracurricular" },
  { label: "contact", id: "contact" },
];

export function PortfolioShell({ children }: { children: ReactNode }) {
  const [command, setCommand] = useState({ text: "ready. select a link to run a command.", sequence: 0 });

  function showCommand(event: MouseEvent<HTMLDivElement>) {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest("a[data-command]");
    const text = link?.getAttribute("data-command");
    if (text) setCommand(previous => ({ text, sequence: previous.sequence + 1 }));
  }

  return (
    <div className="portfolio-shell" onClick={showCommand}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header" id="page-top">
        <a className="brand" href="#home" data-command="cd ~" aria-label="Shanrong Wu, back to top"><span className="brand-mark" aria-hidden="true">&gt;_</span><span>shanrong<span className="brand-host">@portfolio</span><span className="brand-path">:~</span></span></a>
        <nav aria-label="Primary navigation">{navItems.map(item => <a key={item.id} href={`#${item.id}`} data-command={`cd ~/${item.id}`}>{item.label}<span aria-hidden="true">/</span></a>)}</nav>
      </header>
      <main id="main-content" tabIndex={-1}>{children}</main>
      <footer className="site-footer"><p>© {new Date().getFullYear()} Shanrong Wu</p><a href="#home" data-command="cd ~">back to top <span aria-hidden="true">↑</span></a></footer>
      <div className="command-bar"><div className="command-inner"><span className="command-label" aria-hidden="true">terminal</span><span className="command-prompt" aria-hidden="true">~ $</span><p className="command-output" role="status" aria-live="polite" aria-atomic="true"><span key={command.sequence}>{command.text}</span></p><span className="session-state" aria-hidden="true"><span className="status-dot" /> session active</span></div></div>
    </div>
  );
}
