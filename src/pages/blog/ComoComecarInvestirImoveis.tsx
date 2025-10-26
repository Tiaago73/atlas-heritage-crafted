import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Facebook, Linkedin, Twitter, Link2 } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/blog/como-comecar-investir-imoveis.png";

const ComoComecarInvestirImoveis = () => {
  const shareUrl = window.location.href;
  const title = "Como Começar a Investir em Imóveis: Guia Completo para Iniciantes";

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copiado!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Como Começar a Investir em Imóveis"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="container relative z-10 text-center px-4">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Guias
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Como Começar a Investir em Imóveis
          </h1>
          <div className="flex items-center justify-center gap-4 text-white/90 text-sm">
            <span>10 min de leitura</span>
            <span>•</span>
            <span>15 de Janeiro, 2025</span>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container py-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-foreground">Como Começar a Investir em Imóveis</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="container max-w-4xl py-12 px-4">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-muted-foreground mb-8">
            Investir em imóveis é uma das formas mais tradicionais e seguras de construir patrimônio. 
            Este guia completo vai te mostrar o caminho das pedras, desde os primeiros passos até 
            estratégias avançadas de investimento imobiliário.
          </p>

          <h2>Por Que Investir em Imóveis?</h2>
          <p>
            O mercado imobiliário brasileiro oferece oportunidades únicas para investidores de todos 
            os perfis. Diferente de outros investimentos, imóveis combinam:
          </p>
          <ul>
            <li><strong>Segurança patrimonial:</strong> Ativos tangíveis com valor intrínseco</li>
            <li><strong>Renda passiva:</strong> Aluguéis mensais recorrentes</li>
            <li><strong>Valorização:</strong> Apreciação do capital ao longo do tempo</li>
            <li><strong>Proteção contra inflação:</strong> Imóveis tendem a acompanhar a inflação</li>
          </ul>

          <h2>Definindo Seu Perfil de Investidor</h2>
          <p>
            Antes de investir, é fundamental entender seu perfil. Existem três tipos principais 
            de investidores imobiliários:
          </p>
          
          <h3>1. Investidor Conservador</h3>
          <p>
            Busca segurança e previsibilidade. Prefere imóveis em localizações consolidadas, 
            com demanda estável e baixo risco de vacância. Ideal para quem está começando.
          </p>

          <h3>2. Investidor Moderado</h3>
          <p>
            Equilibra segurança com oportunidades de valorização. Considera imóveis em regiões 
            em desenvolvimento, com potencial de crescimento a médio prazo.
          </p>

          <h3>3. Investidor Arrojado</h3>
          <p>
            Busca maiores retornos através de estratégias mais agressivas como compra para reforma 
            e revenda (fix and flip), ou investimentos em áreas emergentes.
          </p>

          <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r">
            <p className="font-semibold mb-2">💡 Dica da Atlas</p>
            <p className="mb-0">
              Nossa Metodologia 20/80 ajuda investidores de todos os perfis a encontrarem as 
              oportunidades certas. Focamos nos 20% de imóveis que geram 80% dos resultados.
            </p>
          </div>

          <h2>Quanto Dinheiro Preciso para Começar?</h2>
          <p>
            Uma das maiores dúvidas de quem quer começar é sobre o capital necessário. A boa 
            notícia é que existem opções para diferentes orçamentos:
          </p>

          <h3>Entrada de Imóvel Financiado</h3>
          <p>
            Com 20% a 30% do valor do imóvel, você pode financiar o restante. Por exemplo:
          </p>
          <ul>
            <li>Imóvel de R$ 300 mil → Entrada de R$ 60 a 90 mil</li>
            <li>Imóvel de R$ 500 mil → Entrada de R$ 100 a 150 mil</li>
          </ul>

          <h3>Compra à Vista</h3>
          <p>
            Oferece maior poder de negociação e elimina juros do financiamento. Exige capital 
            disponível, mas pode gerar descontos de 10% a 20% no valor do imóvel.
          </p>

          <h2>A Importância da Localização</h2>
          <p>
            A máxima do mercado imobiliário é verdadeira: localização, localização, localização. 
            Ao avaliar um imóvel, considere:
          </p>
          <ul>
            <li><strong>Infraestrutura:</strong> Proximidade de comércio, serviços e transporte público</li>
            <li><strong>Segurança:</strong> Índices de criminalidade da região</li>
            <li><strong>Desenvolvimento:</strong> Projetos de infraestrutura planejados</li>
            <li><strong>Demanda:</strong> Perfil da população e necessidade de imóveis</li>
            <li><strong>Valorização histórica:</strong> Comportamento dos preços na região</li>
          </ul>

          <h2>Tipos de Imóveis para Investir</h2>
          
          <h3>Apartamentos</h3>
          <p>
            Ideais para iniciantes. Manutenção simplificada, boa liquidez e demanda constante, 
            especialmente em centros urbanos.
          </p>

          <h3>Casas</h3>
          <p>
            Atraem famílias e pets, geralmente com aluguel mais estável e inquilinos de longo prazo.
          </p>

          <h3>Studios e Kitnets</h3>
          <p>
            Menor investimento inicial, alta demanda de estudantes e jovens profissionais. 
            Ideal para quem está começando com capital limitado.
          </p>

          <h3>Imóveis Comerciais</h3>
          <p>
            Salas, lojas e galpões. Contratos geralmente mais longos e valores de aluguel superiores, 
            mas exigem maior especialização.
          </p>

          <h2>Calculando o Retorno do Investimento</h2>
          <p>
            Entender os números é crucial. Os principais indicadores são:
          </p>

          <h3>Rentabilidade Bruta</h3>
          <p>
            Aluguel anual ÷ Valor do imóvel × 100. No Brasil, a média fica entre 4% e 6% ao ano.
          </p>

          <h3>Rentabilidade Líquida</h3>
          <p>
            Considera impostos, taxas, manutenção e vacância. Espere algo entre 3% e 5% ao ano.
          </p>

          <h3>Cap Rate</h3>
          <p>
            Indicador mais sofisticado que considera todas as receitas e despesas operacionais 
            do imóvel.
          </p>

          <div className="bg-secondary/10 p-6 rounded-lg my-8">
            <h3 className="mt-0">Exemplo Prático</h3>
            <p>
              <strong>Imóvel:</strong> Apartamento de 2 quartos<br/>
              <strong>Valor:</strong> R$ 400.000<br/>
              <strong>Aluguel:</strong> R$ 2.000/mês<br/>
              <strong>Rentabilidade bruta:</strong> (2.000 × 12) ÷ 400.000 = 6% ao ano<br/>
              <strong>Rentabilidade líquida:</strong> Aproximadamente 4,5% ao ano (descontando impostos e taxas)
            </p>
          </div>

          <h2>Financiamento Imobiliário</h2>
          <p>
            O financiamento permite alavancar seu investimento. Principais modalidades:
          </p>

          <h3>Sistema Price</h3>
          <p>
            Parcelas fixas durante todo o período. Facilita o planejamento financeiro.
          </p>

          <h3>Sistema SAC</h3>
          <p>
            Parcelas decrescentes. Amortização maior no início, reduzindo o custo total de juros.
          </p>

          <h3>Sacre (Híbrido)</h3>
          <p>
            Combina características dos dois sistemas anteriores, oferecendo um meio-termo.
          </p>

          <h2>Primeiros Passos Práticos</h2>
          
          <h3>Passo 1: Organize Suas Finanças</h3>
          <p>
            Analise sua situação financeira atual, defina quanto pode investir e quanto precisa 
            de retorno mensal.
          </p>

          <h3>Passo 2: Estude o Mercado</h3>
          <p>
            Pesquise regiões, preços, demanda de aluguel e tendências. Visite imóveis e converse 
            com corretores.
          </p>

          <h3>Passo 3: Consulte Especialistas</h3>
          <p>
            Trabalhe com profissionais experientes. Uma consultoria especializada pode evitar 
            erros caros e acelerar seus resultados.
          </p>

          <h3>Passo 4: Faça as Contas</h3>
          <p>
            Analise minuciosamente cada oportunidade. Considere todos os custos: impostos, 
            taxas, reformas, corretagem.
          </p>

          <h3>Passo 5: Comece!</h3>
          <p>
            O primeiro imóvel é sempre o mais difícil. Mas lembre-se: conhecimento vem com a 
            prática. Comece com algo dentro da sua zona de conforto.
          </p>

          <h2>Erros Comuns de Iniciantes</h2>
          <ul>
            <li><strong>Não fazer as contas corretamente:</strong> Subestimar custos é um erro fatal</li>
            <li><strong>Decisões emocionais:</strong> Escolher imóvel que você moraria, não o que rende mais</li>
            <li><strong>Ignorar a localização:</strong> Priorizar preço baixo em detrimento da localização</li>
            <li><strong>Não ter reserva de emergência:</strong> Vacância e reformas acontecem</li>
            <li><strong>Pular a due diligence:</strong> Não verificar documentação e regularização</li>
          </ul>

          <h2>Conclusão</h2>
          <p>
            Investir em imóveis é uma jornada que exige conhecimento, planejamento e paciência. 
            Mas com a estratégia certa, pode ser o caminho para construir patrimônio sólido e 
            gerar renda passiva para o resto da vida.
          </p>
          <p>
            Na Atlas Patrimonial, especializamos em guiar investidores nessa jornada, aplicando 
            nossa Metodologia 20/80 para identificar as melhores oportunidades do mercado. 
            Se você está pronto para dar o próximo passo, estamos aqui para ajudar.
          </p>
        </div>

        {/* Social Share */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm font-medium mb-4">Compartilhe este artigo:</p>
          <div className="flex gap-3">
            <Button variant="outline" size="icon" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}>
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')}>
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`, '_blank')}>
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={copyLink}>
              <Link2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12">
          <Link to="/blog">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o Blog
            </Button>
          </Link>
        </div>
      </article>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ComoComecarInvestirImoveis;
