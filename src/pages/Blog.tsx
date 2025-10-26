import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import comoComecarImg from "@/assets/blog/como-comecar-investir-imoveis.png";
import metodologia2080Img from "@/assets/blog/metodologia-20-80.png";
import errosImg from "@/assets/blog/erros-investidor-iniciante.png";
import localizacaoImg from "@/assets/blog/localizacao-vs-preco.png";
import gestaoImg from "@/assets/blog/gestao-imoveis-terceirizar.png";
import consorcioImg from "@/assets/blog/consorcio-imovel-guia.png";

const Blog = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      await fetch('https://script.google.com/macros/s/SEU_DEPLOYMENT_ID/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          email: email,
        }),
      });

      setLoading(false);
      toast({
        title: "Inscrição confirmada!",
        description: "Você receberá nossos conteúdos exclusivos em breve.",
      });
      setEmail("");
    } catch (error) {
      setLoading(false);
      toast({
        title: "Erro ao inscrever",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  const posts = [
    {
      slug: "como-comecar-investir-imoveis",
      title: "Como Começar a Investir em Imóveis com Pouco Capital",
      excerpt:
        "Descubra estratégias para entrar no mercado imobiliário mesmo com orçamento limitado. A metodologia 20/80 pode ser sua porta de entrada.",
      category: "Iniciantes",
      date: "15 Mar 2024",
      readTime: "8 min",
      image: comoComecarImg,
    },
    {
      slug: "metodologia-20-80-explicada",
      title: "Metodologia 20/80: O Guia Completo",
      excerpt:
        "Entenda em detalhes como funciona a estratégia de autoquitação que está transformando o investimento imobiliário no Brasil.",
      category: "Estratégia",
      date: "10 Mar 2024",
      readTime: "12 min",
      image: metodologia2080Img,
    },
    {
      slug: "erros-comuns-investimento-imobiliario",
      title: "7 Erros que Todo Investidor Iniciante Comete",
      excerpt:
        "Conheça os principais erros ao investir em imóveis e como evitá-los para maximizar seus retornos e minimizar riscos.",
      category: "Dicas",
      date: "05 Mar 2024",
      readTime: "10 min",
      image: errosImg,
    },
    {
      slug: "localizacao-ou-preco",
      title: "Localização vs Preço: O Que Pesa Mais?",
      excerpt:
        "Análise detalhada sobre como escolher o imóvel certo equilibrando localização premium e viabilidade financeira.",
      category: "Análise",
      date: "28 Fev 2024",
      readTime: "9 min",
      image: localizacaoImg,
    },
    {
      slug: "gestao-imoveis-terceirizar",
      title: "Gestão de Imóveis: Vale a Pena Terceirizar?",
      excerpt:
        "Compare os prós e contras de administrar seus próprios imóveis versus contratar gestão profissional especializada.",
      category: "Gestão",
      date: "20 Fev 2024",
      readTime: "7 min",
      image: gestaoImg,
    },
    {
      slug: "consorcio-imovel-guia-completo",
      title: "Consórcio de Imóvel: Guia Definitivo",
      excerpt:
        "Do zero à contemplação segura: tudo o que você precisa saber sobre consórcio imobiliário e como usar com inteligência.",
      category: "Estratégia",
      date: "15 Fev 2024",
      readTime: "11 min",
      image: consorcioImg,
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
                    {/* Image */}
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
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
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold"
                required
                disabled={loading}
              />
              <Button variant="hero" size="lg" type="submit" disabled={loading}>
                {loading ? "Inscrevendo..." : "Assinar Newsletter"}
              </Button>
            </form>
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
