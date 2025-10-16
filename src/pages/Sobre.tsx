import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Target, Eye, Award, Shield } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-cinzel font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground">
              Sobre a Atlas Patrimonial
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Estratégia, transparência e execução em investimentos imobiliários.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <SectionHeading title="Nossa História" />
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                A Atlas Patrimonial nasceu em 2012 com uma missão clara: democratizar o acesso a investimentos
                imobiliários de qualidade através de estratégia, transparência e execução impecável.
              </p>
              <p>
                Fundada por especialistas do mercado financeiro e imobiliário, a Atlas desenvolveu uma metodologia
                proprietária que permite investidores construírem patrimônio com capital inicial reduzido, através
                da estratégia 20/80 de autoquitação.
              </p>
              <p>
                Ao longo de mais de uma década, já assessoramos mais de 2.500 clientes na construção de portfólios
                imobiliários rentáveis, com foco em renda passiva e valorização consistente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Missão",
                description:
                  "Democratizar investimentos imobiliários através de estratégia acessível e gestão profissional completa.",
              },
              {
                icon: Eye,
                title: "Visão",
                description:
                  "Ser referência nacional em consultoria e gestão de investimentos imobiliários com foco em renda passiva.",
              },
              {
                icon: Award,
                title: "Excelência",
                description:
                  "Curadoria rigorosa, análise técnica profunda e acompanhamento contínuo em cada investimento.",
              },
              {
                icon: Shield,
                title: "Transparência",
                description:
                  "Processos claros, comunicação direta e informações completas em todas as etapas do investimento.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-elegant border border-border space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                  <item.icon className="text-gold" size={28} />
                </div>
                <h3 className="font-cinzel font-semibold text-xl text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Nossos Diferenciais" centered className="mb-16" />
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "Metodologia 20/80 Proprietária",
                description:
                  "Estratégia exclusiva que permite construção patrimonial acelerada com entrada reduzida e renda de locação cobrindo financiamento.",
              },
              {
                title: "Curadoria Especializada",
                description:
                  "Análise técnica rigorosa de cada imóvel: localização, potencial de valorização, viabilidade de locação e retorno projetado.",
              },
              {
                title: "Gestão Completa",
                description:
                  "Da obtenção do crédito à administração mensal: locação, manutenção, inadimplência e relatórios de performance.",
              },
              {
                title: "Tecnologia e Dados",
                description:
                  "Plataforma própria com dashboards em tempo real, relatórios automatizados e acompanhamento digital de todo portfólio.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-sm border border-border">
                <h3 className="font-semibold text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
