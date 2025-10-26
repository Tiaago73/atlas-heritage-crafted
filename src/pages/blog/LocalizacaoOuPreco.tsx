import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Facebook, Linkedin, Twitter, Link2 } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/blog/localizacao-vs-preco.png";

const LocalizacaoOuPreco = () => {
  const shareUrl = window.location.href;
  const title = "Localização vs Preço: O Que Priorizar no Investimento Imobiliário";

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
            alt="Localização vs Preço"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="container relative z-10 text-center px-4">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Estratégia
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Localização vs Preço
          </h1>
          <div className="flex items-center justify-center gap-4 text-white/90 text-sm">
            <span>9 min de leitura</span>
            <span>•</span>
            <span>25 de Janeiro, 2025</span>
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
          <span className="text-foreground">Localização vs Preço</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="container max-w-4xl py-12 px-4">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-muted-foreground mb-8">
            Um dos dilemas mais comuns no investimento imobiliário: vale mais a pena pagar mais 
            caro por localização privilegiada ou buscar o melhor preço em região menos nobre? 
            A resposta pode surpreender você.
          </p>

          <h2>O Dilema Clássico</h2>
          <p>
            Você tem R$ 500.000 para investir. Duas opções na mesa:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="mt-0 text-primary">Opção A: Localização Premium</h3>
              <ul className="mb-0">
                <li><strong>Bairro:</strong> Jardins (nobre)</li>
                <li><strong>Área:</strong> 45m²</li>
                <li><strong>Preço/m²:</strong> R$ 11.000</li>
                <li><strong>Aluguel:</strong> R$ 2.500/mês</li>
                <li><strong>Rentabilidade:</strong> 6% a.a.</li>
              </ul>
            </div>

            <div className="bg-secondary/10 p-6 rounded-lg">
              <h3 className="mt-0 text-secondary">Opção B: Preço Atraente</h3>
              <ul className="mb-0">
                <li><strong>Bairro:</strong> Zona Leste (emergente)</li>
                <li><strong>Área:</strong> 75m²</li>
                <li><strong>Preço/m²:</strong> R$ 6.700</li>
                <li><strong>Aluguel:</strong> R$ 2.000/mês</li>
                <li><strong>Rentabilidade:</strong> 4,8% a.a.</li>
              </ul>
            </div>
          </div>

          <p>
            À primeira vista, a Opção A parece melhor pela rentabilidade. Mas será que é 
            realmente o melhor investimento? Vamos analisar profundamente.
          </p>

          <h2>O Caso Pela Localização Premium</h2>

          <h3>1. Valorização Superior</h3>
          <p>
            Bairros nobres consolidados historicamente se valorizam acima da média do mercado. 
            Dados dos últimos 10 anos em São Paulo:
          </p>
          <ul>
            <li><strong>Jardins, Itaim, Vila Olímpia:</strong> Valorização média de 8-12% a.a.</li>
            <li><strong>Bairros intermediários:</strong> 5-7% a.a.</li>
            <li><strong>Bairros periféricos:</strong> 3-5% a.a.</li>
          </ul>

          <h3>2. Menor Risco</h3>
          <p>
            Localizações prime são mais resilientes em crises. Durante a pandemia:
          </p>
          <ul>
            <li>Bairros nobres: Desvalorização de 2-3%</li>
            <li>Bairros periféricos: Desvalorização de 8-12%</li>
          </ul>

          <h3>3. Liquidez Garantida</h3>
          <p>
            Se você precisar vender, imóveis bem localizados vendem mais rápido:
          </p>
          <ul>
            <li>Localização premium: 2-4 meses para vender</li>
            <li>Localização intermediária: 6-9 meses</li>
            <li>Localização periférica: 12+ meses</li>
          </ul>

          <h3>4. Inquilinos de Qualidade</h3>
          <p>
            Bairros nobres atraem inquilinos com maior renda e estabilidade:
          </p>
          <ul>
            <li>Menor inadimplência (1-2% vs 5-8%)</li>
            <li>Contratos mais longos (média de 3 anos vs 1,5 anos)</li>
            <li>Melhor conservação do imóvel</li>
          </ul>

          <h3>5. Menor Vacância</h3>
          <p>
            Demanda constante significa menos tempo sem receber aluguel:
          </p>
          <ul>
            <li>Bairros premium: 1-2 meses de vacância/ano</li>
            <li>Bairros periféricos: 3-4 meses de vacância/ano</li>
          </ul>

          <h2>O Caso Pelo Preço Atraente</h2>

          <h3>1. Maior Área por Real Investido</h3>
          <p>
            Com o mesmo capital, você consegue imóveis significativamente maiores em regiões 
            mais acessíveis, ampliando seu público potencial de inquilinos.
          </p>

          <h3>2. Potencial de Ganho em Áreas em Desenvolvimento</h3>
          <p>
            Regiões emergentes podem surpreender positivamente se houver investimentos em 
            infraestrutura. Exemplos históricos:
          </p>
          <ul>
            <li><strong>Mooca/Tatuapé (SP):</strong> Valorizaram 300% em 15 anos com expansão do metrô</li>
            <li><strong>Barra da Tijuca (RJ):</strong> Valorização de 250% antes das Olimpíadas</li>
            <li><strong>Águas Claras (DF):</strong> Crescimento explosivo com desenvolvimento do metrô</li>
          </ul>

          <h3>3. Possibilidade de Múltiplos Imóveis</h3>
          <p>
            Com preço menor, você pode diversificar:
          </p>
          <ul>
            <li>R$ 500.000 em bairro nobre = 1 imóvel</li>
            <li>R$ 500.000 em bairros acessíveis = 2 imóveis</li>
          </ul>
          <p>
            Diversificação reduz risco (vacância em um não afeta o outro) e pode aumentar 
            rentabilidade total.
          </p>

          <h3>4. Menor Ponto de Entrada</h3>
          <p>
            Para quem está começando, preços mais acessíveis permitem:
          </p>
          <ul>
            <li>Entrada menor em financiamento</li>
            <li>Sobra mais capital para emergências</li>
            <li>Aprender com risco reduzido</li>
          </ul>

          <h2>A Matemática Real: Análise de 10 Anos</h2>

          <p>
            Vamos projetar os dois investimentos por 10 anos, considerando TODOS os fatores:
          </p>

          <div className="bg-secondary/10 p-6 rounded-lg my-8">
            <h3 className="mt-0">Opção A: Jardins (Premium)</h3>
            <ul>
              <li><strong>Investimento inicial:</strong> R$ 500.000</li>
              <li><strong>Renda de aluguel 10 anos:</strong> R$ 330.000 (líquido)</li>
              <li><strong>Valorização (8% a.a.):</strong> R$ 580.000</li>
              <li><strong>Valor final do imóvel:</strong> R$ 1.080.000</li>
              <li><strong>Patrimônio total:</strong> R$ 1.410.000</li>
              <li><strong>Retorno total:</strong> 182%</li>
            </ul>
          </div>

          <div className="bg-secondary/10 p-6 rounded-lg my-8">
            <h3 className="mt-0">Opção B: Zona Leste (2 imóveis de R$ 250k)</h3>
            <ul>
              <li><strong>Investimento inicial:</strong> R$ 500.000</li>
              <li><strong>Renda de aluguel 10 anos:</strong> R$ 380.000 (líquido)</li>
              <li><strong>Valorização (5% a.a.):</strong> R$ 314.000</li>
              <li><strong>Valor final dos imóveis:</strong> R$ 814.000</li>
              <li><strong>Patrimônio total:</strong> R$ 1.194.000</li>
              <li><strong>Retorno total:</strong> 139%</li>
            </ul>
          </div>

          <p className="font-bold text-lg">
            Resultado: A localização premium gerou R$ 216.000 a mais em 10 anos (18% de diferença).
          </p>

          <h2>Quando Priorizar Localização</h2>
          <p>
            A localização premium é melhor quando:
          </p>
          <ul>
            <li><strong>Horizonte de longo prazo:</strong> 10+ anos de investimento</li>
            <li><strong>Perfil conservador:</strong> Prioriza segurança sobre ganhos agressivos</li>
            <li><strong>Capital disponível:</strong> Tem reservas além do investimento</li>
            <li><strong>Primeiro imóvel:</strong> Quer aprender com menor risco</li>
            <li><strong>Não quer preocupações:</strong> Prefere gestão mais simples</li>
            <li><strong>Mercado aquecido:</strong> Em momentos de crescimento econômico</li>
          </ul>

          <h2>Quando Priorizar Preço</h2>
          <p>
            O preço atraente é melhor quando:
          </p>
          <ul>
            <li><strong>Capital limitado:</strong> Precisa começar com menos</li>
            <li><strong>Perfil arrojado:</strong> Aceita mais risco por ganho potencial</li>
            <li><strong>Conhece a região:</strong> Identifica áreas em desenvolvimento</li>
            <li><strong>Quer diversificar:</strong> Prefere múltiplos imóveis</li>
            <li><strong>Horizonte flexível:</strong> Pode esperar desenvolvimento da região</li>
            <li><strong>Tempo para gestão:</strong> Disposto a se envolver mais ativamente</li>
          </ul>

          <h2>A Terceira Via: O Sweet Spot</h2>
          <p>
            Existe um meio-termo ideal: <strong>bairros em ascensão próximos a áreas nobres</strong>.
          </p>

          <h3>Exemplos em São Paulo</h3>
          <ul>
            <li><strong>Vila Madalena:</strong> Próximo aos Jardins, preço intermediário, alta valorização</li>
            <li><strong>Mooca:</strong> Ao lado do Tatuapé, revitalização urbana em curso</li>
            <li><strong>Santana:</strong> Próximo ao Tucuruvi, bom custo-benefício</li>
          </ul>

          <h3>Vantagens do Sweet Spot</h3>
          <ul>
            <li>Preço/m² 30-50% menor que bairros premium</li>
            <li>Valorização potencial similar ou superior</li>
            <li>Boa infraestrutura e demanda</li>
            <li>Melhor custo-benefício geral</li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r">
            <p className="font-semibold mb-2">💡 Metodologia Atlas 20/80</p>
            <p className="mb-0">
              Nossa análise identifica exatamente esses "sweet spots" - bairros com potencial 
              de valorização de áreas nobres mas preços mais acessíveis. É onde encontramos 
              os melhores retornos ajustados por risco.
            </p>
          </div>

          <h2>Fatores de Decisão Adicionais</h2>

          <h3>Infraestrutura Planejada</h3>
          <p>
            Verifique projetos de governo que podem impactar valorização:
          </p>
          <ul>
            <li>Expansão de metrô/VLT</li>
            <li>Novos hospitais, escolas, shoppings</li>
            <li>Revitalização urbana</li>
            <li>Parques e áreas de lazer</li>
          </ul>

          <h3>Gentrificação</h3>
          <p>
            Identifique sinais de gentrificação (pode ser polêmico mas é realidade econômica):
          </p>
          <ul>
            <li>Abertura de novos comércios modernos</li>
            <li>Aumento de restaurantes/cafés</li>
            <li>Renovação de fachadas</li>
            <li>Chegada de novas empresas</li>
          </ul>

          <h3>Dados Demográficos</h3>
          <ul>
            <li>Crescimento populacional</li>
            <li>Aumento de renda média</li>
            <li>Perfil etário (jovens profissionais geralmente indicam crescimento)</li>
            <li>Nível educacional crescente</li>
          </ul>

          <h2>Nossa Recomendação</h2>
          <p>
            Depois de analisar centenas de investimentos de clientes, nossa conclusão é:
          </p>

          <div className="bg-primary/10 p-8 rounded-lg my-8 text-center">
            <p className="text-2xl font-bold mb-4">
              70% Localização + 30% Preço
            </p>
            <p className="mb-0 text-lg">
              Priorize localização, mas não pague qualquer preço. Busque o sweet spot: 
              bairros estratégicos com preço justo, não necessariamente o mais caro nem o 
              mais barato.
            </p>
          </div>

          <h2>Checklist de Decisão</h2>
          <p>
            Use esta lista para avaliar seu próximo investimento:
          </p>
          
          <h3>✓ Localização (peso 7)</h3>
          <ul>
            <li>Infraestrutura completa?</li>
            <li>Transporte público adequado?</li>
            <li>Segurança aceitável?</li>
            <li>Demanda comprovada de aluguel?</li>
            <li>Valorização histórica positiva?</li>
            <li>Projetos de desenvolvimento?</li>
          </ul>

          <h3>✓ Preço (peso 3)</h3>
          <ul>
            <li>Alinhado com mercado regional?</li>
            <li>Permite margem de negociação?</li>
            <li>Rentabilidade mínima de 4% líquida?</li>
            <li>Dentro do seu orçamento com folga?</li>
          </ul>

          <h2>Conclusão</h2>
          <p>
            O dilema localização vs preço não tem resposta única. Depende do seu perfil, 
            objetivos e situação financeira. Mas uma coisa é certa: <strong>localização ruim 
            raramente é compensada por preço baixo</strong> no longo prazo.
          </p>
          <p>
            Nossa recomendação? Priorize localização estratégica, mas seja inteligente no 
            preço. Procure o sweet spot, aquelas regiões que combinam potencial de valorização 
            com preço acessível. E lembre-se: o barato pode sair muito caro.
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

export default LocalizacaoOuPreco;
