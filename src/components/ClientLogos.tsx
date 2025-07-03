import { Badge } from "@/components/ui/badge";

const ClientLogos = () => {
  const clients = [
    {
      name: "Autoescola Grand Prix",
      logo: "/lovable-uploads/grandprix.png"
    },
    {
      name: "Clínica Infinity",
      logo: "/lovable-uploads/infinity.png"
    },
    {
      name: "Pax Maracaju",
      logo: "/lovable-uploads/paxmaracaju.png"
    },
    {
      name: "New Cred",
      logo: "/lovable-uploads/newcred.png"
    },
    {
      name: "Campo Belo Containers",
      logo: "/lovable-uploads/campobelo.png"
    },
    {
      name: "SunCare",
      logo: "/lovable-uploads/suncare.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-1/3 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-yellow-500/10 text-yellow-500 border-yellow-500/20 px-4 py-2">
            Nossos Clientes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Clientes que <span className="gradient-text">Confiam</span>
            <br />
            em Nosso Trabalho
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empresas de diversos segmentos já transformaram sua presença digital conosco
          </p>
        </div>

        {/* Client logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <img
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  className="w-full h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              {/* Tooltip with client name */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-yellow-500/20 text-yellow-500 text-xs px-3 py-1 rounded-full border border-yellow-500/30 whitespace-nowrap">
                  {client.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust message */}
        <div className="text-center mt-16">
          <p className="text-gray-400 max-w-2xl mx-auto">
            Junte-se a essas empresas que já descobriram o poder de uma presença digital estratégica e bem executada
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
