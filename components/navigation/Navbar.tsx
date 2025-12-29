import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Sermons", href: "/sermons" },
  { label: "Calendar", href: "/calendar" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-border bg-background">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-foreground"
          >
            Emmaus Bible Chapel
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Placeholder */}
        <div className="md:hidden">
          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-surface transition"
          >
            Menu
          </button>
        </div>
      </nav>
    </header>
  );
}
