import teamGroup from "@/assets/team-group.jpg";
import teamConference from "@/assets/team-conference.jpg";
import teamField from "@/assets/team-field.jpg";
import teamCollage from "@/assets/team-collage.jpg";

const stories = [
  {
    img: teamGroup,
    alt: "L'équipe fondatrice NetForAll",
    tag: "Les origines",
    title: "Quatre amis, une conviction",
    text: "Tout a commencé dans un appartement parisien, autour d'une carte du monde et d'un constat brutal : 2,6 milliards de personnes vivent encore sans connexion internet. Lucas, Théo, Maxime et Karim ont posé le premier kit de connectivité sur cette table ce soir-là. Aujourd'hui, ces kits traversent les frontières.",
  },
  {
    img: teamConference,
    alt: "Maxime en conférence internationale",
    tag: "La voix sur scène",
    title: "Convaincre le monde, un discours à la fois",
    text: "Maxime n'avait jamais pris la parole devant 400 décideurs internationaux. Il l'a fait quand même. Devant les chiffres — 733 millions de personnes sans accès numérique dans les pays les plus précaires — les salles se taisent. Et les portes s'ouvrent. C'est comme ça que NetForAll a décroché ses premiers partenariats institutionnels.",
  },
  {
    img: teamField,
    alt: "Lucas distribuant des téléphones à des enfants",
    tag: "Le terrain",
    title: "Les mains dans la poussière, le cœur en feu",
    text: "Lucas a posé son laptop, pris un avion, et s'est retrouvé dans un camp à la frontière syrienne. Ce jour-là, il a distribué les premiers smartphones NetForAll à des enfants qui n'avaient jamais tenu internet dans leurs mains. Le sourire de cette petite fille — il en parle encore à chaque réunion d'équipe.",
  },
  {
    img: teamCollage,
    alt: "L'équipe en action partout dans le monde",
    tag: "Le mouvement",
    title: "Du hub communautaire aux sommets montagneux",
    text: "Formation aux usages numériques en Afrique subsaharienne, installation d'antennes en haute altitude, programmes d'alphabétisation digitale, tables rondes internationales — l'équipe NetForAll n'attend pas que le monde change. Elle s'y rend, les outils en main, et elle construit.",
  },
];

const TeamSection = () => {
  return (
    <section id="equipe" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            L'équipe
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Des humains derrière chaque connexion
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto text-base">
            NetForAll, ce n'est pas une entreprise. C'est une équipe qui a choisi de mettre sa vie au service d'une cause qui ne peut pas attendre.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {stories.map((story, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow">
              <div className="overflow-hidden h-64">
                <img src={story.img} alt={story.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-3">{story.tag}</span>
                <h3 className="text-lg font-bold text-primary mb-2">{story.title}</h3>
                <p className="text-foreground/65 text-sm leading-relaxed">{story.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
