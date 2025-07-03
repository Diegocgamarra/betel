import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-yellow-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Pronto para <span className="gradient-text">Transformar</span>
            <br />
            seu Negócio Digital?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Não deixe sua concorrência sair na frente. Comece hoje mesmo a construir 
            uma presença digital que gera resultados reais para seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5567981328904?text=Ol%C3%A1%20quero%20falar%20mais%20sobre%20marketing!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg rounded-xl shadow-2xl shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all duration-300 group"
              >
                Solicitar Consultoria Gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Phone,
              title: "Telefone",
              content: "(67) 99999-9999",
              subtitle: "WhatsApp disponível"
            },
            {
              icon: Mail,
              title: "E-mail",
              content: "contato@perfilmarketing.com.br",
              subtitle: "Resposta em até 2h"
            },
            {
              icon: MapPin,
              title: "Localização",
              content: "Dourados - MS",
              subtitle: "Atendimento regional"
            },
            {
              icon: Clock,
              title: "Horário",
              content: "Seg à Sex: 8h às 18h",
              subtitle: "WhatsApp 24h"
            }
          ].map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Card 
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm p-6 text-center hover:bg-white/10 transition-all duration-300 group hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-500/20 mb-4 group-hover:bg-yellow-500/30 transition-colors">
                  <IconComponent className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="font-semibold text-white mb-2">{contact.title}</h3>
                <p className="text-yellow-500 font-medium mb-1">{contact.content}</p>
                <p className="text-gray-400 text-sm">{contact.subtitle}</p>
              </Card>
            );
          })}
        </div>

        {/* Final message */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/10 px-6 py-3 rounded-full border border-yellow-500/20">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
            <span className="text-yellow-500 font-medium">Consultoria gratuita disponível agora</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
