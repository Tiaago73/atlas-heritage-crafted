import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Facebook, Linkedin, Twitter, Link2 } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/blog/gestao-imoveis-terceirizar.png";

const GestaoImoveisTerceirizar = () => {
  const shareUrl = window.location.href;
  const title = "Gestão de Imóveis: Vale a Pena Terceirizar?";

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
            alt="Gestão de Imóveis"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="container relative z-10 text-center px-4">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Gestão
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Gestão de Imóveis: Vale a Pena Terceirizar?
          </h1>
          <div className="flex items-center justify-center gap-4 text-white/90 text-sm">
            <span>11 min de leitura</span>
            <span>•</span>
            <span>28 de Janeiro, 2025</span>
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
          <span className="text-foreground">Gestão de Imóveis</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="container max-w-4xl py-12 px-4">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-muted-foreground mb-8">
            Uma das decisões mais importantes após comprar um imóvel para investimento: 
            gerenciar você mesmo ou contratar uma administradora? Descubra os prós, contras 
            e quando cada opção faz sentido.
          </p>

          <h2>O Dilema do Investidor</h2>
          <p>
            Você acabou de comprar seu primeiro (ou segundo, ou terceiro) imóvel para investimento. 
            Parabéns! Agora vem a pergunta que todos fazem:
          </p>
          <p className="text-xl font-semibold text-center my-8">
            "Devo gerenciar o imóvel por conta própria ou contratar uma administradora?"
          </p>
          <p>
            A resposta, como sempre em investimentos, é: <strong>depende</strong>. Mas vamos 
            analisar cada cenário para você tomar a melhor decisão.
          </p>

          <h2>Gestão Própria: O Caso DIY</h2>

          <h3>Vantagens</h3>

          <h4>1. Economia de Custos</h4>
          <p>
            Administradoras cobram tipicamente 10% do valor do aluguel. Para um aluguel de 
            R$ 2.000/mês:
          </p>
          <ul>
            <li><strong>Custo anual:</strong> R$ 2.400</li>
            <li><strong>Custo em 10 anos:</strong> R$ 24.000</li>
          </ul>
          <p>
            Essa economia impacta diretamente sua rentabilidade líquida.
          </p>

          <h4>2. Controle Total</h4>
          <ul>
            <li>Escolhe pessoalmente os inquilinos</li>
            <li>Negocia diretamente valores e condições</li>
            <li>Aprova ou rejeita reparos</li>
            <li>Decide timing de reajustes</li>
          </ul>

          <h4>3. Relacionamento Direto</h4>
          <p>
            Contato direto com o inquilino pode:
          </p>
          <ul>
            <li>Criar relacionamento de confiança</li>
            <li>Resolver problemas mais rapidamente</li>
            <li>Entender necessidades reais</li>
            <li>Facilitar renovações de contrato</li>
          </ul>

          <h4>4. Aprendizado</h4>
          <p>
            Gerenciar seu próprio imóvel ensina:
          </p>
          <ul>
            <li>Aspectos jurídicos de locação</li>
            <li>Manutenção e conservação</li>
            <li>Negociação e relacionamento</li>
            <li>Gestão financeira de imóveis</li>
          </ul>

          <h3>Desvantagens</h3>

          <h4>1. Tempo Investido</h4>
          <p>
            Gestão própria demanda tempo significativo:
          </p>
          <ul>
            <li><strong>Busca de inquilino:</strong> 10-20 horas (visitas, análises, negociação)</li>
            <li><strong>Gestão mensal:</strong> 2-4 horas (cobrança, dúvidas, pequenos problemas)</li>
            <li><strong>Emergências:</strong> Imprevisível (vazamentos, problemas elétricos)</li>
            <li><strong>Total anual estimado:</strong> 50-80 horas</li>
          </ul>

          <h4>2. Stress e Disponibilidade</h4>
          <ul>
            <li>Ligações em horários inconvenientes</li>
            <li>Necessidade de resolver problemas urgentes</li>
            <li>Lidar com inadimplência diretamente</li>
            <li>Gestão de conflitos</li>
          </ul>

          <h4>3. Falta de Expertise</h4>
          <p>
            Sem experiência, você pode:
          </p>
          <ul>
            <li>Escolher inquilinos problemáticos</li>
            <li>Cometer erros jurídicos no contrato</li>
            <li>Pagar mais caro em reparos</li>
            <li>Perder tempo com processos ineficientes</li>
          </ul>

          <h4>4. Escalabilidade Limitada</h4>
          <p>
            Gerenciar 1-2 imóveis é factível. Mas e 5, 10, 20? A gestão própria não escala bem.
          </p>

          <h2>Administradora: O Caso Profissional</h2>

          <h3>Vantagens</h3>

          <h4>1. Liberdade de Tempo</h4>
          <p>
            Seu tempo vale dinheiro. Se você ganha R$ 100/hora no trabalho e gasta 60 horas/ano 
            gerenciando o imóvel, esse "custo de oportunidade" é de R$ 6.000 - mais que os 
            R$ 2.400 da administradora!
          </p>

          <h4>2. Expertise Profissional</h4>
          <ul>
            <li><strong>Análise de crédito:</strong> Ferramentas profissionais de avaliação</li>
            <li><strong>Contratos:</strong> Documentação juridicamente robusta</li>
            <li><strong>Rede de fornecedores:</strong> Manutenção com preços negociados</li>
            <li><strong>Conhecimento de mercado:</strong> Valores de aluguel atualizados</li>
          </ul>

          <h4>3. Processos Estruturados</h4>
          <p>
            Boas administradoras têm:
          </p>
          <ul>
            <li>Sistema automatizado de cobrança</li>
            <li>Relatórios mensais detalhados</li>
            <li>Portal online para acompanhamento</li>
            <li>Equipe dedicada para emergências</li>
          </ul>

          <h4>4. Proteção Jurídica</h4>
          <ul>
            <li>Experiência em processos de despejo</li>
            <li>Conhecimento de legislação atualizada</li>
            <li>Prevenção de problemas legais</li>
            <li>Apoio em litígios</li>
          </ul>

          <h4>5. Escalabilidade</h4>
          <p>
            Com administradora, você pode:
          </p>
          <ul>
            <li>Gerenciar múltiplos imóveis facilmente</li>
            <li>Expandir seu portfólio sem aumentar workload</li>
            <li>Focar em aquisição de novos investimentos</li>
          </ul>

          <h3>Desvantagens</h3>

          <h4>1. Custo Direto</h4>
          <p>
            10% do aluguel é valor significativo que impacta rentabilidade líquida.
          </p>

          <h4>2. Perda de Controle</h4>
          <ul>
            <li>Decisões tomadas por terceiros</li>
            <li>Menos conhecimento sobre o inquilino</li>
            <li>Dependência da qualidade da administradora</li>
          </ul>

          <h4>3. Qualidade Variável</h4>
          <p>
            Nem todas administradoras são iguais. Problemas comuns:
          </p>
          <ul>
            <li>Falta de comunicação</li>
            <li>Atrasos em repasses</li>
            <li>Má qualidade no atendimento</li>
            <li>Descaso com o imóvel</li>
          </ul>

          <h4>4. Conflito de Interesses</h4>
          <p>
            Algumas administradoras podem:
          </p>
          <ul>
            <li>Priorizar rapidez sobre qualidade na escolha do inquilino</li>
            <li>Superfaturar serviços de manutenção</li>
            <li>Empurrar seguros e produtos desnecessários</li>
          </ul>

          <h2>A Análise Financeira Real</h2>

          <div className="bg-secondary/10 p-6 rounded-lg my-8">
            <h3 className="mt-0">Cenário: Apartamento com aluguel de R$ 2.500/mês</h3>
            
            <h4>Gestão Própria</h4>
            <ul>
              <li><strong>Receita bruta anual:</strong> R$ 30.000</li>
              <li><strong>Tempo investido:</strong> 60 horas</li>
              <li><strong>Custo de oportunidade (R$100/h):</strong> -R$ 6.000</li>
              <li><strong>Receita líquida efetiva:</strong> R$ 24.000</li>
            </ul>

            <h4>Com Administradora</h4>
            <ul>
              <li><strong>Receita bruta anual:</strong> R$ 30.000</li>
              <li><strong>Taxa de administração (10%):</strong> -R$ 3.000</li>
              <li><strong>Tempo investido:</strong> 5 horas</li>
              <li><strong>Custo de oportunidade (R$100/h):</strong> -R$ 500</li>
              <li><strong>Receita líquida efetiva:</strong> R$ 26.500</li>
            </ul>

            <p className="font-bold mb-0">
              Resultado: Administradora gera R$ 2.500 a mais por ano neste cenário!
            </p>
          </div>

          <p>
            Note que o cálculo muda conforme seu custo de oportunidade. Se você ganha 
            menos ou tem tempo livre, gestão própria pode ser melhor.
          </p>

          <h2>Quando Fazer Gestão Própria</h2>
          <p>
            Gestão própria faz sentido quando:
          </p>
          <ul>
            <li><strong>Você tem tempo disponível:</strong> Aposentado, trabalho flexível, ou tempo livre</li>
            <li><strong>Primeiro imóvel:</strong> Quer aprender o processo</li>
            <li><strong>Imóvel único:</strong> Não pretende expandir significativamente</li>
            <li><strong>Mora próximo:</strong> Facilita gestão de emergências</li>
            <li><strong>Gosta de controle:</strong> Perfil mais "hands-on"</li>
            <li><strong>Baixo custo de oportunidade:</strong> Seu tempo não está comprometido com atividades mais lucrativas</li>
            <li><strong>Inquilino conhecido:</strong> Familiar ou amigo que aluga</li>
            <li><strong>Imóvel simples:</strong> Menos chance de problemas complexos</li>
          </ul>

          <h2>Quando Contratar Administradora</h2>
          <p>
            Terceirização faz sentido quando:
          </p>
          <ul>
            <li><strong>Múltiplos imóveis:</strong> Mais de 2-3 propriedades</li>
            <li><strong>Tempo escasso:</strong> Trabalho exigente ou vida pessoal ocupada</li>
            <li><strong>Alto custo de oportunidade:</strong> Seu tempo vale mais que 10% do aluguel</li>
            <li><strong>Mora longe:</strong> Imóvel em outra cidade/estado</li>
            <li><strong>Falta de expertise:</strong> Não conhece legislação ou processos</li>
            <li><strong>Quer escalar:</strong> Planeja aumentar portfólio</li>
            <li><strong>Perfil "hands-off":</strong> Prefere investimento passivo</li>
            <li><strong>Imóvel comercial:</strong> Contratos mais complexos</li>
          </ul>

          <h2>A Terceira Via: Gestão Híbrida</h2>
          <p>
            Existe um meio-termo interessante:
          </p>

          <h3>Modelo Híbrido</h3>
          <ul>
            <li><strong>Você:</strong> Escolhe o inquilino, negocia valores, toma decisões importantes</li>
            <li><strong>Contador/Jurídico:</strong> Prepara contratos, emite documentos fiscais</li>
            <li><strong>Zelador/Síndico:</strong> Gerencia pequenos reparos e emergências</li>
            <li><strong>Custo:</strong> 2-4% do aluguel (vs 10% de administradora completa)</li>
          </ul>

          <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r">
            <p className="font-semibold mb-2">💡 Nossa Recomendação</p>
            <p className="mb-0">
              Para investidores com 1-2 imóveis e disponibilidade, comece com gestão própria 
              para aprender. Ao chegar a 3+ imóveis ou quando seu tempo ficar escasso, 
              migre para administradora. O aprendizado inicial vale a pena.
            </p>
          </div>

          <h2>Como Escolher uma Boa Administradora</h2>

          <h3>Critérios Essenciais</h3>

          <h4>1. Reputação</h4>
          <ul>
            <li>Pesquise reviews no Google e Reclame Aqui</li>
            <li>Peça referências de outros proprietários</li>
            <li>Verifique tempo de mercado (mínimo 3-5 anos)</li>
            <li>Confirme registro no CRECI</li>
          </ul>

          <h4>2. Transparência</h4>
          <ul>
            <li>Contrato claro sem letras miúdas</li>
            <li>Relatórios mensais detalhados</li>
            <li>Portal online para acompanhamento</li>
            <li>Repasse pontual dos aluguéis</li>
          </ul>

          <h4>3. Serviços Incluídos</h4>
          <p>
            Verifique o que está incluso nos 10%:
          </p>
          <ul>
            <li>Busca e seleção de inquilinos</li>
            <li>Análise de crédito</li>
            <li>Elaboração de contrato</li>
            <li>Cobrança e repasse</li>
            <li>Gestão de manutenção</li>
            <li>Reajuste anual</li>
            <li>Vistoria de entrada e saída</li>
          </ul>

          <h4>4. Comunicação</h4>
          <ul>
            <li>Responsividade em teste inicial</li>
            <li>Múltiplos canais (telefone, WhatsApp, email)</li>
            <li>Disponibilidade para emergências</li>
            <li>Profissionalismo no atendimento</li>
          </ul>

          <h4>5. Tecnologia</h4>
          <ul>
            <li>Sistema online de acompanhamento</li>
            <li>App mobile</li>
            <li>Relatórios digitais</li>
            <li>Automatização de processos</li>
          </ul>

          <h3>Red Flags (Sinais de Alerta)</h3>
          <ul>
            <li>Taxas extras escondidas</li>
            <li>Falta de resposta em comunicações iniciais</li>
            <li>Muitas reclamações online</li>
            <li>Promessas irrealistas (alugar em 1 semana, sempre)</li>
            <li>Pressão para fechar serviços adicionais</li>
            <li>Sem CRECI ou irregular</li>
          </ul>

          <h2>Dicas Práticas Para Gestão Própria Eficiente</h2>

          <h3>1. Sistematize Processos</h3>
          <ul>
            <li>Crie checklist de vistoria</li>
            <li>Use modelo de contrato revisado por advogado</li>
            <li>Automatize cobranças com débito automático</li>
            <li>Mantenha planilha de controle financeiro</li>
          </ul>

          <h3>2. Construa Rede de Fornecedores</h3>
          <ul>
            <li>Eletricista confiável</li>
            <li>Encanador</li>
            <li>Pintor</li>
            <li>Serralheiro</li>
            <li>Negociar preços fixos ou descontos por frequência</li>
          </ul>

          <h3>3. Documente Tudo</h3>
          <ul>
            <li>Fotografe o imóvel antes de alugar</li>
            <li>Registre todos os reparos e custos</li>
            <li>Mantenha arquivo digital de documentos</li>
            <li>Grave (com consentimento) conversas importantes</li>
          </ul>

          <h3>4. Use Tecnologia</h3>
          <ul>
            <li><strong>QuintoAndar, CredPago:</strong> Análise de crédito</li>
            <li><strong>Notion, Trello:</strong> Organização de tarefas</li>
            <li><strong>Google Drive:</strong> Armazenamento de documentos</li>
            <li><strong>PagBank, Mercado Pago:</strong> Recebimento de aluguéis</li>
          </ul>

          <h2>Conclusão</h2>
          <p>
            Não existe resposta certa ou errada. A decisão depende de:
          </p>
          <ul>
            <li>Seu perfil pessoal</li>
            <li>Disponibilidade de tempo</li>
            <li>Quantidade de imóveis</li>
            <li>Objetivos de longo prazo</li>
            <li>Custo de oportunidade real</li>
          </ul>
          <p>
            Nossa sugestão? <strong>Comece gerenciando você mesmo para aprender o processo</strong>. 
            Depois, ao escalar ou quando seu tempo ficar valioso demais, migre para uma 
            administradora de qualidade. O conhecimento adquirido na gestão própria será 
            valioso mesmo depois de terceirizar - você saberá avaliar se a administradora 
            está fazendo um bom trabalho.
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

export default GestaoImoveisTerceirizar;
