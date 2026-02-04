import Link from "next/link";

const footerNavigation = {
  about: [
    { label: "Our Story", href: "/about" },
    { label: "Chapel History", href: "/about/history" },
    { label: "What We Believe", href: "/about/beliefs" },
    { label: "Leadership", href: "/about/leadership" },
  ],
  engage: [
    { label: "Ministries", href: "/ministries" },
    { label: "Sermons", href: "/sermons" },
    { label: "Calendar", href: "/calendar" },
    { label: "Get Involved", href: "/get-involved" },
  ],
  connect: [
    { label: "Contact Us", href: "/contact" },
    { label: "Visit Us", href: "/visit" },
    { label: "Give", href: "/donate" },
    { label: "Prayer Requests", href: "/prayer" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="page-container py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-lg font-bold text-secondary">Emmaus</span>
              <span className="text-lg font-bold text-muted-foreground">Bible Chapel</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A Christ-centered community growing together in faith, fellowship, and service.
            </p>
            <div className="mt-4 text-xs italic text-muted">
              &quot;We preach Christ crucified&quot;
              <br />
              <span className="font-medium">1 Corinthians 1:23</span>
            </div>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              About
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engage Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Engage
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.engage.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Emmaus Bible Chapel. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-xs text-muted-foreground transition-colors hover:text-secondary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-muted-foreground transition-colors hover:text-secondary"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
