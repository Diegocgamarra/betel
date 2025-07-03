import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Calendar, 
  CheckCircle, 
  Star,
  ArrowRight,
  Clock,
  Shield,
  Target
} from "lucide-react";

const Investment = () => {
  const benefits = [
    "Gestão completa de redes sociais",
    "Criação de conteúdo estratégico",
    "Design gráfico profissional",
    "Gravação e edição de vídeos",
    "Agendamento e publicação",
    "Relatórios mensais detalhados",
    "Suporte especializado"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-yellow-500/10 text-yellow-500 border-yellow-500/20 px-4 py-2">
            Investimento
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Transforme seu <span className="gradient-text">Negócio</span>
            <br />
            com Transparência Total
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sem surpresas, sem pegadinhas. Investimento fixo mensal com todos os 
            serviços inclusos para impulsionar sua presença digital.
          </p>
        </div>

        {/* Main pricing card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-white/10 to-white/5 border-yellow-500/20 backdrop-blur-sm p-8 md:p-12 relative overflow-hidden group hover:from-white/15 hover:to-white/10 transition-all duration-500">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-yellow-500/20 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-yellow-500/10 to-transparent rounded-full blur-xl" />
            
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Price section */}
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center space-x-2 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20 mb-6">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-yellow-500 font-medium">Plano Completo</span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center lg:justify-start space-x-2">
                      <span className="text-5xl md:text-6xl font-bold text-gray-900/90">R$ 1.800</span>
                      <span className="text-xl text-gray-700">/mês</span>
                    </div>
                    <p className="text-yellow-500 font-medium mt-2">
                      Tudo incluso para seu sucesso digital
                    </p>
                  </div>

                  {/* Important note */}
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <Target className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-yellow-500 font-medium text-sm">Importante:</p>
                        <p className="text-gray-700 text-sm">
                          O cliente deve investir separadamente o valor do tráfego pago para anúncios.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Flexibility info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-center lg:justify-start space-x-3">
                      <Calendar className="w-5 h-5 text-yellow-500" />
                      <span className="text-gray-700">Permanência mínima: 3 meses</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-3">
                      <Shield className="w-5 h-5 text-yellow-500" />
                      <span className="text-gray-700">Sem multas ou contratos que prendem</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-3">
                      <Clock className="w-5 h-5 text-yellow-500" />
                      <span className="text-gray-700">Continue enquanto gostar dos nossos serviços</span>
                    </div>
                  </div>
                </div>

                {/* Benefits section */}
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6 text-center lg:text-left">
                    O que está incluso:
                  </h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-3 group/item"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-yellow-500 group-hover/item:scale-110 transition-transform" />
                        </div>
                        <span className="text-gray-700 group-hover/item:text-gray-600 transition-colors font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-12">
                <a
                  href="https://wa.me/5567981328904?text=Ol%C3%A1%20quero%20falar%20mais%20sobre%20marketing!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg rounded-xl shadow-2xl shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all duration-300 group/btn"
                  >
                    <DollarSign className="mr-2 w-5 h-5" />
                    Começar Agora
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <p className="text-gray-400 text-sm mt-3">
                  Consultoria gratuita para avaliar seu projeto
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional info cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Calendar,
              title: "3 Meses Mínimos",
              description: "Tempo necessário para ver resultados consistentes e construir uma presença sólida."
            },
            {
              icon: Shield,
              title: "Sem Amarras",
              description: "Após os 3 meses iniciais, você decide se quer continuar. Sem multas ou penalidades."
            },
            {
              icon: Target,
              title: "Foco em Resultados",
              description: "Nosso compromisso é com seu sucesso. Se não estiver satisfeito, pode sair quando quiser."
            }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm p-6 text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-500/20 mb-4 group-hover:bg-yellow-500/30 transition-colors">
                  <IconComponent className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Trust indicator */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 px-6 py-3 rounded-full border border-green-500/20">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-500 font-medium">Transparência e confiança em primeiro lugar</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
