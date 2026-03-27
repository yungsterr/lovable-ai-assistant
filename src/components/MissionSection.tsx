import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section id="mission" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
              Notre mission
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              L'internet est un droit,
              <br />
              pas un privilège.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Net for All est une organisation non gouvernementale dédiée à démocratiser l'accès
              à internet de manière sécurisée et souveraine. Nous croyons que chaque individu,
              quelle que soit sa localisation, mérite un accès libre, sûr et privé au réseau mondial.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nos infrastructures sont conçues avec les plus hauts standards de cybersécurité,
              garantissant que la connexion reste un vecteur d'émancipation et non de vulnérabilité.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
