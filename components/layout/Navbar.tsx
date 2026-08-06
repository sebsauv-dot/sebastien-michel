"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import NavLink from "./NavLink";
import DownloadCVButton from "./DownloadCVButton";

import { navigation } from "@/lib/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-slate-800/60 bg-slate-950/80 supports-[backdrop-filter]:bg-slate-950/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,.35)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

          <Logo />

          {/* Navigation Desktop */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
              />
            ))}
          </nav>

          {/* Bouton CV */}

          <div className="hidden lg:block">
            <DownloadCVButton />
          </div>

          {/* Menu Mobile */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            className="rounded-lg p-2 text-white transition hover:bg-white/5 lg:hidden"
          >
            {mobileOpen ? (
              <X
                size={30}
                strokeWidth={2.3}
              />
            ) : (
              <Menu
                size={30}
                strokeWidth={2.3}
              />
            )}
          </button>

        </div>
      </header>

      {/* Menu Mobile */}

      <div
        className={`
          fixed
          left-0
          top-24
          z-40
          w-full
          overflow-hidden
          bg-slate-950/95
          backdrop-blur-xl
          transition-all
          duration-500
          lg:hidden
          ${
            mobileOpen
              ? "max-h-screen border-b border-slate-800 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="space-y-6 px-6 py-8">

          {navigation.map((item) => (
            <div
              key={item.href}
              onClick={closeMobileMenu}
            >
              <NavLink
                href={item.href}
                label={item.label}
              />
            </div>
          ))}

          <div onClick={closeMobileMenu}>
            <DownloadCVButton />
          </div>

        </div>
      </div>
    </>
  );
}