import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona a metodologia 20/80?",
      answer:
        "A metodologia 20/80 consiste em você entrar com aproximadamente 20% do valor do imóvel como entrada, enquanto o aluguel recebido pode cobrir cerca de 80% da parcela do financiamento. Isso permite construir patrimônio com menor desembolso mensal e renda passiva desde o início.",
    },
    {
      question: "Qual o investimento inicial necessário?",
      answer:
        "O investimento inicial varia conforme o imóvel escolhido, mas geralmente fica entre 20% e 30% do valor total. Para um imóvel de R$ 500.000, por exemplo, seriam necessários entre R$ 100.000 e R$ 150.000. Também é preciso considerar custos de documentação e taxas.",
    },
    {
      question: "A Atlas garante a locação do imóvel?",
      answer:
        "Não oferecemos garantia de locação, pois isso não é permitido por lei. Porém, fazemos curadoria rigorosa selecionando apenas imóveis em regiões de alta demanda e com histórico comprovado de locação. Nossa gestão profissional maximiza as chances de ocupação contínua.",
    },
    {
      question: "Quais são as taxas de administração?",
      answer:
        "Nossa taxa de gestão é transparente e competitiva, variando conforme o tipo de serviço contratado. Inclui: locação, administração de contratos, manutenção, gestão de inadimplência e relatórios mensais. Os valores são apresentados na consultoria inicial.",
    },
    {
      question: "E se o inquilino atrasar o aluguel?",
      answer:
        "Nossa gestão inclui triagem rigorosa de inquilinos (análise de crédito, referências, garantias). Em caso de inadimplência, acionamos procedimentos jurídicos e negociamos soluções. Dependendo do plano contratado, podemos oferecer seguros de inadimplência.",
    },
    {
      question: "Posso vender o imóvel antes de quitá-lo?",
      answer:
        "Sim. O imóvel é seu desde a compra. Você pode vendê-lo a qualquer momento, desde que quite o saldo devedor do financiamento ou transfira a dívida para o comprador (mediante aprovação do banco). Acompanhamos todo processo de venda se desejar.",
    },
    {
      question: "Como é feita a análise de crédito?",
      answer:
        "Trabalhamos com diversos bancos parceiros para encontrar as melhores condições de financiamento. Analisamos seu perfil financeiro (renda, score, patrimônio) e apresentamos opções de crédito com taxas e prazos otimizados para maximizar viabilidade.",
    },
    {
      question: "Qual o prazo médio para começar a receber aluguel?",
      answer:
        "Após a compra do imóvel, iniciamos imediatamente o processo de locação. O prazo médio para encontrar inquilino qualificado é de 30 a 60 dias, dependendo da região e características do imóvel. Durante esse período, orientamos sobre preparação e divulgação.",
    },
    {
      question: "Preciso ter CNPJ para investir?",
      answer:
        "Não é obrigatório, mas pode ser vantajoso em alguns casos para otimização tributária. Analisamos seu perfil e sugerimos a melhor estrutura (pessoa física ou jurídica) conforme seus objetivos e situação fiscal. Podemos indicar contadores especializados.",
    },
    {
      question: "A Atlas atua em quais cidades?",
      answer:
        "Atualmente temos forte presença em São Paulo (capital e região metropolitana), Rio de Janeiro e Brasília. Expandimos gradualmente para outras capitais e regiões com mercado imobiliário aquecido. Consulte disponibilidade para sua cidade de interesse.",
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
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Tire suas dúvidas sobre investimento imobiliário e a metodologia Atlas.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border shadow-sm overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/30 transition-colors">
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 bg-card rounded-2xl p-12 shadow-elegant border border-border">
            <h2 className="font-cinzel font-bold text-3xl text-foreground">Ainda tem dúvidas?</h2>
            <p className="text-muted-foreground text-lg">
              Nossa equipe está pronta para esclarecer qualquer questão sobre investimento imobiliário.
            </p>
            <div className="pt-4">
              <a
                href="mailto:contato@atlaspatrimonial.com"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-gold text-primary font-semibold shadow-gold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
