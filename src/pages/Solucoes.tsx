import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, TrendingUp, Briefcase, Users, CheckCircle2 } from "lucide-react";

const Solucoes = () => {
  const solutions = [
    {
      icon: Home,
      title: "Investimento Residencial",
      description: "Apartamentos e casas com foco em locação residencial de longo prazo.",
      features: [
        "Imóveis em regiões de alta demanda",
        "Análise de valorização histórica",
        "Perfil de inquilino estável",
        "Retorno mensal previsível",
      ],
    },
    {
      icon: Briefcase,
      title: "Investimento Comercial",
      description: "Salas comerciais e lajes corporativas para locação empresarial.",
      features: [
        "Contratos de longo prazo",
        "Rentabilidade superior",
        "Menor vacância em regiões prime",
        "Potencial de valorização acelerada",
      ],
    },
    {
      icon: TrendingUp,
      title: "Portfólio Diversificado",
      description: "Construção de carteira mista para redução de risco e maximização de retorno.",
      features: [
        "Mix de residencial e comercial",
        "Distribuição geográfica estratégica",
        "Gestão unificada",
        "Rebalanceamento periódico",
      ],
    },
    {
      icon: Users,
      title: "Consultoria Personalizada",
      description: "Análise completa do seu perfil e objetivos para estratégia sob medida.",
      features: [
        "Planejamento financeiro integrado",
        "Simulações de cenários",
        "Acompanhamento mensal",
        "Suporte contínuo",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-cinzel font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground">
              Nossas Soluções
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Estratégias personalizadas para cada perfil de investidor imobiliário.
            </p>
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-elegant hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <solution.icon className="text-gold" size={32} />
                </div>
                <h2 className="font-cinzel font-semibold text-2xl text-foreground mb-3">{solution.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nosso Processo"
            subtitle="Uma jornada estruturada e transparente do início ao acompanhamento contínuo."
            centered
            className="mb-16"
          />
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Diagnóstico e Planejamento",
                description:
                  "Análise do seu perfil financeiro, objetivos e capacidade de investimento. Definimos estratégia personalizada.",
              },
              {
                step: "02",
                title: "Curadoria de Oportunidades",
                description:
                  "Apresentamos imóveis selecionados com estudos de viabilidade completos: localização, rentabilidade e projeções.",
              },
              {
                step: "03",
                title: "Estruturação Financeira",
                description:
                  "Obtemos crédito com as melhores condições do mercado. Negociação de taxas e prazos otimizados.",
              },
              {
                step: "04",
                title: "Aquisição e Documentação",
                description:
                  "Cuidamos de toda burocracia: jurídico, cartório, registro e transferência. Processo ágil e seguro.",
              },
              {
                step: "05",
                title: "Gestão e Locação",
                description:
                  "Encontramos inquilinos qualificados, administramos contratos e cuidamos de manutenção e inadimplência.",
              },
              {
                step: "06",
                title: "Acompanhamento Mensal",
                description:
                  "Relatórios de performance, dashboards digitais e suporte contínuo para otimização do seu portfólio.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-6 bg-card rounded-xl p-6 shadow-sm border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center flex-shrink-0 shadow-gold">
                  <span className="font-cinzel font-bold text-lg text-primary">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-primary-foreground">
              Pronto para começar?
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Agende uma consultoria gratuita e descubra qual solução é ideal para seu perfil.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contato">Agendar Consultoria Gratuita</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solucoes;
