import { CaseStudy } from "@/components/CaseStudy";
import apartamentoAsaSulImg from "@/assets/cases/apartamento-asa-sul-df.jpg";

const ApartamentoAsaSulDF = () => {
  return (
    <CaseStudy
      title="Apartamento 2 Quartos na Asa Sul"
      location="Asa Sul, Brasília - DF"
      image={apartamentoAsaSulImg}
      propertyDetails={{
        type: "Apartamento",
        area: "75m²",
        bedrooms: "2",
        bathrooms: "2",
        parking: "1",
      }}
      financials={{
        propertyValue: "R$ 720.000",
        downPayment: "R$ 144.000",
        financed: "R$ 576.000",
        monthlyPayment: "R$ 2.900",
        monthlyRent: "R$ 4.500",
        netResult: "+R$ 1.600",
        yield: "10,3% a.a.",
      }}
      analysis={{
        strengths: [
          "Capital Federal - Mercado Estável: Brasília possui economia baseada no setor público, o que garante estabilidade e menor volatilidade no mercado imobiliário. Demanda consistente ao longo dos anos.",
          "Asa Sul - Localização Nobre: A Asa Sul é uma das regiões mais valorizadas de Brasília, com planejamento urbano exemplar, arborização, comércio e proximidade de ministérios e embaixadas.",
          "Público Qualificado: Alta procura de servidores públicos, diplomatas e profissionais liberais. Locatários com renda estável e baixo risco de inadimplência.",
          "Relação Custo-Benefício: Entrada de R$ 144.000 para um imóvel em localização premium é altamente competitiva. Yield de 6,3% com fluxo positivo mensal de R$ 300.",
        ],
        considerations: [
          "Mercado Regionalizado: Brasília possui dinâmica própria, menos impactada por tendências nacionais mas também com valorização mais moderada que grandes capitais.",
          "Sazonalidade Política: Períodos de transição governamental podem gerar leve aumento na oferta de imóveis. Importante ter reserva financeira para possíveis meses de vacância.",
        ],
        conclusion:
          "Este apartamento na Asa Sul representa uma oportunidade sólida e previsível para investidores que valorizam estabilidade e renda consistente. O mercado de Brasília, aliado à qualidade da localização, torna este imóvel uma escolha estratégica para quem busca fluxo de caixa positivo e baixo risco operacional.",
      }}
    />
  );
};

export default ApartamentoAsaSulDF;
