import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  spacing?: "none" | "tight" | "comfortable" | "spacious";
  container?: boolean;
}

export default function Section({ 
  children, 
  className = "",
  spacing = "comfortable",
  container = true 
}: SectionProps) {
  const spacingClass = {
    none: "section-none",
    tight: "section-tight",
    comfortable: "section-comfortable",
    spacious: "section-spacious"
  }[spacing];

  const content = container ? (
    <div className="page-container">{children}</div>
  ) : children;

  return (
    <section className={`${spacingClass} ${className}`}>
      {content}
    </section>
  );
}
