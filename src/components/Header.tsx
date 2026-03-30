import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = ({ onDonateClick }: { onDonateClick: () => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Notre Mission", href: "#mission" },
    { label: "Infrastructure", href: "#piliers" },
    { label: "Sécurité", href: "#piliers" },
    { label: "L'équipe", href: "/equipe" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-border">
      <div className="flex items-center justify-between h-20 px-4">
        <a href="/" className="flex items-center ml-1">
          <img src={logo} alt="Net for All" className="h-20 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onDonateClick}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            <Heart className="w-4 h-4" />
            Faire un don
          </button>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm font-medium text-foreground/80 hover:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { onDonateClick(); setMobileOpen(false); }}
            className="mt-2 w-full inline-flex items-center justify-center gap-2 px-6 py-2 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition-colors"
          >
            <Heart className="w-4 h-4" />
            Faire un don
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
