import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const HeroSection = ({ onDonateClick }: { onDonateClick: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle gradient background matching logo style */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-accent/5" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/30 mb-8">
            <span className="text-sm font-medium text-success">
              🔒 Statut : Serveur DMZ Sécurisé (HTTPS)
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary mb-4 leading-tight">
            NetForAll
          </h1>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Connecter le monde,
            </span>{" "}
            <span className="text-accent">en toute sécurité.</span>
          </h2>

          <p className="text-xl md:text-2xl text-primary/60 font-body mb-12">
            L'accès à internet pour tous.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={onDonateClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-accent text-accent-foreground font-bold text-lg hover:bg-accent/90 transition-colors shadow-lg shadow-accent/25"
            >
              <Heart className="w-5 h-5" />
              Faire un don
            </motion.button>
            <motion.a
              href="#piliers"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl border-2 border-primary-foreground/20 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/5 transition-colors"
            >
              Découvrir nos actions
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
