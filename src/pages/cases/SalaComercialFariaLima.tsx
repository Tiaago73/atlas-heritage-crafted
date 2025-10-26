import { CaseStudy } from "@/components/CaseStudy";
import salaComercialImg from "@/assets/cases/sala-comercial-faria-lima-sp.jpg";

const SalaComercialFariaLima = () => {
  return (
    <CaseStudy
      title="Sala Comercial na Faria Lima"
      location="Faria Lima, São Paulo - SP"
      image={salaComercialImg}
      propertyDetails={{
        type: "Comercial",
        area: "45m²",
        bathrooms: "1",
        parking: "1",
      }}
      financials={{
        propertyValue: "R$ 980.000",
        downPayment: "R$ 196.000",
        financed: "R$ 784.000",
        monthlyPayment: "R$ 5.600",
        monthlyRent: "R$ 6.200",
        netResult: "+R$ 600",
        yield: "6,4% a.a.",
      }}
      analysis={{
        strengths: [
          "Epicentro Corporativo: Localização na Avenida Faria Lima, o principal eixo corporativo de São Paulo. Altíssima concentração de empresas, escritórios e prestadores de serviços.",
          "Contratos PJ de Longo Prazo: Locatários pessoa jurídica geralmente firmam contratos de 3-5 anos com garantias sólidas (fiança bancária ou seguro-fiança). Menor risco de inadimplência.",
          "Rendimento Superior: Imóveis comerciais tendem a ter yields mais altos que residenciais. Neste caso, 6,4% a.a. com fluxo positivo mensal de R$ 600.",
          "Diversificação de Portfólio: Investir em comercial diversifica o portfólio, reduzindo exposição exclusiva ao mercado residencial. Ciclos econômicos impactam de forma diferente.",
        ],
        considerations: [
          "Sensibilidade Econômica: Imóveis comerciais são mais sensíveis a ciclos econômicos. Em recessões, a demanda pode diminuir e o período de vacância aumentar.",
          "Manutenção e Adaptações: Cada novo locatário pode solicitar adaptações (divisórias, elétrica, rede). Importante provisionar recursos para essas customizações.",
          "Condomínio Elevado: Condomínios em lajes corporativas tendem a ser mais altos (~R$ 1.200) devido a infraestrutura premium (ar-condicionado central, segurança 24h).",
        ],
        conclusion:
          "A sala comercial na Faria Lima é uma oportunidade premium para investidores que buscam rendimentos superiores e contratos de longo prazo com empresas consolidadas. A localização estratégica e o perfil corporativo tornam este ativo uma peça-chave em portfólios diversificados e resilientes.",
      }}
    />
  );
};

export default SalaComercialFariaLima;
