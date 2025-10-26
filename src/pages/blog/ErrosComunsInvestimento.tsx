import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Facebook, Linkedin, Twitter, Link2 } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/blog/erros-investidor-iniciante.png";

const ErrosComunsInvestimento = () => {
  const shareUrl = window.location.href;
  const title = "7 Erros Fatais que Investidores Iniciantes Cometem";

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
            alt="Erros Comuns no Investimento Imobiliário"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="container relative z-10 text-center px-4">
          <div className="inline-block bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-4">
            Alertas
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            7 Erros Fatais do Investidor Iniciante
          </h1>
          <div className="flex items-center justify-center gap-4 text-white/90 text-sm">
            <span>8 min de leitura</span>
            <span>•</span>
            <span>22 de Janeiro, 2025</span>
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
          <span className="text-foreground">Erros Comuns no Investimento</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="container max-w-4xl py-12 px-4">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-muted-foreground mb-8">
            Investir em imóveis pode ser extremamente lucrativo, mas também está cheio de 
            armadilhas para os desavisados. Aprenda com os erros mais comuns para não perder 
            dinheiro e tempo no seu primeiro investimento.
          </p>

          <div className="bg-destructive/5 border-l-4 border-destructive p-6 my-8 rounded-r">
            <p className="font-semibold mb-2">⚠️ Aviso Importante</p>
            <p className="mb-0">
              Estes erros custaram milhões de reais aos investidores que atendemos. 
              Muitos chegaram até nós após experiências frustrantes e prejuízos significativos. 
              Aprenda com eles, não seja mais uma estatística.
            </p>
          </div>

          <h2>Erro #1: Comprar com o Coração, Não com a Cabeça</h2>
          
          <h3>O Erro</h3>
          <p>
            O erro mais comum e mais caro: escolher um imóvel baseado em preferências pessoais 
            em vez de critérios objetivos de investimento.
          </p>

          <h3>Exemplo Real</h3>
          <p>
            <strong>Cliente:</strong> Rafael, 32 anos<br/>
            <strong>Situação:</strong> Comprou um lindo apartamento de 3 quartos em um bairro 
            residencial tranquilo porque "adorou a varanda com vista"<br/>
            <strong>Resultado:</strong> Ficou 8 meses tentando alugar. A demanda na região era 
            por apartamentos menores e mais baratos. Perdeu R$ 32.000 em aluguel potencial + 
            custos de condomínio e IPTU.
          </p>

          <h3>Como Evitar</h3>
          <ul>
            <li>Separe emoção de investimento. O imóvel que você moraria não é necessariamente um bom investimento</li>
            <li>Foque em dados: demanda, preço do m², rentabilidade, localização estratégica</li>
            <li>Pesquise o perfil do inquilino típico da região</li>
            <li>Priorize praticidade e funcionalidade sobre beleza estética</li>
          </ul>

          <h2>Erro #2: Subestimar os Custos Totais</h2>

          <h3>O Erro</h3>
          <p>
            Calcular rentabilidade considerando apenas o aluguel bruto versus valor do imóvel, 
            ignorando dezenas de outros custos.
          </p>

          <h3>A Realidade dos Custos</h3>
          <p>
            Um imóvel de R$ 400.000 que aluga por R$ 2.000/mês NÃO rende 6% ao ano. 
            Veja os custos reais:
          </p>

          <div className="bg-secondary/10 p-6 rounded-lg my-8">
            <h4 className="mt-0">Custos Anuais Típicos</h4>
            <ul className="mb-0">
              <li><strong>IPTU:</strong> R$ 2.400 (0,6% do valor)</li>
              <li><strong>Condomínio:</strong> R$ 4.800 (R$ 400/mês)</li>
              <li><strong>Seguro:</strong> R$ 800</li>
              <li><strong>Manutenção:</strong> R$ 2.000 (1 reparo maior no ano)</li>
              <li><strong>Vacância:</strong> R$ 2.000 (1 mês sem inquilino)</li>
              <li><strong>Taxa de administração:</strong> R$ 2.400 (10% do aluguel)</li>
              <li><strong>Impostos sobre aluguel:</strong> R$ 2.160 (carnê-leão 27,5%)</li>
            </ul>
            <p className="mt-4 font-bold">Total de custos: R$ 16.560/ano</p>
            <p className="mb-0">
              Receita bruta: R$ 24.000<br/>
              Receita líquida: R$ 7.440<br/>
              <strong>Rentabilidade líquida real: 1,86% ao ano</strong>
            </p>
          </div>

          <h3>Como Evitar</h3>
          <ul>
            <li>Crie uma planilha completa com TODOS os custos</li>
            <li>Considere sempre 1 mês de vacância por ano (no mínimo)</li>
            <li>Reserve 1-2% do valor do imóvel anualmente para manutenção</li>
            <li>Calcule impostos corretamente (carnê-leão para PF)</li>
          </ul>

          <h2>Erro #3: Ignorar a Localização</h2>

          <h3>O Erro</h3>
          <p>
            Priorizar preço baixo em detrimento da localização, acreditando que "desconto é 
            sempre bom negócio".
          </p>

          <h3>Exemplo Real</h3>
          <p>
            <strong>Cliente:</strong> Mariana, 29 anos<br/>
            <strong>Situação:</strong> Comprou apartamento 30% mais barato em região periférica 
            pensando em "entrar com menos capital"<br/>
            <strong>Resultado:</strong> Alta rotatividade de inquilinos, inadimplência, 
            desvalorização do imóvel. Em 3 anos, perdeu 12% do valor investido.
          </p>

          <h3>Por Que Localização é Crucial</h3>
          <ul>
            <li><strong>Demanda constante:</strong> Boas localizações sempre têm procura</li>
            <li><strong>Valorização:</strong> Imóveis bem localizados se valorizam acima da inflação</li>
            <li><strong>Menor vacância:</strong> Mais fácil encontrar inquilinos</li>
            <li><strong>Inquilinos melhores:</strong> Perfil de renda mais alta, menos inadimplência</li>
            <li><strong>Liquidez:</strong> Vende mais rápido se precisar</li>
          </ul>

          <h3>Como Avaliar Localização</h3>
          <ul>
            <li>Proximidade de transporte público (especialmente metrô)</li>
            <li>Infraestrutura completa (mercados, farmácias, serviços)</li>
            <li>Segurança (pesquise índices de criminalidade)</li>
            <li>Projetos de desenvolvimento na região</li>
            <li>Valorização histórica dos últimos 5 anos</li>
          </ul>

          <h2>Erro #4: Não Fazer Due Diligence Adequada</h2>

          <h3>O Erro</h3>
          <p>
            Comprar sem verificar minuciosamente documentação, regularização e condições 
            reais do imóvel.
          </p>

          <h3>Pesadelos Reais</h3>
          <ul>
            <li><strong>Caso 1:</strong> Imóvel com ação judicial não revelada. Bloqueio de matrícula após compra.</li>
            <li><strong>Caso 2:</strong> Área construída "extra" irregular. Multa de R$ 80.000 da prefeitura.</li>
            <li><strong>Caso 3:</strong> Problemas estruturais ocultos. Gastos de R$ 120.000 em reformas necessárias.</li>
          </ul>

          <h3>Checklist de Due Diligence</h3>
          
          <h4>Documentação</h4>
          <ul>
            <li>Matrícula atualizada no cartório</li>
            <li>Certidões negativas (federal, estadual, municipal)</li>
            <li>Regularidade de IPTU</li>
            <li>Ata de aprovação da construção</li>
            <li>Habite-se</li>
          </ul>

          <h4>Físico</h4>
          <ul>
            <li>Vistoria com engenheiro/arquiteto</li>
            <li>Verificação de infiltrações, trincas, problemas elétricos/hidráulicos</li>
            <li>Estado de elevadores (em prédios)</li>
            <li>Condições do telhado, fachada, áreas comuns</li>
          </ul>

          <h4>Condomínio (se aplicável)</h4>
          <ul>
            <li>Atas das últimas assembleias</li>
            <li>Situação financeira do condomínio</li>
            <li>Obras programadas e custos previstos</li>
            <li>Histórico de problemas e conflitos</li>
          </ul>

          <h2>Erro #5: Comprar Sem Reserva de Emergência</h2>

          <h3>O Erro</h3>
          <p>
            Usar todo o capital disponível na entrada e primeiras despesas, sem margem para 
            imprevistos.
          </p>

          <h3>Por Que Isso é Perigoso</h3>
          <p>
            Imóveis são investimentos ilíquidos. Se você precisar de dinheiro urgente, 
            não consegue "vender uma porta" do apartamento. Além disso:
          </p>
          <ul>
            <li>Reformas emergenciais acontecem (vazamentos, problemas elétricos)</li>
            <li>Períodos de vacância são comuns</li>
            <li>Inadimplência de inquilinos pode ocorrer</li>
            <li>Emergências pessoais acontecem</li>
          </ul>

          <h3>Regra de Ouro</h3>
          <p>
            <strong>Tenha sempre reserva de 6 meses de custos do imóvel</strong> (incluindo 
            prestação do financiamento, condomínio, IPTU). Para um imóvel com custos mensais 
            de R$ 2.500, mantenha R$ 15.000 em reserva de emergência.
          </p>

          <h2>Erro #6: Financiamento Inadequado</h2>

          <h3>O Erro</h3>
          <p>
            Escolher o financiamento baseado apenas na menor parcela mensal, sem entender 
            o custo total.
          </p>

          <h3>Comparação de Sistemas</h3>

          <div className="bg-secondary/10 p-6 rounded-lg my-8">
            <h4 className="mt-0">Financiamento de R$ 300.000 em 20 anos</h4>
            
            <p><strong>Sistema Price (parcela fixa)</strong></p>
            <ul>
              <li>Parcela inicial: R$ 2.447</li>
              <li>Parcela final: R$ 2.447</li>
              <li>Total pago: R$ 587.280</li>
              <li>Juros pagos: R$ 287.280</li>
            </ul>

            <p><strong>Sistema SAC (parcela decrescente)</strong></p>
            <ul>
              <li>Parcela inicial: R$ 3.200</li>
              <li>Parcela final: R$ 1.268</li>
              <li>Total pago: R$ 537.000</li>
              <li>Juros pagos: R$ 237.000</li>
            </ul>

            <p className="mb-0 font-bold">
              Diferença: R$ 50.280 economizados no SAC!
            </p>
          </div>

          <h3>Dicas de Financiamento</h3>
          <ul>
            <li>SAC é quase sempre melhor que Price no longo prazo</li>
            <li>Dê a maior entrada possível para reduzir juros totais</li>
            <li>Use FGTS quando elegível</li>
            <li>Considere amortização extraordinária anualmente</li>
            <li>Compare taxas entre diferentes bancos</li>
          </ul>

          <h2>Erro #7: Não Ter Estratégia de Saída</h2>

          <h3>O Erro</h3>
          <p>
            Comprar sem pensar em "e se eu precisar vender?" ou "quando vou vender?".
          </p>

          <h3>Por Que Pensar na Saída</h3>
          <p>
            Mesmo que seu plano seja "investimento de longo prazo", situações mudam:
          </p>
          <ul>
            <li>Oportunidades melhores podem surgir</li>
            <li>Necessidade de liquidez</li>
            <li>Mudanças no mercado</li>
            <li>Mudanças pessoais (família, trabalho)</li>
          </ul>

          <h3>Como Planejar a Saída</h3>
          <ul>
            <li><strong>Liquidez:</strong> Escolha imóveis com boa demanda de compra</li>
            <li><strong>Timing:</strong> Defina um horizonte mínimo (idealmente 5+ anos)</li>
            <li><strong>Gatilhos:</strong> Em que situações você venderia? (valorização de X%, necessidade de capital, etc.)</li>
            <li><strong>Custos de saída:</strong> Considere impostos (ITBI, ganho de capital), corretagem</li>
          </ul>

          <h2>Como a Atlas Patrimonial Ajuda a Evitar Esses Erros</h2>
          <p>
            Nossa Metodologia 20/80 foi desenvolvida exatamente para eliminar esses riscos:
          </p>
          <ul>
            <li><strong>Análise objetiva:</strong> Dados, não emoção</li>
            <li><strong>Cálculo completo:</strong> Todos os custos, rentabilidade líquida real</li>
            <li><strong>Seleção de localização:</strong> Apenas regiões estratégicas</li>
            <li><strong>Due diligence completa:</strong> Verificamos tudo antes de recomendar</li>
            <li><strong>Planejamento financeiro:</strong> Ajudamos a estruturar entrada, reservas e financiamento</li>
            <li><strong>Estratégia de longo prazo:</strong> Pensamos em valorização e saída desde o início</li>
          </ul>

          <h2>Conclusão</h2>
          <p>
            Investir em imóveis pode ser uma excelente decisão financeira, mas apenas quando 
            feito corretamente. Os erros listados acima custaram milhões de reais coletivamente 
            aos investidores que conhecemos.
          </p>
          <p>
            A boa notícia? Todos esses erros são evitáveis com conhecimento, planejamento e, 
            idealmente, orientação especializada. Não seja mais uma história de fracasso. 
            Aprenda com os erros dos outros e faça seu primeiro investimento da forma certa.
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

export default ErrosComunsInvestimento;
