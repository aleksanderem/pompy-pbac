const quickLinks = [
  { label: "Korzyści", href: "#korzysci" },
  { label: "Marki", href: "#marki" },
  { label: "Jak działamy", href: "#jak-dzialamy" },
  { label: "Porównanie", href: "#porownanie" },
  { label: "FAQ", href: "#faq" },
  { label: "Zamów wycenę", href: "#wycena" },
];

export default function Footer() {
  return (
    <footer className="bg-pbac-navy/20 border-t border-white/10">
      {/* Gradient top border */}
      <div className="h-px gradient-primary" />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo + description */}
          <div>
            <span className="font-montserrat font-bold text-2xl text-white">
              PBAC
            </span>
            <p className="mt-4 text-white/50 text-sm leading-relaxed">
              Profesjonalny montaż i serwis klimatyzacji oraz pomp ciepła w Warszawie
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h4 className="font-montserrat font-bold text-white mb-4">
              Szybkie linki
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-montserrat font-bold text-white mb-4">
              Kontakt
            </h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li>Warszawa</li>
              <li>
                <a href="tel:+48XXXXXXXXX" className="hover:text-white transition-colors">
                  +48 XXX XXX XXX
                </a>
              </li>
              <li>
                <a href="mailto:kontakt@pbac.pl" className="hover:text-white transition-colors">
                  kontakt@pbac.pl
                </a>
              </li>
              <li>
                <a
                  href="https://pbac.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  pbac.pl
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>&copy; 2026 PBAC. Wszelkie prawa zastrzeżone.</span>
          <span>Montaż i serwis klimatyzacji oraz pomp ciepła</span>
        </div>
      </div>
    </footer>
  );
}
