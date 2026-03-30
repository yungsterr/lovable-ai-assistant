const teamMembers = [
  {
    name: "Sophie Martin",
    role: "Directrice Générale",
    description: "10 ans d'expérience dans le secteur associatif et l'inclusion numérique.",
    image: "/team/sophie.jpg"
  },
  {
    name: "Karim Benali",
    role: "Responsable Infrastructure",
    description: "Expert en déploiement de réseaux dans les zones rurales et défavorisées.",
    image: "/team/karim.jpg"
  },
  {
    name: "Julie Dubois",
    role: "Coordinatrice Formation",
    description: "Spécialiste en pédagogie numérique et accompagnement des publics éloignés.",
    image: "/team/julie.jpg"
  },
  {
    name: "Thomas Leroy",
    role: "Responsable Technique",
    description: "Ingénieur réseau passionné par les solutions open-source et accessibles.",
    image: "/team/thomas.jpg"
  }
];

const Equipe = () => {
  return (
    <section id="equipe" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">Notre Équipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" 
                     onError={(e) => { e.currentTarget.src = '/placeholder.svg' }} />
              </div>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-blue-600 text-sm mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipe;