import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calculator } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="bg-gradient-navy py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-cinzel font-bold text-3xl sm:text-4xl lg:text-5xl text-primary-foreground">
              Pronto para começar a construir seu{" "}
              <span className="text-gold">patrimônio imobiliário</span>?
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Agende uma consultoria gratuita e descubra como a metodologia 20/80 pode transformar seu futuro financeiro.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contato">
                Agendar Consultoria Gratuita
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline-light" size="xl" asChild>
              <Link to="/contato">
                <Calculator className="mr-2" size={20} />
                Fazer Simulação
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {[
              { label: "Consultoria gratuita", value: "Sem compromisso" },
              { label: "Análise personalizada", value: "Do seu perfil" },
              { label: "Resposta", value: "Em até 24h" },
            ].map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="text-sm text-primary-foreground/60">{item.label}</div>
                <div className="font-semibold text-gold">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
