import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Instagram, 
  Play, 
  Palette, 
  Calendar, 
  Target, 
  Search, 
  Bot, 
  Globe,
  ArrowRight,
  Sparkles
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "social-media",
      title: "Gestão de Redes Sociais",
      subtitle: "Conectando sua Marca ao seu Público",
      description: "Uma gestão eficaz vai muito além de simples postagens; trata-se de construir uma comunidade engajada, fortalecer a identidade da sua marca e criar um canal de relacionamento direto com seus clientes.",
      image: "/lovable-uploads/mkt.png",
      features: [
        {
          icon: Palette,
          title: "Criação de Conteúdos Estratégicos",
          description: "Desenvolvemos um planejamento de conteúdo totalmente alinhado aos seus objetivos de negócio e aos interesses do seu público."
        },
        {
          icon: Play,
          title: "Gravação e Edição de Vídeos",
          description: "Criamos vídeos dinâmicos e profissionais, desde Reels e Stories até vídeos institucionais de alto impacto."
        },
        {
          icon: Instagram,
          title: "Design Gráfico Profissional",
          description: "Nossos designers criam artes e layouts profissionais para posts, stories e capas, garantindo uma estética coesa."
        },
        {
          icon: Calendar,
          title: "Agendamento e Publicação",
          description: "Realizamos o agendamento e publicação nos melhores dias e horários, garantindo presença online constante."
        }
      ]
    },
    {
      id: "paid-traffic",
      title: "Gestão de Tráfego Pago",
      subtitle: "Alcance as Pessoas Certas, na Hora Certa",
      description: "Com nossa expertise em tráfego pago, criamos e otimizamos campanhas de anúncios para colocar sua empresa na frente de potenciais clientes que estão ativamente buscando por seus produtos ou serviços.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        {
          icon: Instagram,
          title: "Tráfego para Redes Sociais (Meta Ads)",
          description: "Gerenciamos campanhas no Instagram e Facebook para aumentar alcance, gerar engajamento e capturar leads qualificados."
        },
        {
          icon: Search,
          title: "Tráfego no Google Ads",
          description: "Colocamos sua empresa no topo dos resultados de busca. Criamos campanhas focadas em maximizar o ROI."
        },
        {
          icon: Target,
          title: "Segmentação Avançada",
          description: "Utilizamos segmentações precisas para garantir que seu investimento atinja o público com maior potencial de conversão."
        }
      ]
    },
    {
      id: "additional-services",
      title: "Serviços Adicionais",
      subtitle: "Inovação e Tecnologia para seu Negócio",
      description: "Vamos além do convencional para oferecer soluções que otimizam seus processos e melhoram a experiência do seu cliente.",
      image: "/lovable-uploads/ia.png",
      features: [
        {
          icon: Bot,
          title: "Atendimento por IA 24h",
          description: "Sistema de chatbot com IA treinado para seu negócio, capaz de responder dúvidas e qualificar leads 24/7."
        },
        {
          icon: Globe,
          title: "Criação de Sites e Landing Pages",
          description: "Desenvolvemos sites modernos, rápidos, responsivos e otimizados para SEO e alta conversão."
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-yellow-500/3 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-yellow-500/10 text-yellow-500 border-yellow-500/20 px-4 py-2">
            Nossos Serviços
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Soluções <span className="gradient-text">Completas</span>
            <br />
            para seu Sucesso Digital
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos um ecossistema completo de serviços digitais, desde gestão de redes sociais 
            até implementação de inteligência artificial para atendimento 24h.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-fade-in-left`}>
                <div>
                  <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xl text-yellow-500 font-medium mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>

                {/* Features grid */}
                <div className="grid gap-4">
                  {service.features.map((feature, featureIndex) => {
                    const IconComponent = feature.icon;
                    return (
                      <Card 
                        key={featureIndex}
                        className="bg-white/5 border-white/10 backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
                              <IconComponent className="w-6 h-6 text-yellow-500" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                              {feature.title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} animate-fade-in-right`}>
                <div className="relative rounded-3xl overflow-hidden group">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating elements */}
                  <div className="absolute top-6 right-6 bento-card animate-float">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-yellow-500" />
                      <span className="text-white font-medium text-sm">Premium</span>
                    </div>
                  </div>
                  
                  {index === 0 && (
                    <div className="absolute bottom-6 left-6 bento-card animate-float" style={{animationDelay: '1s'}}>
                      <div className="text-yellow-500 font-bold">Foco em resultados</div>
                      <div className="text-xs text-gray-300"></div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="absolute bottom-6 left-6 bento-card animate-float" style={{animationDelay: '1s'}}>
                      <div className="text-yellow-500 font-bold">ROI 5x</div>
                      <div className="text-xs text-gray-300">Média</div>
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="absolute bottom-6 left-6 bento-card animate-float" style={{animationDelay: '1s'}}>
                      <div className="text-yellow-500 font-bold">24/7</div>
                      <div className="text-xs text-gray-300">Ativo</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
