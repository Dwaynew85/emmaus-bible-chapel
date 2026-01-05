import { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  children: ReactNode;
  variant?: "content" | "emphasis";
  containerSize?: "default" | "narrow";
  className?: string;
};

export default function Section({
  children,
  variant = "content",
  containerSize = "default",
  className = "",
}: SectionProps) {
  if (variant === "emphasis") {
    return (
      <section className={`bg-surface ${className}`}>
        <Container size={containerSize} className="py-20 text-center">
          {children}
        </Container>
      </section>
    );
  }

  return (
    <section className={className}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
}
