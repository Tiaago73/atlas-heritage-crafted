import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CaseCard } from "@/components/CaseCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import apartamentoJardinsImg from "@/assets/cases/apartamento-jardins-sp.jpg";
import studioPinheirosImg from "@/assets/cases/studio-pinheiros-sp.jpg";
import coberturaMoemaImg from "@/assets/cases/cobertura-moema-sp.jpg";
import salaComercialImg from "@/assets/cases/sala-comercial-faria-lima-sp.jpg";
import apartamentoLeblonImg from "@/assets/cases/apartamento-leblon-rj.jpg";
import apartamentoAsaSulImg from "@/assets/cases/apartamento-asa-sul-df.jpg";

const Cases = () => {
  const [selectedCity, setSelectedCity] = useState("todas");
  const [selectedType, setSelectedType] = useState("todos");

  const cases = [
    {
      slug: "apartamento-jardins-sp",
      location: "Jardins, SP",
      propertyValue: "R$ 850.000",
      monthlyRent: "R$ 4.800",
      monthlyPayment: "R$ 3.200",
      netResult: "+R$ 1.600",
      tags: ["2 quartos", "Alta valorização"],
      city: "sao-paulo",
      type: "residencial",
      image: apartamentoJardinsImg,
    },
    {
      slug: "studio-pinheiros-sp",
      location: "Pinheiros, SP",
      propertyValue: "R$ 520.000",
      monthlyRent: "R$ 3.500",
      monthlyPayment: "R$ 2.400",
      netResult: "+R$ 1.100",
      tags: ["Studio", "Pronto para morar"],
      city: "sao-paulo",
      type: "residencial",
      image: studioPinheirosImg,
    },
    {
      slug: "cobertura-moema-sp",
      location: "Moema, SP",
      propertyValue: "R$ 1.2M",
      monthlyRent: "R$ 7.200",
      monthlyPayment: "R$ 4.800",
      netResult: "+R$ 2.400",
      tags: ["3 quartos", "Cobertura"],
      city: "sao-paulo",
      type: "residencial",
      image: coberturaMoemaImg,
    },
    {
      slug: "sala-comercial-faria-lima",
      location: "Faria Lima, SP",
      propertyValue: "R$ 980.000",
      monthlyRent: "R$ 6.800",
      monthlyPayment: "R$ 4.500",
      netResult: "+R$ 2.300",
      tags: ["Comercial", "Laje corporativa"],
      city: "sao-paulo",
      type: "comercial",
      image: salaComercialImg,
    },
    {
      slug: "apartamento-leblon-rj",
      location: "Leblon, RJ",
      propertyValue: "R$ 1.5M",
      monthlyRent: "R$ 9.000",
      monthlyPayment: "R$ 6.200",
      netResult: "+R$ 2.800",
      tags: ["3 quartos", "Vista mar"],
      city: "rio-de-janeiro",
      type: "residencial",
      image: apartamentoLeblonImg,
    },
    {
      slug: "apartamento-asa-sul-df",
      location: "Asa Sul, DF",
      propertyValue: "R$ 720.000",
      monthlyRent: "R$ 4.500",
      monthlyPayment: "R$ 2.900",
      netResult: "+R$ 1.600",
      tags: ["2 quartos", "Localização premium"],
      city: "brasilia",
      type: "residencial",
      image: apartamentoAsaSulImg,
    },
  ];

  const filteredCases = cases.filter((c) => {
    const cityMatch = selectedCity === "todas" || c.city === selectedCity;
    const typeMatch = selectedType === "todos" || c.type === selectedType;
    return cityMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-cinzel font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground">
              Oportunidades
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Estudos de viabilidade de imóveis com potencial de renda positiva.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter size={18} />
              <span className="font-medium">Filtros:</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="todas">Todas as Cidades</option>
                <option value="sao-paulo">São Paulo</option>
                <option value="rio-de-janeiro">Rio de Janeiro</option>
                <option value="brasilia">Brasília</option>
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="todos">Todos os Tipos</option>
                <option value="residencial">Residencial</option>
                <option value="comercial">Comercial</option>
              </select>

              {(selectedCity !== "todas" || selectedType !== "todos") && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedCity("todas");
                    setSelectedType("todos");
                  }}
                >
                  Limpar Filtros
                </Button>
              )}
            </div>

            <div className="ml-auto text-sm text-muted-foreground">
              {filteredCases.length} {filteredCases.length === 1 ? "oportunidade" : "oportunidades"}
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseItem) => (
              <CaseCard key={caseItem.slug} {...caseItem} />
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">Nenhuma oportunidade encontrada com os filtros selecionados.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cases;
