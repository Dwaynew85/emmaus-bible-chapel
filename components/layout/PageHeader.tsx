import Link from "next/link";
import Section from "./Section";

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: {
    label: string;
    href: string;
  };
}

export default function PageHeader({
  title,
  description,
  action,
}: PageHeaderProps) {
  return (
    <Section>
      <div className="content-plaque text-center">
        <h1>{title}</h1>

        {description && (
          <p className="mt-4 text-muted-foreground">
            {description}
          </p>
        )}

        {action && (
          <div className="mt-6">
            <Link
              href={action.href}
              className="btn btn-outline"
            >
              {action.label}
            </Link>
          </div>
        )}
      </div>
    </Section>
  );
}
