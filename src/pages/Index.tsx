import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { StepCard } from "@/components/StepCard";
import { CaseCard } from "@/components/CaseCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { MediaCard } from "@/components/MediaCard";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Home,
  Key,
  TrendingUp,
  CheckCircle2,
  Users,
  Building2,
  Globe,
  Handshake,
} from "lucide-react";
import { Link } from "react-router-dom";
import apartamentoJardinsImg from "@/assets/cases/apartamento-jardins-sp.jpg";
import studioPinheirosImg from "@/assets/cases/studio-pinheiros-sp.jpg";
import coberturaMoemaImg from "@/assets/cases/cobertura-moema-sp.jpg";

const Index = () => {
  // Mock data
  const cases = [
    {
      slug: "apartamento-jardins-sp",
      location: "Jardins, SP",
      propertyValue: "R$ 850.000",
      monthlyRent: "R$ 4.800",
      monthlyPayment: "R$ 3.200",
      netResult: "+R$ 1.600",
      tags: ["2 quartos", "Alta valorização"],
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
      image: coberturaMoemaImg,
    },
  ];

  const testimonials = [
    {
      name: "Ricardo Almeida",
      location: "São Paulo, SP",
      role: "Empresário",
      text: "A metodologia 20/80 da Atlas transformou minha estratégia de investimento. Em 2 anos, construí um portfólio de 3 imóveis com renda mensal consistente.",
    },
    {
      name: "Marina Costa",
      location: "Rio de Janeiro, RJ",
      role: "Médica",
      text: "Sempre quis investir em imóveis mas não sabia por onde começar. A Atlas cuidou de tudo: crédito, compra e gestão. Hoje tenho renda passiva sem trabalho.",
    },
    {
      name: "Paulo Henrique",
      location: "Brasília, DF",
      role: "Advogado",
      text: "A transparência e o acompanhamento da equipe Atlas me deram segurança para investir. Meu primeiro imóvel já está com aluguel positivo.",
    },
  ];

  const mediaItems = [
    {
      title: "Atlas Patrimonial revoluciona investimento imobiliário com metodologia 20/80",
      source: "Valor Econômico",
      date: "15 Mar 2024",
      url: "#",
      excerpt: "Empresa paulista apresenta novo modelo de investimento em imóveis focado em autoquitação e renda passiva.",
    },
    {
      title: "Como construir patrimônio em imóveis sem capital inicial elevado",
      source: "InfoMoney",
      date: "08 Mar 2024",
      url: "#",
      excerpt: "Especialistas explicam estratégia de alavancagem imobiliária que está democratizando o acesso a investimentos.",
    },
    {
      title: "Mercado imobiliário: novas oportunidades para pequenos investidores",
      source: "Estadão",
      date: "22 Fev 2024",
      url: "#",
      excerpt: "Plataformas especializadas facilitam entrada no mercado imobiliário com gestão profissional completa.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Como Funciona */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionHeading
              badge="Processo"
              title="Como Funciona"
              subtitle="Três passos para você começar a construir patrimônio em imóveis com renda passiva e gestão completa."
              centered
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number={1}
              icon={CreditCard}
              title="Obtenção do Crédito"
              description="Analisamos seu perfil e encontramos as melhores condições de financiamento, com taxas adequadas para que o aluguel contribua nas parcelas."
            />
            <StepCard
              number={2}
              icon={Home}
              title="Compra do Imóvel"
              description="Curadoria especializada de imóveis com viabilidade positiva. Selecionamos propriedades com potencial de valorização e locação garantida."
            />
            <StepCard
              number={3}
              icon={Key}
              title="Locação e Gestão"
              description="Gestão completa: encontramos inquilinos, administramos contratos e garantimos a execução sem trabalho para você."
            />
          </div>
        </div>
      </section>

      {/* Metodologia 20/80 */}
      <section id="metodologia" className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionHeading
                badge="Metodologia Atlas"
                title="Autoquitação 20/80"
                subtitle="A estratégia que permite você construir patrimônio acelerado em imóveis."
              />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">Você entra com ~20%</h3>
                    <p className="text-muted-foreground">
                      Entrada reduzida permite você iniciar seu investimento com capital acessível.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">Aluguel cobre ~80%</h3>
                    <p className="text-muted-foreground">
                      A renda de locação pode cobrir grande parte das parcelas do financiamento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">Aceleração patrimonial</h3>
                    <p className="text-muted-foreground">
                      Construa patrimônio com disciplina e gestão de risco profissional.
                    </p>
                  </div>
                </div>
              </div>

              <Button variant="premium" size="lg" asChild>
                <Link to="/contato">Conhecer a Metodologia</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-navy rounded-2xl p-12 shadow-xl">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center space-y-2">
                    <div className="font-cinzel font-bold text-6xl text-gold">20%</div>
                    <div className="text-primary-foreground/80">Entrada Inicial</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="font-cinzel font-bold text-6xl text-gold">80%</div>
                    <div className="text-primary-foreground/80">Aluguel + Financ.</div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
                  <p className="text-sm text-primary-foreground/70 italic">
                    *Valores ilustrativos. Cada caso passa por estudo de viabilidade específico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo de Consultoria */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionHeading
              badge="Consultoria"
              title="Como Trabalhamos com Você"
              subtitle="Um processo transparente e estruturado para garantir o melhor investimento."
              centered
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "Reunião de Apresentação",
                description:
                  "Entendemos seu perfil, objetivos e capacidade de investimento. Apresentamos oportunidades alinhadas com suas metas.",
              },
              {
                title: "Escolha e Documentação",
                description:
                  "Você escolhe o imóvel ideal. Cuidamos de toda documentação e processo de crédito com agilidade e transparência.",
              },
              {
                title: "Compra e Onboarding",
                description:
                  "Finalizamos a compra e iniciamos gestão completa: locação, manutenção e acompanhamento mensal do seu investimento.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0 shadow-gold">
                  <span className="font-cinzel font-bold text-primary">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contato">Agendar Consultoria Gratuita</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cases/Oportunidades */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionHeading
              badge="Oportunidades"
              title="Estudos de Viabilidade"
              subtitle="Exemplos de imóveis analisados com potencial de renda positiva. Valores e projeções baseados em estudos reais."
              centered
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {cases.map((caseItem) => (
              <CaseCard key={caseItem.slug} {...caseItem} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/cases">Ver Todas as Oportunidades</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre a Atlas */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionHeading
                badge="Quem Somos"
                title="Sobre a Atlas Patrimonial"
                subtitle="Estratégia, transparência e execução em investimentos imobiliários."
              />

              <p className="text-muted-foreground leading-relaxed">
                A Atlas Patrimonial nasceu da missão de democratizar o acesso a investimentos imobiliários de qualidade.
                Combinamos curadoria especializada, metodologia comprovada e gestão completa para que você construa
                patrimônio com segurança e rentabilidade.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Nossa metodologia 20/80 permite que investidores iniciem com capital reduzido e construam portfólio
                imobiliário com renda passiva consistente, sempre com transparência e acompanhamento profissional.
              </p>

              <Button variant="premium" size="lg" asChild>
                <Link to="/sobre">Conhecer Nossa História</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, value: "+2.500", label: "Clientes atendidos" },
                { icon: Building2, value: "R$ 450M+", label: "Transacionados" },
                { icon: Globe, value: "12", label: "Anos de mercado" },
                { icon: Handshake, value: "98%", label: "Satisfação" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-elegant border border-border text-center space-y-3"
                >
                  <stat.icon className="mx-auto text-gold" size={32} />
                  <div className="font-cinzel font-bold text-3xl text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionHeading
              badge="Depoimentos"
              title="O Que Nossos Clientes Dizem"
              subtitle="Histórias reais de quem está construindo patrimônio com a Atlas Patrimonial."
              centered
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;
