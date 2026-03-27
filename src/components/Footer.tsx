import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Net for All" className="h-8 w-auto brightness-0 invert" />
          </div>

          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-accent transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/50">
            © 2026 Net for All. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
