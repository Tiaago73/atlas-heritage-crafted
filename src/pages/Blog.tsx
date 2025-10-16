import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      slug: "como-comecar-investir-imoveis",
      title: "Como Começar a Investir em Imóveis com Pouco Capital",
      excerpt:
        "Descubra estratégias para entrar no mercado imobiliário mesmo com orçamento limitado. A metodologia 20/80 pode ser sua porta de entrada.",
      category: "Iniciantes",
      date: "15 Mar 2024",
      readTime: "8 min",
      image: "",
    },
    {
      slug: "metodologia-20-80-explicada",
      title: "Metodologia 20/80: O Guia Completo",
      excerpt:
        "Entenda em detalhes como funciona a estratégia de autoquitação que está transformando o investimento imobiliário no Brasil.",
      category: "Estratégia",
      date: "10 Mar 2024",
      readTime: "12 min",
      image: "",
    },
    {
      slug: "erros-comuns-investimento-imobiliario",
      title: "7 Erros que Todo Investidor Iniciante Comete",
      excerpt:
        "Conheça os principais erros ao investir em imóveis e como evitá-los para maximizar seus retornos e minimizar riscos.",
      category: "Dicas",
      date: "05 Mar 2024",
      readTime: "10 min",
      image: "",
    },
    {
      slug: "localizacao-ou-preco",
      title: "Localização vs Preço: O Que Pesa Mais?",
      excerpt:
        "Análise detalhada sobre como escolher o imóvel certo equilibrando localização premium e viabilidade financeira.",
      category: "Análise",
      date: "28 Fev 2024",
      readTime: "9 min",
      image: "",
    },
    {
      slug: "gestao-imoveis-alugados",
      title: "Gestão de Imóveis: Vale a Pena Terceirizar?",
      excerpt:
        "Compare os prós e contras de administrar seus próprios imóveis versus contratar gestão profissional especializada.",
      category: "Gestão",
      date: "20 Fev 2024",
      readTime: "7 min",
      image: "",
    },
    {
      slug: "mercado-imobiliario-2024",
      title: "Perspectivas do Mercado Imobiliário em 2024",
      excerpt:
        "Análise das tendências, oportunidades e desafios do mercado imobiliário brasileiro para o ano de 2024.",
      category: "Mercado",
      date: "15 Fev 2024",
      readTime: "11 min",
      image: "",
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
              Blog Atlas
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Insights, estratégias e análises sobre investimento imobiliário.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link to={`/post/${post.slug}`}>
                  <div className="bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-300 border border-border h-full flex flex-col">
                    {/* Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-primary/5 to-gold/10 flex items-center justify-center">
                      <span className="text-4xl font-cinzel font-bold text-muted-foreground/20">Atlas</span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <span className="px-2 py-1 rounded-md bg-gold/10 text-gold font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="font-cinzel font-semibold text-xl text-foreground mb-3 group-hover:text-gold transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-grow">{post.excerpt}</p>

                      {/* Read More */}
                      <div className="flex items-center text-gold text-sm font-medium group-hover:gap-2 transition-all">
                        Ler artigo
                        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 bg-card rounded-2xl p-12 shadow-elegant border border-border">
            <h2 className="font-cinzel font-bold text-3xl text-foreground">
              Receba Conteúdo Exclusivo
            </h2>
            <p className="text-muted-foreground text-lg">
              Assine nossa newsletter e receba análises, oportunidades e insights direto no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <Button variant="hero" size="lg">
                Assinar
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Sem spam. Cancele quando quiser.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
