import { CaseStudy } from "@/components/CaseStudy";
import apartamentoLeblonImg from "@/assets/cases/apartamento-leblon-rj.jpg";

const ApartamentoLeblonRJ = () => {
  return (
    <CaseStudy
      title="Apartamento 3 Quartos no Leblon"
      location="Leblon, Rio de Janeiro - RJ"
      image={apartamentoLeblonImg}
      propertyDetails={{
        type: "Apartamento",
        area: "120m²",
        bedrooms: "3",
        bathrooms: "2",
        parking: "1",
      }}
      financials={{
        propertyValue: "R$ 1.500.000",
        downPayment: "R$ 300.000",
        financed: "R$ 1.200.000",
        monthlyPayment: "R$ 6.200",
        monthlyRent: "R$ 9.000",
        netResult: "+R$ 2.800",
        yield: "10,6% a.a.",
      }}
      analysis={{
        strengths: [
          "Leblon - Zona Sul Carioca: O Leblon é um dos bairros mais desejados do Rio de Janeiro. Praia, gastronomia sofisticada, segurança e infraestrutura completa fazem desta região um ícone de alto padrão.",
          "Vista Parcial para o Mar: Apartamento com vista parcial para o mar e varandão amplo. Imóveis com vista no Leblon possuem altíssima procura e valorização premium.",
          "Demanda Turística e Corporativa: Além de residencial, o Leblon atrai locações temporárias (executivos, turistas) com valores superiores. Possibilidade de estratégia híbrida de renda.",
          "Liquidez de Mercado: Imóveis no Leblon possuem alta liquidez. Em caso de venda futura, a região mantém interesse constante de compradores nacionais e internacionais.",
        ],
        considerations: [
          "Custos Operacionais Elevados (RJ): Rio de Janeiro possui IPTU e condomínios geralmente mais altos que outras capitais. Importante considerar ~R$ 2.500/mês de custos fixos totais.",
          "Mercado Imobiliário Carioca: O mercado do Rio tem oscilações próprias. Apesar da qualidade da localização, é importante avaliar expectativas realistas de valorização.",
          "Entrada Significativa: Com entrada de R$ 300.000, este investimento exige capacidade financeira robusta. Fundamental ter reserva de emergência adicional.",
        ],
        conclusion:
          "Este apartamento no Leblon representa o investimento premium no mercado carioca. A combinação de localização icônica, vista para o mar e fluxo de caixa positivo fazem deste imóvel uma escolha estratégica para investidores que buscam ativos de alto padrão com potencial de valorização de longo prazo.",
      }}
    />
  );
};

export default ApartamentoLeblonRJ;
