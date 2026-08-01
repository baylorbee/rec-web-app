"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { nav } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`rec-header fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-neutral-200/70 bg-[#F9FAFB]/95 shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur-md"
          : "bg-[#F9FAFB]/80 backdrop-blur-sm"
      }`}
    >
      {/*
        Explicit three-zone flex: logo | absolute-centered links | CTA.
        Visibility controlled by .rec-desktop-* / .rec-mobile-* in globals.css
        (min-width: 1024px) so tablet widths keep a usable hamburger menu.
      */}
      <div className="relative mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 min-w-0 max-w-[calc(100%-3.25rem)] shrink">
          <Logo />
        </div>

        <nav className="rec-desktop-nav" aria-label="Primary">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium text-neutral-500 transition-colors hover:text-neutral-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="relative z-10 flex shrink-0 items-center gap-2">
          <a href={nav.cta.href} className="rec-desktop-cta">
            {nav.cta.label}
          </a>

          <button
            type="button"
            className="rec-mobile-toggle inline-flex h-11 w-11 items-center justify-center rounded-lg text-neutral-900"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="rec-mobile-drawer border-t border-neutral-200/80 bg-[#F9FAFB] px-4 py-5 sm:px-6"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1" aria-label="Mobile">
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-3.5 text-base font-medium text-neutral-900"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={nav.cta.href}
              className="mt-3 inline-flex min-h-11 items-center justify-center rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {nav.cta.label}
            </a>
            <Link
              href="/#contact"
              className="mt-2 py-2 text-center text-sm text-neutral-500"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
