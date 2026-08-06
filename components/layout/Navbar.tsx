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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          transition-all
          duration-500
          ${
            scrolled
              ? "border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-2xl shadow-[0_15px_50px_rgba(0,0,0,.45)]"
              : "bg-transparent"
          }
        `}
      >
        <div
          className={`
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-5
            lg:px-6
            transition-all
            duration-500
            ${scrolled ? "h-20" : "h-24"}
          `}
        >
          <Logo />

          {/* Navigation Desktop */}

          <nav className="hidden items-center gap-8 xl:gap-10 lg:flex">
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

          {/* Bouton Mobile */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
            className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-2.5
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-cyan-500/50
              hover:bg-cyan-500/10
              hover:text-cyan-300
              lg:hidden
            "
          >
            {mobileOpen ? (
              <X
                size={28}
                strokeWidth={2.3}
              />
            ) : (
              <Menu
                size={28}
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
          top-20
          z-40
          w-full
          border-b
          border-slate-800/60
          bg-slate-950/80
          backdrop-blur-3xl
          shadow-[0_20px_80px_rgba(0,0,0,.55)]
          transition-all
          duration-500
          lg:hidden
          ${
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-6 pointer-events-none opacity-0"
          }
        `}
      >
        <div className="space-y-2 px-6 py-8">
                    {navigation.map((item) => (
            <div
              key={item.href}
              onClick={closeMobileMenu}
              className="
                rounded-xl
                transition-all
                duration-300
                hover:bg-white/5
              "
            >
              <NavLink
                href={item.href}
                label={item.label}
              />
            </div>
          ))}

          <div
            className="pt-4"
            onClick={closeMobileMenu}
          >
            <DownloadCVButton />
          </div>

        </div>

      </div>

      {/* Overlay */}

      {mobileOpen && (
        <div
          onClick={closeMobileMenu}
          className="
            fixed
            inset-0
            z-30
            bg-black/40
            backdrop-blur-[2px]
            lg:hidden
          "
        />
      )}

    </>
  );
}