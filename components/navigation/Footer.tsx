import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Sermons", href: "/sermons" },
  { label: "Calendar", href: "/calendar" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <span className="text-base font-semibold text-foreground">
              Emmaus Bible Chapel
            </span>
            <span className="text-sm text-foreground/70">
              A Christ-centered community
            </span>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-4 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-foreground transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border" />

        {/* Meta */}
        <div className="flex flex-col gap-2 text-sm text-foreground/60 md:flex-row md:justify-between">
          <span>
            © {new Date().getFullYear()} Emmaus Bible Chapel. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
