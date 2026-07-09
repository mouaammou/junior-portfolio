'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";
import { HiBars3, HiXMark } from "react-icons/hi2";
import type { IconType } from "react-icons";

type NavItem = { label: string; href: string };
type SocialItem = { label: string; href: string; icon: IconType };

const NAV_ITEMS: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Curriculum", href: "/curriculum" },
];

const SOCIAL_LINKS: SocialItem[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mouad-ouaammou-36a7b8175", icon: SiLinkedin },
  { label: "GitHub", href: "https://github.com/mouaammou/", icon: FiGithub },
  { label: "Email", href: "mailto:jsamassine@gmail.com", icon: HiOutlineMailOpen },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="nav-root fixed inset-x-0 top-0 z-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .nav-root { --signal: #FF8A42; }
        .nav-display { font-family: 'Space Grotesk', ui-sans-serif, sans-serif; }
        .nav-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
      `}</style>

      <div
        className={`flex items-center justify-between px-6 transition-all duration-300 md:px-14 ${
          scrolled
            ? "bg-background/90 py-3 shadow-lg shadow-black/20 backdrop-blur-md"
            : "bg-transparent py-6"
        }`}
      >
        <Link
          href="/"
          className="nav-display text-xl font-bold uppercase tracking-tight text-foreground"
          onClick={() => setIsOpen(false)}
        >
          Moua<span className="text-[var(--signal)]">d</span>.
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_ITEMS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`nav-mono group relative py-1 text-lg tracking-wide transition-colors duration-300 ${
                  active ? "text-[var(--signal)]" : "text-foreground/75 hover:text-foreground"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-[var(--signal)] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          <div className="ml-4 flex items-center gap-5 border-l border-foreground/15 pl-6">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className="text-foreground/55 transition-colors duration-300 hover:text-[var(--signal)]"
              >
                <Icon size={22} />
              </Link>
            ))}
          </div>
        </nav>

        {/* mobile toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="cursor-pointer text-foreground lg:hidden"
        >
          {isOpen ? <HiXMark size={26} /> : <HiBars3 size={26} />}
        </button>
      </div>

      {/* mobile dropdown */}
      <div
        className={`overflow-hidden bg-background/95 backdrop-blur-md transition-[max-height,border-color] duration-300 ease-in-out lg:hidden ${
          isOpen ? "max-h-96 border-b border-foreground/10" : "max-h-0 border-b border-transparent"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`nav-mono py-3 text-base tracking-wide transition-colors duration-300 ${
                pathname === href ? "text-[var(--signal)]" : "text-foreground/80"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-6 border-t border-foreground/10 pt-4">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className="text-foreground/70 transition-colors duration-300 hover:text-[var(--signal)]"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
