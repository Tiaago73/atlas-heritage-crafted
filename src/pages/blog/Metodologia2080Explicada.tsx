import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Facebook, Linkedin, Twitter, Link2 } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/blog/metodologia-20-80.png";

const Metodologia2080Explicada = () => {
  const shareUrl = window.location.href;
  const title = "Metodologia 20/80: Como Encontrar os Melhores Imóveis";

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
            alt="Metodologia 20/80"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="container relative z-10 text-center px-4">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Metodologia
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Metodologia 20/80 Explicada
          </h1>
          <div className="flex items-center justify-center gap-4 text-white/90 text-sm">
            <span>12 min de leitura</span>
            <span>•</span>
            <span>18 de Janeiro, 2025</span>
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
          <span className="text-foreground">Metodologia 20/80</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="container max-w-4xl py-12 px-4">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-muted-foreground mb-8">
            Descubra como a Atlas Patrimonial revolucionou a seleção de imóveis aplicando 
            o Princípio de Pareto ao mercado imobiliário brasileiro. Nossa metodologia 
            proprietária identifica os 20% de imóveis que geram 80% dos melhores resultados.
          </p>

          <h2>A Origem: O Princípio de Pareto</h2>
          <p>
            Em 1896, o economista italiano Vilfredo Pareto observou que 80% da riqueza da 
            Itália estava nas mãos de 20% da população. Esse princípio se revelou aplicável 
            a inúmeras áreas da vida e dos negócios:
          </p>
          <ul>
            <li>80% dos resultados vêm de 20% dos esforços</li>
            <li>80% das vendas vêm de 20% dos clientes</li>
            <li>80% dos problemas vêm de 20% das causas</li>
          </ul>
          <p>
            Na Atlas, percebemos que o mesmo se aplica ao mercado imobiliário: <strong>20% dos 
            imóveis disponíveis geram 80% dos melhores retornos de investimento.</strong>
          </p>

          <h2>Como Aplicamos ao Mercado Imobiliário</h2>
          <p>
            Nossa metodologia não é apenas teoria. Desenvolvemos um sistema robusto de análise 
            que filtra milhares de oportunidades para identificar aqueles 20% de imóveis excepcionais.
          </p>

          <h3>Etapa 1: Análise de Mercado em Massa</h3>
          <p>
            Mensalmente, analisamos mais de 10.000 imóveis em diversas regiões do Brasil. 
            Utilizamos:
          </p>
          <ul>
            <li>Dados de portais imobiliários</li>
            <li>Informações de cartórios e registros públicos</li>
            <li>Índices econômicos regionais</li>
            <li>Tendências demográficas</li>
            <li>Projetos de infraestrutura planejados</li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r">
            <p className="font-semibold mb-2">📊 Números que Impressionam</p>
            <p className="mb-0">
              De cada 100 imóveis analisados, apenas 3-5 passam por todos os nossos filtros 
              e chegam à carteira de oportunidades recomendadas aos clientes.
            </p>
          </div>

          <h3>Etapa 2: Os 7 Pilares de Avaliação</h3>
          <p>
            Cada imóvel é avaliado através de 7 pilares fundamentais:
          </p>

          <h4>1. Localização Estratégica</h4>
          <p>
            Não basta estar em um "bom bairro". Analisamos:
          </p>
          <ul>
            <li>Valorização histórica nos últimos 5 anos</li>
            <li>Projetos de infraestrutura em andamento ou planejados</li>
            <li>Perfil demográfico da região e tendências</li>
            <li>Índices de segurança e qualidade de vida</li>
            <li>Proximidade de polos geradores de demanda</li>
          </ul>

          <h4>2. Precificação Inteligente</h4>
          <p>
            Comparamos o preço pedido com:
          </p>
          <ul>
            <li>Média de mercado da região (m²)</li>
            <li>Valores de venda recentes de imóveis similares</li>
            <li>Preços históricos ajustados pela inflação</li>
            <li>Potencial de valorização baseado em desenvolvimento local</li>
          </ul>

          <h4>3. Potencial de Renda</h4>
          <p>
            Avaliamos a demanda locatícia através de:
          </p>
          <ul>
            <li>Análise de valores de aluguel na região</li>
            <li>Taxa de vacância histórica</li>
            <li>Perfil de inquilinos potenciais</li>
            <li>Sazonalidade e estabilidade da demanda</li>
          </ul>

          <h4>4. Condição e Qualidade</h4>
          <p>
            Inspecionamos aspectos físicos e estruturais:
          </p>
          <ul>
            <li>Estado de conservação</li>
            <li>Necessidade de reformas e investimentos</li>
            <li>Qualidade da construção e acabamentos</li>
            <li>Eficiência da planta e distribuição dos espaços</li>
          </ul>

          <h4>5. Aspectos Jurídicos</h4>
          <p>
            Verificação minuciosa de:
          </p>
          <ul>
            <li>Regularização documental</li>
            <li>Certidões negativas</li>
            <li>Matrículas e ônus</li>
            <li>Regularidade fiscal</li>
          </ul>

          <h4>6. Liquidez</h4>
          <p>
            Avaliamos a facilidade de revenda:
          </p>
          <ul>
            <li>Tempo médio de venda na região</li>
            <li>Perfil de demanda (quantidade de interessados)</li>
            <li>Facilidade de financiamento</li>
            <li>Atratividade para diferentes perfis de compradores</li>
          </ul>

          <h4>7. ROI Projetado</h4>
          <p>
            Calculamos cenários realistas de retorno:
          </p>
          <ul>
            <li>Retorno anual líquido (descontando todos os custos)</li>
            <li>Payback esperado</li>
            <li>Potencial de valorização em 3, 5 e 10 anos</li>
            <li>Comparação com outras classes de investimento</li>
          </ul>

          <h2>O Sistema de Pontuação</h2>
          <p>
            Cada um dos 7 pilares recebe uma pontuação de 0 a 10. O score final do imóvel 
            determina se ele entra ou não na nossa carteira de recomendações:
          </p>

          <div className="bg-secondary/10 p-6 rounded-lg my-8">
            <h3 className="mt-0">Classificação de Imóveis</h3>
            <ul className="mb-0">
              <li><strong>Score 0-50:</strong> Rejeitado automaticamente</li>
              <li><strong>Score 51-65:</strong> Imóvel regular, não recomendado</li>
              <li><strong>Score 66-75:</strong> Bom imóvel, análise caso a caso</li>
              <li><strong>Score 76-85:</strong> Excelente oportunidade, recomendado</li>
              <li><strong>Score 86-100:</strong> Imóvel excepcional, oportunidade rara</li>
            </ul>
          </div>

          <p>
            Apenas imóveis com score acima de 76 entram na nossa carteira de recomendações. 
            Isso representa aqueles 20% de imóveis que geram 80% dos melhores resultados.
          </p>

          <h2>Casos Reais de Sucesso</h2>

          <h3>Caso 1: Studio em Pinheiros</h3>
          <p>
            <strong>Score:</strong> 88/100<br/>
            <strong>Investimento:</strong> R$ 420.000<br/>
            <strong>Retorno anual:</strong> 6,8% líquido<br/>
            <strong>Valorização em 2 anos:</strong> 18%
          </p>
          <p>
            Um studio de 35m² que parecia "comum" à primeira vista, mas nossa metodologia 
            identificou: localização estratégica próxima a duas novas linhas de metrô em 
            construção, demanda crescente de jovens profissionais e preço 12% abaixo da média 
            do m² na região.
          </p>

          <h3>Caso 2: Apartamento no Leblon</h3>
          <p>
            <strong>Score:</strong> 91/100<br/>
            <strong>Investimento:</strong> R$ 1.500.000<br/>
            <strong>Retorno anual:</strong> 5,2% líquido<br/>
            <strong>Valorização em 18 meses:</strong> 22%
          </p>
          <p>
            Imóvel de 120m² em uma das regiões mais valorizadas do Rio. Apesar do alto valor, 
            identificamos oportunidade única: proprietário precisando vender rapidamente, 
            desconto de 15%, excelente estado de conservação e potencial de valorização pela 
            raridade de unidades disponíveis na região.
          </p>

          <h2>O Que Nos Diferencia</h2>
          
          <h3>Não Vendemos Imóveis</h3>
          <p>
            Diferente de imobiliárias tradicionais, não temos interesse em "empurrar" estoque. 
            Nossa receita vem da consultoria, não da comissão de venda. Isso nos dá total 
            independência para recomendar apenas o que é realmente bom.
          </p>

          <h3>Análise Data-Driven</h3>
          <p>
            Utilizamos tecnologia e análise de dados para remover vieses emocionais e 
            decisões baseadas em "feeling". Números não mentem.
          </p>

          <h3>Atualização Constante</h3>
          <p>
            Nossa base de dados é atualizada diariamente. Novas oportunidades são analisadas 
            em tempo real, e nossos clientes são os primeiros a saber.
          </p>

          <h3>Acompanhamento Pós-Compra</h3>
          <p>
            Não abandonamos o cliente após a compra. Monitoramos o desempenho do investimento 
            e sugerimos otimizações ao longo do tempo.
          </p>

          <h2>Como Você Pode Aplicar os Conceitos</h2>
          <p>
            Mesmo sem nosso sistema completo, você pode aplicar alguns princípios da 
            Metodologia 20/80:
          </p>

          <ol>
            <li>
              <strong>Seja seletivo:</strong> Analise pelo menos 20 imóveis antes de escolher um. 
              Não se apaixone pelo primeiro que visitar.
            </li>
            <li>
              <strong>Foque em dados, não em emoções:</strong> Use planilhas, compare números, 
              faça contas. O imóvel bonito nem sempre é o mais rentável.
            </li>
            <li>
              <strong>Pesquise profundamente a região:</strong> Visite em diferentes horários, 
              converse com moradores, pesquise índices e estatísticas.
            </li>
            <li>
              <strong>Calcule todos os custos:</strong> IPTU, condomínio, manutenção, vacância, 
              impostos. O retorno real é sempre menor que o bruto.
            </li>
            <li>
              <strong>Pense no longo prazo:</strong> Imóveis são investimentos de médio a longo 
              prazo. Busque qualidade, não atalhos.
            </li>
          </ol>

          <h2>Limitações e Transparência</h2>
          <p>
            Nossa metodologia é robusta, mas não é infalível. Reconhecemos algumas limitações:
          </p>
          <ul>
            <li><strong>Eventos imprevisíveis:</strong> Crises, pandemias e mudanças regulatórias não podem ser 100% previstas</li>
            <li><strong>Mercado em movimento:</strong> Condições mudam, e análises precisam ser constantemente atualizadas</li>
            <li><strong>Fatores subjetivos:</strong> Alguns aspectos (como "charme" do imóvel) são difíceis de quantificar</li>
          </ul>
          <p>
            Por isso, nossa metodologia é complementada por análise humana experiente. 
            Tecnologia + Experiência = Melhores Resultados.
          </p>

          <h2>Conclusão</h2>
          <p>
            A Metodologia 20/80 da Atlas Patrimonial representa anos de experiência, milhares 
            de imóveis analisados e centenas de investimentos bem-sucedidos. Ela não é apenas 
            uma forma de trabalhar - é nosso compromisso em entregar aos clientes apenas as 
            melhores oportunidades do mercado.
          </p>
          <p>
            Se você está procurando investir em imóveis mas se sente perdido na infinidade de 
            opções disponíveis, nossa metodologia foi criada exatamente para resolver esse problema. 
            Deixe que façamos o trabalho pesado de filtrar as milhares de oportunidades e 
            apresentemos apenas aquelas que realmente valem seu investimento.
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

export default Metodologia2080Explicada;
