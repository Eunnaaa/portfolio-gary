"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { RESUME_DATA } from "@/data/resume-data";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { slowSmoothScrollTo } from "@/lib/smooth-scroll";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  // Global interceptor for in-page anchors to provide luxurious slow smooth scroll on home page
  useEffect(() => {
    const handleGlobalAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        if (window.location.pathname === "/") {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            slowSmoothScrollTo(href, 900, 56);
            setMobileMenuOpen(false);
            window.history.pushState(null, "", href);
          }
        }
      }
    };

    document.addEventListener("click", handleGlobalAnchorClick);
    return () => document.removeEventListener("click", handleGlobalAnchorClick);
  }, []);

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHome) {
      e.preventDefault();
      router.push("/");
      setMobileMenuOpen(false);
      return;
    }
    e.preventDefault();
    slowSmoothScrollTo("#about", 900, 56);
    setMobileMenuOpen(false);
    window.history.pushState(null, "", "/");
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (!isHome) {
      e.preventDefault();
      router.push("/" + targetId);
      setMobileMenuOpen(false);
      return;
    }
    e.preventDefault();
    slowSmoothScrollTo(targetId, 900, 56);
    setMobileMenuOpen(false);
    window.history.pushState(null, "", targetId);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-canvas/95 backdrop-blur-sm border-b border-grid-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Brand Logo / Top Anchor */}
          <a
            href="/"
            onClick={handleBrandClick}
            className="text-sm font-mono font-medium text-text-primary hover:text-accent-green transition-colors cursor-pointer"
          >
            <span className="text-accent-green font-bold mr-1.5">/</span>
            <span>Gary Hardyansyah</span>
            {!isHome && (
              <span className="text-text-muted ml-1.5 hidden sm:inline">
                / projects/
              </span>
            )}
          </a>

          {/* Desktop Nav Links with Slow Smooth Scroll */}
          <nav aria-label="Navigasi Utama" className="hidden md:flex items-center gap-7 text-xs font-mono">
            <a
              href={isHome ? "#about" : "/#about"}
              onClick={(e) => handleNavClick(e, "#about")}
              className="text-text-primary hover:text-accent-green transition-colors cursor-pointer"
            >
              about/
            </a>
            <a
              href={isHome ? "#experience" : "/#experience"}
              onClick={(e) => handleNavClick(e, "#experience")}
              className="text-text-primary hover:text-accent-green transition-colors cursor-pointer"
            >
              experience/
            </a>
            <a
              href={isHome ? "#projects" : "/#projects"}
              onClick={(e) => handleNavClick(e, "#projects")}
              className="text-text-primary hover:text-accent-green transition-colors cursor-pointer"
            >
              projects/
            </a>
            <a
              href={isHome ? "#skills" : "/#skills"}
              onClick={(e) => handleNavClick(e, "#skills")}
              className="text-text-primary hover:text-accent-green transition-colors cursor-pointer"
            >
              skills/
            </a>
            <a
              href={isHome ? "#contact" : "/#contact"}
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-text-primary hover:text-accent-green font-semibold transition-colors cursor-pointer"
            >
              contact/
            </a>
          </nav>

          {/* Desktop Action: Theme Toggle DI SAMPING KIRI TOMBOL RESUME */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle className="h-8 w-8" />
            <a
              href={RESUME_DATA.contact.cvDownloadUrl}
              download="CV_Gary_Hardyansyah.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 h-8 rounded text-xs font-mono font-medium bg-surface hover:bg-surface-hover text-text-primary hover:text-accent-green border border-grid-border transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-accent-green" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle className="h-8 w-8" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-8 w-8 inline-flex items-center justify-center rounded text-text-muted hover:text-text-primary border border-grid-border bg-surface transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-grid-border bg-canvas px-6 py-4 space-y-3 font-mono text-xs">
          <a
            href={isHome ? "#about" : "/#about"}
            onClick={(e) => handleNavClick(e, "#about")}
            className="block py-1 text-text-primary hover:text-accent-green transition-colors cursor-pointer"
          >
            about/
          </a>
          <a
            href={isHome ? "#experience" : "/#experience"}
            onClick={(e) => handleNavClick(e, "#experience")}
            className="block py-1 text-text-primary hover:text-accent-green transition-colors cursor-pointer"
          >
            experience/
          </a>
          <a
            href={isHome ? "#projects" : "/#projects"}
            onClick={(e) => handleNavClick(e, "#projects")}
            className="block py-1 text-text-primary hover:text-accent-green transition-colors cursor-pointer"
          >
            projects/
          </a>
          <a
            href={isHome ? "#skills" : "/#skills"}
            onClick={(e) => handleNavClick(e, "#skills")}
            className="block py-1 text-text-primary hover:text-accent-green transition-colors cursor-pointer"
          >
            skills/
          </a>
          <a
            href={isHome ? "#contact" : "/#contact"}
            onClick={(e) => handleNavClick(e, "#contact")}
            className="block py-1 text-text-primary hover:text-accent-green font-semibold transition-colors cursor-pointer"
          >
            contact/
          </a>
          <div className="pt-2 border-t border-grid-border">
            <a
              href={RESUME_DATA.contact.cvDownloadUrl}
              download="CV_Gary_Hardyansyah.pdf"
              className="inline-flex items-center gap-1.5 py-1 text-text-primary hover:text-accent-green transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-accent-green" />
              <span>Download Resume (.pdf)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
