import { motion } from "framer-motion";
import { Globe, Cloud, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    title: "Navigation Libre",
    subtitle: "WebPortal",
    description:
      "Un portail web sécurisé offrant un accès libre à internet. Nous déployons des points d'accès communautaires pour connecter les zones les plus isolées.",
  },
  {
    icon: Cloud,
    title: "Souveraineté",
    subtitle: "Nextcloud",
    description:
      "Une infrastructure cloud souveraine basée sur Nextcloud, garantissant la confidentialité et le contrôle total des données de nos bénéficiaires.",
  },
  {
    icon: ShieldCheck,
    title: "Défense Active",
    subtitle: "Wazuh SOC",
    description:
      "Un centre opérationnel de sécurité (SOC) propulsé par Wazuh, assurant une surveillance continue et une protection proactive contre les cybermenaces.",
  },
];

const PillarsSection = () => {
  return (
    <section id="piliers" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
            Infrastructure
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Nos trois piliers
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-accent" />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
                {pillar.subtitle}
              </p>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
