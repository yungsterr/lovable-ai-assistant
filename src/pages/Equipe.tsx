const Equipe = () => {
  return (
    <section id="equipe" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Notre Équipe</h2>
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          Une équipe passionnée et engagée, réunie autour d'une mission commune : 
          rendre Internet accessible à tous, partout dans le monde.
        </p>
        <div className="max-w-2xl mx-auto">
          <img 
            src="/team/equipe.jpg" 
            alt="L'équipe NetForAll" 
            className="rounded-2xl shadow-xl w-full object-cover"
          />
          <p className="mt-6 text-gray-500 italic">
            "Ensemble, nous construisons les ponts numériques de demain."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Equipe;