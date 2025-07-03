
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Trophy, Users, Zap, Target } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "+15 Anos",
      description: "Experiência sólida em marketing e tecnologia",
      color: "text-yellow-500"
    },
    {
      icon: Users,
      title: "Dourados & Região",
      description: "Conhecimento profundo do mercado local",
      color: "text-blue-400"
    },
    {
      icon: Zap,
      title: "Tecnologia de Ponta",
      description: "Ferramentas modernas para resultados concretos",
      color: "text-green-400"
    },
    {
      icon: Target,
      title: "Estratégias Personalizadas",
      description: "Soluções únicas para cada cliente",
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-yellow-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-yellow-500/10 text-yellow-500 border-yellow-500/20 px-4 py-2">
            Quem Somos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Sua <span className="gradient-text">Parceira Estratégica</span>
            <br />
            para o Sucesso Digital
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A Perfil Marketing nasceu para transformar a presença online de empresas em Dourados e região. 
            Combinamos experiência consolidada com inovação tecnológica para conectar sua empresa ao seu 
            público-alvo de maneira eficaz e mensurável.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm p-6 text-center hover:bg-white/10 transition-all duration-300 group hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-${achievement.color.split('-')[1]}-500/20 to-${achievement.color.split('-')[1]}-600/20 mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className={`w-8 h-8 ${achievement.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Mission statement */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Equipe especializada em marketing digital"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bento-card animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-white font-medium">Equipe Ativa</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-right">
            <h3 className="text-3xl font-playfair font-bold text-white">
              Construindo <span className="text-yellow-500">Marcas Fortes</span> no Digital
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Entendemos que o marketing digital vai muito além de simplesmente estar presente online. 
                Trata-se de criar conexões autênticas, construir autoridade e gerar resultados mensuráveis 
                que impactem diretamente no crescimento do seu negócio.
              </p>
              
              <p>
                Nossa abordagem combina o conhecimento profundo do mercado local de Dourados com as 
                mais avançadas ferramentas e estratégias digitais globais, garantindo que sua empresa 
                não apenas acompanhe, mas lidere as tendências do seu setor.
              </p>
            </div>

            {/* Key differentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {[
                "Estratégias Personalizadas",
                "Resultados Mensuráveis", 
                "Suporte Especializado",
                "Tecnologia Avançada"
              ].map((differential, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-white font-medium group-hover:text-yellow-500 transition-colors">
                    {differential}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
