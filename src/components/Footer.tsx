import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/12625daa-7197-4b65-9087-5f2680689f2e.png" 
                alt="Perfil Marketing Logo" 
                className="h-8 w-auto"
              />
              <span className="text-yellow-500 font-semibold">Perfil Marketing</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sua parceira estratégica para o sucesso no ambiente digital. 
              Transformamos presença online em resultados concretos.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Serviços</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Gestão de Redes Sociais",
                "Tráfego Pago",
                "Criação de Conteúdo",
                "Atendimento por IA",
                "Desenvolvimento Web",
                "Consultoria Digital"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                <a href="https://wa.me/5567981328904?text=Quero%20falar%20sobre%20meu%20marketing" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  (67) 9 8132-8904
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400">contato@perfilmarketing.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400">Dourados - MS</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 Perfil Marketing. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
