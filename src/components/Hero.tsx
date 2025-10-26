import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-skyline.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Skyline urbano premium ao pôr do sol"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">
              Metodologia 20/80 de Autoquitação
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-cinzel font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight">
            Alavanque seu patrimônio em imóveis com{" "}
            <span className="text-gold">inteligência</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Construa renda de aluguéis com metodologia 20/80 (autoquitação) e gestão ponta a ponta.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contato">
                Agendar Consultoria
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline-light" size="xl" asChild>
              <Link to="/contato">
                <Play className="mr-2" size={20} />
                Conhecer Metodologia 20/80
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pt-12 max-w-3xl mx-auto">
            {[
              { value: "+2.5k", label: "Clientes atendidos" },
              { value: "R$ 450M+", label: "Em transações" },
              { value: "12", label: "Anos de mercado" },
              { value: "98%", label: "Satisfação" },
            ].map((stat, index) => (
              <div key={index} className="space-y-1">
                <div className="font-cinzel font-bold text-2xl lg:text-3xl text-gold">{stat.value}</div>
                <div className="text-xs lg:text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-2 rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
};
