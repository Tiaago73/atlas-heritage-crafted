import { CaseStudy } from "@/components/CaseStudy";
import coberturaMoemaImg from "@/assets/cases/cobertura-moema-sp.jpg";

const CoberturaMoemaSP = () => {
  return (
    <CaseStudy
      title="Cobertura Duplex em Moema"
      location="Moema, São Paulo - SP"
      image={coberturaMoemaImg}
      propertyDetails={{
        type: "Cobertura",
        area: "140m²",
        bedrooms: "3",
        bathrooms: "3",
        parking: "2",
      }}
      financials={{
        propertyValue: "R$ 1.200.000",
        downPayment: "R$ 240.000",
        financed: "R$ 960.000",
        monthlyPayment: "R$ 4.800",
        monthlyRent: "R$ 7.200",
        netResult: "+R$ 2.400",
        yield: "10,5% a.a.",
      }}
      analysis={{
        strengths: [
          "Imóvel de Alto Padrão: Cobertura duplex com terraço privativo, churrasqueira e vista panorâmica. Acabamento premium com mármore, automação e sistema de som ambiente.",
          "Moema Zona Sul: Uma das regiões mais nobres de São Paulo, com excelente infraestrutura, segurança e valorização consistente. Proximidade ao Parque Ibirapuera e principais avenidas.",
          "Renda Qualificada: Público-alvo de alta renda - executivos, médicos, empresários e expatriados. Contratos de locação mais longos e menor inadimplência.",
          "Patrimônio Sólido: Imóveis de alto padrão tendem a preservar valor mesmo em crises. Funciona como reserva de valor patrimonial além da geração de renda.",
        ],
        considerations: [
          "Custos Operacionais Elevados: Condomínio (~R$ 1.800) e IPTU (~R$ 600) somam custos mensais significativos. Importante considerar no fluxo de caixa total do investimento.",
          "Capital Inicial Alto: Entrada de R$ 240.000 requer perfil de investidor com maior capacidade financeira. Avaliar se há reserva para eventuais imprevistos.",
          "Período de Locação: Imóveis de alto padrão podem ter período de locação ligeiramente mais longo (60-90 dias). Planejamento financeiro é essencial.",
        ],
        conclusion:
          "Esta cobertura em Moema é ideal para investidores que buscam diversificar portfólio com ativos de alto padrão. O retorno consistente, aliado à valorização patrimonial de longo prazo, fazem deste imóvel uma âncora sólida para estratégias de acumulação de riqueza imobiliária.",
      }}
    />
  );
};

export default CoberturaMoemaSP;
