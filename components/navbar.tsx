"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const DarkVeil = dynamic(() => import("@/components/dark-veil"), { ssr: false });

const navLinks = [
  { label: "Co to jest", href: "#co-to-jest" },
  { label: "Korzyści", href: "#korzysci" },
  { label: "Marki", href: "#marki" },
  { label: "Kalkulator", href: "#kalkulator" },
  { label: "vs Klimatyzator", href: "#vs-klimatyzator" },
  { label: "Porównanie", href: "#porownanie" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10">
      {/* DarkVeil animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <DarkVeil
          hueShift={230}
          noiseIntensity={0.06}
          scanlineIntensity={0.3}
          speed={0.8}
          scanlineFrequency={0}
          warpAmount={0.35}
          resolutionScale={0.5}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="font-montserrat font-bold text-2xl text-pbac-white">
            PBAC
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button asChild className="gradient-button rounded-full uppercase text-xs tracking-wider px-6 h-9 text-white border-0">
              <a href="#wycena">Zamów wycenę</a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="gradient-button rounded-full uppercase text-xs tracking-wider px-6 h-9 text-white border-0 w-fit">
                <a href="#wycena" onClick={() => setMobileOpen(false)}>Zamów wycenę</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
