import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Home, Bed, Bath, Car, TrendingUp, DollarSign, Calendar, CheckCircle2, AlertCircle } from "lucide-react";
import { CTASection } from "./CTASection";

interface CaseStudyProps {
  title: string;
  location: string;
  image: string;
  propertyDetails: {
    type: string;
    area: string;
    bedrooms?: string;
    bathrooms?: string;
    parking?: string;
  };
  financials: {
    propertyValue: string;
    downPayment: string;
    financed: string;
    monthlyPayment: string;
    monthlyRent: string;
    netResult: string;
    yield: string;
  };
  analysis: {
    strengths: string[];
    considerations: string[];
    conclusion: string;
  };
  projections?: {
    year5: string;
    year10: string;
  };
}

export const CaseStudy = ({
  title,
  location,
  image,
  propertyDetails,
  financials,
  analysis,
  projections,
}: CaseStudyProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary to-primary-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <Link to="/cases" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6">
              <ArrowLeft size={20} />
              <span>Voltar para Oportunidades</span>
            </Link>

            <div className="space-y-6">
              <h1 className="font-cinzel font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground">
                {title}
              </h1>

              <div className="flex items-center gap-2 text-xl text-primary-foreground/80">
                <MapPin size={24} />
                <span>{location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img src={image} alt={title} className="w-full h-[500px] object-cover" />
            </div>

            {/* Property Details */}
            <div>
              <h2 className="font-cinzel font-bold text-3xl text-foreground mb-8">Características do Imóvel</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div className="p-6 bg-card rounded-xl border border-border text-center">
                  <Home className="mx-auto mb-3 text-gold" size={32} />
                  <div className="text-2xl font-bold text-foreground mb-1">{propertyDetails.type}</div>
                  <div className="text-sm text-muted-foreground">Tipo</div>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border text-center">
                  <TrendingUp className="mx-auto mb-3 text-gold" size={32} />
                  <div className="text-2xl font-bold text-foreground mb-1">{propertyDetails.area}</div>
                  <div className="text-sm text-muted-foreground">Área</div>
                </div>
                {propertyDetails.bedrooms && (
                  <div className="p-6 bg-card rounded-xl border border-border text-center">
                    <Bed className="mx-auto mb-3 text-gold" size={32} />
                    <div className="text-2xl font-bold text-foreground mb-1">{propertyDetails.bedrooms}</div>
                    <div className="text-sm text-muted-foreground">Quartos</div>
                  </div>
                )}
                {propertyDetails.bathrooms && (
                  <div className="p-6 bg-card rounded-xl border border-border text-center">
                    <Bath className="mx-auto mb-3 text-gold" size={32} />
                    <div className="text-2xl font-bold text-foreground mb-1">{propertyDetails.bathrooms}</div>
                    <div className="text-sm text-muted-foreground">Banheiros</div>
                  </div>
                )}
                {propertyDetails.parking && (
                  <div className="p-6 bg-card rounded-xl border border-border text-center">
                    <Car className="mx-auto mb-3 text-gold" size={32} />
                    <div className="text-2xl font-bold text-foreground mb-1">{propertyDetails.parking}</div>
                    <div className="text-sm text-muted-foreground">Vagas</div>
                  </div>
                )}
              </div>
            </div>

            {/* Financial Analysis */}
            <div>
              <h2 className="font-cinzel font-bold text-3xl text-foreground mb-8">Análise Financeira</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-card rounded-xl border border-border">
                  <DollarSign className="text-gold mb-3" size={28} />
                  <div className="text-sm text-muted-foreground mb-1">Valor do Imóvel</div>
                  <div className="text-3xl font-bold text-foreground">{financials.propertyValue}</div>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Entrada (20%)</div>
                  <div className="text-3xl font-bold text-foreground">{financials.downPayment}</div>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Crédito Liberado</div>
                  <div className="text-3xl font-bold text-foreground">{financials.financed}</div>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border">
                  <Calendar className="text-gold mb-3" size={28} />
                  <div className="text-sm text-muted-foreground mb-1">Parcela Mensal</div>
                  <div className="text-3xl font-bold text-foreground">{financials.monthlyPayment}</div>
                </div>
                <div className="p-6 bg-green-600 rounded-xl border border-green-500/20">
                  <TrendingUp className="text-white mb-3" size={28} />
                  <div className="text-sm text-green-50 mb-1">Aluguel Estimado</div>
                  <div className="text-3xl font-bold text-white">{financials.monthlyRent}</div>
                </div>
                <div className="p-6 bg-gradient-gold rounded-xl border border-gold/20">
                  <CheckCircle2 className="text-primary mb-3" size={28} />
                  <div className="text-sm text-primary-foreground/80 mb-1">Resultado Mensal</div>
                  <div className="text-3xl font-bold text-primary">{financials.netResult}</div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-muted/30 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Yield Anual</div>
                    <div className="text-2xl font-bold text-foreground">{financials.yield}</div>
                  </div>
                  {projections && (
                    <>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Projeção 5 anos</div>
                        <div className="text-2xl font-bold text-foreground">{projections.year5}</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-cinzel font-semibold text-2xl text-foreground mb-6">Pontos Positivos</h3>
                <ul className="space-y-4">
                  {analysis.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-cinzel font-semibold text-2xl text-foreground mb-6">Considerações</h3>
                <ul className="space-y-4">
                  {analysis.considerations.map((consideration, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <AlertCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">{consideration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Conclusion */}
            <div className="p-8 bg-gradient-navy rounded-2xl border border-gold/20">
              <h3 className="font-cinzel font-bold text-2xl text-primary-foreground mb-4">Conclusão</h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                {analysis.conclusion}
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contato">Solicitar Análise Personalizada</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};
