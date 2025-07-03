import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-yellow-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/12625daa-7197-4b65-9087-5f2680689f2e.png" 
                alt="Perfil Marketing Logo" 
                className="h-12 w-auto"
              />
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
                <span className="text-yellow-500 font-medium">Especialistas Digitais</span>
              </div>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight">
                <span className="text-white">Sua Presença</span>
                <br />
                <span className="gradient-text">Digital</span>
                <br />
                <span className="text-white">Gerenciada por</span>
                <br />
                <span className="text-yellow-500">Especialistas</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                Transformamos sua presença online em resultados concretos com 
                <span className="text-yellow-500 font-semibold"> +15 anos de experiência </span>
                em marketing digital e tecnologia de ponta.
              </p>
            </div>

            {/* Key benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Gestão Completa", subtitle: "Redes Sociais" },
                { title: "Tráfego Pago", subtitle: "ROI Garantido" },
                { title: "IA 24/7", subtitle: "Atendimento" }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="bento-card text-center group hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="font-semibold text-yellow-500 group-hover:text-yellow-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-400">{benefit.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">+150</div>
                <div className="text-sm text-gray-400">Empresas Atendidas</div>
              </div>
              <div className="w-px h-12 bg-gray-700" />
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">+500%</div>
                <div className="text-sm text-gray-400">ROI Médio</div>
              </div>
              <div className="w-px h-12 bg-gray-700" />
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">24/7</div>
                <div className="text-sm text-gray-400">Suporte IA</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-fade-in-right">
            <div className="relative">
              {/* Main image placeholder */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-yellow-500/20">
                <img 
                  src="/lovable-uploads/foto betel.png"
                  alt="Marketing Digital Moderno"
                  className="w-full object-contain max-h-[600px] bg-black"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 bento-card animate-float">
                  <div className="text-yellow-500 font-bold text-lg">Profissionalismo</div>
                  <div className="text-xs text-gray-300"></div>
                </div>
                
                <div className="absolute bottom-4 left-4 bento-card animate-float" style={{animationDelay: '2s'}}>
                  <div className="text-yellow-500 font-bold text-lg">Qualidade</div>
                  <div className="text-xs text-gray-300"></div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl animate-float" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
