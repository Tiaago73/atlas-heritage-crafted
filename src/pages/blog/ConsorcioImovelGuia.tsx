import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Facebook, Linkedin, Twitter, Link2 } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/blog/consorcio-imovel-guia.png";

const ConsorcioImovelGuia = () => {
  const shareUrl = window.location.href;
  const title = "Consórcio de Imóveis Vale a Pena? Guia Completo";

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
            alt="Consórcio de Imóveis"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="container relative z-10 text-center px-4">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Guias
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Consórcio de Imóveis Vale a Pena?
          </h1>
          <div className="flex items-center justify-center gap-4 text-white/90 text-sm">
            <span>13 min de leitura</span>
            <span>•</span>
            <span>1 de Fevereiro, 2025</span>
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
          <span className="text-foreground">Consórcio de Imóveis</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="container max-w-4xl py-12 px-4">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-muted-foreground mb-8">
            Consórcio de imóveis é apresentado como alternativa ao financiamento bancário, 
            mas será que vale a pena? Descubra neste guia completo quando usar (e quando evitar) 
            essa modalidade de compra.
          </p>

          <h2>O Que é Consórcio de Imóveis?</h2>
          <p>
            Consórcio é um sistema de compra coletiva onde um grupo de pessoas se reúne para 
            adquirir bens (neste caso, imóveis) sem pagar juros. Funciona assim:
          </p>
          <ul>
            <li>Um grupo de, digamos, 100 pessoas se forma</li>
            <li>Cada uma paga uma parcela mensal</li>
            <li>Mensalmente, uma ou mais pessoas são "contempladas" por sorteio ou lance</li>
            <li>Os contemplados recebem a carta de crédito e podem comprar o imóvel</li>
            <li>Todos continuam pagando até o fim do grupo</li>
          </ul>

          <h2>Como Funciona na Prática</h2>

          <h3>Exemplo Real</h3>
          <div className="bg-secondary/10 p-6 rounded-lg my-8">
            <h4 className="mt-0">Consórcio de R$ 400.000 em 120 meses</h4>
            <ul>
              <li><strong>Valor da carta:</strong> R$ 400.000</li>
              <li><strong>Prazo:</strong> 120 meses (10 anos)</li>
              <li><strong>Parcela mensal:</strong> R$ 3.700 (incluindo taxa de administração)</li>
              <li><strong>Taxa de administração:</strong> 10-15% do total</li>
              <li><strong>Fundo de reserva:</strong> 1-3% do total</li>
              <li><strong>Total pago:</strong> R$ 444.000</li>
              <li><strong>"Juros" efetivo:</strong> 11% no total (vs 30-40% de financiamento)</li>
            </ul>
          </div>

          <h3>Formas de Contemplação</h3>

          <h4>1. Sorteio</h4>
          <p>
            A cada assembleia mensal, uma ou mais cotas são sorteadas aleatoriamente. 
            Probabilidade depende do tamanho do grupo.
          </p>

          <h4>2. Lance</h4>
          <p>
            Você oferece um valor (em dinheiro ou percentual da carta) para ser contemplado 
            imediatamente. O maior lance leva.
          </p>
          <ul>
            <li><strong>Lance livre:</strong> Você oferece qualquer valor</li>
            <li><strong>Lance embutido:</strong> Valor adicionado às parcelas futuras</li>
            <li><strong>Lance fixo:</strong> Percentual pré-determinado pela administradora</li>
          </ul>

          <h2>Vantagens do Consórcio</h2>

          <h3>1. Sem Juros (Teoricamente)</h3>
          <p>
            Diferente do financiamento bancário, não há juros sobre o valor. Você paga apenas:
          </p>
          <ul>
            <li>Taxa de administração (10-15%)</li>
            <li>Fundo de reserva (1-3%)</li>
          </ul>
          <p>
            Ainda assim, o custo total é significativamente menor que financiamento tradicional.
          </p>

          <h3>2. Parcelas Menores</h3>
          <p>
            Para o mesmo imóvel, parcelas de consórcio costumam ser 20-40% menores que 
            financiamento bancário.
          </p>

          <div className="bg-secondary/10 p-6 rounded-lg my-8">
            <h4 className="mt-0">Comparação: Imóvel de R$ 400.000</h4>
            
            <p><strong>Financiamento Bancário (SAC, 10 anos, 9% a.a.)</strong></p>
            <ul>
              <li>Parcela inicial: ~R$ 6.100</li>
              <li>Parcela final: ~R$ 3.400</li>
              <li>Total pago: ~R$ 580.000</li>
            </ul>

            <p><strong>Consórcio (10 anos)</strong></p>
            <ul className="mb-0">
              <li>Parcela fixa: ~R$ 3.700</li>
              <li>Total pago: ~R$ 444.000</li>
              <li><strong>Economia: R$ 136.000</strong></li>
            </ul>
          </div>

          <h3>3. Flexibilidade de Prazo</h3>
          <p>
            Consórcios oferecem prazos variados (5, 10, 15 anos), permitindo ajustar ao 
            seu orçamento.
          </p>

          <h3>4. Possibilidade de Quitação Antecipada</h3>
          <p>
            Você pode quitar o saldo devedor a qualquer momento, reduzindo o total de taxas pagas.
          </p>

          <h3>5. Sem Burocracia Bancária</h3>
          <ul>
            <li>Não exige comprovação de renda tão rigorosa</li>
            <li>Análise de crédito mais flexível</li>
            <li>Menos documentação</li>
          </ul>

          <h2>Desvantagens do Consórcio</h2>

          <h3>1. Incerteza do Prazo</h3>
          <p>
            <strong>Este é o maior problema.</strong> Você não sabe quando será contemplado:
          </p>
          <ul>
            <li>Pode ser no 1º mês (sorte extrema)</li>
            <li>Pode ser no último mês (azar extremo)</li>
            <li>Probabilidade média é no meio do prazo (5 anos em grupo de 10 anos)</li>
          </ul>

          <div className="bg-destructive/5 border-l-4 border-destructive p-6 my-8 rounded-r">
            <p className="font-semibold mb-2">⚠️ Risco Real</p>
            <p className="mb-0">
              Você pode pagar 8 anos de parcelas (R$ 355.200 no exemplo) e só ser contemplado 
              no 9º ano. Nesse período, esse dinheiro renderia R$ 86.000 investido em Tesouro 
              IPCA+ 6%. É custo de oportunidade alto.
            </p>
          </div>

          <h3>2. Necessidade de Lance</h3>
          <p>
            Na prática, confiar apenas em sorteio é arriscado. Para ser contemplado em prazo 
            razoável, geralmente precisa dar lance:
          </p>
          <ul>
            <li>Lances típicos: 10-25% do valor da carta</li>
            <li>Para carta de R$ 400k, lance de R$ 40-100k</li>
            <li>Isso anula parte da vantagem do "sem juros"</li>
          </ul>

          <h3>3. Imobilização de Capital</h3>
          <p>
            O dinheiro das parcelas fica "preso" sem render até você ser contemplado. 
            Se você investe as parcelas (digamos, R$ 3.700/mês):
          </p>
          <ul>
            <li>Em 5 anos, a 10% a.a.: ~R$ 283.000 acumulados</li>
            <li>Suficiente para dar entrada maior em financiamento</li>
          </ul>

          <h3>4. Restrições na Compra</h3>
          <p>
            Quando contemplado, há limitações:
          </p>
          <ul>
            <li>Prazo curto para usar a carta (geralmente 90 dias)</li>
            <li>Imóvel precisa atender critérios da administradora</li>
            <li>Avaliação e vistoria obrigatórias</li>
            <li>Documentação precisa estar perfeita</li>
          </ul>

          <h3>5. Risco de Desistência</h3>
          <p>
            Se você precisar desistir antes da contemplação:
          </p>
          <ul>
            <li>Recebe apenas após encerramento do grupo</li>
            <li>Valores corrigidos apenas por índice específico (geralmente TR)</li>
            <li>Perde liquidez imediata</li>
            <li>Pode ter perda real frente à inflação</li>
          </ul>

          <h2>Quando o Consórcio Vale a Pena</h2>
          <p>
            Consórcio faz sentido em situações específicas:
          </p>

          <h3>1. Planejamento de Longo Prazo</h3>
          <p>
            Você quer comprar daqui a 5-7 anos e prefere "forçar a poupança" no consórcio 
            em vez de investir por conta própria.
          </p>

          <h3>2. Tem Capital para Lance</h3>
          <p>
            Se você tem 20-30% do valor em caixa para dar lance e ser contemplado rapidamente, 
            o consórcio pode ser excelente forma de pagar o restante sem juros.
          </p>

          <h3>3. Renda Insuficiente para Financiamento</h3>
          <p>
            Bancos exigem que a parcela seja no máximo 30% da renda. Se você não se qualifica 
            para financiamento mas pode pagar parcela menor do consórcio, pode ser alternativa.
          </p>

          <h3>4. Score Baixo de Crédito</h3>
          <p>
            Consórcios são mais flexíveis com histórico de crédito que bancos.
          </p>

          <h3>5. Disciplina Financeira</h3>
          <p>
            Você não tem disciplina para poupar por conta própria e precisa de compromisso 
            "forçado" para acumular capital.
          </p>

          <h2>Quando NÃO Vale a Pena</h2>

          <h3>1. Necessidade Imediata</h3>
          <p>
            Se você precisa do imóvel agora (para morar ou alugar), consórcio não funciona. 
            A espera pode ser longa.
          </p>

          <h3>2. Disciplina para Investir</h3>
          <p>
            Se você tem capacidade de investir mensalmente R$ 3.700 em ativos rentáveis 
            (Tesouro, fundos imobiliários, ações), provavelmente terá mais patrimônio 
            investindo por conta própria que no consórcio.
          </p>

          <h3>3. Oportunidade Específica</h3>
          <p>
            Encontrou imóvel perfeito com preço excelente AGORA? Consórcio não serve. 
            Essa oportunidade pode não existir quando você for contemplado.
          </p>

          <h3>4. Investimento Imobiliário Ativo</h3>
          <p>
            Para quem quer investir em imóveis profissionalmente, a incerteza do prazo 
            é incompatível com estratégia de investimento.
          </p>

          <h2>A Estratégia Inteligente: Consórcio + Investimento</h2>
          <p>
            Uma abordagem híbrida pode ser melhor que consórcio puro:
          </p>

          <ol>
            <li>
              <strong>Invista 70% do valor planejado:</strong> R$ 2.590/mês em ativos rentáveis
            </li>
            <li>
              <strong>Use 30% no consórcio:</strong> R$ 1.110/mês na menor parcela possível
            </li>
            <li>
              <strong>Benefício duplo:</strong>
              <ul>
                <li>Acumula capital real investido</li>
                <li>Mantém possibilidade de contemplação</li>
                <li>Tem liquidez se surgir oportunidade</li>
              </ul>
            </li>
          </ol>

          <h2>Alternativas ao Consórcio</h2>

          <h3>1. Poupança + Investimento Próprio</h3>
          <p>
            <strong>Estratégia:</strong> Invista mensalmente o valor que seria da parcela
          </p>
          <ul>
            <li><strong>Vantagens:</strong> Liquidez, controle total, rendimento real</li>
            <li><strong>Desvantagens:</strong> Exige disciplina, tentação de usar o dinheiro</li>
          </ul>

          <h3>2. Financiamento Bancário Tradicional</h3>
          <p>
            <strong>Estratégia:</strong> Junta entrada e financia o restante
          </p>
          <ul>
            <li><strong>Vantagens:</strong> Imóvel imediato, começa a receber aluguel já</li>
            <li><strong>Desvantagens:</strong> Juros altos, parcelas maiores</li>
          </ul>

          <h3>3. Consórcio para Lance Imediato</h3>
          <p>
            <strong>Estratégia:</strong> Junta 20-30% e entra em consórcio para dar lance no 1º mês
          </p>
          <ul>
            <li><strong>Vantagens:</strong> Contemplação rápida, menor custo que financiamento</li>
            <li><strong>Desvantagens:</strong> Precisa de capital inicial significativo</li>
          </ul>

          <h3>4. Compra Direta (à Vista com Desconto)</h3>
          <p>
            <strong>Estratégia:</strong> Poupa até ter 70-80% e negocia desconto no restante
          </p>
          <ul>
            <li><strong>Vantagens:</strong> Melhor negociação, sem juros ou taxas</li>
            <li><strong>Desvantagens:</strong> Demora mais, exige disciplina extrema</li>
          </ul>

          <h2>Dicas Para Quem Vai Fazer Consórcio</h2>

          <h3>1. Escolha Administradora Confiável</h3>
          <ul>
            <li>Grandes bancos tendem a ser mais seguros (Bradesco, Itaú, Santander)</li>
            <li>Verifique reputação no Reclame Aqui</li>
            <li>Confirme registro no Banco Central</li>
            <li>Leia o contrato INTEIRO antes de assinar</li>
          </ul>

          <h3>2. Faça as Contas Completas</h3>
          <ul>
            <li>Calcule taxa de administração + fundo de reserva</li>
            <li>Compare com custo de financiamento bancário</li>
            <li>Considere custo de oportunidade (rendimento se investisse o dinheiro)</li>
          </ul>

          <h3>3. Tenha Estratégia de Lance</h3>
          <ul>
            <li>Defina antecipadamente quanto pode/quer dar de lance</li>
            <li>Acompanhe lances das assembleias para ter noção de valores</li>
            <li>Considere lance embutido se não tem dinheiro à vista</li>
          </ul>

          <h3>4. Mantenha Reserva de Emergência</h3>
          <ul>
            <li>Não comprometa 100% da sua capacidade financeira</li>
            <li>Tenha 6 meses de parcelas guardadas</li>
            <li>Lembre-se que continua pagando mesmo após contemplação</li>
          </ul>

          <h3>5. Acompanhe as Assembleias</h3>
          <ul>
            <li>Participe ou acompanhe online</li>
            <li>Entenda o ritmo de contemplação do seu grupo</li>
            <li>Avalie momento certo para dar lance</li>
          </ul>

          <h2>Nossa Opinião: Para Investidores, Geralmente NÃO</h2>
          <p>
            Na Atlas Patrimonial, raramente recomendamos consórcio para investidores imobiliários 
            por uma razão simples: <strong>a incerteza do prazo é incompatível com estratégia 
            de investimento profissional</strong>.
          </p>
          <p>
            Para quem investe em imóveis:
          </p>
          <ul>
            <li>Tempo é dinheiro - cada mês sem o imóvel é aluguel não recebido</li>
            <li>Oportunidades têm prazo - o imóvel perfeito hoje pode não estar disponível em 5 anos</li>
            <li>Capital tem uso melhor - investido em FIIs ou ações pode crescer mais até a contemplação</li>
          </ul>

          <h2>Conclusão</h2>
          <p>
            Consórcio de imóveis não é vilão nem salvador. É uma ferramenta que funciona bem 
            para perfis específicos:
          </p>
          <ul>
            <li>✅ Ótimo para quem planeja no longo prazo e precisa de "poupança forçada"</li>
            <li>✅ Excelente se você tem capital para lance e quer pagar o resto sem juros</li>
            <li>❌ Ruim para quem quer investir ativamente em imóveis</li>
            <li>❌ Ruim para quem tem disciplina para investir por conta própria</li>
          </ul>
          <p>
            Antes de entrar em um consórcio, faça as contas considerando custo de oportunidade 
            e compare com alternativas. Na maioria dos casos, investir o valor da parcela em 
            ativos rentáveis e depois comprar à vista ou com entrada maior é financeiramente 
            mais vantajoso.
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

export default ConsorcioImovelGuia;
