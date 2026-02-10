"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "History", href: "/about/history" },
  { label: "Ministries", href: "/ministries" },
  { label: "Sermons", href: "/sermons" },
  { label: "Calendar", href: "/calendar" },
  { label: "Contact", href: "/contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on route change - fixed to avoid cascading renders
  useEffect(() => {
    // Defer state update to avoid cascading renders
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
    }, 0);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
        <nav className="page-container">
          <div className="flex h-16 items-center justify-between">
            {/* Logo/Brand */}
            <Link 
              href="/" 
              className="flex items-center gap-2 text-lg font-bold tracking-tight transition-colors hover:text-secondary sm:text-xl"
            >
              <span className="text-secondary">Emmaus</span>
              <span className="text-muted-foreground">Bible Chapel</span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className="nav-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Link href="/donate" className="btn btn-primary">
                Give
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-md p-2 hover:bg-surface md:hidden"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed right-0 top-0 z-70 h-full w-[280px] transform bg-background shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-border p-4">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-lg font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-secondary">Emmaus</span>
            <span className="text-muted-foreground">Bible Chapel</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-md p-2 hover:bg-surface"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                isActive(pathname, item.href)
                  ? 'bg-accent text-secondary'
                  : 'text-foreground hover:bg-surface'
              }`}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Give Button */}
          <div className="mt-4 px-2">
            <Link 
              href="/donate" 
              className="btn btn-primary w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Give
            </Link>
          </div>
        </nav>

        {/* Contact Info */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-surface p-4">
          <p className="text-xs text-muted-foreground">
            &quot;We preach Christ crucified&quot;
            <br />
            <span className="font-medium">1 Corinthians 1:23</span>
          </p>
        </div>
      </div>
    </>
  );
}
