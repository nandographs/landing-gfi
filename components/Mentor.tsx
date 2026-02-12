import React from 'react';

const Mentor: React.FC = () => {
  return (
    <section id="mentor" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">

          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-800 border border-white/10 relative shadow-2xl">
              <img
                src="/images/FERNANDO02.jpg"
                alt="Fernando Santos"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 border-[1px] border-white/10 rounded-2xl pointer-events-none"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-500/20 blur-2xl rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-white/5 blur-2xl rounded-full"></div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h4 className="text-brand-500 font-bold uppercase tracking-widest text-sm mb-4">O Sócio Participante</h4>
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Vamos crescer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-brand-600">
                Juntos!
              </span>
            </h2>

            <div className="space-y-6 text-neutral-300 text-lg leading-relaxed">
              <p>
                Eu sei como é desconfiar de promessas. Por isso só falo do que eu vivo. Esse modelo já estava em operação quando entrei. Hoje participo como sócio e acompanho os resultados. Meu convite é simples: conheça o sistema e tire suas próprias conclusões.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;