import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MediaCard } from "@/components/MediaCard";

const Midia = () => {
  const mediaItems = [
    {
      title: "Atlas Patrimonial revoluciona investimento imobiliário com metodologia 20/80",
      source: "Valor Econômico",
      date: "15 Mar 2024",
      url: "#",
      excerpt:
        "Empresa paulista apresenta novo modelo de investimento em imóveis focado em autoquitação e renda passiva, democratizando acesso ao mercado imobiliário.",
    },
    {
      title: "Como construir patrimônio em imóveis sem capital inicial elevado",
      source: "InfoMoney",
      date: "08 Mar 2024",
      url: "#",
      excerpt:
        "Especialistas explicam estratégia de alavancagem imobiliária que está democratizando o acesso a investimentos de alto retorno.",
    },
    {
      title: "Mercado imobiliário: novas oportunidades para pequenos investidores",
      source: "Estadão",
      date: "22 Fev 2024",
      url: "#",
      excerpt:
        "Plataformas especializadas facilitam entrada no mercado imobiliário com gestão profissional completa e curadoria de oportunidades.",
    },
    {
      title: "Renda passiva: como imóveis podem gerar receita mensal consistente",
      source: "Exame",
      date: "18 Fev 2024",
      url: "#",
      excerpt:
        "Análise de estratégias para construir portfólio imobiliário rentável com foco em locação e valorização de longo prazo.",
    },
    {
      title: "Startups imobiliárias transformam mercado tradicional com tecnologia",
      source: "Forbes Brasil",
      date: "10 Fev 2024",
      url: "#",
      excerpt:
        "Novas empresas combinam tecnologia, análise de dados e gestão profissional para simplificar investimentos em imóveis.",
    },
    {
      title: "Investimento imobiliário: o que mudou em 2024",
      source: "Folha de S.Paulo",
      date: "05 Fev 2024",
      url: "#",
      excerpt:
        "Especialistas apontam tendências e oportunidades no mercado imobiliário brasileiro para investidores pessoa física.",
    },
    {
      title: "Atlas Patrimonial entre as 10 empresas mais inovadoras do setor",
      source: "Você S/A",
      date: "28 Jan 2024",
      url: "#",
      excerpt:
        "Ranking destaca empresas que estão revolucionando o mercado imobiliário com modelos de negócio inovadores e centrados no cliente.",
    },
    {
      title: "Gestão profissional de imóveis: vale a pena terceirizar?",
      source: "UOL Economia",
      date: "20 Jan 2024",
      url: "#",
      excerpt:
        "Comparativo entre autogestão e gestão profissional mostra vantagens de contar com especialistas na administração de imóveis.",
    },
    {
      title: "CEO da Atlas Patrimonial fala sobre futuro do mercado imobiliário",
      source: "Podcast Primo Pobre",
      date: "15 Jan 2024",
      url: "#",
      excerpt:
        "Entrevista exclusiva sobre estratégias de investimento, tendências de mercado e democratização do acesso a imóveis de renda.",
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
              Atlas na Mídia
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Acompanhe nossa presença nos principais veículos de economia e investimentos.
            </p>
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item, index) => (
              <MediaCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 bg-card rounded-2xl p-12 shadow-elegant border border-border">
            <h2 className="font-cinzel font-bold text-3xl text-foreground">Contato para Imprensa</h2>
            <p className="text-muted-foreground text-lg">
              Para entrevistas, materiais de imprensa e parcerias editoriais, entre em contato com nossa assessoria.
            </p>
            <div className="pt-4">
              <a
                href="mailto:imprensa@atlaspatrimonial.com"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-gold text-primary font-semibold shadow-gold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                imprensa@atlaspatrimonial.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Midia;
