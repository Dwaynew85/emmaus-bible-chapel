import { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: "default" | "narrow";
}

export default function Section({ 
  children, 
  className = "",
  containerSize = "default" 
}: SectionProps) {
  return (
    <section className={`page-section ${className}`}>
      {containerSize === "narrow" ? (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      ) : (
        <Container>{children}</Container>
      )}
    </section>
  );
}
